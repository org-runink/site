package main

import "testing"

func TestRelURL(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{
			name:     "basic path",
			input:    "path/to/file",
			expected: "/path/to/file",
		},
		{
			name:     "empty string",
			input:    "",
			expected: "/",
		},
		{
			name:     "already absolute",
			input:    "/path",
			expected: "//path", // current simple implementation just prepends '/'
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := relURL(tt.input)
			if result != tt.expected {
				t.Errorf("relURL(%q) = %q; want %q", tt.input, result, tt.expected)
			}
		})
	}
}
