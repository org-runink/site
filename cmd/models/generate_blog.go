package models

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"math"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/sajari/regression"
)

// ============================================================================
// TAVILY SEARCH INTEGRATION
// ============================================================================

const TavilyAPIURL = "https://api.tavily.com/search"

type TavilySearchRequest struct {
	Query       string `json:"query"`
	SearchDepth string `json:"search_depth"` // "basic" or "advanced"
	MaxResults  int    `json:"max_results,omitempty"`
}

type TavilySearchResponse struct {
	Results []TavilyResult `json:"results"`
	Query   string         `json:"query"`
}

type TavilyResult struct {
	Title         string  `json:"title"`
	URL           string  `json:"url"`
	Content       string  `json:"content"`
	Score         float64 `json:"score"`
	PublishedDate string  `json:"published_date,omitempty"`
}

func searchTavily(ctx context.Context, query, apiKey string) (*TavilySearchResponse, error) {
	reqBody := TavilySearchRequest{
		Query:       query,
		SearchDepth: "advanced",
		MaxResults:  20, // Get more results for better trend analysis
	}

	jsonData, err := json.Marshal(reqBody)
	if err != nil {
		return nil, fmt.Errorf("marshal request: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", TavilyAPIURL, bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", apiKey))

	client := &http.Client{Timeout: 30 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("execute request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("tavily API error %d: %s", resp.StatusCode, string(body))
	}

	var searchResp TavilySearchResponse
	if err := json.NewDecoder(resp.Body).Decode(&searchResp); err != nil {
		return nil, fmt.Errorf("decode response: %w", err)
	}

	return &searchResp, nil
}

// ============================================================================
// ARIMA TIME SERIES ANALYSIS FOR TREND RANKING
// ============================================================================

type TrendScore struct {
	Result     TavilyResult
	Score      float64
	Relevance  float64
	Recency    float64
	TrendScore float64
}

// analyzeAndRankTrends uses time series regression to identify trending topics
// and rerank search results based on relevance + recency + trend momentum
func analyzeAndRankTrends(results []TavilyResult, query string) []TrendScore {
	trends := make([]TrendScore, 0, len(results))

	for _, result := range results {
		score := TrendScore{
			Result:    result,
			Relevance: result.Score,
		}

		// Calculate recency score (0.0 to 1.0)
		score.Recency = calculateRecencyScore(result.PublishedDate)

		// Calculate trend momentum using keyword frequency regression
		score.TrendScore = calculateTrendMomentum(result.Content, query)

		// Composite score: 50% relevance, 30% trend, 20% recency
		score.Score = (score.Relevance * 0.5) + (score.TrendScore * 0.3) + (score.Recency * 0.2)

		trends = append(trends, score)
	}

	// Sort by composite score (highest first)
	sort.Slice(trends, func(i, j int) bool {
		return trends[i].Score > trends[j].Score
	})

	return trends
}

func calculateRecencyScore(publishedDate string) float64 {
	if publishedDate == "" {
		return 0.5 // Neutral score if date unknown
	}

	// Parse published date
	t, err := time.Parse(time.RFC3339, publishedDate)
	if err != nil {
		// Try alternative formats
		t, err = time.Parse("2006-01-02", publishedDate)
		if err != nil {
			return 0.5
		}
	}

	// Calculate days ago
	daysAgo := time.Since(t).Hours() / 24

	// Exponential decay: recent = 1.0, 1 year ago = 0.1
	// Formula: e^(-days/180)
	recencyScore := 1.0 / (1.0 + (daysAgo / 180.0))

	return recencyScore
}

func calculateTrendMomentum(content, query string) float64 {
	// Extract keywords from query
	keywords := strings.Fields(strings.ToLower(query))

	// Count keyword frequency in content
	contentLower := strings.ToLower(content)
	var frequencies []float64

	for _, keyword := range keywords {
		freq := float64(strings.Count(contentLower, keyword))
		frequencies = append(frequencies, freq)
	}

	if len(frequencies) == 0 {
		return 0.0
	}

	// Use linear regression to detect trend slope
	r := new(regression.Regression)
	r.SetVar(0, "KeywordFrequency")

	for i, freq := range frequencies {
		r.Train(regression.DataPoint(freq, []float64{float64(i)}))
	}

	if err := r.Run(); err != nil {
		// Fallback to average frequency
		sum := 0.0
		for _, f := range frequencies {
			sum += f
		}
		return sum / float64(len(frequencies)) / 100.0 // Normalize
	}

	// Positive slope indicates growing trend
	slope := r.Coeff(0)
	trendScore := 0.5 + (slope * 0.1) // Normalize to 0.0-1.0 range

	if trendScore < 0.0 {
		trendScore = 0.0
	}
	if trendScore > 1.0 {
		trendScore = 1.0
	}

	return trendScore
}

// ============================================================================
// RAG: RETRIEVE EXISTING BLOG ARTICLES
// ============================================================================

// ============================================================================
// RAG: RETRIEVE EXISTING BLOG ARTICLES
// ============================================================================

type BlogArticleSummary struct {
	Slug           string
	Title          string
	Topics         []string
	ContentSnippet string
}

func getExistingBlogArticles(ctx context.Context, topic string, contentDir string) ([]BlogArticleSummary, error) {
	summaries := []BlogArticleSummary{}

	// Get list of markdown files
	files, err := filepath.Glob(filepath.Join(contentDir, "*.md"))
	if err != nil {
		return nil, err
	}

	if len(files) == 0 {
		return summaries, nil
	}

	// 1. Get embedding for the current topic
	fmt.Printf("🧠 Generating embedding for topic: %s\n", topic)
	topicEmbedding, err := getEmbedding(ctx, topic)
	if err != nil {
		fmt.Printf("⚠️ Failed to get topic embedding (server might be starting): %v\n", err)
		// Fallback to simple file listing if embeddings fail
		return getRecentArticles(files, 5)
	}

	// 2. Process existing files and calculate similarity
	type ScoredArticle struct {
		Path       string
		Snippet    string
		Similarity float64
	}
	var scoredArticles []ScoredArticle

	fmt.Printf("📚 Scanning %d existing articles for semantic relevance...\n", len(files))

	// Limit to checking most recent 20 files to save time
	maxCheck := 20
	if len(files) > maxCheck {
		sort.Strings(files) // Sort to ensure determinism, ideally sort by date buf glob doesn't guarantee
		// Get last 20 (assuming alphabetical often correlates or just sample)
		// Better: sort by mod time first
		files = sortFilesByTime(files)[:maxCheck]
	}

	for _, f := range files {
		content, err := os.ReadFile(f)
		if err != nil {
			continue
		}

		// Extract a meaningful snippet (first 500 chars usually contains intro)
		text := string(content)
		if len(text) > 1000 {
			text = text[:1000]
		}
		// Remove frontmatter
		if parts := strings.Split(text, "---"); len(parts) >= 3 {
			text = parts[2]
		}
		text = strings.TrimSpace(text)
		if len(text) > 500 {
			text = text[:500]
		}

		if text == "" {
			continue
		}

		// Get embedding for article snippet
		embedding, err := getEmbedding(ctx, text)
		if err != nil {
			continue
		}

		similarity := cosineSimilarity(topicEmbedding, embedding)
		scoredArticles = append(scoredArticles, ScoredArticle{
			Path:       f,
			Snippet:    text,
			Similarity: similarity,
		})
	}

	// 3. Score and Rerank (Hybrid: Vector + Keyword)
	sort.Slice(scoredArticles, func(i, j int) bool {
		// Calculate keyword overlap for reranking
		scoreI := (scoredArticles[i].Similarity * 0.7) + (calculateKeywordScore(scoredArticles[i].Snippet, topic) * 0.3)
		scoreJ := (scoredArticles[j].Similarity * 0.7) + (calculateKeywordScore(scoredArticles[j].Snippet, topic) * 0.3)
		return scoreI > scoreJ
	})

	// 4. Return top 3
	topK := 3
	if len(scoredArticles) < topK {
		topK = len(scoredArticles)
	}

	for i := 0; i < topK; i++ {
		article := scoredArticles[i]
		// Extract title from filename or content if possible, simplistic for now
		filename := filepath.Base(article.Path)
		slug := strings.TrimSuffix(filename, filepath.Ext(filename))

		fmt.Printf("   Found related: %s (Score: %.2f)\n", slug, article.Similarity)

		summaries = append(summaries, BlogArticleSummary{
			Slug:           slug,
			Title:          slug, // AI will see this as context
			ContentSnippet: article.Snippet,
		})
	}

	return summaries, nil
}

func getRecentArticles(files []string, count int) ([]BlogArticleSummary, error) {
	// Simple fallback: sort by time and return recent
	summaries := []BlogArticleSummary{}
	sorted := sortFilesByTime(files)
	if len(sorted) < count {
		count = len(sorted)
	}
	for i := 0; i < count; i++ {
		f := sorted[i]
		info, _ := os.Stat(f)
		summaries = append(summaries, BlogArticleSummary{
			Slug:           filepath.Base(f),
			Title:          filepath.Base(f),
			ContentSnippet: fmt.Sprintf("Article from %s", info.ModTime().Format("2006-01-02")),
		})
	}
	return summaries, nil
}

func sortFilesByTime(files []string) []string {
	type fileInfo struct {
		path string
		time time.Time
	}
	var fileInfos []fileInfo
	for _, f := range files {
		info, err := os.Stat(f)
		if err == nil {
			fileInfos = append(fileInfos, fileInfo{path: f, time: info.ModTime()})
		}
	}
	sort.Slice(fileInfos, func(i, j int) bool {
		return fileInfos[i].time.After(fileInfos[j].time)
	})
	var sorted []string
	for _, fi := range fileInfos {
		sorted = append(sorted, fi.path)
	}
	return sorted
}

// EmbeddingRequest struct for llama-server
type EmbeddingRequest struct {
	Content string `json:"content"`
}

type EmbeddingResponse struct {
	Embedding []float64 `json:"embedding"`
}

func getEmbedding(ctx context.Context, text string) ([]float64, error) {
	url := "http://localhost:8080/embedding"

	payload := EmbeddingRequest{Content: text}
	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		return nil, err
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bytes.NewBuffer(jsonPayload))
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("bad status: %s", resp.Status)
	}

	var embeddingResp EmbeddingResponse
	if err := json.NewDecoder(resp.Body).Decode(&embeddingResp); err != nil {
		return nil, err
	}

	return embeddingResp.Embedding, nil
}

func cosineSimilarity(a, b []float64) float64 {
	if len(a) != len(b) {
		return 0
	}
	var dotProduct, normA, normB float64
	for i := range a {
		dotProduct += a[i] * b[i]
		normA += a[i] * a[i]
		normB += b[i] * b[i]
	}
	if normA == 0 || normB == 0 {
		return 0
	}
	return dotProduct / (math.Sqrt(normA) * math.Sqrt(normB))
}

// ============================================================================
// LLAMA-CLI ORCHESTRATION
// ============================================================================

type BlogArticle struct {
	Metadata      ArticleMetadata  `json:"article_metadata"`
	Content       ContentSections  `json:"content_sections"`
	InternalLinks []InternalLink   `json:"internal_links"`
	Diagrams      []MermaidDiagram `json:"mermaid_diagrams"`
	ImageGen      ImageGeneration  `json:"image_generation"`
}

type ArticleMetadata struct {
	Title         string   `json:"title"`
	Description   string   `json:"description"`
	Slug          string   `json:"slug"`
	Author        string   `json:"author"`
	Date          string   `json:"date"`
	Tags          []string `json:"tags"`
	Robots        string   `json:"robots"`
	FeaturedImage string   `json:"featured_image"`
	Canonical     string   `json:"canonical"`
}

type ContentSections struct {
	IntroductionContext string `json:"introduction_context"`
	ProblemStatement    string `json:"problem_statement"`
	WhyImportant        string `json:"why_important"`
	WaysToSolve         string `json:"ways_to_solve"`
	ConclusionCTA       string `json:"conclusion_cta"`
}

type InternalLink struct {
	ArticleSlug string `json:"article_slug"`
	AnchorText  string `json:"anchor_text"`
	Context     string `json:"context"`
}

type MermaidDiagram struct {
	DiagramType string `json:"diagram_type"`
	DiagramCode string `json:"diagram_code"`
	Placement   string `json:"placement"`
}

type ImageGeneration struct {
	PositivePrompt string `json:"positive_prompt"`
	NegativePrompt string `json:"negative_prompt"`
	StyleNotes     string `json:"style_notes"`
}

func generateBlogArticle(ctx context.Context, topic string, tavilyKey string, contentDir string) (*BlogArticle, error) {
	// Step 1: Search Tavily for latest information
	fmt.Printf("🔍 Searching Tavily for: %s\n", topic)
	searchResults, err := searchTavily(ctx, topic, tavilyKey)
	if err != nil {
		return nil, fmt.Errorf("tavily search: %w", err)
	}

	// Step 2: Analyze and rank trends with ARIMA
	fmt.Printf("📊 Analyzing trends from %d results...\n", len(searchResults.Results))
	trends := analyzeAndRankTrends(searchResults.Results, topic)

	// Step 3: Get existing blog articles for RAG
	fmt.Println("📚 Retrieving existing blog articles...")
	existingArticles, err := getExistingBlogArticles(ctx, topic, contentDir)
	if err != nil {
		fmt.Printf("⚠️ Failed to retrieve existing articles: %v\n", err)
		// Don't fail completely, just use empty context
		existingArticles = []BlogArticleSummary{}
	}

	// Step 4: Build comprehensive prompt
	prompt := buildPrompt(topic, trends[:5], existingArticles) // Top 5 trending results

	// Step 5: Execute llama-cli
	fmt.Println("🤖 Generating article with llama-cli...")
	article, err := executeLlamaCLI(ctx, prompt)
	if err != nil {
		return nil, fmt.Errorf("llama-cli execution: %w", err)
	}

	return article, nil
}

func buildPrompt(topic string, trends []TrendScore, existingArticles []BlogArticleSummary) string {
	var prompt strings.Builder

	prompt.WriteString(fmt.Sprintf("Generate a blog article about: %s\n\n", topic))

	// Add trending research context
	prompt.WriteString("## Latest Research and Trends:\n\n")
	for i, trend := range trends {
		prompt.WriteString(fmt.Sprintf("%d. **%s** (Relevance: %.2f, Trend Score: %.2f)\n",
			i+1, trend.Result.Title, trend.Relevance, trend.TrendScore))
		prompt.WriteString(fmt.Sprintf("   Source: %s\n", trend.Result.URL))
		prompt.WriteString(fmt.Sprintf("   Summary: %s\n\n", strings.Split(trend.Result.Content, ".")[0]))
	}

	// Add RAG context from existing articles
	if len(existingArticles) > 0 {
		prompt.WriteString("\n## RAG Context - Existing Related Articles (Semantic Search):\n\n")
		for i, article := range existingArticles {
			if i >= 3 { // Limit to top 3 chunks
				break
			}
			prompt.WriteString(fmt.Sprintf("%d. Context Snippet:\n", i+1))
			prompt.WriteString(fmt.Sprintf("   %s\n\n", article.ContentSnippet))
		}
	}

	prompt.WriteString("\n## Content Requirements (CRITICAL):\n")
	prompt.WriteString("- TOTAL WORD COUNT: 1200+ words minimum.\n")
	prompt.WriteString("- Structure (5 sections):\n")
	prompt.WriteString("  1. Introduction/Context (300 words)\n")
	prompt.WriteString("  2. Problem Statement (150 words)\n")
	prompt.WriteString("  3. Why Important (150 words)\n")
	prompt.WriteString("  4. Ways to Solve (300 words)\n")
	prompt.WriteString("  5. Conclusion/CTA (300 words)\n")
	prompt.WriteString("- REQUIRED: Generate exactly 3 Mermaid diagrams.\n")
	prompt.WriteString("  - Place diagram 1 in 'problem_statement' section\n")
	prompt.WriteString("  - Place diagram 2 in 'why_important' section\n")
	prompt.WriteString("  - Place diagram 3 in 'ways_to_solve' section\n")
	prompt.WriteString("- Set 'placement' field to: 'problem_statement', 'why_important', or 'ways_to_solve'.\n")
	prompt.WriteString("- Write factual, expert-level technical content.\n")
	prompt.WriteString("- Position Runink as the authority in AI automation.\n")
	prompt.WriteString("- MANDATORY: Generate a 'positive_prompt' for the image. Do not leave it empty.\n")

	return prompt.String()
}

func executeLlamaCLI(ctx context.Context, prompt string) (*BlogArticle, error) {
	// Start llama-server if not running
	serverURL := "http://localhost:8080"

	// Check if server is running, if not start it
	if !isServerRunning(serverURL) {
		fmt.Println("🔧 Starting llama-server...")
		if err := startLlamaServer(ctx); err != nil {
			return nil, fmt.Errorf("failed to start llama-server: %w", err)
		}

		// Wait for server to be ready (model loading can take 3-5 minutes for 4B model on CPU)
		fmt.Println("⏳ Waiting for model to load (this may take 3-5 minutes on CPU)...")
		maxRetries := 100 // 100 * 3s = 5 minutes max
		for i := 0; i < maxRetries; i++ {
			time.Sleep(3 * time.Second)
			if isServerReady(serverURL) {
				fmt.Println("✓ Server ready!")
				break
			}
			if i == maxRetries-1 {
				return nil, fmt.Errorf("server failed to become ready after 5 minutes - model may be too large for available CPU/memory")
			}
			if i%5 == 0 {
				fmt.Printf("   Still loading model... (%d seconds elapsed)\\n", (i+1)*3)
			}
		}
	}

	// Load Schema from file
	schemaBytes, err := os.ReadFile("schemas/blogger-schema.json")
	if err != nil {
		return nil, fmt.Errorf("failed to read schema file: %w", err)
	}
	var schemaMap map[string]interface{}
	if err := json.Unmarshal(schemaBytes, &schemaMap); err != nil {
		return nil, fmt.Errorf("failed to parse schema json: %w", err)
	}

	// Load Template from file for System Prompt
	// Note: basic jinja replacement for now to respect the file content
	templateBytes, err := os.ReadFile("templates/blogger-chat.jinja")
	if err != nil {
		return nil, fmt.Errorf("failed to read template file: %w", err)
	}

	// Extract System Prompt part from template (between |im_start|>system and |im_end|)
	templateStr := string(templateBytes)
	sysStart := strings.Index(templateStr, "<|im_start|>system\n")
	sysEnd := strings.Index(templateStr, "<|im_end|>")
	var systemPrompt string
	if sysStart != -1 && sysEnd != -1 {
		systemPrompt = templateStr[sysStart+19 : sysEnd]
	} else {
		// Fallback if parsing fails
		systemPrompt = "You are an expert technical blog writer."
	}

	// Construct full prompt manually since we don't have a jinja engine
	// But we use the content from the file to guide the model
	fullPrompt := fmt.Sprintf("<|im_start|>system\n%s<|im_end|>\n<|im_start|>user\n%s<|im_end|>\n<|im_start|>assistant\n", systemPrompt, prompt)

	// Prepare completion request
	reqBody := map[string]interface{}{
		"prompt":         fullPrompt,
		"n_predict":      4000,
		"temperature":    0.7,
		"top_k":          40,
		"top_p":          0.92,
		"repeat_penalty": 1.15,
		"stop":           []string{"<|im_end|>", "</s>"},
		"cache_prompt":   true,
		"json_schema":    schemaMap, // Use loaded schema
	}

	jsonData, err := json.Marshal(reqBody)
	if err != nil {
		return nil, fmt.Errorf("marshal request: %w", err)
	}

	// Make HTTP request to llama-server
	req, err := http.NewRequestWithContext(ctx, "POST", serverURL+"/completion", bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")

	fmt.Println("   🤖 Sending generation request to llama-server...")
	fmt.Println("   ⏳ Generating content (1200+ words). This can take 5-10 minutes on CPU. Please wait...")

	client := &http.Client{Timeout: 30 * time.Minute}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("llama-server request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("llama-server error %d: %s", resp.StatusCode, string(body))
	}
	fmt.Println("   ✓ Response received. Processing JSON...")

	// Parse response
	var result struct {
		Content string `json:"content"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, fmt.Errorf("decode response: %w", err)
	}

	// Parse the generated JSON content
	var article BlogArticle
	if err := json.Unmarshal([]byte(result.Content), &article); err != nil {
		return nil, fmt.Errorf("parse generated JSON: %w\nContent: %s", err, result.Content)
	}

	return &article, nil
}

func isServerRunning(serverURL string) bool {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	req, _ := http.NewRequestWithContext(ctx, "GET", serverURL+"/health", nil)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return false
	}
	resp.Body.Close()
	return resp.StatusCode == http.StatusOK
}

func isServerReady(serverURL string) bool {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	req, _ := http.NewRequestWithContext(ctx, "GET", serverURL+"/health", nil)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return false
	}
	defer resp.Body.Close()

	// Server is ready only if it returns 200 OK (not 503 "Loading model")
	return resp.StatusCode == http.StatusOK
}

func startLlamaServer(ctx context.Context) error {
	cmd := exec.Command(
		"../shbin/server",
		"-m", "gemma-3-12b-it-q4_0.gguf",
		"-c", "16384",
		"--port", "8080",
		"--host", "127.0.0.1",
		"-ngl", "0",
		"--embedding",
	)

	cmd.Env = append(os.Environ(), "LD_LIBRARY_PATH=../shbin:"+os.Getenv("LD_LIBRARY_PATH"))
	cmd.Dir = "." // Already in models directory

	// Capture server output for debugging
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// Start server in background
	if err := cmd.Start(); err != nil {
		return fmt.Errorf("failed to start server process: %w", err)
	}

	// Don't wait for it to finish
	go cmd.Wait()

	return nil
}

// ============================================================================
// MARKDOWN CONVERSION
// ============================================================================

func convertToMarkdown(article *BlogArticle) string {
	var md strings.Builder

	// YAML frontmatter
	md.WriteString("---\n")
	md.WriteString(fmt.Sprintf("title: \"%s\"\n", article.Metadata.Title))
	md.WriteString(fmt.Sprintf("description: \"%s\"\n", article.Metadata.Description))
	md.WriteString(fmt.Sprintf("slug: %s\n", article.Metadata.Slug))
	md.WriteString(fmt.Sprintf("author: \"%s\"\n", article.Metadata.Author))
	md.WriteString(fmt.Sprintf("date: %s\n", article.Metadata.Date))
	// Deduplicate tags
	cleanTags := uniqueStrings(article.Metadata.Tags)
	md.WriteString(fmt.Sprintf("tags: [%s]\n", strings.Join(cleanTags, ", ")))
	md.WriteString(fmt.Sprintf("robots: %s\n", article.Metadata.Robots))
	md.WriteString(fmt.Sprintf("featured_image: %s\n", article.Metadata.FeaturedImage))
	md.WriteString(fmt.Sprintf("canonical: %s\n", article.Metadata.Canonical))
	md.WriteString("---\n\n")

	// Content sections (New 5-section structure)
	md.WriteString(article.Content.IntroductionContext + "\n\n")

	md.WriteString(article.Content.ProblemStatement + "\n\n")

	// Insert diagram for problem_statement
	for _, diagram := range article.Diagrams {
		if diagram.Placement == "problem_statement" {
			md.WriteString(sanitizeMermaidCode(diagram.DiagramCode) + "\n\n")
		}
	}

	md.WriteString(article.Content.WhyImportant + "\n\n")

	// Insert diagram for why_important
	for _, diagram := range article.Diagrams {
		if diagram.Placement == "why_important" {
			md.WriteString(sanitizeMermaidCode(diagram.DiagramCode) + "\n\n")
		}
	}

	md.WriteString(article.Content.WaysToSolve + "\n\n")

	// Insert diagram for ways_to_solve
	for _, diagram := range article.Diagrams {
		if diagram.Placement == "ways_to_solve" {
			md.WriteString(sanitizeMermaidCode(diagram.DiagramCode) + "\n\n")
		}
	}

	md.WriteString(article.Content.ConclusionCTA + "\n\n")

	return md.String()
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

func calculateKeywordScore(text, topic string) float64 {
	topicWords := strings.Fields(strings.ToLower(topic))
	textLower := strings.ToLower(text)
	score := 0.0
	matches := 0
	for _, word := range topicWords {
		if len(word) < 3 {
			continue
		} // Skip short words
		if strings.Contains(textLower, word) {
			matches++
			score += 0.2
		}
	}
	// Bonus for exact phrase match
	if strings.Contains(textLower, strings.ToLower(topic)) {
		score += 0.5
	}
	// Normalize/Cap
	if score > 1.0 {
		score = 1.0
	}
	return score
}

func uniqueStrings(input []string) []string {
	keys := make(map[string]bool)
	list := []string{}
	for _, entry := range input {
		if _, value := keys[entry]; !value {
			keys[entry] = true
			list = append(list, entry)
		}
	}
	return list
}

func sanitizeMermaidCode(code string) string {
	// Remove existing backticks and language identifiers
	code = strings.TrimSpace(code)
	code = strings.ReplaceAll(code, "```mermaid", "")
	code = strings.ReplaceAll(code, "```", "")
	code = strings.TrimSpace(code)

	// Wrap cleanly
	return "```mermaid\n" + code + "\n```"
}

// ============================================================================
// IMAGE GENERATION
// ============================================================================

func generateFeaturedImage(article *BlogArticle, staticDir string) error {
	// staticDir already includes the full path (e.g., "../static/images/blog")
	// Just append the image filename, not another /blog/ subdirectory
	imagePath := filepath.Join(staticDir, article.Metadata.Slug+".png")

	// Ensure directory exists
	if err := os.MkdirAll(filepath.Dir(imagePath), 0755); err != nil {
		return fmt.Errorf("create image directory: %w", err)
	}

	// Always enforce low-poly style for consistent branding
	if strings.TrimSpace(article.ImageGen.PositivePrompt) == "" {
		fmt.Println("⚠️ Model returned empty image prompt. Generating fallback prompt.")
		article.ImageGen.PositivePrompt = fmt.Sprintf("low poly style illustration of %s, isometric 3d, soft lighting, minimal, 4k", article.Metadata.Title)
	} else if !strings.Contains(strings.ToLower(article.ImageGen.PositivePrompt), "low poly") {
		// Prepend low-poly style if not already present
		article.ImageGen.PositivePrompt = "low poly style, " + article.ImageGen.PositivePrompt
	}

	fmt.Printf("🎨 Generating lowpoly image: %s\n", imagePath)
	fmt.Printf("   Prompt: %s\n", article.ImageGen.PositivePrompt)

	// Construct command for txt2img
	// Using reduced steps (10) for speed as requested
	cmd := exec.Command(
		"../shbin/txt2img",
		"-m", "stable-diffusion-v1-5-pruned-emaonly-Q4_1.gguf",
		"--vae-on-cpu",
		"--vae-tiling",
		"--clip-on-cpu",
		"--control-net-cpu",
		"-t", "4",
		"--diffusion-fa",
		"--offload-to-cpu",
		"--steps", "10", // Faster generation
		"-H", "400", // Slightly smaller height for banner
		"-W", "800", // Standard blog width
		"-p", article.ImageGen.PositivePrompt,
		"-n", article.ImageGen.NegativePrompt,
		"-o", imagePath,
		"-v", // Verbose output
	)

	// Set LD_LIBRARY_PATH for the binary
	cmd.Env = append(os.Environ(), "LD_LIBRARY_PATH=../shbin:"+os.Getenv("LD_LIBRARY_PATH"))
	cmd.Dir = "."

	// Capture output for debugging
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	fmt.Printf("🔧 Executing Image Command: %s\n", cmd.String())

	if err := cmd.Run(); err != nil {
		// Fallback to placeholder if generation fails (e.g. missing model)
		fmt.Printf("⚠️ Image generation failed: %v. Creating placeholder.\n", err)
		return createPlaceholderImage(imagePath)
	}

	return nil
}

func createPlaceholderImage(imagePath string) error {
	file, err := os.Create(imagePath)
	if err != nil {
		return fmt.Errorf("create placeholder file: %w", err)
	}
	defer file.Close()

	// 1x1 Red Valid PNG
	tinyPng := []byte{
		0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
		0x00, 0x00, 0x00, 0x0D,
		0x49, 0x48, 0x44, 0x52,
		0x00, 0x00, 0x00, 0x01,
		0x00, 0x00, 0x00, 0x01,
		0x08, 0x02, 0x00, 0x00, 0x00,
		0x90, 0x77, 0x53, 0xDE,
		0x00, 0x00, 0x00, 0x0C,
		0x49, 0x44, 0x41, 0x54,
		0x08, 0xD7, 0x63, 0xF8, 0xCF, 0xC0, 0x00, 0x00, 0x03, 0x01, 0x01, 0x00,
		0x18, 0xDD, 0x8D, 0xB0,
		0x00, 0x00, 0x00, 0x00,
		0x49, 0x45, 0x4E, 0x44,
		0xAE, 0x42, 0x60, 0x82,
	}

	if _, err := file.Write(tinyPng); err != nil {
		return fmt.Errorf("write placeholder data: %w", err)
	}
	return nil
}

// ============================================================================
// SAVE ARTICLE
// ============================================================================

func saveArticle(article *BlogArticle, contentDir, staticDir string) error {
	// Set featured image path BEFORE converting to markdown
	imageFilename := article.Metadata.Slug + ".png"
	article.Metadata.FeaturedImage = "/images/blog/" + imageFilename

	// Convert to markdown (now includes correct featured_image path)
	markdown := convertToMarkdown(article)

	// Fix potential configuration issue where path has duplicate /blog/blog
	// Check for both unix and windows separators just in case
	if strings.HasSuffix(contentDir, "/blog/blog") || strings.HasSuffix(contentDir, "\\blog\\blog") {
		contentDir = filepath.Dir(contentDir)
	}

	// Save markdown file
	filePath := filepath.Join(contentDir, article.Metadata.Slug+".md")

	// Create directory if it doesn't exist
	if err := os.MkdirAll(filepath.Dir(filePath), 0755); err != nil {
		return fmt.Errorf("create content directory: %w", err)
	}

	if err := os.WriteFile(filePath, []byte(markdown), 0644); err != nil {
		return fmt.Errorf("write markdown: %w", err)
	}

	fmt.Printf("✅ Saved article: %s\n", filePath)

	// Generate featured image
	if err := generateFeaturedImage(article, staticDir); err != nil {
		return fmt.Errorf("generate image: %w", err)
	}

	return nil
}

// ============================================================================
// LINKEDIN POST GENERATION
// ============================================================================

type LinkedInPost struct {
	CompanyPost  CompanyPagePost `json:"company_post"`
	PersonalPost PersonalRepost  `json:"personal_post"`
}

type CompanyPagePost struct {
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
	URL      string   `json:"url"`
}

type PersonalRepost struct {
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
	URL      string   `json:"url"`
}

// GenerateLinkedInPosts creates LinkedIn post suggestions from a blog article
func GenerateLinkedInPosts(article *BlogArticle, blogURL string) *LinkedInPost {
	// Extract key points from the article for compelling posts
	// Use the first sentence or key insight from the introduction
	intro := article.Content.IntroductionContext
	firstSentence := extractFirstSentence(intro)

	// Create hashtags from the article tags (limit to first 3)
	companyHashtags := []string{"#TechBlog", "#Innovation", "#KnowledgeSharing"}
	personalHashtags := []string{"#TechInsights", "#Learning"}

	// Add article-specific tags
	for i, tag := range article.Metadata.Tags {
		if i >= 2 {
			break
		}
		hashtag := "#" + strings.ReplaceAll(strings.Title(tag), " ", "")
		companyHashtags = append(companyHashtags, hashtag)
		personalHashtags = append(personalHashtags, hashtag)
	}

	// Company page post - professional and brand-focused
	companyText := fmt.Sprintf(`🚀 New insight: %s

We've just published a new article exploring %s. %s

Read more: %s

%s`,
		article.Metadata.Title,
		article.Metadata.Title,
		firstSentence,
		blogURL,
		strings.Join(companyHashtags, " "))

	// Personal repost - more casual and engaging
	personalText := fmt.Sprintf(`💡 Excited to share our latest article on %s!

%s

Check it out and let me know your thoughts: %s

%s`,
		article.Metadata.Title,
		firstSentence,
		blogURL,
		strings.Join(personalHashtags, " "))

	return &LinkedInPost{
		CompanyPost: CompanyPagePost{
			Text:     companyText,
			Hashtags: companyHashtags,
			URL:      blogURL,
		},
		PersonalPost: PersonalRepost{
			Text:     personalText,
			Hashtags: personalHashtags,
			URL:      blogURL,
		},
	}
}

// extractFirstSentence extracts the first sentence from a text block
func extractFirstSentence(text string) string {
	text = strings.TrimSpace(text)

	// Find first period, exclamation, or question mark
	for _, delimiter := range []string{". ", "! ", "? "} {
		if idx := strings.Index(text, delimiter); idx != -1 {
			sentence := text[:idx+1]
			// Ensure it's not too long (max 200 chars)
			if len(sentence) > 200 {
				sentence = sentence[:197] + "..."
			}
			return sentence
		}
	}

	// If no sentence delimiter found, take first 150 chars
	if len(text) > 150 {
		return text[:147] + "..."
	}
	return text
}

// ============================================================================
// MAIN ENTRY POINT
// ============================================================================

// GenerateBlogFromModels is the exported function that can be called from main.go
// It returns the absolute path of the generated file
func GenerateBlogFromModels(ctx context.Context, topic, tavilyKey, contentDir, staticDir string) (string, error) {
	if tavilyKey == "" {
		return "", fmt.Errorf("TAVILY_API_KEY environment variable is not set")
	}

	fmt.Printf("🚀 Starting blog generation for: %s\n\n", topic)

	article, err := generateBlogArticle(ctx, topic, tavilyKey, contentDir)
	if err != nil {
		return "", fmt.Errorf("generation error: %v", err)
	}

	// Pass output directories
	if err := saveArticle(article, contentDir, staticDir); err != nil {
		return "", fmt.Errorf("error saving article: %v", err)
	}

	fmt.Println("\n✅ Blog article generated successfully!")
	fmt.Printf("   Title: %s\n", article.Metadata.Title)
	fmt.Printf("   Slug: %s\n", article.Metadata.Slug)

	// Generate LinkedIn posts
	blogURL := fmt.Sprintf("https://www.runink.org/blog/%s/", article.Metadata.Slug)
	linkedInPosts := GenerateLinkedInPosts(article, blogURL)

	// Output LinkedIn posts as JSON to stdout (will be captured by workflow)
	fmt.Println("\n📱 LINKEDIN_POSTS_START")
	postsJSON, err := json.MarshalIndent(linkedInPosts, "", "  ")
	if err == nil {
		fmt.Println(string(postsJSON))
	}
	fmt.Println("📱 LINKEDIN_POSTS_END")

	// Return absolute path
	absPath, _ := filepath.Abs(filepath.Join("..", "..", "content", "blog", article.Metadata.Slug+".md"))
	return absPath, nil
}

// MainCLI is the entry point when running this file standalone
func MainCLI() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run generate_blog.go <topic>")
		fmt.Println("Example: go run generate_blog.go 'Real-time data quality monitoring'")
		os.Exit(1)
	}

	topic := strings.Join(os.Args[1:], " ")
	tavilyKey := os.Getenv("TAVILY_API_KEY")

	// Default paths for standalone run
	contentDir := "../../content/blog"
	staticDir := "../../static/images/blog"

	ctx := context.Background()
	absPath, err := GenerateBlogFromModels(ctx, topic, tavilyKey, contentDir, staticDir)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}

	fmt.Printf("OUTPUT_FILE_ABS: %s\n", absPath)
}
