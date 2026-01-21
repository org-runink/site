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

# Clone llama.cpp (we'll use a specific version for stability)
WORKDIR /build
RUN git clone https://github.com/ggerganov/llama.cpp.git \
    && cd llama.cpp \
    && git checkout b4355 

# Build llama-server with OpenBLAS support
WORKDIR /build/llama.cpp
RUN cmake -B build \
    -DCMAKE_BUILD_TYPE=Release \
    -DGGML_BLAS=ON \
    -DGGML_BLAS_VENDOR=OpenBLAS \
    -DBUILD_SHARED_LIBS=OFF \
    && cmake --build build --config Release --target llama-server -j$(nproc)

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

# Copy compiled llama-server from builder
RUN mkdir -p ./shbin
COPY --from=builder /build/llama.cpp/build/bin/llama-server ./shbin/server
RUN chmod +x ./shbin/server

# Make blog-gen executable
RUN chmod +x /app/blog-gen

# Environment
ENV LOG_LEVEL=info \
    PATH="/app:${PATH}" \
    GIN_MODE=release

# Direct execution
ENTRYPOINT ["/app/blog-gen"]
