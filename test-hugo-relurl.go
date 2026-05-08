package main

import (
	"html/template"
	"os"
)

func relURL(s string) string {
	return "/" + s // simulate simple relURL
}

func main() {
	funcMap := template.FuncMap{
		"relURL": relURL,
	}
	t := template.Must(template.New("test").Funcs(funcMap).Parse(`<a href="{{ . | relURL }}">link</a>`))
	t.Execute(os.Stdout, "javascript:alert(1)")
}
