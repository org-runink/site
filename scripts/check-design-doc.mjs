#!/usr/bin/env node
/**
 * Fail when DESIGN.md asserts a value assets/css/tokens.css no longer holds.
 *
 * WHY. tokens.css was re-valued on 2026-09-10 — the neutral ramp to Runink
 * FACE's warm ramp, the signal onto FACE's technicalOrangeLight, the display
 * and reading faces to Figtree. DESIGN.md was not, and for two days the file
 * that calls itself "the source of truth" published fourteen dead ramp hexes,
 * two dead signal hexes, a twenty-row contrast table measured against a ground
 * that no longer existed, and a display face the token layer had stopped
 * offering. `scripts/gen-contrast-proof.mjs --check` already stops the /design/
 * specimen drifting the same way. Nothing stopped the doc.
 *
 * WHAT THIS CHECKS, and it is deliberately narrow: the places DESIGN.md states
 * a token and its value TOGETHER, in a table, which is where a reader copies a
 * value out of. Five rules, all of them mechanical:
 *
 *   A  a table cell naming one token and one or more hexes — `--rk-text`
 *      `#352E25` — must agree, in at least one ground.
 *   B  a row whose first cell is a token and whose second is a hex — the ramp
 *      and signal tables — must agree, in at least one ground.
 *   C  a row naming a category must pair that category's ink and lift.
 *   D  the role table's face names must be the first family in the matching
 *      --rk-font-* token.
 *   E  the scale table's rem and px must be the token's own value.
 *   F  every --rk-* name the doc cites must exist in tokens.css.
 *
 * WHAT IT DOES NOT CHECK, stated so nobody mistakes a pass for a clean doc.
 * It reads tables, not prose. "No page was restyled" was false for weeks and
 * no lint would ever have caught it, because it is a claim about the repo and
 * not a value. Measured ratios are not checked here either — those belong to
 * gen-contrast-proof.mjs, which measures rather than compares. And a hex that
 * is quoted as history (`#ea580c`, `#1c1917`, the whole "on the defect in the
 * palette this replaces" paragraph) is left alone on purpose: the doc records
 * what it rejected, and a check that forbids naming a dead colour would make
 * it impossible to say why a value moved.
 *
 * That is the trade. It catches the failure that actually happened and leaves
 * the prose to a reader.
 *
 * Not wired into .github/workflows/deploy.yaml — that file has another owner.
 * Run: node scripts/check-design-doc.mjs
 */
import { readFile } from 'node:fs/promises';

const TOKENS = new URL('../assets/css/tokens.css', import.meta.url);
const DOC = new URL('../DESIGN.md', import.meta.url);

/* Generic names the doc uses to talk ABOUT the token system rather than to
   name a token. --rk-cat-x-ink stands in for all five categories in the print
   trap; --rk-x-ch for any rung in the Tailwind-alpha trap. */
const PLACEHOLDERS = new Set(['--rk-cat-x-ink', '--rk-x-ch']);

const CATEGORIES = {
  logistics: ['logistics', 'logistics & supply chain'],
  insurance: ['insurance'],
  banking: ['banking', 'banking & financial services'],
  telecom: ['telecom'],
  marketing: ['marketing'],
};

const src = await readFile(TOKENS, 'utf8');
const doc = await readFile(DOC, 'utf8');

/* Everything before @media print. The print block re-binds every semantic to
   black, and reading it as a definition is how gen-contrast-proof.mjs once
   reported 21.00:1 for the entire system. */
const live = src.slice(0, src.indexOf('@media print'));

