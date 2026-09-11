#!/usr/bin/env node
/**
 * Finds state distinctions the palette migration erased.
 *
 * A mechanical remap maps many source tokens onto fewer target tokens. That is
 * usually fine — until both branches of a conditional land on the SAME token, at
 * which point the component still compiles, still renders, and silently stops
 * expressing the difference it exists to express.
 *
 * `TabbedPitches` is the case that motivated this:
 *
 *     selected
 *       ? 'border-hairline'
 *       : 'border-hairline hover:border-hairline hover:bg-surface'
 *
 * The selected tab and the unselected tabs paint an identical border. The
 * original was two different colours; the remap collapsed both onto `hairline`.
 * Nothing failed. A grader caught it by sampling five tabs and finding the same
 * RGB in all five — which is not a thing a type system, a contrast check or a
 * usage lint can do.
 *
 * WHAT THIS FLAGS. A ternary inside a class expression where the two branches
 * carry the same set of colour utilities *for the same CSS position*. That means
 * the condition changes nothing visible about colour.
 *
 * WHAT THIS DOES NOT FLAG, deliberately:
 *   - branches that differ in a non-colour utility (`font-bold`, `translate-y`)
 *     — a state may legitimately be signalled by weight or position alone
 *   - branches where one side is empty (`selected ? 'border-fill-accent' : ''`)
 *     — that is a real distinction, just expressed by absence
 *   - the parent/child case: a `selected` class on a parent driving a
 *     `group-*` variant on a child. Same bug, invisible here.
 *
 * A finding is not automatically a defect — `selected ? 'bg-canvas' : 'bg-canvas'`
 * with a differing `font-*` may be intentional. Read each one. But a finding
 * whose branches are colour-identical AND otherwise identical is always a bug.
 *
 * Usage: node scripts/check-collapsed-states.mjs [--quiet]
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const SITE = resolve(PKG, '../..');

/** CSS positions a colour utility can occupy. Two branches only "collide" within one. */
const POSITIONS = ['bg', 'text', 'border', 'ring', 'ring-offset', 'from', 'via', 'to', 'shadow', 'divide', 'outline', 'decoration', 'caret', 'accent', 'fill', 'stroke'].sort((a, b) => b.length - a.length);

/** Values that occupy a colour position's namespace without being colours. */
const NON_COLOUR_VALUES = new Set([
  // shadow sizes
  'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none',
  // text sizes
  'xs', 'base', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',
  // alignment / transform / decoration that share `text-`
  'left', 'right', 'center', 'justify', 'start', 'end',
  'ellipsis', 'clip', 'wrap', 'nowrap', 'balance', 'pretty',
  // keywords
  'current', 'transparent', 'inherit', 'auto',
]);

/**
 * Split a class string into colour utilities keyed by position, preserving any
 * variant prefix — `hover:border-x` and `border-x` are different declarations and
 * collapsing them would produce false matches.
 */
function coloursByPosition(classes) {
  const out = new Map();
  for (const raw of classes.split(/\s+/).filter(Boolean)) {
    const m = raw.match(/^((?:[a-z0-9-]+:)*)(.+)$/);
    if (!m) continue;
    const [, variants, rest] = m;
    /*
     * Split on the LONGEST position prefix, not a greedy character class. A greedy
     * `([a-z-]+)-(.+)` parses `bg-fill-success` as position `bg-fill` / value
     * `success`, which is not a known position, so the utility is silently skipped —
     * that made the first version of this scan almost entirely vacuous while
     * printing a confident green tick. Sorted longest-first so `ring-offset` wins
     * over `ring`.
     */
    const pos = POSITIONS.find((p) => rest.startsWith(`${p}-`));
    if (!pos) continue;
    const value = rest.slice(pos.length + 1);
    // Skip non-colour values that share a position prefix (border-2, from-0%).
    if (/^\d+(\.\d+)?(px|rem|%)?$/.test(value)) continue;
    /*
     * Several positions are overloaded: `shadow-lg` is a SIZE and `shadow-glow-accent`
     * is a colour; `border-2` is a width; `fill-none` is a keyword. Counting the size
     * forms as colour produced pure noise on the first run — `monitor` and `cockpit`
     * were reported as "identical" because both carry `hover:shadow-xl`.
     */
    if (NON_COLOUR_VALUES.has(value)) continue;
    const key = `${variants}${pos}`;
    if (!out.has(key)) out.set(key, new Set());
    out.get(key).add(value);
  }
  return out;
}

function nonColourClasses(classes) {
  return classes
    .split(/\s+/)
    .filter(Boolean)
    .filter((c) => {
      const m = c.match(/^((?:[a-z0-9-]+:)*)([a-z-]+)-(.+)$/);
      return !(m && POSITIONS.includes(m[2]));
    })
    .sort()
    .join(' ');
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx$/.test(name)) out.push(p);
  }
  return out;
}

const files = [...walk(join(PKG, 'src')), ...walk(join(SITE, '.design-sync/previews'))];
const findings = [];

