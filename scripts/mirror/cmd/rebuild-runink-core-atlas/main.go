// Command rebuild-runink-core-atlas rewrites the runink-core-atlas print
// mirror from the site source. Replaces
// scripts/mirror/rebuild-runink-core-atlas.py.
//
// Run from the site repo root. MIRROR_DIR overrides ../pitch-decks.
//
//	go run ./scripts/mirror/cmd/rebuild-runink-core-atlas            rebuild
//	go run ./scripts/mirror/cmd/rebuild-runink-core-atlas --dry-run  print the whole file to stdout
//
// The cover furniture is read from a copy of the mirror rather than from the
// one being written, so the command can be re-run against its own output. It
// defaults to the live mirror: every anchor is content-based, so a synced file
// yields the same cover a pre-sync one does. Point ATLAS_COVER_SRC at a
// pre-sync copy if the live cover has been damaged.
package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/org-runink/site/scripts/mirror"
)

func main() {
	site := filepath.Join(mirror.SiteDir, "runink-core-atlas.md")
	mir := filepath.Join(mirror.MirrorDir(), "runink-core-atlas-whitepaper.md")
	orig := mir
	// LookupEnv, not Getenv: os.environ.get() does not fall back for an
	// explicitly empty value, and a caller who exports one is asking a
	// question the fallback would silently answer wrong.
	if v, ok := os.LookupEnv("ATLAS_COVER_SRC"); ok {
		orig = v
	}

	out, pages, chapters, err := mirror.BuildAtlas(mustRead(site), mustRead(orig))
	check(err)

	if hasFlag("--dry-run") {
		os.Stdout.WriteString(out)
		return
	}
	check(os.WriteFile(mir, []byte(out), 0o644))
	fmt.Print(mirror.AtlasReport(mir, pages, chapters))
}

func mustRead(p string) string {
	b, err := os.ReadFile(p)
	check(err)
	return string(b)
}

func hasFlag(f string) bool {
	for _, a := range os.Args[1:] {
		if a == f {
			return true
		}
	}
	return false
}

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
