//go:build ignore

// readability.go measures the plain-language rule in CONTENT.md against the
// rendered site, and reports the banned words alongside it.
//
//	go run readability.go                    # every rendered page in ./public
//	go run readability.go docs               # ./docs, which is what CI builds
//	go run readability.go public/pricing     # one page, or one subtree
//	go run readability.go -min 45 public     # exit 1 below a floor
//	go run readability.go -min 45 -exclude /tags/,/es/ public
//	                                         # …but do not gate on those paths
//
// # What -exclude does, and does not, do
//
// Excluded pages are still measured and still PRINTED, marked "~" rather than
// "!" — the report stays complete and only the gate narrows. A floor that
// hides the pages it cannot hold is a floor nobody can audit, and the point of
// this tool is the number, not the exit code.
//
// Prefixes match each page's path relative to the built-site root, so "/tags/"
// means the taxonomy tree and "/es/" means the Spanish site. If an -exclude
// list leaves nothing gated the run exits 2 instead of reporting a pass: a
// gate with nothing behind it is worse than no gate, because it looks green.
//
// # What it measures
//
// Flesch reading ease over the page's body copy, with the site chrome removed.
// The chrome is the same text on 1100 pages; including it would score the
// header nav, not the argument. Headings and list items are terminated as
// sentences, because a reader reads them as one.
//
// Calibration, so the numbers can be trusted: /pricing/ before its rewrite
// scores in the low 20s, the whitepapers in the mid 50s, and the rewritten
// pricing page in the low 60s. Those three are the reference points in
// CONTENT.md. If a change to this file moves them, the change is wrong.
//
// Nothing here reaches the network.
package main

import (
	"fmt"
	"math"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
)

// bannedWords is rule 3's outright list, plus the two phrases that keep coming
// back. Matched whole-word, case-insensitive, on body copy only.
var bannedWords = []string{
	"leading", "revolutionary", "seamless", "cutting-edge", "unlock",
	"empower", "empowers", "empowering", "game-changing", "best-in-class",
	"world-class", "next-generation", "transformative", "robust", "leverage",
	"leverages", "leveraging", "synergy", "holistic", "turnkey", "scalable",
	"paradigm",
}

var (
	// Everything whose text a reader never reads as prose. RE2 has no
	// backreferences, so each element gets its own non-greedy pair.
	dropRes = dropPairs("script", "style", "svg", "noscript", "head", "header", "footer", "nav", "template")
	// Block ends are sentence ends: a heading or a bullet reads as one.
	blockEndRe = regexp.MustCompile(`(?i)</(h[1-6]|p|li|td|th|dt|dd|blockquote|figcaption|div|section|article|tr)>`)
	tagRe      = regexp.MustCompile(`(?s)<[^>]*>`)
	wsRe       = regexp.MustCompile(`\s+`)
	sentEndRe  = regexp.MustCompile(`[.!?]+`)
	wordRe     = regexp.MustCompile(`[A-Za-z][A-Za-z'’-]*`)
	entityRe   = regexp.MustCompile(`&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);`)
)

func dropPairs(tags ...string) []*regexp.Regexp {
	out := make([]*regexp.Regexp, 0, len(tags))
	for _, t := range tags {
		out = append(out, regexp.MustCompile(`(?is)<`+t+`\b[^>]*>.*?</`+t+`>`))
	}
	return out
}

// bodyText reduces a rendered page to the prose a reader actually reads.
func bodyText(html string) string {
	s := html
	// Repeat: the drops nest, and one pass leaves the inner ones behind.
	for i := 0; i < 4; i++ {
		before := s
		for _, re := range dropRes {
			s = re.ReplaceAllString(s, " ")
		}
		if s == before {
			break
		}
	}
	s = blockEndRe.ReplaceAllString(s, ". ")
	s = tagRe.ReplaceAllString(s, " ")
	s = entityRe.ReplaceAllStringFunc(s, func(e string) string {
		switch e {
		case "&nbsp;":
			return " "
		case "&amp;":
			return "and"
		case "&mdash;", "&ndash;":
			return "-"
		}
		return " "
	})
	s = strings.NewReplacer("—", " - ", "–", " - ", " ", " ").Replace(s)
	return strings.TrimSpace(wsRe.ReplaceAllString(s, " "))
}

// syllables is the usual vowel-group heuristic. It is wrong on individual
// words and close enough over a page, which is the only scale it is used at.
func syllables(w string) int {
	w = strings.ToLower(w)
	w = strings.Map(func(r rune) rune {
		if r >= 'a' && r <= 'z' {
			return r
		}
		return -1
	}, w)
	if w == "" {
		return 0
	}
	n, prevVowel := 0, false
	for _, r := range w {
		v := strings.ContainsRune("aeiouy", r)
		if v && !prevVowel {
			n++
		}
		prevVowel = v
	}
	// Silent terminal e, but not the syllabic "-le" in "table".
	if strings.HasSuffix(w, "e") && !strings.HasSuffix(w, "le") && n > 1 {
		n--
	}
	if n < 1 {
		n = 1
	}
	return n
}

