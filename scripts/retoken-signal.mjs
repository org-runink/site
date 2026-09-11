#!/usr/bin/env node
/**
 * Replace the two literal signal oranges with tokens, by position.
 *
 * `#ea580c` appears 593 times and `#ca4708` 69 times, almost all inside Tailwind
 * arbitrary values like `text-[#ea580c]` or `hover:border-[#ca4708]`. A literal
 * cannot follow the ground, so on the light sheet every one of them is stuck at
 * a value chosen for a black page — `text-[#ea580c]` measures 3.34:1 there,
 * under AA, which is why it is the single largest cause in the contrast audit.
 *
 * POSITION DECIDES THE TOKEN, because fill and ink are different colours in
 * FACE and conflating them is the mistake the whole palette exists to prevent:
 *
 *   text / border / ring / decoration   -> signal            (the ink,   #8B4024 on sheet)
 *   bg / from / to / via                -> signal-fill       (the fill,  #C4693B on sheet)
 *   ...and #ca4708, which is only ever the hover of one of those, takes
 *      signal-fill-hover in fill positions.
 *
 * Run with --dry to see the plan without touching anything.
 * Files under layouts/design/ are excluded: that page is the token specimen and
 * is supposed to show raw values.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';

const DRY = process.argv.includes('--dry');

const INK_POS = new Set(['text', 'border', 'ring', 'divide', 'outline',
                         'decoration', 'placeholder', 'caret', 'accent',
                         'fill', 'stroke', 'shadow']);
const FILL_POS = new Set(['bg', 'from', 'to', 'via']);

/** `((variant:)*)(position)-[#hex](/alpha)?` */
const RE = /((?:[a-z][a-z0-9-]*:)*)([a-z][a-z0-9-]*)-\[#(ea580c|ca4708)\](\/\d{1,3})?/gi;

const files = [];
for (const pat of ['layouts/**/*.html', 'content/**/*.md', 'content/**/*.html']) {
  for await (const f of glob(pat)) {
    if (f.startsWith('layouts/design/')) continue;
    files.push(f);
  }
}

const tally = new Map();
let changedFiles = 0, total = 0;
const skipped = [];

for (const file of files) {
  const src = await readFile(file, 'utf8');
  if (!/#(ea580c|ca4708)/i.test(src)) continue;
  let n = 0;

  const out = src.replace(RE, (m, variants, pos, hex, alpha) => {
    const deep = hex.toLowerCase() === 'ca4708';
    let token;
    if (FILL_POS.has(pos)) token = deep ? 'signal-fill-hover' : 'signal-fill';
    else if (INK_POS.has(pos)) token = 'signal';
    else { skipped.push(`${file}: ${m} (unrecognised position "${pos}")`); return m; }
    const to = `${variants}${pos}-${token}${alpha ?? ''}`;
    tally.set(`${pos}-[#${hex.toLowerCase()}]${alpha ?? ''} -> ${pos}-${token}${alpha ?? ''}`,
              (tally.get(`${pos}-[#${hex.toLowerCase()}]${alpha ?? ''} -> ${pos}-${token}${alpha ?? ''}`) ?? 0) + 1);
    n++;
    return to;
  });

  if (n) {
    total += n; changedFiles++;
    if (!DRY) await writeFile(file, out);
  }
  /* Anything left is the hex outside a class: inline style, CSS, an SVG fill.
     Those need a human eye, so they are reported rather than guessed at. */
  const leftover = (out.match(/#(ea580c|ca4708)/gi) || []).length;
  if (leftover) skipped.push(`${file}: ${leftover} occurrence(s) not in a class (inline style / css / svg)`);
}

console.log(`${DRY ? 'DRY RUN — ' : ''}${total} replacement(s) across ${changedFiles} file(s)\n`);
for (const [k, n] of [...tally.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(4)}x  ${k}`);
}
if (skipped.length) {
  console.log(`\nleft alone (${skipped.length}) — need a human decision:`);
  for (const s of skipped.slice(0, 20)) console.log(`  ${s}`);
  if (skipped.length > 20) console.log(`  ... and ${skipped.length - 20} more`);
}
