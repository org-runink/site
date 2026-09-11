#!/usr/bin/env node
/**
 * assets/css/tokens.css carries every colour TWICE: once as a hex
 * (`--rk-text: var(--rk-n-900)`) and once as a channel triplet
 * (`--rk-text-ch: var(--rk-n-900-ch)`).
 *
 * The duplication is forced, not sloppy. Tailwind's alpha modifier substitutes
 * an <alpha-value> placeholder into a colour value; a bare `var(--rk-text)` has
 * nowhere to put it, so Tailwind silently DROPS the declaration and `text-x/70`
 * compiles to nothing. The repo has 252 such utilities. Channels compose with
 * alpha; hexes are what everything else reads. Both have to exist.
 *
 * What makes that dangerous is the failure mode: a channel that drifts from its
 * hex is a colour that is almost right. Nobody notices a border that is two
 * rungs too pale, which is exactly why it needs a machine. This asserts:
 *
 *   1. every ramp rung's channel triplet equals its own hex
 *   2. every signal token's channel triplet equals its own hex
 *   3. in every ground block, a token bound to rung N has its -ch bound to N-ch
 *      (same rung, same block) — and neither form has a partner the other lacks
 *   4. the print block, which uses literals rather than rungs, agrees literally
 *
 * Rule 3 is the one that earns its keep: it catches the case where someone
 * re-values `--rk-text-2` for a ground and forgets the channel, leaving that
 * ground's body text correct at full opacity and wrong at any alpha.
 */
import { readFile } from 'node:fs/promises';

const FILE = new URL('../assets/css/tokens.css', import.meta.url);
const fail = [];
const src = await readFile(FILE, 'utf8');

const hexToCh = (hex) => {
  const h = hex.replace('#', '');
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
};
const normCh = (s) => s.trim().split(/[\s,]+/).map(Number);
const same = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

/* Walk balanced braces so the @media print block is found at its own depth
   rather than swallowed into whatever preceded it. */
function blocks(text) {
  const out = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '{') continue;
    let depth = 1, j = i + 1;
    while (j < text.length && depth > 0) {
      if (text[j] === '{') depth++;
      else if (text[j] === '}') depth--;
      j++;
    }
    const body = text.slice(i + 1, j - 1);
    if (!body.includes('--rk-')) { i = j - 1; continue; }
    const sel = text.slice(0, i).split(/[}{]/).pop().replace(/\/\*[\s\S]*?\*\//g, '').trim();
    out.push({ sel, body });
    /* deliberately do NOT skip to j: nested blocks (@media print) are wanted */
  }
  return out;
}

