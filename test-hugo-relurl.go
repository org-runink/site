package main

import (
	"html/template"
	"os"
)

func relURL(s string) string {
	return "/" + s // simulate simple relURL
}

func main() {
    _ = template.HTMLEscapeString("")
    _ = os.Args
}
