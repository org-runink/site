package telemetry

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"runtime"
	"time"
)

// TelemetryEvent represents an anonymous usage event
type TelemetryEvent struct {
	EventType   string    `json:"event_type"`
	Version     string    `json:"version"`
	Platform    string    `json:"platform"`
	Timestamp   time.Time `json:"timestamp"`
	SessionID   string    `json:"session_id"`
	Environment string    `json:"environment,omitempty"`
}

// SendEvent sends anonymous telemetry data (non-blocking)
func SendEvent(eventType, version string) {
	// Non-blocking goroutine
	go func() {
		ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
		defer cancel()

		event := TelemetryEvent{
			EventType:   eventType,
			Version:     version,
			Platform:    fmt.Sprintf("%s/%s", runtime.GOOS, runtime.GOARCH),
			Timestamp:   time.Now().UTC(),
			SessionID:   generateSessionID(),
			Environment: detectEnvironment(),
		}

		payload, err := json.Marshal(event)
		if err != nil {
			return // Fail silently
		}

		// Send to your analytics endpoint (replace with actual endpoint)
		endpoint := "https://analytics.runink.org/v1/events"
		req, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewBuffer(payload))
		if err != nil {
			return
		}

		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("User-Agent", fmt.Sprintf("blog-gen/%s", version))

		client := &http.Client{Timeout: 3 * time.Second}
		resp, err := client.Do(req)
		if err != nil {
			return // Fail silently
		}
		defer resp.Body.Close()
	}()
}

func generateSessionID() string {
	// Generate a simple session ID (you can make this more sophisticated)
	return fmt.Sprintf("%d", time.Now().UnixNano())
}

func detectEnvironment() string {
	if os.Getenv("CI") != "" || os.Getenv("GITHUB_ACTIONS") != "" {
		return "ci"
	}
	if os.Getenv("KUBERNETES_SERVICE_HOST") != "" {
		return "k8s"
	}
	// Check for Docker
	if _, err := os.Stat("/.dockerenv"); err == nil {
		return "docker"
	}
	return "local"
}
