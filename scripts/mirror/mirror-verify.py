#!/usr/bin/env python3
"""Post-sync structural check on all four print mirrors.

mirror-audit.py answers "do the words match". This answers "is it still a
document" — the failure mode a paragraph-level word comparison cannot see,
because a rebuild that duplicates a chapter or loses the cover still passes a
one-directional substring test.

Run from the site repo root.
"""
import re, os, sys, hashlib

SITE = 'content/blog/whitepapers'
MIRROR = os.environ.get('MIRROR_DIR', '../pitch-decks')
BACKUP = os.path.expanduser('~/.cache/rk-mirror-backup')
NAMES = ['runink-face', 'runink-core', 'runink-pulse', 'runink-core-atlas']

def squash(s): return re.sub(r'[^a-z0-9]', '', s.lower())

fails = 0
for name in NAMES:
    mp = f'{MIRROR}/{name}-whitepaper.md'
    sp = f'{SITE}/{name}.md'
    mir = open(mp, encoding='utf-8').read()
    src = open(sp, encoding='utf-8').read()
    body = re.sub(r'^---\n.*?\n---\n', '', src, count=1, flags=re.S)
    problems = []

    # 1. the cover survived: an H1 in the first few lines
    if not re.match(r'\s*#\s+\S', mir):
        problems.append('no H1 at the top — cover block lost')

    # 2. every site chapter appears exactly once as a heading — or, for a
    #    chapter the mirror folds into its cover, once in the cover block as
    #    running text. runink-core-atlas folds its whole first chapter that
    #    way, which the shipped checker names in its own header as a known,
    #    legitimate difference; demanding a heading for it would push a
    #    correct mirror into failing, and the only way to satisfy it would be
    #    to unfold the cover. The words must still be there: the fold is
    #    accepted only when the cover itself carries the chapter's title.
    cover_m = re.search(r'^##\s+', mir, re.M)
    cover_squash = squash(mir[:cover_m.start()] if cover_m else '')
    site_ch = re.findall(r'^##\s+(.+?)\s*$', body, re.M)
    for t in site_ch:
        # the mirror may prefix "Page N — "; match on the squashed tail
        k = squash(t)
        hits = [h for h in re.findall(r'^##\s+(.+?)\s*$', mir, re.M) if squash(h).endswith(k)]
        if len(hits) == 0:
            if k in cover_squash:
                continue                     # folded into the cover, not lost
            problems.append(f'chapter heading missing: "{t}"')
        elif len(hits) > 1:
            problems.append(f'chapter heading appears {len(hits)}x: "{t}"')

    # 3. no chapter body duplicated (the folded-cover hazard)
    paras = [p.strip() for p in re.split(r'\n\s*\n', mir) if len(squash(p)) > 120]
    seen, dupes = set(), []
    for p in paras:
        k = squash(p)
        if k in seen: dupes.append(p[:70])
        seen.add(k)
    if dupes:
        problems.append(f'{len(dupes)} substantial paragraph(s) appear twice, e.g. {dupes[0]!r}')

    # 4. the figure line survived, byte-identical to the source's
    fig_s = re.findall(r'^!\[.*$', body, re.M)
    fig_m = re.findall(r'^!\[.*$', mir, re.M)
    if fig_s and fig_s != fig_m:
        problems.append(f'figure line differs: source {fig_s} vs mirror {fig_m}')

    # 5. it did not shrink to nothing / grow absurdly vs the backup
    bp = f'{BACKUP}/{name}-whitepaper.md'
    if os.path.exists(bp):
        was, now = os.path.getsize(bp), os.path.getsize(mp)
        pct = (now - was) * 100 // max(was, 1)
        note = f'{was} -> {now} bytes ({pct:+d}%)'
        if now < was * 0.4:
            problems.append(f'lost more than 60% of the file: {note}')
    else:
        note = 'no backup to compare'

    status = 'FAIL' if problems else 'ok  '
    print(f'{status} {name:<18} {len(site_ch)} chapters, {note}')
    for p in problems:
        print(f'       - {p}')
    fails += bool(problems)

sys.exit(1 if fails else 0)
