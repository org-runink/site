# Runink Blog Generator - Docker Setup

## OCI-Compliant Image

This project follows [OCI (Open Container Initiative)](https://opencontainers.org/) best practices for container images.

### Image Registry

The blog generator image is published to GitHub Container Registry (ghcr.io):

```
ghcr.io/runink/site/blog-gen:latest
ghcr.io/runink/site/blog-gen:v1.0.0
```

### OCI Annotations

The image includes standard OCI labels:
- `org.opencontainers.image.title`: Runink Blog Generator
- `org.opencontainers.image.description`: AI-powered blog generation tool
- `org.opencontainers.image.version`: Semantic version
- `org.opencontainers.image.vendor`: Runink
- `org.opencontainers.image.licenses`: MIT
- `org.opencontainers.image.source`: GitHub repository URL
- `org.opencontainers.image.documentation`: Documentation URL

### Security Features

- **Non-root user**: Runs as `appuser` (UID/GID created at build time)
- **Minimal base**: Alpine Linux for small attack surface
- **SBOM**: Software Bill of Materials generated automatically
- **Provenance**: Build attestation for release images
- **Signal handling**: Uses `tini` for proper process management

## Usage

### Pull from GitHub Packages

```bash
# Login (requires GITHUB_TOKEN with packages:read scope)
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull latest
docker pull ghcr.io/runink/site/blog-gen:latest

# Pull specific version
docker pull ghcr.io/runink/site/blog-gen:v1.0.0
```

### Run Container

```bash
docker run --rm \
  -v $(pwd)/content:/app/content \
  -v $(pwd)/static:/app/static \
  -e TAVILY_API_KEY="your-key" \
  ghcr.io/runink/site/blog-gen:latest \
  --content-dir /app/content/blog \
  --image-dir /app/static/images/blog \
  -t "Your Blog Topic"
```

## Local Development

### Building Locally

```bash
cd cmd
./build_locally.sh
```

This script:
1. Builds the Go binary with `CGO_ENABLED=0`
2. Builds the Docker image
3. Runs tests

### Publishing to GitHub Packages

Images are automatically published on:
- **Push to main**: Tagged as `latest` and `main-<sha>`
- **Pull Request**: Tagged as `pr-<number>`
- **Release**: Tagged with semantic version (`v1.0.0`, `v1.0`, `v1`)

The workflow `.github/workflows/docker-publish.yml` handles all publishing.

## Release Process

1. **Create a tag**: `git tag v1.0.0`
2. **Push tag**: `git push origin v1.0.0`
3. **Create GitHub Release**: This triggers attestation generation
4. **Workflow publishes**: Image pushed with version tags

## Image Scanning

The published images include:
- **SBOM (Software Bill of Materials)**: Lists all dependencies
- **Provenance**: Cryptographic proof of build origin
- **Signatures**: Signed with GitHub's signing certificate

View attestations:
```bash
gh attestation verify oci://ghcr.io/runink/site/blog-gen:v1.0.0 -R runink/site
```
