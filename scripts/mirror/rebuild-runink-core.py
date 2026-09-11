#!/usr/bin/env python3
# Paths are repo-relative with an overridable mirror directory, matching
# check-whitepaper-mirrors.sh. They were absolute when this script was written,
# and an absolute home directory in a committed script makes it runnable on
# exactly one machine — the workspace root CLAUDE.md forbids it outright.
# Run from the site repo root.
import os as _os
_SITE_DIR = 'content/blog/whitepapers'
_MIRROR_DIR = _os.environ.get('MIRROR_DIR', '../pitch-decks')
"""Rebuild the runink-core PRINT MIRROR from the runink-core SITE SOURCE.

The mirror is the site body with print furniture wrapped round it. This script
rebuilds it from scratch rather than patching, which is the only way stale prose
struck from the site actually leaves the handout.

Furniture convention found in pitch-decks/runink-core-whitepaper.md (verified,
not assumed):

  * a cover block: everything before the first "## " chapter heading
  * chapter headings are PLAIN "## Title", identical to the site source
    (no "## Page N — Title" as in the FACE mirror)
  * NO <div style="page-break"> divs (the FACE mirror has 28; this one has 0)
  * a page footer after every chapter:   *Runink CORE — page N of T*
    followed by a "---" rule, then the next chapter
  * a closing colophon before the final footer

Page numbers come from the site front matter `register:`, which is the register
the site prints and the numbers the body's own cross-references ("published on
page 17") point at. The old mirror numbered to 22 because it carried a chapter
("What a working day looks like") that the site no longer has; the register is
21 pages, so the rebuilt mirror is 21.

  python3 rebuild-core-mirror.py            rebuild
  python3 rebuild-core-mirror.py --dry-run  print a structural summary only
"""
import os
import re
import sys

SITE = _os.path.join(_SITE_DIR, 'runink-core.md')
MIRROR = _os.path.join(_MIRROR_DIR, 'runink-core-whitepaper.md')

FOOTER = '*Runink CORE — page {n} of {total}*'
FOOTER_RE = re.compile(r'^\*Runink CORE — page \d+ of \d+\*$')


def squash(s):
    return re.sub(r'[^a-z0-9]', '', s.lower())


def split_front_matter(text):
    m = re.match(r'^---\n(.*?\n)---\n', text, re.S)
    if not m:
        sys.exit('site source has no front matter')
    return m.group(1), text[m.end():]


def parse_register(front):
    """Read the `register:` list of {page, title} / {page, page_end, title}."""
    block = re.search(r'^register:\n((?:  - .*\n)+)', front, re.M)
    if not block:
        sys.exit('site front matter has no register:')
    entries = []
    for line in block.group(1).splitlines():
        page = re.search(r'page:\s*(\d+)', line)
        end = re.search(r'page_end:\s*(\d+)', line)
        title = re.search(r'title:\s*"([^"]*)"', line)
        if not (page and title):
            sys.exit(f'unparsable register line: {line}')
        entries.append({
            'page': int(page.group(1)),
            'last': int(end.group(1)) if end else int(page.group(1)),
            'title': title.group(1),
        })
    return entries


def split_chapters(body):
    """Split a body into [(heading, text_after_heading), ...] on '## ' lines."""
    parts = re.split(r'^(## .+)$', body, flags=re.M)
    if parts[0].strip():
        sys.exit('site body has prose before its first chapter heading')
    out = []
    for i in range(1, len(parts), 2):
        out.append((parts[i].strip(), parts[i + 1].strip('\n')))
    return out


def main():
    dry = '--dry-run' in sys.argv

    site = open(SITE, encoding='utf-8').read()
    front, body = split_front_matter(site)
    register = parse_register(front)
    chapters = split_chapters(body)

    old = open(MIRROR, encoding='utf-8').read()

    # ---- the cover block: everything before the mirror's first "## " heading.
    m = re.search(r'^## ', old, re.M)
    if not m:
        sys.exit('mirror has no "## " chapter heading; refusing to guess a cover')
    cover = old[:m.start()].rstrip('\n')

    # ---- the closing colophon: the last non-footer paragraph of the old mirror.
    tail = [p.strip() for p in re.split(r'\n\s*\n', old) if p.strip()]
    colophon = next(
        (p for p in reversed(tail)
         if not FOOTER_RE.match(p) and not re.match(r'^-{3,}$', p)),
        None)
    if colophon is None or '\n' in colophon or not colophon.startswith('*'):
        sys.exit('could not identify the closing colophon in the old mirror')

    # ---- sanity: the register must describe exactly the chapters in the body.
    if len(register) != len(chapters):
        sys.exit(f'register has {len(register)} entries but the body has '
                 f'{len(chapters)} chapters')
    for reg, (head, _) in zip(register, chapters):
        if squash(reg['title']) != squash(head):
            sys.exit(f'register/body mismatch: {reg["title"]!r} vs {head!r}')

    total = register[-1]['last']

    if dry:
        print(f'cover: {len(cover.splitlines())} lines, '
              f'ending {cover.splitlines()[-1]!r}')
        print(f'colophon: {colophon!r}')
        print(f'{len(chapters)} chapters, {total} pages')
        for reg, (head, _) in zip(register, chapters):
            print(f'  p{reg["page"]:>2}'
                  f'{("-" + str(reg["last"])) if reg["last"] != reg["page"] else "  "}'
                  f'  {head}')
        return

    # ---- rewrite the cover's own page-1 footer to the new page total.
    cover = re.sub(r'^\*Runink CORE — page 1 of \d+\*$',
                   FOOTER.format(n=1, total=total), cover, flags=re.M)

    out = [cover, '']
    for i, (reg, (head, text)) in enumerate(zip(register, chapters)):
        out.append(head)
        out.append('')
        out.append(text)
        out.append('')
        if i == len(chapters) - 1:
            # last chapter: rule, colophon, final footer, no trailing rule.
            out.append('---')
            out.append('')
            out.append(colophon)
            out.append('')
            out.append(FOOTER.format(n=reg['last'], total=total))
        else:
            out.append(FOOTER.format(n=reg['last'], total=total))
            out.append('')
            out.append('---')
            out.append('')

    new = '\n'.join(out).rstrip('\n') + '\n'
    new = re.sub(r'\n{3,}', '\n\n', new)

    tmp = MIRROR + '.new'
    with open(tmp, 'w', encoding='utf-8') as fh:
        fh.write(new)
    os.replace(tmp, MIRROR)
    print(f'rebuilt {MIRROR}: {len(new.splitlines())} lines, '
          f'{len(chapters)} chapters, {total} pages')


if __name__ == '__main__':
    main()
