# Runink Blog Generator - Docker Documentation

Complete guide for building, running, and troubleshooting the Docker image for the blog generator.

## Table of Contents

- [Quick Start](#quick-start)
- [OCI-Compliant Image](#oci-compliant-image)
- [Building the Image](#building-the-image)
- [Running the Container](#running-the-container)
- [Automated Workflow (GitHub Issues)](#automated-workflow-github-issues)
- [Environment Variables](#environment-variables)
- [Volume Mounts](#volume-mounts)
- [Troubleshooting](#troubleshooting)
- [Publishing & CI/CD](#publishing--cicd)
- [Performance](#performance)
- [See Also](#see-also)

---

## Quick Start

```bash
# 1. Set your Tavily API key
export TAVILY_API_KEY="your-api-key-here"

# 2. Build & Run (Helper Script)
cd cmd
./build_locally.sh
```

**What the script does:**
1. ✅ Tidies Go modules
2. 🔨 Builds local `blog-gen` binary
3. 🧪 Runs unit tests
4. 🐳 Builds Docker image (`blog-gen:latest`)
5. 🚀 Tests Docker run (Dry run generation)

---

## OCI-Compliant Image

### Image Registry

Published to GitHub Container Registry (ghcr.io):

```
ghcr.io/org-runink/site/blog-gen:latest
ghcr.io/org-runink/site/blog-gen:v1.0.0
ghcr.io/org-runink/site/blog-gen:main-<sha>
```

### OCI Annotations

Standard OCI labels:
- `org.opencontainers.image.title`: Runink Blog Generator
- `org.opencontainers.image.description`: AI-powered blog generation tool
- `org.opencontainers.image.version`: Semantic version
- `org.opencontainers.image.vendor`: Runink
- `org.opencontainers.image.licenses`: MIT
- `org.opencontainers.image.source`: https://github.com/org-runink/site
- `org.opencontainers.image.documentation`: https://github.com/org-runink/site/blob/main/cmd/DOCKER.md

### Security Features

- **Non-root execution**: Planned (currently runs as root for model access)
- **Minimal dependencies**: Only runtime essentials (`libopenblas0`, `libgomp1`, `ca-certificates`)
- **SBOM**: Software Bill of Materials generated for releases
- **Provenance**: Build attestation for release images

---

## Building the Image

### Local Build (Recommended)

The `build_locally.sh` script handles the complete build and test process:

```bash
cd cmd
./build_locally.sh
```

**What it does:**
1. ✅ Tidies Go modules
2. 🔨 Builds Go binary with `CGO_ENABLED=0` for static linking
3. 🧪 Runs unit tests
4. 🔍 Validates schema with dry run
5. 🐳 Builds Docker image using BuildKit
6. 🚀 Tests Docker image with dry run generation

**Expected time**: ~10-15 minutes (first build), ~30s (cached)

### Manual Docker Build

```bash
cd cmd
docker build -t blog-gen:latest -f Dockerfile ..
```

### Multi-Stage Build Architecture

#### **Builder Stage** (Ubuntu 24.04)
- Installs build tools: `build-essential`, `cmake`, `git`, `libopenblas-dev`, `pkg-config`
- **Compiles stable-diffusion.cpp**: For AI image generation (Flux Schnell model)
- **Compiles llama.cpp**: For text generation (Gemma 3 4B model)
- Builds with `OpenBLAS` support for optimized CPU inference
- **Shared libraries**: Uses `find` to recursively locate ALL `.so*` files from build directories

#### **Runtime Stage** (Ubuntu 24.04)
- Minimal runtime: `ca-certificates`, `libopenblas0`, `libgomp1`
- Copies binaries: `blog-gen`, `llama-server`, `txt2img`
- Copies models: `gemma-3-4b-it-q4_0.gguf`, `flux1-schnell-q4_0.safetensors`
- **Sets `LD_LIBRARY_PATH=/app/shbin`** for dynamic library loading
- Direct execution (no entrypoint wrapper for simplicity)

---

## Running the Container

### Pull from GitHub Packages

If you prefer to use the pre-built image from GitHub Container Registry:

```bash
# Login (requires GITHUB_TOKEN with packages:read)
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull latest
docker pull ghcr.io/org-runink/site/blog-gen:latest
```

### Specify Topic via Command Line

```bash
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
- `-v "$(pwd)/content":/app/content`: Mounts local content directory (markdown saved here).
- `-v "$(pwd)/static":/app/static`: Mounts local static directory (images saved here).
- `-e TAVILY_API_KEY`: Your Tavily API key for research.
- `--content-dir`: Path inside container where markdown will be saved.
- `--image-dir`: Path inside container where images will be saved.
- `-t "..."`: The blog topic you want to generate.

**Output Includes:**
- Generated blog article in markdown.
- Featured image (PNG).
- **LinkedIn post suggestions** printed to console.

### Interactive Mode

```bash
docker run --rm -it \
  -e TAVILY_API_KEY="${TAVILY_API_KEY}" \
  blog-gen:latest \
  -i
```

---

## Automated Workflow (GitHub Issues)

The system is configured to automatically generate blogs when a labeled GitHub Issue is created.

### Steps to Request a Blog Article

1. Go to the **Issues** tab in the repository.
2. Click **New Issue**.
3. Select the **Blog Article Request** template.
4. Fill in the **Topic** field with your desired blog subject.
5. Submit the issue.

### Automation Workflow

Once you submit the issue, the following happens automatically:

1. **Workflow Trigger**: GitHub Actions detects the `blog-request` label.
2. **Content Generation**:
   - Tavily API researches the topic (20+ sources).
   - AI generates 1200+ word article with Mermaid diagrams.
   - Featured image is generated.
   - **LinkedIn post suggestions are created**.
3. **Pull Request Created**: A new PR is automatically opened with content and validation results.
4. **Notifications**:
   - **Slack**: Your configured channel receives the status and ready-to-use LinkedIn posts.
   - **GitHub**: The original issue is commented with the PR link.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `TAVILY_API_KEY` | ✅ Yes | API key for Tavily web search (get at [tavily.com](https://tavily.com)) |
| `LD_LIBRARY_PATH` | Auto-set | Path to shared libraries (automatically set to `/app/shbin`) |

---

## Volume Mounts

### Recommended Mounts

| Host Path | Container Path | Purpose |
|-----------|----------------|---------|
| `./content` | `/app/content` | Output for generated blog markdown files |
| `./static` | `/app/static` | Output for generated featured images |

> **Note**: Models are bundled at `/app/models/` - no mount needed unless using custom models.

---

## Troubleshooting

### Issue: `libmtmd.so.0: cannot open shared object file`

**Symptom**: `llama-server` fails with missing library error

**Cause**: Missing llama.cpp shared libraries

**Solution**: Fixed in latest Dockerfile. The build now recursively finds ALL `.so*` files (including symlinks):
```dockerfile
find build -name "*.so*" ! -type d -exec cp -P {} /opt/binaries/ \;
```

**Required libraries** (all copied automatically):
- `libmtmd.so.0` (symlink to actual binary)
- `libllama.so.0` (symlink)
- `libggml.so.0` (symlink)
- `libggml-base.so.0` (symlink)

**Verify**:
```bash
docker run --rm --entrypoint sh blog-gen:latest -c "ldd /app/shbin/server"
```
All should show as `found` (not `not found`).

**List copied libraries**:
```bash
docker run --rm --entrypoint sh blog-gen:latest -c "ls -lh /app/shbin/"
```

### Issue: `llama-server` Startup Timeout

**Symptom**: "Server failed to become ready after 5 minutes"

**Causes**:
1. **Insufficient RAM**: 4B model needs ~4GB
2. **Slow CPU**: Model loading takes 3-5 mins on CPU-only

**Solutions**:
- Allocate at least 8GB RAM to Docker
- Be patient - first load is slow
- Check logs: `docker logs <container-id>`

**Expected timeline**:
- Model download: 0s (bundled in image)
- Model load to RAM: 3-5 minutes (CPU)
- Server ready: Total ~5 minutes

### Issue: DNS Resolution Failures During Build

**Symptom**: `Temporary failure resolving 'security.ubuntu.com'`

**Solutions**:

1. **Restart Docker daemon**:
```bash
sudo systemctl restart docker
```

2. **Configure Docker DNS** (`/etc/docker/daemon.json`):
```json
{
  "dns": ["8.8.8.8", "8.8.4.4"]
}
```
Then: `sudo systemctl restart docker`

3. **Check system DNS**:
```bash
resolvectl status  # systemd
# or
cat /etc/resolv.conf
```

### Issue: Build Takes Too Long

**Expected times**:
- **First build**: 10-15 minutes (compiles llama.cpp + stable-diffusion.cpp from source)
- **Cached builds**: ~30 seconds (uses layer cache)

**Force rebuild without cache**:
```bash
docker build --no-cache -t blog-gen:latest -f Dockerfile ..
```

### Debugging Commands

**Check container environment**:
```bash
docker run --rm --entrypoint sh blog-gen:latest -c "env | grep LD_LIBRARY"
```

**Interactive shell**:
```bash
docker run --rm -it --entrypoint sh blog-gen:latest
```

**Inspect binary dependencies**:
```bash
docker run --rm --entrypoint sh blog-gen:latest -c "ldd /app/shbin/server"
docker run --rm --entrypoint sh blog-gen:latest -c "ldd /app/shbin/txt2img"
```

---

## Publishing & CI/CD

### Automated Publishing

Images are automatically built and published via GitHub Actions:

**Triggers**:
- **Push to main**: Tagged as `latest` and `main-<sha>`
- **Pull requests**: Tagged as `pr-<number>`
- **Git tags**: Tagged with semantic version (`v1.0.0`, `v1.0`, `v1`)

**Workflow**: `.github/workflows/docker-publish.yml`

### GitHub Actions Usage

Used in automated workflows:

- `.github/workflows/blog-gen-on-issue.yml` - Issue-triggered generation
- `.github/workflows/generate-blog.yaml` - Manual dispatch

**Example**:
```yaml
- name: Generate Blog
  run: |
    docker run --rm \
      -v "${PWD}/content":/app/content \
      -v "${PWD}/static":/app/static \
      -e TAVILY_API_KEY="${{ secrets.TAVILY_API_KEY }}" \
      ghcr.io/org-runink/site/blog-gen:latest \
      --content-dir /app/content/blog \
      --image-dir /app/static/images/blog \
      -t "${{ github.event.issue.title }}"
```

### Release Process

1. Create tag: `git tag v1.0.0`
2. Push tag: `git push origin v1.0.0`
3. Create GitHub Release (triggers attestation)
4. Workflow publishes image with version tags

### Image Verification

**SBOM & Provenance**:
```bash
gh attestation verify oci://ghcr.io/org-runink/site/blog-gen:v1.0.0 -R org-runink/site
```

---

## Performance

### Model Specs

| Model | Size | CPU Load | RAM |
|-------|------|----------|-----|
| Gemma 3 4B Q4 | ~3GB | 3-5 min | ~4GB |
| Flux Schnell Q4 | ~12GB | 1-2 min | ~16GB |

### Resource Requirements

**Minimum**:
- CPU: 4 cores
- RAM: 8GB
- Disk: 20GB

**Recommended**:
- CPU: 8+ cores
- RAM: 16GB+
- Disk: 40GB

---

## See Also

- [Dockerfile](./Dockerfile) - Complete Dockerfile source
- [Main README](../README.md) - Project overview

