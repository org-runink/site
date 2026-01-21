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

Once you have built the image (via step 1), you can generate any blog topic manually:

```bash
# 1. Export your API Key
export TAVILY_API_KEY="your-key-here"

# 2. Run the generator with your topic
docker run --rm \
  -v "$(pwd)/../content":/app/content \
  -v "$(pwd)/../static":/app/static \
  -e TAVILY_API_KEY="${TAVILY_API_KEY}" \
  -e OPENBLAS_NUM_THREADS=8 \
  -e OPENBLAS_MAIN_FREE=1 \
  blog-gen -t "Your specific blog topic here"
```

**Arguments:**
- `-v ...:/app/content`: Mounts local content dir so the markdown file is saved locally.
- `-v ...:/app/static`: Mounts local static dir for generated images.
- `-e TAVILY_API_KEY=...`: Passes your API key to the container.
- `-e OPENBLAS_NUM_THREADS=8`: Sets OpenBLAS to use 8 threads for numerical operations.
- `-e OPENBLAS_MAIN_FREE=1`: Enables OpenBLAS memory cleanup.
- `-t "..."`: The topic you want to write about.

---

## 3. Trigger via GitHub Issues (Automation)

The system is configured to automatically generate blogs when a specific Issue is created.

### Steps
1.  Go to the **Issues** tab in this repository.
2.  Click **New Issue**.
3.  Select **Blog Article Request**.
4.  Fill in the **Topic**.
5.  Submit the issue.

### What Happens Next?
1.  GitHub Actions triggers the `generate-blog` workflow.
2.  A Docker container is built and run.
3.  The agent researches, writes, and validates the article.
4.  A **Pull Request** is automatically created with the new content.
5.  A comment is posted on your Issue with the result.