/* ---- 1 + 2: the literal definitions -------------------------------------- */
const hexDefs = new Map();
for (const m of src.matchAll(/--(rk-[\w-]+?):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
  if (!m[1].endsWith('-ch')) hexDefs.set(m[1], m[2]);
}
const chDefs = new Map();
for (const m of src.matchAll(/--(rk-[\w-]+)-ch:\s*([\d\s,]+?)\s*;/g)) {
  chDefs.set(m[1], normCh(m[2]));
}

let pairs = 0;
for (const [name, hex] of hexDefs) {
  const ch = chDefs.get(name);
  if (!ch) continue;                      // not every hex needs a channel form
  pairs++;
  const want = hexToCh(hex);
  if (!same(want, ch)) {
    fail.push(`--${name}: hex ${hex} is rgb(${want.join(' ')}) but --${name}-ch says ${ch.join(' ')}`);
  }
}

/* Every ramp rung MUST have a channel form — the palette binds through them. */
for (const name of hexDefs.keys()) {
  if (/^rk-n-\d+$/.test(name) && !chDefs.has(name)) {
    fail.push(`--${name} has no --${name}-ch; any alpha utility resolving to this rung compiles to nothing`);
  }
}

/* ---- 3: per-ground rung bindings agree ----------------------------------- */
let grounds = 0;
for (const { sel, body } of blocks(src)) {
  const bindHex = new Map();   // token -> rung
  const bindCh = new Map();
  for (const m of body.matchAll(/--(rk-[\w-]+?):\s*var\(\s*--rk-n-(\d+)\s*\)/g)) bindHex.set(m[1], m[2]);
  for (const m of body.matchAll(/--(rk-[\w-]+)-ch:\s*var\(\s*--rk-n-(\d+)-ch\s*\)/g)) bindCh.set(m[1], m[2]);
  if (bindHex.size === 0 && bindCh.size === 0) continue;
  grounds++;
  for (const [tok, rung] of bindHex) {
    if (!bindCh.has(tok)) {
      fail.push(`${sel}: --${tok} binds rung ${rung} but --${tok}-ch is not bound in this block`);
    } else if (bindCh.get(tok) !== rung) {
      fail.push(`${sel}: --${tok} binds rung ${rung} but --${tok}-ch binds rung ${bindCh.get(tok)}`);
    }
  }
  for (const tok of bindCh.keys()) {
    if (!bindHex.has(tok)) fail.push(`${sel}: --${tok}-ch is bound but --${tok} is not`);
  }
}

/* ---- 4: the print block, which uses literals ----------------------------- */
const print = blocks(src).find((b) => b.body.includes('--rk-ground: #FFFFFF'));
if (!print) {
  fail.push('could not locate the @media print override block — rule 4 did not run');
} else {
  const pHex = new Map(), pCh = new Map();
  for (const m of print.body.matchAll(/--(rk-[\w-]+?):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
    if (!m[1].endsWith('-ch')) pHex.set(m[1], m[2]);
  }
  for (const m of print.body.matchAll(/--(rk-[\w-]+)-ch:\s*([\d\s,]+?)\s*;/g)) pCh.set(m[1], normCh(m[2]));
  /* Some tokens are channel-only by design — the fills exist purely to be
     alpha-composited by Tailwind and are never read as a plain hex. Requiring a
     hex partner for those would force a value into the file that nothing uses,
     which is how dead tokens get born. A token counts as channel-only when no
     block anywhere declares it as a hex. */
  const hexNamesAnywhere = new Set();
  for (const m of src.matchAll(/--(rk-[\w-]+?):\s*(?:#|var\(\s*--rk-)/g)) {
    if (!m[1].endsWith('-ch')) hexNamesAnywhere.add(m[1]);
  }
  for (const [tok, ch] of pCh) {
    if (!hexNamesAnywhere.has(tok)) continue;
    const hex = pHex.get(tok);
    if (!hex) { fail.push(`print: --${tok}-ch has no --${tok} to agree with`); continue; }
    if (!same(hexToCh(hex), ch)) {
      fail.push(`print: --${tok} is ${hex} but --${tok}-ch says ${ch.join(' ')}`);
    }
  }
  /* Key off channel NAMES, not values. chDefs only holds numeric triplets, so a
     token whose only numeric channel lived in this very block vanished from
     chDefs the moment that line was deleted — and the rule below then skipped
     the token it was written to catch. A deliberately-broken control passed
     clean because of it. Names are what the invariant is actually about. */
  const chNamesAnywhere = new Set(
    [...src.matchAll(/--(rk-[\w-]+)-ch:/g)].map((m) => m[1]),
  );
  for (const tok of pHex.keys()) {
    if (chNamesAnywhere.has(tok) && !pCh.has(tok) && !tok.startsWith('rk-accent')) {
      fail.push(`print: --${tok} is overridden for paper but --${tok}-ch is not, so alpha utilities keep their screen colour`);
    }
  }
}

if (fail.length) {
  console.error(`check-token-channels: ${fail.length} problem(s)\n`);
  for (const f of fail) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`check-token-channels: ok — ${pairs} literal pair(s), ${grounds} ground block(s), print block agrees`);