type score struct {
	path      string
	rel       string // path relative to the built-site root, e.g. /tags/index.html
	excluded  bool   // measured and reported, but not gated
	flesch    float64
	words     int
	sentences int
	banned    map[string]int
}

func measure(path, html string) score {
	text := bodyText(html)
	words := wordRe.FindAllString(text, -1)
	// A sentence terminator run counts once; trailing text with no terminator
	// still counts as a sentence, or a page of headings would divide by zero.
	sentences := len(sentEndRe.FindAllString(text, -1))
	if sentences == 0 {
		sentences = 1
	}
	syl := 0
	for _, w := range words {
		syl += syllables(w)
	}
	s := score{path: path, words: len(words), sentences: sentences, banned: map[string]int{}}
	if len(words) == 0 {
		return s
	}
	wps := float64(len(words)) / float64(sentences)
	spw := float64(syl) / float64(len(words))
	s.flesch = math.Round((206.835-1.015*wps-84.6*spw)*10) / 10

	lower := strings.ToLower(text)
	for _, b := range bannedWords {
		re := regexp.MustCompile(`\b` + regexp.QuoteMeta(b) + `\b`)
		if n := len(re.FindAllString(lower, -1)); n > 0 {
			s.banned[b] = n
		}
	}
	return s
}

func main() {
	root := "public"
	min := math.Inf(-1)
	var excludes []string
	args := os.Args[1:]
	for i := 0; i < len(args); i++ {
		switch args[i] {
		case "-min", "--min":
			if i+1 < len(args) {
				fmt.Sscanf(args[i+1], "%f", &min)
				i++
			}
		case "-exclude", "--exclude":
			if i+1 < len(args) {
				for _, p := range strings.Split(args[i+1], ",") {
					if p = strings.TrimSpace(p); p != "" {
						excludes = append(excludes, p)
					}
				}
				i++
			}
		default:
			root = args[i]
		}
	}

	var scores []score
	err := filepath.Walk(root, func(p string, info os.FileInfo, err error) error {
		if err != nil || info.IsDir() || filepath.Ext(p) != ".html" {
			return err
		}
		b, err := os.ReadFile(p)
		if err != nil {
			return err
		}
		s := measure(p, string(b))
		s.rel = "/" + filepath.ToSlash(p)
		if r, relErr := filepath.Rel(root, p); relErr == nil {
			s.rel = "/" + filepath.ToSlash(r)
		}
		for _, x := range excludes {
			if strings.HasPrefix(s.rel, x) {
				s.excluded = true
				break
			}
		}
		// Under ~120 words the score is noise: a tag page, a redirect stub.
		if s.words >= 120 {
			scores = append(scores, s)
		}
		return nil
	})
	if err != nil {
		fmt.Fprintln(os.Stderr, "readability:", err)
		os.Exit(2)
	}
	if len(scores) == 0 {
		fmt.Fprintf(os.Stderr, "readability: no pages with body copy under %s — did the build run?\n", root)
		os.Exit(2)
	}

	sort.Slice(scores, func(i, j int) bool { return scores[i].flesch < scores[j].flesch })
	below, ungated, gated := 0, 0, 0
	for _, s := range scores {
		if !s.excluded {
			gated++
		}
		// "~" marks every row the gate does not hold, passing or not, so the
		// report says at a glance what is enforced rather than only what broke.
		flag := " "
		switch {
		case s.excluded:
			flag = "~"
			if s.flesch < min {
				ungated++
			}
		case s.flesch < min:
			flag, below = "!", below+1
		}
		var b []string
		for w, n := range s.banned {
			b = append(b, fmt.Sprintf("%s×%d", w, n))
		}
		sort.Strings(b)
		fmt.Printf("%s %6.1f  %5dw %4ds  %s", flag, s.flesch, s.words, s.sentences, s.path)
		if len(b) > 0 {
			fmt.Printf("   BANNED: %s", strings.Join(b, " "))
		}
		fmt.Println()
	}
	// An -exclude list that swallowed the whole site would report a clean pass
	// with nothing behind it. Refuse it the way an empty tree is refused above.
	if len(excludes) > 0 && gated == 0 {
		fmt.Fprintf(os.Stderr, "readability: -exclude %s leaves no page gated — that is a vacuous pass, not a pass\n", strings.Join(excludes, ","))
		os.Exit(2)
	}

	fmt.Fprintf(os.Stderr, "\n%d pages measured", len(scores))
	if !math.IsInf(min, -1) {
		fmt.Fprintf(os.Stderr, ", %d of %d gated below %.0f", below, gated, min)
		if ungated > 0 {
			fmt.Fprintf(os.Stderr, "; %d more below it under -exclude (marked ~, reported not gated)", ungated)
		}
	}
	fmt.Fprintln(os.Stderr)
	if below > 0 {
		os.Exit(1)
	}
}
