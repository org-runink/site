package main

import (
	"bufio"
	"context"
	"fmt"
	"os"
	"os/exec"
	"strings"

	"blogger-cli/models"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	cfgFile           string
	topic             string
	audience          string
	valueDriver       string
	additionalContext string
	interactive       bool
)

var rootCmd = &cobra.Command{
	Use:   "blog-gen",
	Short: "Generate SEO-optimized blog articles with AI",
	Long: `Blog Generator uses Tavily search, ARIMA trend analysis, and llama-cli 
to generate high-quality, SEO-optimized blog articles.

The generator performs:
- Tavily web search for latest research (20 results)
- ARIMA trend analysis for result ranking
- RAG retrieval from existing blog articles
- Content generation with llama-cli
- Automatic markdown and image creation`,
	Run: func(cmd *cobra.Command, args []string) {
		if interactive || topic == "" {
			runInteractive()
		} else {
			generateBlog(topic, audience, valueDriver, additionalContext)
		}
	},
}

func init() {
	cobra.OnInitialize(initConfig)

	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is ./blogger.ini)")
	rootCmd.Flags().StringVarP(&topic, "topic", "t", "", "Blog topic to generate")
	rootCmd.Flags().StringVar(&audience, "audience", "", "Target audience for the article")
	rootCmd.Flags().StringVar(&valueDriver, "value-driver", "", "Primary value driver or business benefit")
	rootCmd.Flags().StringVar(&additionalContext, "context", "", "Additional context or reference links")
	rootCmd.Flags().BoolVarP(&interactive, "interactive", "i", false, "Interactive mode (prompt for topic)")

	// Add flags for output directories
	rootCmd.Flags().String("content-dir", "", "Directory to save generated blog content")
	rootCmd.Flags().String("image-dir", "", "Directory to save generated images")

	// Bind flags to viper
	viper.BindPFlag("content_dir", rootCmd.Flags().Lookup("content-dir"))
	viper.BindPFlag("image_dir", rootCmd.Flags().Lookup("image-dir"))
}

func initConfig() {
	if cfgFile != "" {
		viper.SetConfigFile(cfgFile)
	} else {
		// Look for config in models directory
		viper.AddConfigPath("models")
		viper.AddConfigPath(".")
		viper.SetConfigName("blogger")
		viper.SetConfigType("ini")
	}

	// Set defaults
	viper.SetDefault("tavily_api_key", "")
	viper.SetDefault("llama_cli_path", "../shbin/cli")
	viper.SetDefault("library_path", "../shbin")
	viper.SetDefault("content_dir", "../content/blog")
	viper.SetDefault("image_dir", "../static/images/blog")

	// Read from environment
	viper.SetEnvPrefix("BLOG")
	viper.AutomaticEnv()

	// Read config file if it exists
	if err := viper.ReadInConfig(); err == nil {
		fmt.Fprintln(os.Stderr, "Using config file:", viper.ConfigFileUsed())
	}
}

func runInteractive() {
	fmt.Println("🚀 Blog Generation System")
	fmt.Println("=" + strings.Repeat("=", 50))
	fmt.Println()
	fmt.Println("📝 Enter your blog topic:")
	fmt.Println("   (Example: Real-time data quality monitoring with streaming telemetry)")
	fmt.Println()

	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Topic: ")
	input, err := reader.ReadString('\n')
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading input: %v\n", err)
		os.Exit(1)
	}

	blogTopic := strings.TrimSpace(input)
	if blogTopic == "" {
		fmt.Println("❌ No topic provided. Exiting.")
		os.Exit(1)
	}

	generateBlog(blogTopic, "", "", "")
}

func generateBlog(blogTopic, audience, valueDriver, additionalContext string) {
	fmt.Println()
	fmt.Printf("🔍 Generating blog article for: %s\n", blogTopic)
	if audience != "" {
		fmt.Printf("👥 Target Audience: %s\n", audience)
	}
	fmt.Println()
	fmt.Println("This will take 3-5 minutes...")
	fmt.Println(strings.Repeat("-", 60))
	fmt.Println()

	// Set up environment for llama-cli
	oldPath := os.Getenv("LD_LIBRARY_PATH")
	libPath := viper.GetString("library_path")
	newPath := libPath
	if oldPath != "" {
		newPath = libPath + ":" + oldPath
	}
	os.Setenv("LD_LIBRARY_PATH", newPath)

	// Set Tavily API key
	tavilyKey := viper.GetString("tavily_api_key")
	if envKey := os.Getenv("TAVILY_API_KEY"); envKey != "" {
		tavilyKey = envKey
	}
	os.Setenv("TAVILY_API_KEY", tavilyKey)

	// Change to models directory for config file access
	modelsDir := "models"
	originalDir, err := os.Getwd()
	if err != nil {
		fmt.Fprintf(os.Stderr, "❌ Error: Could not get current directory: %v\n", err)
		os.Exit(1)
	}

	if err := os.Chdir(modelsDir); err != nil {
		fmt.Fprintf(os.Stderr, "❌ Error: Could not change to models directory: %v\n", err)
		os.Exit(1)
	}
	defer os.Chdir(originalDir)

	// Call the blog generation function directly
	ctx := context.Background()
	contentDir := viper.GetString("content_dir")
	imageDir := viper.GetString("image_dir")

	blogFile, err := models.GenerateBlogFromModels(ctx, blogTopic, audience, valueDriver, additionalContext, tavilyKey, contentDir, imageDir)
	if err != nil {
		fmt.Fprintf(os.Stderr, "\n❌ Blog generation failed: %v\n", err)
		os.Exit(1)
	}

	if blogFile == "" {
		fmt.Println("⚠️ Could not detect generated file path from output.")
		return
	}

	// Ask if user wants to preview
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("\nPreview article? (y/n): ")
	preview, _ := reader.ReadString('\n')
	preview = strings.TrimSpace(strings.ToLower(preview))

	if preview == "y" || preview == "yes" {
		previewFile(blogFile)
	}

	fmt.Println()
	fmt.Println("Next steps:")
	fmt.Println("1. Review the article:", blogFile)
	fmt.Println("2. Make any edits if needed")
	fmt.Println("3. Commit and push to publish:")
	fmt.Printf("   git add %s\n", blogFile)
	fmt.Printf("   git commit -m \"📝 Add blog: %s\"\n", blogTopic)
	fmt.Println("   git push")
	fmt.Println()
}

func previewFile(filepath string) {
	// Try bat, then less, then cat
	viewers := []string{"bat", "less", "cat"}

	for _, viewer := range viewers {
		cmd := exec.Command(viewer, filepath)
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		cmd.Stdin = os.Stdin

		if err := cmd.Run(); err == nil {
			return
		}
	}

	// Fallback: read and print file
	content, err := os.ReadFile(filepath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Could not read file: %v\n", err)
		return
	}
	fmt.Println(string(content))
}

func main() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
