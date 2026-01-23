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
docker buildx build \
  --network=host \
  --load \
  -t ghcr.io/org-runink/blogen:v1.1.4 \
  -f Dockerfile \
  .

# echo "🚀 Testing Docker run (Dry run generation)..."
# docker run --rm \
#   -v "$(pwd)/../content:/app/content" \
#   -v "$(pwd)/../static/images/blog:/app/static/images/blog" \
#   --network host \
#   -e TAVILY_API_KEY=$TAVILY_API_KEY \
#   -e BLOG_DEBUG=true \
#   ghcr.io/org-runink/blogen:v1.1.4 \
#   --topic "Dockerized Blog Generation Test" \
#   --audience "DevOps Engineers" \
#   --value-driver "Reliability" \
#   --context "Focus on how Docker ensures consistent environments for blog generation pipelines."

echo "🎉 Build successful!"

echo "📤 Pushing to GHCR..."
docker tag ghcr.io/org-runink/blogen:v1.1.4 ghcr.io/org-runink/blogen:latest
docker push ghcr.io/org-runink/blogen:latest
echo "✅ Done! Package published."
