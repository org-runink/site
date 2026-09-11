#!/usr/bin/env python3
"""Rebuild pitch-decks/runink-core-atlas-whitepaper.md from the site source.

The site source is the truth. The mirror is that body with print furniture
wrapped round it:

  * a bespoke cover block (title, headline, audience line, the two deck
    paragraphs, chapter one folded in as bold running text, contacts, a page
    marker), preserved from the current mirror;
  * one page per register entry, in register order, with the register's own
    page numbers -- the paper's prose cross-references ("pages 11 to 13",
    "page 21", "page 8", "page 16") are written against the register, so the
    mirror has to paginate the same way or the handout points at the wrong
    sheets;
  * a horizontal rule between pages and an italic page marker at the foot of
    each one.

Chapter one is NOT emitted in the body: it lives in the cover, folded.
"""
import re
import sys

# Paths are repo-relative with an overridable mirror directory, matching
# check-whitepaper-mirrors.sh. They were absolute when this script was written,
# and an absolute home directory in a committed script makes it runnable on
# exactly one machine — the workspace root CLAUDE.md forbids it outright.
# Run from the site repo root.
import os as _os
_SITE_DIR = 'content/blog/whitepapers'
_MIRROR_DIR = _os.environ.get('MIRROR_DIR', '../pitch-decks')
SITE = _os.path.join(_SITE_DIR, 'runink-core-atlas.md')
MIRROR = _os.path.join(_MIRROR_DIR, 'runink-core-atlas-whitepaper.md')
# The cover furniture is read from a copy of the mirror rather than from the one
# being written, so the script can be re-run against its own output. It defaults
# to the live mirror: every anchor below is content-based, so a synced file
# yields the same cover a pre-sync one does. Point ATLAS_COVER_SRC at a pre-sync
# copy if the live cover has been damaged.
ORIG = _os.environ.get('ATLAS_COVER_SRC', MIRROR)
PAPER = 'Runink CORE and Atlas'

# ---------------------------------------------------------------- site source
src = open(SITE, encoding='utf-8').read()
fm_match = re.match(r'^---\n(.*?)\n---\n', src, re.S)
assert fm_match, 'no front matter in the site source'
front, body = fm_match.group(1), src[fm_match.end():]

# register: the paper's own pagination map
register = []
in_reg = False
for line in front.splitlines():
    if re.match(r'^register:\s*$', line):
        in_reg = True
        continue
    if in_reg:
        m = re.match(
            r'\s*-\s*\{\s*page:\s*(\d+),\s*(?:page_end:\s*(\d+),\s*)?'
            r'title:\s*"(.*)"\s*\}\s*$', line)
        if not m:
            break
        register.append({
            'page': int(m.group(1)),
            'end': int(m.group(2)) if m.group(2) else int(m.group(1)),
            'title': m.group(3).replace('\\"', '"'),
        })
assert register, 'no register parsed'
total_pages = max(e['end'] for e in register)

# chapters, in source order
parts = re.split(r'(?m)^(##\s+.+?)\s*$', body)
assert parts[0].strip() == '', f'stray text before the first chapter: {parts[0][:200]!r}'
chapters = []
for i in range(1, len(parts), 2):
    chapters.append({
        'title': re.sub(r'^##\s+', '', parts[i]).strip(),
        'text': parts[i + 1].strip('\n'),
    })

assert len(chapters) == len(register), \
    f'{len(chapters)} chapters vs {len(register)} register entries'
for ch, reg in zip(chapters, register):
    assert ch['title'] == reg['title'], \
        f'register/body order differs: {reg["title"]!r} vs {ch["title"]!r}'

# --------------------------------------------------------------- current cover
# Read the print furniture from the pre-sync backup, not from the live mirror,
# so the script can be re-run against a file it has already rewritten.
old = open(ORIG, encoding='utf-8').read().splitlines()
assert old[0] == '# ' + PAPER, 'unexpected first line in the mirror'
title_block = '\n'.join(old[0:16])          # H1, headline, audience, rule, deck x2
# Anchored on content, not on a line offset. old[30:32] worked against the
# pre-sync file and silently stopped pointing at the contacts once the folded
# chapter one changed length — which is the whole failure mode this script
# exists to repair, reproduced inside the repair.
_ci = next(i for i, l in enumerate(old) if l.startswith('Runink \u00b7 runink.org'))
contacts = '\n'.join(old[_ci:_ci + 2])      # Runink / Logical Leap contact lines
assert old[17].startswith('**What this paper is, and which part of it runs.**'), \
    'the folded chapter one is not where it was'
assert contacts.startswith('Runink · runink.org'), 'contacts moved'
COLOPHON = old[-3]                          # the closing sign-off line
assert COLOPHON.startswith('*Runink CORE and Atlas. Continuous oversight'), \
    'the closing colophon moved'

# Chapter one, folded into the cover: its heading kept as bold running text
# with a full stop, its paragraphs taken verbatim from the site source so the
# cover says what the site says.
ch1 = chapters[0]
fold = '**{}.**\n\n{}'.format(ch1['title'], ch1['text'])

def marker(page):
    # the mirror's own foot-of-page wording, renumbered to the register
    return '*{} — page {} of {}*'.format(PAPER, page, total_pages)

out = []
out.append(title_block)
out.append(fold)
out.append(contacts)
out.append(marker(register[0]['end']))
out.append('---')

# ------------------------------------------------------------------- the body
for ch, reg in zip(chapters[1:], register[1:]):
    out.append('## ' + ch['title'])
    out.append(ch['text'])
    if ch is chapters[-1]:
        out.append('---')
        out.append(COLOPHON)
        out.append(marker(reg['end']))
    else:
        out.append(marker(reg['end']))
        out.append('---')

text = '\n\n'.join(out) + '\n'

if '--dry-run' in sys.argv:
    sys.stdout.write(text)
else:
    open(MIRROR, 'w', encoding='utf-8').write(text)
    print('wrote {} ({} pages, {} chapters)'.format(
        MIRROR, total_pages, len(chapters)))
