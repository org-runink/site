# Runink Blog Generator - Release Notes

## Version: `latest` (v1.2.0 base)
**Date:** 2026-01-23

### 🚀 Major Improvements

#### 1. Containerized Workflow Support
- **Full Isolation**: The `generate-blog` GitHub Action now runs entirely inside the `ghcr.io/org-runink/blogen:latest` container.
- **Dependency Fixes**: Added `git`, `nodejs`, and `npm` to the Docker image to support standard GitHub Actions (checkout, scripts, PR creation).
- **Environment Parity**: Fixed "No such file or directory" errors by implementing dynamic binary path resolution. The system now correctly locates `llama-server` and `txt2img` whether running locally (`cmd/`) or in the container (`/app`).

#### 2. Robust Automation
- **Conditional Triggers**: The workflow now strictly listens for the `blog-request` label, preventing accidental execution on unrelated issues.
- **Branch Creation**: Fixed permission and output path issues that prevented the `create-pull-request` action from creating new branches. Generated content is now correctly written to `$GITHUB_WORKSPACE`.

#### 3. simplified Configuration
- **Unification**: All references now point to `latest` tag to streamline the CD process.
- **Directory Structure**: Flattened the Docker image structure (`/app/models` -> `/app`) to simplify resource access.

### 🐛 Bug Fixes
- Fixed `fork/exec ../shbin/server` error by making path resolution context-aware.
- Fixed missing `schemas/` and `templates/` error by setting the correct working directory in workflows.
- Fixed silent failures in branch creation by correcting output volume mounts.

### 🛠️ Technical Details
- **Base Image**: `ubuntu:latest` with specialized runtime deps (`libopenblas`, `libgomp`).
- **Binaries**: Compiled `llama.cpp` (Gemma 3 12B) and `stable-diffusion.cpp` (Flux Schnell).
- **Pipeline**: `build-push.yaml` (implied/manual) -> `generate-blog.yaml`.
