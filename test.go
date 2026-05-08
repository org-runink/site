package main

import (
	"html/template"
	"os"
)

func main() {
	t := template.Must(template.New("test.html").ParseFiles("test.html"))
	t.ExecuteTemplate(os.Stdout, "test.html", nil)
}
