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
    tini \
    bash

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy pre-built binary from host
COPY --chown=appuser:appgroup cmd/blog-gen .

# Copy license notification script
COPY --chown=appuser:appgroup cmd/entrypoint.sh .
RUN chmod +x entrypoint.sh

# Copy application assets
# We only need models and shbin. Content and static are mounted at runtime.
COPY --chown=appuser:appgroup cmd/models/ ./models/
COPY --chown=appuser:appgroup cmd/shbin/ ./shbin/

# Permissions & Environment
ENV LOG_LEVEL=info \
    PATH="/app:${PATH}" \
    GIN_MODE=release

# Run as root to avoid permission issues with mounted volumes
# The container is isolated, so this is acceptable
# USER appuser (removed to fix volume mount permissions)

# Pass output paths as parameters to the entrypoint
# We allow the user to pass arguments at runtime (via CMD or docker run args)
# The entrypoint wrapper displays license notice, then passes to tini
ENTRYPOINT ["/app/entrypoint.sh", "/sbin/tini", "--", "/app/blog-gen"]
