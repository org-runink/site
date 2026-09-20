# Mirror tooling

Each whitepaper exists twice: the site source under `content/blog/whitepapers/`,
and a print mirror in `../pitch-decks/` — the document a salesperson hands to a
prospect. The site source is the truth. The mirror is the same body with print
furniture wrapped round it.

On 11 September 2026 the four mirrors had drifted from their sources by 206
paragraphs in one direction and 376 in the other, because the source paragraphs
had been rewritten by an editorial claims pass and the mirrors had not. Struck
claims were still being handed to prospects: the CORE and Atlas mirror alone
still carried four entire sector chapters — Insurance, Banking, Telecoms,
Marketing — that had been cut from the site as unfounded.

## Why drift is the normal state here

`../pitch-decks/` is a sibling directory, not part of this repository. So
`check-whitepaper-mirrors.sh` cannot run in CI — a CI checkout has nothing to
compare against — and it is the one check in CONTENT.md's end-to-end block that
does not. It only runs when somebody remembers.

**If you change a paper under `content/blog/whitepapers/`, re-run its rebuild
script and then the checks below.**

## Building them

These are Go, in their own module — a `go.mod` at the repo root would make the
whole Hugo tree look like a Go module to tooling, and the root-level helpers
(`serve.go`, `linkcheck.go`, `readability.go`) are deliberately `//go:build
ignore` single-file `go run` scripts with no module at all. Stdlib only.

Because the module is under `scripts/mirror`, `go run ./scripts/mirror/cmd/...`
from the repo root does not work, and `go run -C scripts/mirror` changes the
program's working directory too — which breaks the repo-relative paths every one
of these expects. So build once, then run the binaries **from the repo root**:

    go build -C scripts/mirror -o ~/.cache/rk-mirror/ ./cmd/...
    ~/.cache/rk-mirror/rebuild-runink-core
    ~/.cache/rk-mirror/mirror-audit runink-face --excluded

`~/.cache`, not the repo and not `/tmp`. Tests: `go test ./...` from
`scripts/mirror`.

## The scripts

    ~/.cache/rk-mirror/rebuild-<paper>        # rewrite one mirror from its source
    ~/.cache/rk-mirror/rebuild-<paper> --dry-run   # core, face, core-atlas only

Run from the repo root. `MIRROR_DIR` overrides `../pitch-decks`. Each keeps its
paper's cover verbatim, regenerates the body from the site source, and re-applies
that paper's own print furniture. Every one refuses to write if a site paragraph
would be lost or the register disagrees with the body's chapters — so a failure
is safe, and each is idempotent: re-running reproduces its own output byte for
byte. `go test` pins that idempotence, on fixtures always and on the real
mirrors when `../pitch-decks` is present.

**No two papers share a convention**, which is why there is a program each
rather than one loop. That survived the port to Go deliberately: the four differ
in how the cover is found (first `## `, first page-break div, a literal
`*Page 1 — Cover*` marker, a fixed sixteen-line slice), how the colophon is
found, whether there is validation before writing, whether the file ends in a
newline, and whether a chapter is folded into the cover. A single rebuilder with
a per-paper config struct would have needed a branch at every one of those.

| paper | furniture |
| --- | --- |
| `runink-face` | `## Page N — Title`, `## Pages N–M — Title` for spans, a page-break div per chapter, a Contact colophon |
| `runink-core` | plain `## Title`, `*Runink CORE — page N of 21*` under each chapter, closing colophon |
| `runink-pulse` | plain `## Title`, a `## Contents` block the site does not have, `*Page N — Title*` markers, no trailing newline |
| `runink-core-atlas` | plain `## Title`, and **chapter one is folded into the cover** as bold running text with no heading |

Page numbers come from each source's `register:` front matter, not from hand
maintenance. That is load-bearing rather than cosmetic: the prose cross-
references its own pagination ("the per-seat price is published on page 17"), and
before this the CORE mirror was numbered to 22 pages against a 21-page register,
so every one of those references pointed at the wrong sheet.

## The checks

    ./check-whitepaper-mirrors.sh                        # shipped; one direction only
    ~/.cache/rk-mirror/mirror-audit <paper>              # both directions
    ~/.cache/rk-mirror/mirror-audit <paper> --missing    # site-only paragraphs
    ~/.cache/rk-mirror/mirror-audit <paper> --orphan     # mirror-only paragraphs
    ~/.cache/rk-mirror/mirror-audit <paper> --excluded   # what was treated as furniture
    ~/.cache/rk-mirror/mirror-verify                     # structural, all four

`mirror-audit` exists because the shipped check compares in one direction, so
a claim struck from the site and left in a mirror is invisible to it. Read
`--excluded` rather than trusting a zero: everything it hides is a place this
tool can be wrong in the direction that matters.

`mirror-verify` catches what a paragraph comparison cannot — a chapter
duplicated, a cover lost, a figure line altered, a file that collapsed.

`--excluded` has a defect of its own, carried over from the Python and named in
`audit.go`: its COVER lines were meant to be folded onto one line before being
cut to 100 characters, and are not, because the Python's `[[:space:]]` is not a
character class Python's `re` understands. They print raw, newlines and all.
Fixing it is a real improvement and a separate change — it alters the output for
every paper, so it wants its own commit and its own reading.

## The blind spot none of them cover

**A mirror's cover block is outside every check here.** It is bespoke furniture
with no counterpart in the site source, so nothing compares it to anything. Both
covers that were wrong in September were wrong invisibly: FACE carried a deck the
site had rewritten, and CORE promised the reader a chapter that had been struck
from the paper it introduces. The FACE and Atlas scripts now re-derive the deck
region from the source's `deck:` front matter, which closes part of it. The rest
of a cover you have to read.
