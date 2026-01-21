# ==========================================
# Build Stage - Compile llama.cpp server
# ==========================================
FROM alpine:latest AS builder

# Install build dependencies
RUN apk update && apk add --no-cache \
    build-base \
    cmake \
    git \
    openblas-dev \
    linux-headers

# Build stable-diffusion.cpp for image generation
WORKDIR /build
RUN git clone --recursive https://github.com/leejet/stable-diffusion.cpp \
    && cd stable-diffusion.cpp \
    && mkdir build && cd build \
    && cmake .. -DGGML_OPENBLAS=ON \
    && cmake --build . --config Release

# Build llama.cpp for text generation
WORKDIR /build
RUN git clone https://github.com/ggml-org/llama.cpp \
    && cd llama.cpp \
    && cmake -B build -DGGML_BLAS=ON -DGGML_BLAS_VENDOR=OpenBLAS \
    && cmake --build build --config Release

# ==========================================
# Runtime Stage
# ==========================================
FROM alpine:latest

# OCI Image Annotations
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
RUN apk update && apk add --no-cache \
    ca-certificates \
    libstdc++ \
    libgomp \
    openblas \
    bash

# Copy our blog-gen binary
COPY cmd/blog-gen .

# Copy models and config
COPY cmd/models/ ./models/

# Copy compiled binaries from builder
RUN mkdir -p ./shbin
COPY --from=builder /build/llama.cpp/build/bin/llama-server ./shbin/server
COPY --from=builder /build/stable-diffusion.cpp/build/bin/sd ./shbin/txt2img
RUN chmod +x ./shbin/server ./shbin/txt2img

# Make blog-gen executable
RUN chmod +x /app/blog-gen

# Environment
ENV LOG_LEVEL=info \
    PATH="/app:${PATH}" \
    GIN_MODE=release

# Direct execution
ENTRYPOINT ["/app/blog-gen"]
