#!/bin/bash
set -e

echo "🧹 Tidying Go modules..."
go mod tidy

# Build the Go application
echo "🔨 Building blogen (CGO_ENABLED=0 for Alpine compatibility)..."
CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o blogen main.go

echo "✅ Build successful!"

echo "🧪 Running unit tests..."
go test ./...

echo "🔍 Dry run check (schema loading)..."
./blogen --help

echo "🐳 Building Docker image with buildx..."
# Build from root context to include content/ and static/
# Use buildx with --network=host to bypass Docker networking issues
cd ..
docker buildx build \
  --network=host \
  --load \
  -t ghcr.io/org-runink/blogen:v1.1.0 \
  -f cmd/Dockerfile \
  .
cd cmd

echo "🚀 Testing Docker run (Dry run generation)..."
# We mount content/static to see output, and pass network host for local model server access if needed (though model is embedded/downloaded in image normally, but here we rely on what's in image)
# Note: This runs a real generation!
docker run --rm --network=host \
  -v "$(pwd)/../content":/app/content \
  -v "$(pwd)/../static":/app/static \
  -e TAVILY_API_KEY="${TAVILY_API_KEY}" \
  -e OPENBLAS_NUM_THREADS=8 \
  -e OPENBLAS_MAIN_FREE=1 \
  ghcr.io/org-runink/blogen:v1.1.0 \
  --content-dir /app/content/blog \
  --image-dir /app/static/images/blog \
  -t "Dockerized Blog Generation Test"

echo "🎉 All tests and Docker verification passed!"
