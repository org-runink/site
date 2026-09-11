#!/usr/bin/env python3
# Paths are repo-relative with an overridable mirror directory, matching
# check-whitepaper-mirrors.sh. They were absolute when this script was written,
# and an absolute home directory in a committed script makes it runnable on
# exactly one machine — the workspace root CLAUDE.md forbids it outright.
# Run from the site repo root.
import os as _os
_SITE_DIR = 'content/blog/whitepapers'
_MIRROR_DIR = _os.environ.get('MIRROR_DIR', '../pitch-decks')
"""Rebuild the runink-face PRINT MIRROR from the SITE SOURCE body.

The site source is the single truth. The mirror = that body, plus print
furniture:

  * a bespoke cover block (preserved verbatim from the existing mirror:
    everything before the first page-break div),
  * a page-break div before every chapter,
  * chapter headings renumbered "## Page N — Title", N taken from the
    `register:` list in the site front matter,
  * a bespoke back-matter contact block (preserved verbatim).

Everything between those is copied byte-for-byte from the site body, which is
the only way stale prose is guaranteed gone.
"""
import re, sys, shutil, os

SITE   = _os.path.join(_SITE_DIR, 'runink-face.md')
MIRROR = _os.path.join(_MIRROR_DIR, 'runink-face-whitepaper.md')
DIV    = '<div style="page-break-after: always;"></div>'

def main():
    src = open(SITE, encoding='utf-8').read()
    fm_m = re.match(r'^---\n(.*?\n)---\n', src, re.S)
    if not fm_m:
        sys.exit('site source has no front matter')
    front, body = fm_m.group(1), src[fm_m.end():]

    # --- the register: page number per chapter title, in document order -----
    register = []
    for line in front.splitlines():
        m = re.match(r'\s*-\s*\{\s*page:\s*(\d+)\s*,'
                     r'\s*(?:page_end:\s*(\d+)\s*,)?'
                     r'\s*title:\s*"(.*?)"\s*\}\s*$', line)
        if m:
            register.append((int(m.group(1)),
                             int(m.group(2)) if m.group(2) else None,
                             m.group(3)))

    # --- split the site body on its chapter headings ------------------------
    chunks = re.split(r'(?m)^##(?!#)[ \t]+(.*)$', body)
    preamble = chunks[0]
    chapters = [(chunks[i], chunks[i + 1]) for i in range(1, len(chunks), 2)]

    if preamble.strip():
        sys.exit(f'unexpected prose before the first chapter: {preamble.strip()[:200]!r}')
    if len(chapters) != len(register):
        sys.exit(f'{len(chapters)} chapters vs {len(register)} register entries')
    for (title, _), (_, _, reg_title) in zip(chapters, register):
        if title.strip() != reg_title:
            sys.exit(f'heading {title.strip()!r} != register title {reg_title!r}')

    # --- furniture lifted verbatim from the existing mirror -----------------
    old = open(MIRROR, encoding='utf-8').read()
    cover = old[:old.index(DIV)].rstrip('\n')

    # The cover is bespoke print furniture and is kept verbatim -- except the
    # deck, which is a second copy of the site front matter's `deck:` and had
    # drifted from it. Neither checker can see the cover, so nothing else will
    # ever catch that; re-derive it here instead.
    deck_m = re.search(r'(?m)^deck:\s*\|\s*\n((?:(?:  .*)?\n)+?)(?=^\S)', front)
    if not deck_m:
        sys.exit('no `deck:` block in the site front matter')
    site_deck = '\n'.join(l[2:] for l in deck_m.group(1).rstrip('\n').split('\n'))

    cover_m = re.search(r'(?s)\n---\n\n(.*?)\n\n---\n', cover)
    if not cover_m:
        sys.exit('could not find the deck region of the mirror cover')
    if cover_m.group(1).split('\n\n')[0] != site_deck.split('\n\n')[0]:
        sys.exit('cover deck opening paragraph does not match the site deck; '
                 'refusing to guess which region of the cover is the deck')
    cover = cover[:cover_m.start(1)] + site_deck + cover[cover_m.end(1):]

    back_m = re.search(r'\n---\n\n### Contact\n.*\Z', old, re.S)
    if not back_m:
        sys.exit('could not find the back-matter contact block in the mirror')
    back = back_m.group(0)

    # --- assemble ----------------------------------------------------------
    out = [cover]
    for (title, content), (page, page_end, _) in zip(chapters, register):
        # The paper's own convention: a chapter that spans pages names the
        # span ("## Pages 21–23 —"), so the printed sequence has no gaps in
        # it for a reader to mistake for an error. En dash between the
        # numbers, em dash before the title.
        if page_end:
            heading = f'## Pages {page}–{page_end} — {title.strip()}'
        else:
            heading = f'## Page {page} — {title.strip()}'
        # `content` already opens with the newline that ends the heading
        # line, so it is appended directly -- no extra blank line.
        out.append('\n\n\n' + DIV + '\n\n' + heading
                   + content.rstrip('\n'))
    # `back` opens with a single newline; the chapter body was rstripped of
    # its own, so one more is needed or the closing rule would be read as a
    # setext heading on the last line of prose.
    new = ''.join(out) + '\n' + back

    # --- sanity, before anything is written --------------------------------
    sq = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())
    paras = [p.strip() for p in re.split(r'\n\s*\n', body) if sq(p)]
    stream = sq(new)
    lost = [p for p in paras if sq(p) not in stream]
    if lost:
        sys.exit(f'refusing to write: {len(lost)} site paragraph(s) would be lost')

    imgs_site = re.findall(r'(?m)^!\[.*$', body)
    imgs_new  = re.findall(r'(?m)^!\[.*$', new)
    if imgs_site != imgs_new:
        sys.exit('image lines differ between site body and rebuilt mirror')

    if '--dry-run' in sys.argv:
        print(f'would write {len(new)} bytes, {new.count(chr(10)) + 1} lines, '
              f'{len(chapters)} chapters, {new.count(DIV)} page breaks, '
              f'{len(imgs_new)} image line(s)')
        return

    shutil.copyfile(MIRROR, MIRROR + '.bak')
    with open(MIRROR, 'w', encoding='utf-8') as f:
        f.write(new)
    print(f'wrote {MIRROR}: {len(new)} bytes, {len(chapters)} chapters, '
          f'{new.count(DIV)} page breaks, {len(imgs_new)} image line(s)')

if __name__ == '__main__':
    main()
