// Its own module rather than one at the repo root: a go.mod beside hugo.toml
// would make the whole Hugo tree look like a Go module to tooling, and the
// three root-level helpers (serve.go, linkcheck.go, readability.go) are
// deliberately `//go:build ignore` single-file `go run` scripts that want no
// module at all.
//
// Stdlib only. This is a marketing site; the mirror tooling is not a place to
// grow a dependency tree.
module github.com/org-runink/site/scripts/mirror

go 1.24
