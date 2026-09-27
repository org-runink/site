// Command mirror-audit is a bidirectional audit of one whitepaper against its
// print mirror. Replaces scripts/mirror/mirror-audit.py.
//
// The shipped check-whitepaper-mirrors.sh compares in ONE direction only —
// every site paragraph must appear in the mirror. That catches a chapter added
// to the site and not carried over. It does NOT catch the opposite and more
// dangerous case: a claim struck from the site that is still sitting in the
// document a salesperson hands to a prospect. This reports both.
//
// Run from the site repo root. MIRROR_DIR overrides ../pitch-decks.
//
//	go run ./scripts/mirror/cmd/mirror-audit runink-face             both directions, summary
//	go run ./scripts/mirror/cmd/mirror-audit runink-face --missing   site-only paragraphs, in full
//	go run ./scripts/mirror/cmd/mirror-audit runink-face --orphan    mirror-only paragraphs, in full
//	go run ./scripts/mirror/cmd/mirror-audit runink-face --excluded  what was treated as furniture
//
// Exits 1 when anything is missing or orphaned.
package main

import (
	"bufio"
	"fmt"
	"os"

	"github.com/org-runink/site/scripts/mirror"
)

func main() {
	if len(os.Args) < 2 {
		// The Python raised IndexError here and printed a traceback. A usage
		// line says the same thing without pretending it was a crash.
		fmt.Fprintln(os.Stderr, "usage: mirror-audit <paper> [--missing|--orphan|--excluded]")
		os.Exit(2)
	}
	mode := mirror.AuditSummary
	if len(os.Args) > 2 {
		mode = mirror.AuditMode(os.Args[2])
	}
	w := bufio.NewWriter(os.Stdout)
	code, err := mirror.Audit(w, mirror.SiteDir, mirror.MirrorDir(), os.Args[1], mode)
	w.Flush()
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(2)
	}
	os.Exit(code)
}
