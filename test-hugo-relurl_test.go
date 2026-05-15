package main

import "testing"

func TestRelURL(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{"empty string", "", "/"},
		{"simple string", "foo", "/foo"},
		{"nested path", "foo/bar", "/foo/bar"},
		{"path with leading slash", "/foo", "//foo"}, // based on the current implementation
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := relURL(tt.input)
			if result != tt.expected {
				t.Errorf("relURL(%q) = %q, want %q", tt.input, result, tt.expected)
			}
		})
	}
}
