package main

import (
	"html/template"
	"os"
)

func main() {
	t := template.Must(template.New("test").Parse(`<a href="{{ urlquery "javascript:alert(1)" }}">link</a>`))
	t.Execute(os.Stdout, nil)
}
