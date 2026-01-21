# ==========================================
# Runtime Stage (Single Stage)
# ==========================================
FROM alpine:latest

# OCI Image Annotations (https://github.com/opencontainers/image-spec/blob/main/annotations.md)
LABEL org.opencontainers.image.title="Runink Blog Generator" \
    org.opencontainers.image.description="AI-powered blog generation tool using Tavily search, ARIMA analysis, and llama-cli" \
    org.opencontainers.image.version="1.0.0" \
    org.opencontainers.image.vendor="Runink" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.source="https://github.com/runink/site" \
    org.opencontainers.image.documentation="https://github.com/runink/site/blob/main/cmd/DOCKER.md" \
    org.opencontainers.image.authors="Runink Team <contact@runink.org>"

WORKDIR /app

# Install runtime dependencies
# openblas, libstdc++, etc are needed for llama-cli
# gcompat provides glibc compatibility for txt2img binary
RUN apk update && apk add --no-cache \
    ca-certificates \
    libc6-compat \
    gcompat \
    libstdc++ \
    libgomp \
    openblas \
    bash

# Copy pre-built binary from host
COPY cmd/blog-gen .

# Copy application assets
# We only need models and shbin. Content and static are mounted at runtime.
COPY cmd/models/ ./models/
COPY cmd/shbin/ ./shbin/

# Make binary executable
RUN chmod +x /app/blog-gen

# Permissions & Environment
ENV LOG_LEVEL=info \
    PATH="/app:${PATH}" \
    GIN_MODE=release

# Direct execution without wrapper
ENTRYPOINT ["/app/blog-gen"]
