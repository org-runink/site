// Command rebuild-runink-face rewrites the runink-face print mirror from the
// runink-face site source. Replaces scripts/mirror/rebuild-runink-face.py.
//
// Run from the site repo root. MIRROR_DIR overrides ../pitch-decks.
//
//	go run ./scripts/mirror/cmd/rebuild-runink-face            rebuild (leaves a .bak)
//	go run ./scripts/mirror/cmd/rebuild-runink-face --dry-run  report what would be written
//
// It refuses to write if a site paragraph would be lost or if the image lines
// differ — so a failure here is safe.
package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/org-runink/site/scripts/mirror"
)

func main() {
	site := filepath.Join(mirror.SiteDir, "runink-face.md")
	mir := filepath.Join(mirror.MirrorDir(), "runink-face-whitepaper.md")

	siteText := mustRead(site)
	oldText := mustRead(mir)

	out, st, err := mirror.BuildFace(siteText, oldText)
	check(err)

	if hasFlag("--dry-run") {
		// "bytes" here is Python's len(new), which counted code points. See
		// the note on FaceStats.Chars: the number is reproduced, mislabel and
		// all, because the port's acceptance test was a diff against it.
		fmt.Print(st.DryRunReport())
		return
	}

	check(copyFile(mir, mir+".bak"))
	check(os.WriteFile(mir, []byte(out), 0o644))
	fmt.Print(st.Report(mir))
}

func copyFile(src, dst string) error {
	b, err := os.ReadFile(src)
	if err != nil {
		return err
	}
	return os.WriteFile(dst, b, 0o644)
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
