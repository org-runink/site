// Command rebuild-runink-pulse rewrites the runink-pulse print mirror from the
// runink-pulse site source. Replaces scripts/mirror/rebuild-runink-pulse.py.
//
// Run from the site repo root. MIRROR_DIR overrides ../pitch-decks.
//
//	go run ./scripts/mirror/cmd/rebuild-runink-pulse
//
// There is deliberately no --dry-run: the Python had none, and adding one
// would be a behaviour change riding along with a port whose only evidence of
// correctness is a byte-for-byte diff against that Python's output.
package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/org-runink/site/scripts/mirror"
)

func main() {
	site := filepath.Join(mirror.SiteDir, "runink-pulse.md")
	mir := filepath.Join(mirror.MirrorDir(), "runink-pulse-whitepaper.md")

	siteText := mustRead(site)
	oldText := mustRead(mir)

	out, st, err := mirror.BuildPulse(siteText, oldText)
	check(err)

	check(os.WriteFile(mir, []byte(out), 0o644))
	fmt.Print(st.Report(mir))
}

func mustRead(p string) string {
	b, err := os.ReadFile(p)
	check(err)
	return string(b)
}

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
