# Blog Generation System - Usage Examples

This guide provides instructions for building, running locally (Native & Docker), and triggering the automated workflow via GitHub Issues.

## 1. Build & Run Locally (Recommended)

The easiest way to build the application and run a test generation (via Docker) is to use the helper script.

### Prerequisites
- Docker
- Git
- Go 1.21+ (optional, for local binary build)

### Command
```bash
cd cmd
# Ensure TAVILY_API_KEY is set
export TAVILY_API_KEY="your-key-here"

./build_locally.sh
```

**This script will:**
1.  Tidy Go modules.
2.  Build the local `blog-gen` binary.
3.  Run unit tests.
4.  Build the Docker image (`blog-gen:latest`).
5.  Run a test generation inside the Docker container (mounting `content/` and `static/`).

### Expected Output
```text
🧹 Tidying Go modules...
� Building blog-gen...
✅ Build successful!
🐳 Building Docker image...
� Testing Docker run (Dry run generation)...
✅ Blog article generated successfully!
🎉 All tests and Docker verification passed!
```

---

## 2. Generate a Specific Article (Docker Manual Run)

Once you have built the image (via step 1), you can generate any blog topic manually using Docker.

### Using the published Docker image:

If you prefer to use the published image from GitHub Container Registry:

```bash
export TAVILY_API_KEY="your-key-here"

docker run --rm \
  -v "$(pwd)/content":/app/content \
  -v "$(pwd)/static":/app/static \
  -e TAVILY_API_KEY="${TAVILY_API_KEY}" \
  ghcr.io/org-runink/site/blog-gen:latest \
  --content-dir /app/content/blog \
  --image-dir /app/static/images/blog \
  -t "AI-powered DevOps automation"
```

**Key Arguments:**
- `-v ...:/app/content`: Mounts local content directory (blog markdown saved here)
- `-v ...:/app/static`: Mounts local static directory (featured images saved here)
- `-e TAVILY_API_KEY`: Your Tavily API key for research
- `--content-dir`: Path inside container where blog markdown will be saved
- `--image-dir`: Path inside container where featured images will be saved
- `-t "..."`: The blog topic you want to generate

**Output Includes:**
- Generated blog article in markdown format
- Featured image (PNG)
- **LinkedIn post suggestions** (printed to console - copy these for social media sharing!)

---

## 3. Trigger via GitHub Issues (Fully Automated)

The system is configured to automatically generate blogs when a labeled GitHub Issue is created.

### Steps to Request a Blog Article

1. Go to the **Issues** tab in your repository: https://github.com/org-runink/site/issues
2. Click **New Issue**
3. Select the **Blog Article Request** template
4. Fill in the **Topic** field with your desired blog subject
5. Submit the issue

### Automation Workflow

Once you submit the issue, the following happens automatically:

1. **Workflow Trigger**: GitHub Actions detects the `blog-request` label and triggers the blog generation workflow
2. **Docker Container**: The latest `blog-gen` Docker image is pulled from GitHub Container Registry
3. **Content Generation**: 
   - Tavily API researches the topic (20+ sources)
   - ARIMA trend analysis ranks results
   - AI generates 1200+ word article with Mermaid diagrams
   - Featured image is generated
   - **LinkedIn post suggestions are created** (company page + personal repost)
4. **Pull Request Created**: A new PR is automatically opened with:
   - Blog article markdown
   - Featured image
   - Automated validation results
5. **Slack Notification**: Your configured Slack channel receives:
   - Blog generation status
   - **LinkedIn company page post** (ready to copy/paste)
   - **LinkedIn personal repost suggestion** (ready to share)
   - Link to the Pull Request for review
6. **Issue Updated**: The original issue is commented with the PR link and marked as completed

### Expected Timeline

- **Total time**: 5-10 minutes
- Research & generation: 3-5 minutes
- Image generation: 1-2 minutes
- Validation & PR creation: 30 seconds

### LinkedIn Posts in Slack

After successful generation, you'll receive a Slack message with two ready-to-use LinkedIn posts:

**📢 Company Page Post** - Professional, brand-focused message with:
- Topic introduction
- Key insights teaser
- Blog link
- Relevant hashtags (#TechBlog, #Innovation, etc.)

**🔁 Personal Repost** - Casual, engaging message for your personal profile with:
- Personal touch
- Blog link
- Professional hashtags (#TechInsights, #Learning, etc.)

Simply copy and paste these directly to LinkedIn - no additional editing needed!

