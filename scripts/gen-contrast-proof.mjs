#!/usr/bin/env node
/**
 * Generate the /design/ specimen's contrast-proof table from tokens.css.
 *
 * WHY GENERATED. The table used to be a hand-written list of hexes and ratios
 * inside layouts/design/list.html. After the palette moved to FACE it was
 * asserting measured ratios for colours that no longer existed anywhere —
 * `#F2801F` as "signal", `#101A22` as the ground — on the one page whose entire
 * job is to be the authority on what the tokens are. A proof table that can
 * drift from the thing it proves is worse than no proof table, because it
 * looks checked.
 *
 * Writes data/contrast_proof.json, which Hugo reads as site.Data. The file is
 * committed so the site build never needs node; `--check` re-derives it and
 * fails if it differs, which is what keeps it honest in CI.
 */
import { readFile, writeFile } from 'node:fs/promises';

const TOKENS = new URL('../assets/css/tokens.css', import.meta.url);
const OUT = new URL('../data/contrast_proof.json', import.meta.url);
const CHECK = process.argv.includes('--check');

const src = await readFile(TOKENS, 'utf8');

/* Ramp + literal primitives. */
const hex = new Map();
for (const m of src.matchAll(/--(rk-[\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
  if (!hex.has(m[1])) hex.set(m[1], m[2].toUpperCase());
}
/* Per-ground bindings: token -> rung, read from each ground block. */
function blockOf(sel) {
  const i = src.indexOf(sel);
  const open = src.indexOf('{', i);
  let d = 1, j = open + 1;
  while (j < src.length && d > 0) { if (src[j] === '{') d++; else if (src[j] === '}') d--; j++; }
  return src.slice(open, j);
}
const sheetBlock = blockOf(":root,\n[data-ground='sheet']");
const consoleBlock = blockOf("[data-ground='console']");
const bind = (block) => {
  const m = new Map();
  for (const x of block.matchAll(/--(rk-[\w-]+):\s*var\(\s*(--rk-[\w-]+)\s*\)/g)) {
    if (!m.has(x[1])) m.set(x[1], x[2].slice(2));
  }
  return m;
};
const B = { sheet: bind(sheetBlock), console: bind(consoleBlock) };
/* THE GROUND BINDING WINS OVER THE HEX MAP, and the order matters.
   `hex` is first-definition-wins across the whole file, and the only place
   `--rk-text` is ever defined AS A HEX is the @media print override
   (`#000000`) — every real definition is `var(--rk-n-900)`. Checking `hex`
   first therefore resolved every ink and mark to its paper value, and the
   generated table proudly reported 21.00:1 for everything. Follow the binding
   chain first; fall back to the hex map only for primitives that have no
   per-ground binding, which is what the ramp rungs are. */
const resolve = (name, ground) => {
  let n = name;
  for (let i = 0; i < 8; i++) {
    const next = B[ground].get(n);
    if (next) { n = next; continue; }
    if (hex.has(n)) return hex.get(n);
    return null;
  }
  return null;
};

const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = (h) => {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
};
const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

const SURFACES = [['rk-sheet', 'sheet'], ['rk-ground', 'ground'], ['rk-sunk', 'sunk']];
const INKS = [['rk-text', 'text'], ['rk-text-1', 'text-1'], ['rk-text-2', 'text-2'],
              ['rk-text-3', 'text-3'], ['rk-signal', 'signal']];
const MARKS = [['rk-rule-strong', 'rule-strong']];
const CATS = ['logistics', 'insurance', 'banking', 'telecom', 'marketing'];

const rows = [];
for (const ground of ['sheet', 'console']) {
  const label = (n) => (ground === 'console' ? `console ${n}` : n);
  for (const [tok, name] of INKS) {
    const f = resolve(tok, ground);
    for (const [sTok, sName] of SURFACES) {
      const b = resolve(sTok, ground);
      if (!f || !b) continue;
      const r = ratio(f, b);
      rows.push({ f, fn: name, b, bn: label(sName), r: r.toFixed(2),
                  g: r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : 'FAILS', tier: 'ink' });
    }
  }
  for (const [tok, name] of MARKS) {
    const f = resolve(tok, ground);
    for (const [sTok, sName] of SURFACES) {
      const b = resolve(sTok, ground);
      if (!f || !b) continue;
      const r = ratio(f, b);
      rows.push({ f, fn: name, b, bn: label(sName), r: r.toFixed(2),
                  g: r >= 3 ? 'AA non-text' : 'FAILS', tier: 'mark' });
    }
  }
  for (const cat of CATS) {
    const f = hex.get(ground === 'console' ? `rk-cat-${cat}-lift` : `rk-cat-${cat}-ink`);
    const b = resolve('rk-ground', ground);
    if (!f || !b) continue;
    const r = ratio(f, b);
    rows.push({ f, fn: `cat ${cat}`, b, bn: label('ground'), r: r.toFixed(2),
                g: r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : 'FAILS', tier: 'ink' });
  }
}

/* ---- the ramp, with each rung's role DERIVED from what binds it ------------
   The specimen used to carry a hand-written role string per rung ("sheet:
   canvas / console: text"). Those are facts about the ground blocks, so
   reading them out of the ground blocks means they cannot drift either — and
   they were all wrong, describing the pre-FACE ramp. */
const ROLE = {
  'rk-ground': 'canvas', 'rk-sheet': 'raised surface', 'rk-sunk': 'recessed surface',
  'rk-rule': 'hairline', 'rk-rule-mid': 'mid rule', 'rk-rule-strong': 'boundary rule',
  'rk-text': 'text', 'rk-text-1': 'strong text', 'rk-text-2': 'body text',
  'rk-text-3': 'labels, captions', 'rk-text-on-signal': 'ink on the signal',
};
const rungs = [...hex.keys()].filter((k) => /^rk-n-\d+$/.test(k))
  .sort((a, b) => +a.slice(5) - +b.slice(5));
const ramp = rungs.map((rung) => {
  const parts = [];
  for (const ground of ['sheet', 'console']) {
    const names = [...B[ground].entries()]
      .filter(([, v]) => v === rung).map(([k]) => ROLE[k]).filter(Boolean);
    if (names.length) parts.push(`${ground}: ${[...new Set(names)].join(', ')}`);
  }
  return { n: `--${rung}`, h: hex.get(rung), r: parts.join(' / ') || 'interpolated — no semantic binds it directly' };
});

/* ---- the signal pair, with its measured ratios stated rather than asserted */
const signal = [
  { n: '--rk-signal-ink', h: hex.get('rk-signal-ink'), ground: 'sheet' },
  { n: '--rk-signal-lift', h: hex.get('rk-signal-lift'), ground: 'console' },
].filter((s) => s.h).map((s) => {
  const surf = SURFACES.map(([tok, name]) => {
    const b = resolve(tok, s.ground);
    return b ? `${ratio(s.h, b).toFixed(2)}:1 on ${name}` : null;
  }).filter(Boolean);
  return { n: s.n, h: s.h, r: `${s.ground} ground. ${surf.join(', ')}.` };
});

const failing = rows.filter((r) => r.g === 'FAILS');
const payload = JSON.stringify({
  note: 'GENERATED by scripts/gen-contrast-proof.mjs from assets/css/tokens.css. Do not edit by hand.',
  ramp,
  signal,
  rows,
}, null, 2) + '\n';

if (CHECK) {
  let current = '';
  try { current = await readFile(OUT, 'utf8'); } catch { /* missing */ }
  if (current !== payload) {
    console.error('gen-contrast-proof: data/contrast_proof.json is stale.\n' +
      '  The /design/ specimen would assert ratios that no longer match tokens.css.\n' +
      '  Run: node scripts/gen-contrast-proof.mjs');
    process.exit(1);
  }
  if (failing.length) {
    console.error(`gen-contrast-proof: ${failing.length} pair(s) below their floor`);
    for (const f of failing) console.error(`  ✗ ${f.fn} (${f.f}) on ${f.bn} (${f.b}) = ${f.r}:1`);
    process.exit(1);
  }
  console.log(`gen-contrast-proof: ok — ${rows.length} pairs, all at or above their floor, table matches tokens.css`);
} else {
  await writeFile(OUT, payload);
  console.log(`gen-contrast-proof: wrote ${rows.length} pairs to data/contrast_proof.json`);
  if (failing.length) {
    console.error(`  WARNING: ${failing.length} pair(s) below floor:`);
    for (const f of failing) console.error(`    ${f.fn} on ${f.bn} = ${f.r}:1`);
  }
}
