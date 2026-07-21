# PULSE sovereign blog generator — a static, distroless Go binary (no CGO, stdlib
# only), run as an in-cluster k8s Job. Talks only to the in-cluster inference Service;
# no external AI, no Tavily, no external blogen container.
FROM golang:1.26 AS build
WORKDIR /src
COPY go.mod ./
COPY main.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /blogen .

FROM gcr.io/distroless/static:nonroot
COPY --from=build /blogen /blogen
USER 65532:65532
ENTRYPOINT ["/blogen"]
