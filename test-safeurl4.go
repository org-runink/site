package main

import (
	"html/template"
	"os"
)

func main() {
	t := template.Must(template.New("test").Parse(`<a href="{{ html . }}">link</a>`))
	t.Execute(os.Stdout, "javascript:alert(1)")
}
