#!/usr/bin/env python3
"""Bidirectional audit of one whitepaper against its print mirror.

The shipped check-whitepaper-mirrors.sh compares in ONE direction only — every
site paragraph must appear in the mirror — and says so in its own header. That
catches a chapter added to the site and not carried over. It does NOT catch the
opposite and more dangerous case: a claim struck from the site that is still
sitting in the document a salesperson hands to a prospect.

This reports both. Run from the site repo root.

  python3 mirror-audit.py runink-face            both directions, summary
  python3 mirror-audit.py runink-face --missing  full text of site-only paragraphs
  python3 mirror-audit.py runink-face --orphan   full text of mirror-only paragraphs
"""
import re, sys, os

SITE = 'content/blog/whitepapers'
MIRROR = os.environ.get('MIRROR_DIR', '../pitch-decks')

def squash(s):
    return re.sub(r'[^a-z0-9]', '', s.lower())

def paragraphs(text):
    return [b.strip() for b in re.split(r'\n\s*\n', text) if b.strip()]

def site_body(path):
    s = open(path, encoding='utf-8').read()
    m = re.match(r'^---\n.*?\n---\n', s, re.S)
    return s[m.end():] if m else s

FURNITURE = re.compile(
    r'^(?:'
    r'<div style="page-break'          # the page break div
    r'|---+\s*$'                        # horizontal rules
    r'|\*Pages? \d'                     # *Page 1 — Cover* / *Pages 17–18 — ...*
    r'|#{1,3} Pages? \d'                 # ## Page 7 — Title / ## Pages 21\u201323 — Title\n    #   Pages? matters: runink-face titles a chapter that spans pages with the
    #   plural, which is the paper's own convention and is more accurate than
    #   naming only the first page. The regex used to demand a digit straight
    #   after "Page", so every ranged heading was reported as stale prose and
    #   this tool was quietly pushing the document towards the singular form.
    #   A checker that makes the thing it checks worse is worse than no checker.
    r'|\!\[]'                           # bare images
    r'|\*[^*\n]*page \d+[^*\n]*\*\s*$'  # *Runink CORE — page 7 of 21*
    r')', re.I)

def is_furniture(p):
    return bool(FURNITURE.match(p.strip()))

def main():
    name = sys.argv[1]
    mode = sys.argv[2] if len(sys.argv) > 2 else ''
    src = site_body(f'{SITE}/{name}.md')
    mir = open(f'{MIRROR}/{name}-whitepaper.md', encoding='utf-8').read()

    sp = [p for p in paragraphs(src) if squash(p)]
    mp = [p for p in paragraphs(mir) if squash(p)]
    sstream, mstream = squash(src), squash(mir)

    # The bespoke COVER BLOCK is everything before the mirror's first chapter —
    # the heading whose words are the site body's first "## " heading. Keying on
    # the words rather than on a literal "## Page " makes this work for a mirror
    # that numbers its chapters ("## Page 2 — Executive summary", as runink-face
    # does) and for one that does not ("## Executive summary", as runink-core
    # does). The old "## Page " test silently produced an EMPTY cover for the
    # three mirrors that title their chapters plainly, so their covers were
    # reported as stale prose.
    #
    #   Keying on the FIRST site chapter alone was still wrong for one mirror:
    #   runink-core-atlas folds its whole first chapter into the cover as bold
    #   running text, so that chapter has no heading in the mirror at all and
    #   the search fell through to 0 — an empty cover again, and the tool then
    #   reported the cover as six paragraphs of stale prose. Its only fix would
    #   have been to unfold the chapter, which is a real, documented difference
    #   the shipped checker names in its own header. So: the cover ends at the
    #   first mirror heading that carries ANY site chapter's words, whichever
    #   chapter that turns out to be.
    chapter_keys = [squash(p) for p in sp if p.startswith('## ')]
    cover_end = next((i for i, p in enumerate(mp)
                      if p.startswith('#')
                      and any(k in squash(p) for k in chapter_keys)), 0)
    cover_squash = squash('\n'.join(mp[:cover_end]))

    # Symmetrically, the BACK MATTER is the colophon a handout closes on: a
    # single wholly-italic line sitting after the last mirror paragraph that is
    # still site prose. Deliberately narrow — anything else after that point is
    # real prose that left the site, and is still reported.
    body_idx = [i for i, p in enumerate(mp) if squash(p) in sstream]
    back_start = (body_idx[-1] + 1) if body_idx else len(mp)

    def is_colophon(i, p):
        p = p.strip()
        return (i >= back_start and '\n' not in p
                and re.fullmatch(r'\*[^*]+\*', p) is not None)

    missing = [p for p in sp if squash(p) not in mstream]
    orphan  = [p for i, p in enumerate(mp)
               if squash(p) not in sstream
               and not is_furniture(p)
               and not i < cover_end
               and squash(p) not in cover_squash   # a cover line repeated as back matter
               and not is_colophon(i, p)]

    print(f"{name}: site {len(sp)} paras, mirror {len(mp)} paras")
    print(f"  site -> mirror MISSING : {len(missing)}  (check-whitepaper-mirrors.sh fails on these)")
    print(f"  mirror -> site ORPHAN  : {len(orphan)}  (stale prose still in the handout, excl. cover + furniture)")

    if mode == '--missing':
        print(f"\n--- {len(missing)} paragraph(s) in the SITE but not the MIRROR ---")
        for i, p in enumerate(missing, 1):
            print(f"\n[{i}] {p}")
    # --excluded exists because every exclusion above is a place this tool can
    # be wrong in the direction that matters: silently calling stale prose
    # "furniture" and reporting a clean zero. The FACE back matter is the worked
    # example — "### Contact" survives the orphan filter only because the site
    # body happens to contain the word "contacted", and "paes@runink.org" only
    # because the paper prints the address somewhere. That is coincidence, not
    # correctness, and a zero resting on it is worth less than it looks.
    #
    # So: print what was excluded and why, and read it. A short, obviously-
    # furniture list is the evidence the zero is real.
    if mode == '--excluded':
        print(f"\n--- cover block: mirror paragraphs 0..{cover_end} ---")
        for p in mp[:cover_end]:
            print(f"  COVER    {re.sub(r'[[:space:]]+', ' ', p)[:100]}")
        for i, p in enumerate(mp):
            if squash(p) in sstream:
                continue                      # real site prose, not excluded
            if i < cover_end:
                continue                      # already shown
            why = ('FURNITURE' if is_furniture(p)
                   else 'COLOPHON' if is_colophon(i, p)
                   else 'COVER-DUP' if squash(p) in cover_squash
                   else None)
            if why:
                print(f"  {why:<9} {' '.join(p.split())[:100]}")

    if mode == '--orphan':
        print(f"\n--- {len(orphan)} paragraph(s) in the MIRROR but not the SITE ---")
        for i, p in enumerate(orphan, 1):
            print(f"\n[{i}] {p}")

    return 1 if (missing or orphan) else 0

if __name__ == '__main__':
    sys.exit(main())
