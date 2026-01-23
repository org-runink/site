# Blogen - AI Blog Generator

## 📦 About This Release

This release contains **only the blog generation tool** (`cmd/` folder), not the entire website repository.

### What's Included:
- ✅ Cross-platform binaries (Linux, macOS, Windows)
- ✅ Source code (cmd folder only, excludes .gguf models)
- ✅ Docker image: `ghcr.io/org-runink/blogen`
- ✅ SHA256 checksums for verification

### What's NOT Included:
- ❌ Hugo website source code
- ❌ Model files (.gguf) - download separately
- ❌ Website themes, layouts, content

---

## 🚀 Quick Start

### Option 1: Download Binary
```bash
# Linux AMD64
wget https://github.com/org-runink/site/releases/download/[VERSION]/blogen-linux-amd64
chmod +x blogen-linux-amd64
mv blogen-linux-amd64 /usr/local/bin/blogen

# macOS ARM64 (Apple Silicon)
wget https://github.com/org-runink/site/releases/download/[VERSION]/blogen-darwin-arm64
chmod +x blogen-darwin-arm64
mv blogen-darwin-arm64 /usr/local/bin/blogen

# Verify
blogen --version
```

### Option 2: Docker
```bash
docker pull ghcr.io/org-runink/blogen:[VERSION]
docker run --rm ghcr.io/org-runink/blogen:[VERSION] --help
```

### Option 3: Build from Source
```bash
# Extract the source tarball
tar xzf blogen-source-[VERSION].tar.gz
cd cmd
go build -o blogen main.go
```

---

## 📥 Model Requirements

This tool requires AI models (not included in releases due to size):

1. **Gemma 3 12B IT Q4_0** (~6.6GB)
```bash
# Download to cmd/models/
wget https://huggingface.co/google/gemma-3-12b-it-GGUF/resolve/main/gemma-3-12b-it-q4_0.gguf \
  -O cmd/models/gemma-3-12b-it-q4_0.gguf
```

2. **Flux Schnell Q4_0** (optional, for image generation)
```bash
# Download if needed
wget [URL] -O cmd/models/stable-diffusion-v1-5-pruned-emaonly-Q4_1.gguf
```

---

## 💰 Repository Structure

**This is a monorepo:**
- `/` - Hugo website (runink.org)
- `/cmd` - **Blog generator tool (this release)**

Git tags (like `v1.0.0`) tag the entire repository, but releases only package the `/cmd` tool.

---

## 📚 Documentation

- [Docker Usage Guide](https://github.com/org-runink/site/blob/main/cmd/DOCKER.md)
- [Full README](https://github.com/org-runink/site/blob/main/cmd/README.md)

---

## 🔒 Verification

Verify downloaded binaries with SHA256:
```bash
sha256sum -c SHA256SUMS.txt
```

---

**Questions?** Open an issue at https://github.com/org-runink/site/issues
