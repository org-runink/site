// Command blogen is PULSE's sovereign, in-cluster blog generator for runink's own
// online presence (www.runink.org). It runs as a k8s Job inside GKE and writes the
// article on the platform's OWN inference (llama-server, OpenAI-compatible API)
// reached at the in-cluster inference Service — NO external AI token, no Tavily, no
// external blogen container. It emits a Hugo-frontmatter Markdown article and a
// LinkedIn-posts JSON to STDOUT between sentinel markers; the workflow captures the
// Job logs, writes the file, and opens a PR. Go stdlib only. Mirrors agents/fixer.
package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"
)

const systemPrompt = `You are PULSE, runink's agentic digital-marketing content creator. Write a complete, publication-ready B2B technical marketing blog article for the runink platform. Ground it in the given topic, target decision-maker, and value driver. Be concrete and credible — no fluff, no "as an AI". At least 900 words of Markdown body (## / ### headings, lists, a short intro and a clear call-to-action). Respond with a JSON object ONLY (no prose, no code fences): {"title":"<compelling title>","description":"<= 155 char meta description>","tags":["<3-6 lowercase kebab tags>"],"body_markdown":"<the full article body in Markdown, WITHOUT any frontmatter>"}.`

type article struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Body        string   `json:"body_markdown"`
}

func envOr(k, def string) string {
	if v := strings.TrimSpace(os.Getenv(k)); v != "" {
		return v
	}
	return def
}

func main() {
	topic := strings.TrimSpace(os.Getenv("TOPIC"))
	slug := strings.TrimSpace(os.Getenv("SLUG"))
	author := envOr("AUTHOR", "Runink PULSE")
	audience := strings.TrimSpace(os.Getenv("AUDIENCE"))
	valueDriver := strings.TrimSpace(os.Getenv("VALUE_DRIVER"))
	ctxLinks := strings.TrimSpace(os.Getenv("CONTEXT"))
	baseURL := envOr("BLOG_BASE_URL", "https://www.runink.org/blog")
	infer := strings.TrimRight(envOr("INFERENCE_URL", "http://inference.inference-system.svc.cluster.local:8080"), "/")

	// Unlike the CI-gating agents (reviewer/selfheal/triage) this one MUST fail loudly
	// when it can't produce an article — there is nothing to publish and the workflow
	// posts a failure comment on the request issue.
	if topic == "" || slug == "" {
		fmt.Fprintln(os.Stderr, "blogen: missing TOPIC/SLUG")
		os.Exit(1)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 8*time.Minute)
	defer cancel()

	content, err := askModel(ctx, infer, topic, audience, valueDriver, ctxLinks)
	if err != nil {
		fmt.Fprintf(os.Stderr, "blogen: inference call failed: %v\n", err)
		os.Exit(1)
	}
	a := parse(content)
	if a == nil || strings.TrimSpace(a.Body) == "" {
		fmt.Fprintf(os.Stderr, "blogen: model did not return a usable article; raw:\n%s\n", content)
		os.Exit(1)
	}

	// Sovereign hero image: PULSE's own in-cluster imagegen runner (sd.cpp) when
	// reachable, else a deterministic branded SVG so an article ALWAYS ships with a
	// hero — no external image service either way.
	heroExt, heroPNG, heroSVG := generateHero(ctx, a.Title)
	imagePath := "/images/blog/" + slug + "." + heroExt

	// Assemble Hugo frontmatter DETERMINISTICALLY so required fields always exist and
	// validate (the site's quality gate requires title/description/slug/author/date/tags).
	md := renderMarkdown(a, slug, author, imagePath)
	linkedin := renderLinkedIn(a.Title, topic, baseURL, slug)

	// Deliverables to STDOUT between markers (nothing else goes to stdout); diagnostics
	// to STDERR. The workflow extracts strictly between the markers with awk.
	fmt.Fprintf(os.Stderr, "blogen: sovereign article generated (local GKE model, no external AI) — %d body chars, hero=%s\n", len(a.Body), heroExt)
	fmt.Println("===BLOG-MD-BEGIN===")
	fmt.Print(md)
	if !strings.HasSuffix(md, "\n") {
		fmt.Println()
	}
	fmt.Println("===BLOG-MD-END===")
	fmt.Println("===LINKEDIN-BEGIN===")
	fmt.Println(linkedin)
	fmt.Println("===LINKEDIN-END===")
	if heroExt == "png" {
		fmt.Println("===IMAGE-PNG-B64-BEGIN===")
		fmt.Println(base64.StdEncoding.EncodeToString(heroPNG))
		fmt.Println("===IMAGE-PNG-B64-END===")
	} else {
		fmt.Println("===IMAGE-SVG-BEGIN===")
		fmt.Print(heroSVG)
		if !strings.HasSuffix(heroSVG, "\n") {
			fmt.Println()
		}
		fmt.Println("===IMAGE-SVG-END===")
	}
}