const hex = new Map();
for (const m of live.matchAll(/(--rk-[\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
  if (!hex.has(m[1])) hex.set(m[1], m[2].toUpperCase());
}
const declared = new Set([...live.matchAll(/(--rk-[\w-]+)\s*:/g)].map((m) => m[1]));

function blockOf(sel) {
  const i = live.indexOf(sel);
  if (i < 0) return '';
  const open = live.indexOf('{', i);
  let d = 1, j = open + 1;
  while (j < live.length && d > 0) { if (live[j] === '{') d++; else if (live[j] === '}') d--; j++; }
  return live.slice(open, j);
}
const bind = (block) => {
  const m = new Map();
  for (const x of block.matchAll(/(--rk-[\w-]+):\s*var\(\s*(--rk-[\w-]+)\s*\)/g)) {
    if (!m.has(x[1])) m.set(x[1], x[2]);
  }
  return m;
};
const B = {
  sheet: bind(blockOf(":root,\n[data-ground='sheet']")),
  console: bind(blockOf("[data-ground='console']")),
};

/* Follow the ground binding first, fall back to the hex map. Same order as the
   generator, and for the same reason. */
const resolve = (name, ground) => {
  let n = name;
  for (let i = 0; i < 8; i++) {
    const next = B[ground].get(n);
    if (next) { n = next; continue; }
    return hex.get(n) ?? null;
  }
  return null;
};
const valuesOf = (name) => [...new Set(['sheet', 'console'].map((g) => resolve(name, g)).filter(Boolean))];

const fails = [];
const bad = (line, msg) => fails.push(`DESIGN.md:${line}  ${msg}`);

const lines = doc.split('\n');
const cellsOf = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|');
const TOKEN = /`(--rk-[\w-]+)`/g;
const HEX = /`(#[0-9a-fA-F]{6})`/g;

lines.forEach((raw, i) => {
  const n = i + 1;
  if (!raw.trim().startsWith('|')) return;
  const cells = cellsOf(raw);
  if (!cells.length) return;

  const tokensIn = (c) => [...c.matchAll(TOKEN)].map((m) => m[1]);
  const hexesIn = (c) => [...c.matchAll(HEX)].map((m) => m[1].toUpperCase());

  /* A — one token and its hexes in the same cell. */
  cells.forEach((c) => {
    const t = tokensIn(c), h = hexesIn(c);
    if (t.length !== 1 || !h.length) return;
    const want = valuesOf(t[0]);
    for (const got of h) {
      if (!want.includes(got)) {
        bad(n, `${t[0]} is stated as ${got}; tokens.css resolves it to ${want.join(' / ') || 'no hex'}`);
      }
    }
  });

  /* B — token in the first cell, hex in the second. The ramp and signal tables. */
  const first = tokensIn(cells[0]);
  if (first.length === 1 && !hexesIn(cells[0]).length && cells[1]) {
    const h = hexesIn(cells[1]);
    const want = valuesOf(first[0]);
    for (const got of h) {
      if (!want.includes(got)) {
        bad(n, `${first[0]} is stated as ${got}; tokens.css resolves it to ${want.join(' / ') || 'no hex'}`);
      }
    }
  }

  /* C — a row naming a category pairs that category's two bindings. */
  const label = cells[0].replace(/`[^`]*`/g, '').replace(/\*\*/g, '').replace(/^\s*cat\s+/i, '').trim().toLowerCase();
  const slug = Object.keys(CATEGORIES).find((k) => CATEGORIES[k].includes(label));
  if (slug) {
    const want = [hex.get(`--rk-cat-${slug}-ink`), hex.get(`--rk-cat-${slug}-lift`)].filter(Boolean);
    /* The last cell of a category row is the Note column, and the note is where
       the doc says which colour this one replaced — #ea580c, #778fe6, #D4A574.
       Those are history and naming them is the point, so they are not checked. */
    for (const got of cells.slice(0, -1).flatMap(hexesIn)) {
      if (!want.includes(got)) {
        bad(n, `cat ${slug} is stated as ${got}; tokens.css holds ${want.join(' / ')}`);
      }
    }
  }

  /* D — the role table's face names. */
  for (const t of cells.flatMap(tokensIn)) {
    if (!t.startsWith('--rk-font-')) continue;
    const decl = live.match(new RegExp(`${t}:\\s*([^;]+);`));
    if (!decl) continue;
    const family = (decl[1].match(/'([^']+)'/)?.[1] ?? '').replace(/ Rk$/, '');
    if (!family) continue;
    const row = cells.join(' ');
    if (!row.includes(family)) {
      bad(n, `${t} is ${family} in tokens.css; this row does not name it`);
    }
  }

  /* E — the scale table's sizes. */
  if (first.length === 1 && first[0].startsWith('--rk-t-') && cells[1]) {
    const size = cells[1].match(/([\d.]+)rem\s*\/\s*(\d+)px/);
    const decl = live.match(new RegExp(`${first[0]}:\\s*([\\d.]+)rem`));
    if (size && decl) {
      if (size[1] !== decl[1]) bad(n, `${first[0]} is stated as ${size[1]}rem; tokens.css has ${decl[1]}rem`);
      if (+size[2] !== +decl[1] * 16) bad(n, `${first[0]} is stated as ${size[2]}px; ${decl[1]}rem is ${+decl[1] * 16}px`);
    }
  }
});

/* F — every token the doc names exists. Catches a rename, which is the one
   drift that leaves the hexes right and the vocabulary wrong. */
lines.forEach((raw, i) => {
  for (const m of raw.matchAll(/--rk-[\w-]+/g)) {
    const t = m[0];
    if (PLACEHOLDERS.has(t) || declared.has(t)) continue;
    bad(i + 1, `${t} is not declared in tokens.css`);
  }
});

if (fails.length) {
  console.error(`check-design-doc: ${fails.length} value(s) in DESIGN.md disagree with tokens.css\n`);
  for (const f of [...new Set(fails)]) console.error(`  ✗ ${f}`);
  console.error('\n  tokens.css is the authority. Correct the doc, or correct the token and say why.');
  process.exit(1);
}
console.log('check-design-doc: ok — every token/value pair DESIGN.md states matches tokens.css');
