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

## The scripts

    python3 scripts/mirror/rebuild-<paper>.py     # rewrite one mirror from its source

Run from the repo root. `MIRROR_DIR` overrides `../pitch-decks`. Each script
keeps its paper's cover verbatim, regenerates the body from the site source, and
re-applies that paper's own print furniture. Every one refuses to write if a site
paragraph would be lost or the register disagrees with the body's chapters — so
a failure is safe, and each is idempotent: re-running reproduces its own output
byte for byte.

**No two papers share a convention**, which is why there is a script each rather
than one loop:

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

    ./check-whitepaper-mirrors.sh                 # shipped; one direction only
    python3 scripts/mirror/mirror-audit.py <paper>            # both directions
    python3 scripts/mirror/mirror-audit.py <paper> --missing  # site-only paragraphs
    python3 scripts/mirror/mirror-audit.py <paper> --orphan   # mirror-only paragraphs
    python3 scripts/mirror/mirror-audit.py <paper> --excluded # what was treated as furniture
    python3 scripts/mirror/mirror-verify.py                   # structural, all four

`mirror-audit.py` exists because the shipped check compares in one direction, so
a claim struck from the site and left in a mirror is invisible to it. Read
`--excluded` rather than trusting a zero: everything it hides is a place this
tool can be wrong in the direction that matters.

`mirror-verify.py` catches what a paragraph comparison cannot — a chapter
duplicated, a cover lost, a figure line altered, a file that collapsed.

## The blind spot none of them cover

**A mirror's cover block is outside every check here.** It is bespoke furniture
with no counterpart in the site source, so nothing compares it to anything. Both
covers that were wrong in September were wrong invisibly: FACE carried a deck the
site had rewritten, and CORE promised the reader a chapter that had been struck
from the paper it introduces. The FACE and Atlas scripts now re-derive the deck
region from the source's `deck:` front matter, which closes part of it. The rest
of a cover you have to read.
