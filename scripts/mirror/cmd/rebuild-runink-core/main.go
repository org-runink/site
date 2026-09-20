// Command rebuild-runink-core rewrites the runink-core print mirror from the
// runink-core site source. Replaces scripts/mirror/rebuild-runink-core.py.
//
// Run from the site repo root. MIRROR_DIR overrides ../pitch-decks.
//
//	go run ./scripts/mirror/cmd/rebuild-runink-core            rebuild
//	go run ./scripts/mirror/cmd/rebuild-runink-core --dry-run  structural summary only
//
// Paths are repo-relative with an overridable mirror directory, matching
// check-whitepaper-mirrors.sh. They were absolute when the Python was written,
// and an absolute home directory in a committed script makes it runnable on
// exactly one machine — the workspace root CLAUDE.md forbids it outright.
package main

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"

	"github.com/org-runink/site/scripts/mirror"
)

func main() {
	site := filepath.Join(mirror.SiteDir, "runink-core.md")
	mir := filepath.Join(mirror.MirrorDir(), "runink-core-whitepaper.md")

	siteText := mustRead(site)
	oldText := mustRead(mir)

	if hasFlag("--dry-run") {
		w := bufio.NewWriter(os.Stdout)
		err := mirror.CoreDryRun(w, siteText, oldText)
		w.Flush()
		check(err)
		return
	}

	out, st, err := mirror.BuildCore(siteText, oldText)
	check(err)

	// Written to a sibling temp file and renamed over the target, so an
	// interrupted run cannot leave a half-written handout behind. This is the
	// only one of the four that writes atomically; FACE leaves a .bak instead,
	// PULSE and ATLAS do neither.
	tmp := mir + ".new"
	check(os.WriteFile(tmp, []byte(out), 0o644))
	check(os.Rename(tmp, mir))
	fmt.Print(st.Report(mir))
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
