#!/bin/sh
# check-whitepaper-mirrors.sh — prove the print mirrors still say what the site says.
#
# WHAT IS BEING PROTECTED
# -----------------------
# Each of the four whitepapers exists twice:
#
#   content/blog/whitepapers/NAME.md          the site source (front matter + body)
#   ../pitch-decks/runink-NAME-whitepaper.md  the print mirror
#
# The mirror is NOT a second draft. It is the same body with print furniture
# wrapped round it: a cover block at the top, and page markers between the
# chapters. There is one truth and two renderings of it, and this script is
# what makes that a fact rather than an intention.
#
# WHY IT EXISTS NOW
# -----------------
# The figures in these papers are carried as ordinary markdown images —
#
#     ![long text alternative](figures/whitepapers/NAME.svg "Short caption")
#
# — and deliberately NOT as Hugo shortcodes. A shortcode renders on the site
# and lands in the mirror as its own literal source, which would have opened a
# permanent difference between the two copies for every figure added. Markdown
# is markdown: the line goes into the mirror unchanged, it still says something
# useful read as plain text, and a converter pointed at the mirror draws the
# same picture.
#
# For that last part, the relative path has to resolve from pitch-decks too.
# There is one artwork directory, not two:
#
#     ln -s ../site/assets/figures ../pitch-decks/figures
#
# Reported if absent; not a failure. The site renders the figures either way.
#
# WHAT IT COMPARES, AND WHY NOT A PLAIN DIFF
# ------------------------------------------
# A line-by-line diff was the first thing tried and it is the wrong tool, for
# two reasons that are both real and both pre-existing:
#
#   - runink-face's mirror titles every chapter "## Page 9 — Attract: ..."
#     where the site source says "## Attract: ...".
#   - runink-core-atlas's mirror folds its whole first chapter into the cover
#     block, as bold running text with different line wrapping and a full stop
#     the heading does not have.
#
# Neither is drift. Both would make a line diff permanently red, and a check
# that is red on a good day is a check nobody reads.
#
# So the comparison is per PARAGRAPH, and each paragraph is reduced to its
# lowercase letters and digits before being looked for anywhere in the mirror.
# Line wrapping, heading marks, bold, page numbering and punctuation all fall
# away; the words do not. The invariant is:
#
#     every paragraph of the site body appears, in words, in the mirror.
#
# That fails on an edit made to one copy and not the other, on a chapter added
# to the site and not carried over, and on a panel replaced here and left
# there — which is the whole class of rot worth catching.
#
# Known limits, stated rather than hidden: it compares in one direction, so
# text that exists ONLY in the mirror is reported as a furniture-line count
# rather than as an error, and a change of punctuation alone will not fail it.
#
# Run from the site repo root. Exit 0 when every mirror is faithful.

set -eu

SITE_DIR="content/blog/whitepapers"
MIRROR_DIR="${MIRROR_DIR:-../pitch-decks}"

if [ ! -d "$SITE_DIR" ]; then
  echo "error: run this from the site repo root (no $SITE_DIR here)" >&2
  exit 2
fi
if [ ! -d "$MIRROR_DIR" ]; then
  echo "error: no mirror directory at $MIRROR_DIR (set MIRROR_DIR to override)" >&2
  exit 2
fi

status=0

for name in runink-core-atlas runink-core runink-face runink-pulse; do
  src="$SITE_DIR/$name.md"
  mirror="$MIRROR_DIR/$name-whitepaper.md"

  if [ ! -f "$src" ];    then echo "MISSING $src" >&2;    status=1; continue; fi
  if [ ! -f "$mirror" ]; then echo "MISSING $mirror" >&2; status=1; continue; fi

  if ! awk -v name="$name" '
    function squash(s) {
      s = tolower(s)
      gsub(/[^a-z0-9]/, "", s)
      return s
    }
    # Pass one: the mirror, as one unbroken stream of its letters and digits.
    FNR == NR {
      mirror_stream = mirror_stream squash($0)
      mirror_lines++
      next
    }
    # Pass two: the site source. Skip the YAML front matter, then accumulate
    # paragraphs — a paragraph being a run of non-blank lines — and look each
    # one up in that stream.
    {
      if (!in_body) {
        if ($0 == "---") { dashes++; if (dashes == 2) in_body = 1 }
        next
      }
      body_lines++
      if ($0 ~ /^[ \t]*$/) { check(); next }
      para = para " " $0
      if (para_first == "") para_first = $0
    }
    END {
      check()
      if (missing > 0) {
        printf "DRIFT  %s — %d paragraph(s) of the site source are not in the mirror\n", name, missing
        exit 1
      }
      printf "OK     %s — all %d paragraphs present; mirror adds %d lines of print furniture\n", \
             name, checked, mirror_lines - body_lines
    }
    function check(   key) {
      if (para == "") return
      key = squash(para)
      if (key != "") {
        checked++
        if (index(mirror_stream, key) == 0) {
          missing++
          if (missing <= 5) printf "         %.100s\n", para_first
        }
      }
      para = ""; para_first = ""
    }
  ' "$mirror" "$src"; then
    echo "         (site source: $src)"
    echo "         (mirror:      $mirror)"
    status=1
  fi
done

if [ ! -e "$MIRROR_DIR/figures" ]; then
  echo "note   $MIRROR_DIR/figures is not linked, so the relative figure paths in"
  echo "       the mirrors will not resolve for a local markdown converter:"
  echo "         ln -s ../site/assets/figures $MIRROR_DIR/figures"
fi

exit $status