// generateHero produces a hero image for the article. It first tries PULSE's own
// in-cluster imagegen runner (stable-diffusion.cpp, OpenAI-compatible
// /v1/images/generations) at IMAGE_GEN_URL; if that's unset, unreachable, slow, or
// returns nothing, it falls back to a deterministic branded SVG. Returns the file
// extension ("png"|"svg") and exactly one of the payloads.
func generateHero(ctx context.Context, title string) (ext string, png []byte, svg string) {
	url := strings.TrimRight(envOr("IMAGE_GEN_URL", ""), "/")
	if url != "" {
		if b, err := sdxlHero(ctx, url, title); err != nil {
			fmt.Fprintf(os.Stderr, "blogen: imagegen unavailable (%v) — using branded SVG hero\n", err)
		} else if len(b) > 0 {
			return "png", b, ""
		}
	}
	return "svg", nil, brandedSVG(title)
}

// sdxlHero calls the sd.cpp OpenAI-compatible image endpoint and returns PNG bytes.
func sdxlHero(parent context.Context, base, title string) ([]byte, error) {
	// CPU SDXL-Turbo is slow but bounded; cap it so a stuck runner still lets the
	// article ship with the SVG fallback.
	ctx, cancel := context.WithTimeout(parent, 5*time.Minute)
	defer cancel()
	prompt := fmt.Sprintf("Editorial hero illustration for a B2B technology article titled %q. Clean modern abstract data/network motif, dark background with a warm orange accent, no text, no words.", title)
	body, _ := json.Marshal(map[string]any{
		"prompt": prompt,
		"size":   envOr("IMAGE_SIZE", "768x768"),
		"n":      1,
	})
	req, _ := http.NewRequestWithContext(ctx, http.MethodPost, base+"/v1/images/generations", bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	rb, _ := io.ReadAll(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("imagegen %d: %s", resp.StatusCode, strings.TrimSpace(string(rb)))
	}
	var out struct {
		Data []struct {
			B64JSON string `json:"b64_json"`
		} `json:"data"`
	}
	if err := json.Unmarshal(rb, &out); err != nil || len(out.Data) == 0 || out.Data[0].B64JSON == "" {
		return nil, fmt.Errorf("no image in response")
	}
	return base64.StdEncoding.DecodeString(out.Data[0].B64JSON)
}

// brandedSVG renders a deterministic runink-branded hero card with the title —
// fully sovereign (no model, always available, instant on CPU).
func brandedSVG(title string) string {
	lines := wrap(title, 22, 3)
	var texts strings.Builder
	y := 300 - (len(lines)-1)*40
	for _, ln := range lines {
		fmt.Fprintf(&texts, `<text x="80" y="%d" font-family="Georgia, serif" font-size="56" font-weight="700" fill="#ffffff">%s</text>`+"\n", y, escapeXML(ln))
		y += 80
	}
	return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#161311"/>
<rect x="0" y="0" width="16" height="630" fill="#e8590c"/>
<text x="80" y="120" font-family="monospace" font-size="24" letter-spacing="4" fill="#e8590c">RUNINK · PULSE</text>
` + texts.String() + `<text x="80" y="560" font-family="monospace" font-size="20" fill="#8a8078">www.runink.org/blog</text>
</svg>
`
}

// wrap splits s into at most maxLines word-wrapped lines of ~width chars. Any
// overflow past maxLines is folded into the last line and ellipsized.
func wrap(s string, width, maxLines int) []string {
	words := strings.Fields(s)
	if len(words) == 0 {
		return []string{s}
	}
	var lines []string
	cur := ""
	for i, w := range words {
		switch {
		case cur == "":
			cur = w
		case len(cur)+1+len(w) <= width:
			cur += " " + w
		case len(lines) < maxLines-1:
			lines = append(lines, cur)
			cur = w
		default:
			// no more line budget: append everything remaining to cur, ellipsized
			cur = cur + " " + strings.Join(words[i:], " ")
			if len(cur) > width {
				cur = strings.TrimSpace(cur[:width-1]) + "…"
			}
			lines = append(lines, cur)
			return lines
		}
	}
	return append(lines, cur)
}

func escapeXML(s string) string {
	r := strings.NewReplacer("&", "&amp;", "<", "&lt;", ">", "&gt;", `"`, "&quot;", "'", "&apos;")
	return r.Replace(s)
}

// askModel calls the local llama-server OpenAI-compatible chat endpoint.
func askModel(ctx context.Context, base, topic, audience, valueDriver, links string) (string, error) {
	var user strings.Builder
	fmt.Fprintf(&user, "Topic: %s\n", topic)
	if audience != "" {
		fmt.Fprintf(&user, "Target decision-maker (audience): %s\n", audience)
	}
	if valueDriver != "" {
		fmt.Fprintf(&user, "Primary value driver: %s\n", valueDriver)
	}
	if links != "" {
		fmt.Fprintf(&user, "Context & reference links: %s\n", links)
	}
	body, _ := json.Marshal(map[string]any{
		"model": envOr("BLOG_MODEL", "local"),
		"messages": []map[string]string{
			{"role": "system", "content": systemPrompt},
			{"role": "user", "content": user.String()},
		},
		"temperature": 0.7,
		"max_tokens":  3000,
	})
	req, _ := http.NewRequestWithContext(ctx, http.MethodPost, base+"/v1/chat/completions", bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	b, _ := io.ReadAll(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("inference %d: %s", resp.StatusCode, strings.TrimSpace(string(b)))
	}
	var out struct {
		Choices []struct {
			Message struct {
				Content string `json:"content"`
			} `json:"message"`
		} `json:"choices"`
	}
	if err := json.Unmarshal(b, &out); err != nil || len(out.Choices) == 0 {
		return "", fmt.Errorf("unexpected inference response: %s", strings.TrimSpace(string(b)))
	}
	return out.Choices[0].Message.Content, nil
}

// parse extracts the JSON article object from the model output.
func parse(content string) *article {
	s, e := strings.Index(content, "{"), strings.LastIndex(content, "}")
	if s == -1 || e == -1 || e < s {
		return nil
	}
	var a article
	if json.Unmarshal([]byte(content[s:e+1]), &a) != nil {
		return nil
	}
	return &a
}

// renderMarkdown assembles the Hugo article: deterministic frontmatter + model body.
func renderMarkdown(a *article, slug, author, imagePath string) string {
	title := strings.TrimSpace(a.Title)
	if title == "" {
		title = slug
	}
	desc := strings.TrimSpace(a.Description)
	tags := a.Tags
	if len(tags) == 0 {
		tags = []string{"runink"}
	}
	quoted := make([]string, 0, len(tags))
	for _, t := range tags {
		quoted = append(quoted, fmt.Sprintf("%q", strings.TrimSpace(t)))
	}
	var b strings.Builder
	b.WriteString("---\n")
	fmt.Fprintf(&b, "title: %q\n", title)
	fmt.Fprintf(&b, "description: %q\n", desc)
	fmt.Fprintf(&b, "slug: %q\n", slug)
	fmt.Fprintf(&b, "author: %q\n", author)
	fmt.Fprintf(&b, "date: %s\n", time.Now().UTC().Format(time.RFC3339))
	fmt.Fprintf(&b, "tags: [%s]\n", strings.Join(quoted, ", "))
	if strings.TrimSpace(imagePath) != "" {
		fmt.Fprintf(&b, "image: %q\n", imagePath)
	}
	b.WriteString("draft: false\n")
	b.WriteString("---\n\n")
	b.WriteString(strings.TrimSpace(a.Body))
	b.WriteString("\n")
	return b.String()
}

// renderLinkedIn builds the promotion posts deterministically from the article.
func renderLinkedIn(title, topic, baseURL, slug string) string {
	if strings.TrimSpace(title) == "" {
		title = topic
	}
	url := strings.TrimRight(baseURL, "/") + "/" + slug + "/"
	posts := map[string]any{
		"company_post":  map[string]string{"text": fmt.Sprintf("🚀 New on the runink blog: %s\n\nRead more: %s\n\n#AI #DataPlatform #Runink", title, url)},
		"personal_post": map[string]string{"text": fmt.Sprintf("I just published a new article on %s. Check it out: %s", title, url)},
	}
	b, _ := json.Marshal(posts)
	return string(b)
}
