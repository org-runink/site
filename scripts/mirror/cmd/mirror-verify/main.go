// Command mirror-verify is a post-sync structural check on all four print
// mirrors. Replaces scripts/mirror/mirror-verify.py.
//
// mirror-audit answers "do the words match". This answers "is it still a
// document" — the failure mode a paragraph-level word comparison cannot see,
// because a rebuild that duplicates a chapter or loses the cover still passes
// a one-directional substring test.
//
// Run from the site repo root. MIRROR_DIR overrides ../pitch-decks; the size
// comparison looks for a pre-sync copy in ~/.cache/rk-mirror-backup and says
// "no backup to compare" when there is none.
//
//	go run ./scripts/mirror/cmd/mirror-verify
//
// Exits 1 if any paper has a problem.
package main

import (
	"bufio"
	"fmt"
	"os"

	"github.com/org-runink/site/scripts/mirror"
)

func main() {
	w := bufio.NewWriter(os.Stdout)
	code, err := mirror.Verify(w, mirror.SiteDir, mirror.MirrorDir(),
		mirror.DefaultBackupDir(), mirror.VerifyNames)
	w.Flush()
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(2)
	}
	os.Exit(code)
}
