#!/usr/bin/env python3
# Paths are repo-relative with an overridable mirror directory, matching
# check-whitepaper-mirrors.sh. They were absolute when this script was written,
# and an absolute home directory in a committed script makes it runnable on
# exactly one machine — the workspace root CLAUDE.md forbids it outright.
# Run from the site repo root.
import os as _os
_SITE_DIR = 'content/blog/whitepapers'
_MIRROR_DIR = _os.environ.get('MIRROR_DIR', '../pitch-decks')
"""Rebuild the runink-pulse PRINT MIRROR from the SITE SOURCE body.

The mirror is the site body with print furniture wrapped round it:

    <cover block>                 bespoke, kept verbatim from the old mirror
    ## Contents                   furniture, REGENERATED from the front-matter register
    ---  /  *Page N — Title*  /  ---     page marker after every chapter
    ## Chapter                    plain heading, exactly as the site writes it

Nothing in the body is authored here: every chapter is copied out of the site
source, which is the single source of truth.
"""
import re, sys, io

SITE = _os.path.join(_SITE_DIR, 'runink-pulse.md')
MIRROR = _os.path.join(_MIRROR_DIR, 'runink-pulse-whitepaper.md')

EN_DASH = '–'   # – used between the two numbers of a page span
EM_DASH = '—'   # — used between page number and title


def read(p):
    with io.open(p, encoding='utf-8') as f:
        return f.read()


# ---------------------------------------------------------------- site source
src = read(SITE)
m = re.match(r'^---\n(.*?)\n---\n', src, re.S)
if not m:
    sys.exit('site source: no front matter')
front, body = m.group(1), src[m.end():]

# register: - { page: 3,  title: "Summary" }  /  - { page: 17, page_end: 18, ... }
register = []
for line in front.splitlines():
    r = re.match(r'\s*-\s*\{\s*page:\s*(\d+)\s*,'
                 r'(?:\s*page_end:\s*(\d+)\s*,)?'
                 r'\s*title:\s*"(.*?)"\s*\}\s*$', line)
    if r:
        register.append((int(r.group(1)),
                         int(r.group(2)) if r.group(2) else None,
                         r.group(3)))
if not register:
    sys.exit('site source: no register entries parsed')

# ------------------------------------------------------------- site chapters
# split the body on level-2 headings; anything before the first one would be
# stray preamble (there is none, but fail loudly rather than silently drop it).
parts = re.split(r'(?m)^(## .+)$', body)
preamble = parts[0].strip()
if preamble:
    sys.exit('site source: unexpected text before the first chapter:\n' + preamble[:200])

chapters = []
for i in range(1, len(parts), 2):
    heading = parts[i].strip()
    text = parts[i + 1].rstrip()
    # exactly one blank line between the heading and the chapter's first
    # paragraph; everything after that is the site body's own spacing.
    chapters.append((heading[3:].strip(),
                     heading + '\n\n' + text.lstrip('\n')))

# ------------------------------------------------- register / chapter agreement
if len(chapters) != len(register):
    sys.exit('register has %d entries but the body has %d chapters:\n  register: %s\n  body:     %s'
             % (len(register), len(chapters),
                [t for _, _, t in register], [t for t, _ in chapters]))
for (page, page_end, rtitle), (ctitle, _) in zip(register, chapters):
    if rtitle != ctitle:
        sys.exit('register/body title mismatch: %r vs %r' % (rtitle, ctitle))

# ------------------------------------------------------------- cover (verbatim)
old = read(MIRROR)
cm = re.search(r'^\*Page 1 ' + EM_DASH + r' Cover\*\n\n---\n', old, re.M)
if not cm:
    sys.exit('old mirror: could not find the end of the cover block')
cover = old[:cm.end()].rstrip('\n')

# ------------------------------------------------------------------- furniture
def label(page, page_end, title):
    if page_end:
        return 'Pages %d%s%d %s %s' % (page, EN_DASH, page_end, EM_DASH, title)
    return 'Page %d %s %s' % (page, EM_DASH, title)


def marker(page, page_end, title, last=False):
    # every page marker is fenced above and below, except the final one, which
    # the old mirror closed on — the file end is the fence.
    fence = '' if last else '\n\n---'
    return '---\n\n*%s*%s' % (label(page, page_end, title), fence)


def contents_line(page, page_end, title):
    if page_end:
        return '- **Pages %d%s%d** %s %s' % (page, EN_DASH, page_end, EM_DASH, title)
    return '- **Page %d** %s %s' % (page, EM_DASH, title)


# ------------------------------------------------------------------- assemble
out = [cover, '']

toc = ['## Contents', '']
toc.append('- **Page 1** %s Cover' % EM_DASH)
toc.append('- **Page 2** %s Contents' % EM_DASH)
for page, page_end, title in register:
    toc.append(contents_line(page, page_end, title))
out.append('\n'.join(toc))
out.append('')
out.append(marker(2, None, 'Contents'))
out.append('')

for n, ((page, page_end, title), (_, text)) in enumerate(zip(register, chapters)):
    out.append(text)
    out.append('')
    out.append(marker(page, page_end, title, last=(n == len(register) - 1)))
    out.append('')

new = '\n'.join(out).rstrip('\n')   # old mirror carried no trailing newline
# normalise: never more than one blank line in a row outside the body's own text
with io.open(MIRROR, 'w', encoding='utf-8') as f:
    f.write(new)

print('rebuilt %s' % MIRROR)
print('  chapters: %d   register entries: %d' % (len(chapters), len(register)))
print('  cover block: %d lines kept verbatim' % cover.count('\n'))
print('  contents block: %d entries' % (len(register) + 2))
