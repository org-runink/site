# ==========================================
# Build Stage - Compile binaries on Ubuntu
# ==========================================
FROM ubuntu:latest AS builder

# Prevent interactive prompts during build
ENV DEBIAN_FRONTEND=noninteractive

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    libopenblas-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Build stable-diffusion.cpp for image generation
WORKDIR /opt
RUN git clone --recursive https://github.com/leejet/stable-diffusion.cpp \
    && cd stable-diffusion.cpp \
    && mkdir build && cd build \
    && cmake .. -DGGML_OPENBLAS=ON \
    && cmake --build . --config Release \
    && mkdir -p /opt/binaries \
    && cp /opt/stable-diffusion.cpp/build/bin/sd-cli /opt/binaries/txt2img \
    && cd /opt \
    && rm -rf stable-diffusion.cpp

# Build llama.cpp for text generation
WORKDIR /opt
RUN git clone https://github.com/ggml-org/llama.cpp \
    && cd llama.cpp \
    && cmake -B build -DGGML_BLAS=ON -DGGML_BLAS_VENDOR=OpenBLAS -DBUILD_SHARED_LIBS=ON \
    && cmake --build build --config Release \
    && mkdir -p /opt/binaries \
    && cp build/bin/llama-server /opt/binaries/server \
    && find build -name "*.so*" ! -type d -exec cp -P {} /opt/binaries/ \; \
    && echo "Copied shared libraries:" && ls -lh /opt/binaries/*.so* \
    && cd /opt \
    && rm -rf llama.cpp

# ==========================================
# Runtime Stage
# ==========================================
FROM ubuntu:latest

# OCI Image Annotations
LABEL org.opencontainers.image.title="Runink Blog Generator" \
    org.opencontainers.image.description="AI-powered blog generation tool" \
    org.opencontainers.image.version="1.0.0" \
    org.opencontainers.image.vendor="Runink" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.source="https://github.com/runink/site" \
    org.opencontainers.image.documentation="https://github.com/runink/site/blob/main/cmd/DOCKER.md" \
    org.opencontainers.image.authors="Runink Team <contact@runink.org>"

WORKDIR /app

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    ca-certificates \
    libopenblas0 \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

# Copy our blogen binary
COPY cmd/blogen .

# Copy models and config
COPY cmd/models/ ./models/

# Copy compiled binaries and shared libraries from builder
RUN mkdir -p ./shbin
COPY --from=builder /opt/binaries/server ./shbin/server
COPY --from=builder /opt/binaries/txt2img ./shbin/txt2img
COPY --from=builder /opt/binaries/*.so* ./shbin/
RUN chmod +x ./shbin/server ./shbin/txt2img

# Make blogen executable
RUN chmod +x /app/blogen

# Environment - set LD_LIBRARY_PATH without referencing undefined variable
ENV LOG_LEVEL=info \
    PATH="/app:${PATH}" \
    LD_LIBRARY_PATH="/app/shbin" \
    GIN_MODE=release \
    BLOG_DEBUG=1

# Direct execution
ENTRYPOINT ["/app/blogen"]