/*
 * Match `<cond> ? '<a>' : '<b>'` where both arms are string literals. Template
 * literals and nested ternaries are out of scope — they need a real parser, and
 * the literal form is where the remap damage actually landed.
 */
const TERNARY = /\?\s*(['"])([^'"]*)\1\s*:\s*(['"])([^'"]*)\3/g;

/*
 * No-op interaction states, found within ONE class string.
 *
 * `border-hairline … group-hover:border-hairline` declares a hover that paints
 * exactly what is already there. The element still looks interactive in source and
 * does nothing on the pointer. This is the same remap damage as a collapsed
 * ternary — two source tokens landed on one target — but it hides in a single
 * string, so neither the ternary scan nor the map scan could see it. Three real
 * instances were found by an agent reading prose, not by this script.
 *
 * Only `hover`/`focus`/`active`-family variants count. A `dark:`/`md:` variant
 * repeating the base value is redundant rather than wrong — it can be how a
 * declaration is deliberately pinned across a breakpoint or a ground.
 */
const INTERACTION = /^(?:group-)?(?:hover|focus|focus-visible|focus-within|active)$/;

function noOpStates(classes) {
  const byKey = coloursByPosition(classes);
  const out = [];
  for (const [key, values] of byKey) {
    const idx = key.lastIndexOf(':');
    if (idx === -1) continue;
    const variants = key.slice(0, idx).split(':').filter(Boolean);
    const pos = key.slice(idx + 1);
    // Only single-variant interaction states; a compound like `md:hover:` is
    // conditional on more than the pointer and is not necessarily a no-op.
    if (variants.length !== 1 || !INTERACTION.test(variants[0])) continue;
    const base = byKey.get(pos);
    if (!base) continue;
    const a = [...base].sort().join(',');
    const b = [...values].sort().join(',');
    if (a === b) out.push({ variant: variants[0], pos, value: b });
  }
  return out;
}

const noOps = [];
function scanNoOps(classes, where) {
  for (const n of noOpStates(classes)) {
    noOps.push({ where, ...n });
  }
}

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(TERNARY)) {
    const [a, b] = [m[2], m[4]];
    if (!a.trim() || !b.trim()) continue; // absence is a real distinction

    const ca = coloursByPosition(a);
    const cb = coloursByPosition(b);
    if (ca.size === 0 && cb.size === 0) continue; // no colour at stake

    /*
     * Compare only the BASE positions — those with no variant prefix.
     *
     * A difference that lives entirely in `hover:` / `focus:` does NOT rescue a
     * collapsed state, and treating it as if it did is what let TabbedPitches
     * through the first version of this check. Its selected arm is
     * `border-hairline` and its unselected arm is
     * `border-hairline hover:border-hairline hover:bg-surface` — the arms differ,
     * so a naive set comparison clears it, but at rest all five tabs paint the
     * same border. A grader caught it by sampling five tabs and finding one
     * colour. Selection state must be visible without pointing at it.
     */
    const base = (map) => {
      const out = new Map();
      for (const [k, v] of map) if (!k.includes(':')) out.set(k, [...v].sort().join(','));
      return out;
    };
    const ba = base(ca);
    const bb = base(cb);
    if (ba.size === 0 && bb.size === 0) continue; // colour only in variants — out of scope

    const positions = new Set([...ba.keys(), ...bb.keys()]);
    let collapsed = true;
    for (const p of positions) {
      if ((ba.get(p) ?? '') !== (bb.get(p) ?? '')) { collapsed = false; break; }
    }
    if (!collapsed) continue;

    const line = src.slice(0, m.index).split('\n').length;
    // Only variant-level colour differs → the state is visible on hover alone.
    const variantOnly = nonColourClasses(a) === nonColourClasses(b)
      && JSON.stringify([...ca.keys()].sort()) !== JSON.stringify([...cb.keys()].sort());
    findings.push({
      where: `${relative(SITE, file)}:${line}`,
      a, b,
      otherwiseIdentical: nonColourClasses(a) === nonColourClasses(b),
      variantOnly,
    });
  }

  /*
   * No-op interaction states live in ordinary class attributes as well as in the
   * ternaries above, so scan every className VALUE in the file. `[\s\S]` because
   * class strings routinely wrap across lines.
   */
  const CLASS_ATTR = /(?:className|class)\s*=\s*(?:"([\s\S]*?)"|\{`([\s\S]*?)`\}|\{cx\(([\s\S]*?)\)\s*\})/g;
  for (const m of src.matchAll(CLASS_ATTR)) {
    const classes = (m[1] ?? m[2] ?? m[3] ?? '')
      .replace(/\/\*[\s\S]*?\*\//g, ' ')
      .replace(/\/\/[^\n]*/g, ' ')
      .replace(/['"]/g, ' ');
    scanNoOps(classes, `${relative(SITE, file)}:${src.slice(0, m.index).split('\n').length}`);
  }

  /*
   * Bare string constants — `const CONTROL = 'border-hairline focus:border-hairline …'`.
   *
   * Components hoist a shared class string for a repeated element (every field in a
   * form, every row in a list) into a plain `const`. That is neither a className
   * attribute nor a map, so both scans above missed it — and the one real instance
   * was `ContactSection`'s CONTROL, which put the dead `focus:` on EVERY field of the
   * contact form at once. The widest-blast-radius instance was the one the script
   * could not see.
   */
  const CONST_STR = /const\s+[A-Z_][A-Za-z0-9_]*\s*(?::[^=]*)?=\s*(['"])([^'"]{12,})\1/g;
  for (const m of src.matchAll(CONST_STR)) {
    scanNoOps(m[2], `${relative(SITE, file)}:${src.slice(0, m.index).split('\n').length}`);
  }
}

/*
 * The other shape the remap damaged: a `Record<Tone, string>` lookup where two
 * DIFFERENT prop values now resolve to the same colours. The component still
 * accepts five tones and still compiles; it just paints four. `Badge`'s tones and
 * `FeaturesList`'s accent ladder both lost a rung this way — graders found them by
 * sampling a sweep cell and seeing two pills with one fill.
 *
 * Matched on the `key: 'classes',` object-literal form, which is how every tone
 * map in this package is written.
 */
const mapFindings = [];
const MAP_BLOCK = /const\s+([A-Z_][A-Za-z0-9_]*)\s*(?::[^=]*)?=\s*\{([\s\S]*?)\n\}/g;
const MAP_ENTRY = /^\s*['"]?([A-Za-z0-9_-]+)['"]?\s*:\s*(['"])([^'"]*)\2\s*,?\s*$/gm;

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  for (const block of src.matchAll(MAP_BLOCK)) {
    /*
     * FLAT maps only — `tone: 'classes'`. A nested map (`tone: { panel, tile }`)
     * has a second meaning for its inner keys, and flattening it compares slots
     * ACROSS tones, which is nonsense: it reported `Header.ACTIONS`'s `desktop`
     * and `mobile` as a collapsed pair when they are two placements of one action
     * and are *supposed* to share a colour, and `ReasonsGrid`'s `accent` vs `tile`
     * likewise. Comparing whole nested tones properly needs a real parser; until
     * then, silence beats two confident false positives.
     */
    // Map entries are class strings too, and carry the same no-op hovers.
    for (const e of block[2].matchAll(MAP_ENTRY)) {
      scanNoOps(e[3], `${relative(SITE, file)}:${src.slice(0, block.index + e.index).split('\n').length}`);
    }
    if (block[2].includes('{')) continue;
    const entries = [...block[2].matchAll(MAP_ENTRY)].map((e) => ({ key: e[1], classes: e[3] }));
    if (entries.length < 2) continue;
    const seen = new Map();
    for (const e of entries) {
      const sig = [...coloursByPosition(e.classes)].map(([k, v]) => `${k}=${[...v].sort()}`).sort().join('|');
      if (!sig) continue; // no colour in this entry
      if (!seen.has(sig)) seen.set(sig, []);
      seen.get(sig).push(e.key);
    }
    for (const [sig, keys] of seen) {
      if (keys.length < 2) continue;
      mapFindings.push({
        where: `${relative(SITE, file)}:${src.slice(0, block.index).split('\n').length}`,
        name: block[1], keys, sig,
      });
    }
  }
}

const certain = findings.filter((f) => f.otherwiseIdentical);
const review = findings.filter((f) => !f.otherwiseIdentical);

console.log(`collapsed-states: scanned ${files.length} files`);

if (review.length) {
  console.log(`\n  ${review.length} conditional(s) colour-identical but differing elsewhere — read, do not assume:`);
  for (const f of review) console.log(`    ${f.where}\n      ? ${f.a}\n      : ${f.b}`);
}

let failed = false;

if (certain.length) {
  console.error(`\n✗ ${certain.length} conditional(s) paint identically at rest:\n`);
  for (const f of certain) {
    console.error(`  ${f.where}`);
    console.error(`    ? ${f.a}`);
    console.error(`    : ${f.b}`);
    console.error(f.variantOnly
      ? '    the arms differ only in hover/focus variants — the state is invisible at rest'
      : '    the condition changes nothing — the state distinction was lost in the remap');
  }
  failed = true;
}

if (mapFindings.length) {
  console.error(`\n✗ ${mapFindings.length} lookup(s) map different values to the same colours:\n`);
  for (const f of mapFindings) {
    console.error(`  ${f.where}  ${f.name}`);
    console.error(`    ${f.keys.join(', ')} all paint ${f.sig || '(no colour)'}`);
    console.error('    the component accepts these as distinct but renders them identically');
  }
  failed = true;
}

if (noOps.length) {
  console.error(`\n✗ ${noOps.length} no-op interaction state(s):\n`);
  for (const n of noOps) {
    console.error(`  ${n.where}`);
    console.error(`    \`${n.variant}:${n.pos}-${n.value}\` repeats the rest state \`${n.pos}-${n.value}\``);
    console.error('    the element looks interactive in source and does nothing on the pointer');
  }
  failed = true;
}

if (failed) process.exit(1);
console.log('✓ no conditional or lookup paints two states the same colour, and no hover is a no-op');
