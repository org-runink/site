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
  -t ghcr.io/org-runink/blogen:v1.1.4 \
  -f Dockerfile \
  .
cd cmd

echo "🚀 Testing Docker run (Dry run generation)..."
# We mount content/static to see output, and pass network host for local model server access if needed (though model is embedded/downloaded in image normally, but here we rely on what's in image)
# Note: This runs a real generation!
docker run --rm --netwdocker run --rm \
  -v "$(pwd)/../content:/app/content" \
  -v "$(pwd)/../static/images/blog:/app/static/images/blog" \
  --network host \
  -e TAVILY_API_KEY=$TAVILY_API_KEY \
  -e BLOG_DEBUG=true \
  ghcr.io/org-runink/blogen:v1.1.4 \
  --topic "Dockerized Blog Generation Test" \
  --audience "DevOps Engineers" \
  --value-driver "Reliability" \
  --context "Focus on how Docker ensures consistent environments for blog generation pipelines." \
  --audience "Developers and DevOps Engineers" \
  --value-driver "Improved Reliability" \
  --context "Focus on practical examples."

echo "🎉 All tests and Docker verification passed!"
