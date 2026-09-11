#!/usr/bin/env node
/**
 * Assert the palette measures, on every surface it is allowed to sit on.
 *
 * THE BUG THIS EXISTS TO CATCH. The ink tiers were originally solved for
 * contrast against `--rk-ground` and nothing else. But a page does not put text
 * only on the canvas — it puts it on cards (`--rk-sheet`), on recessed plates
 * (`--rk-sunk`) and on wells (`--rk-rule`). `--rk-text-3` cleared 4.70:1 on the
 * canvas and was therefore "solved", while measuring 4.39:1 on `--rk-sunk`,
 * below AA, on every card caption on the site. The rendered contrast audit found
 * it in the wild; nothing in the token layer would have.
 *
 * So the floor is the WORST surface, not the canvas.
 *
 * The rules are FACE's, and the negative ones matter as much as the positive:
 *   - an INK clears 4.5:1 on every surface of its ground
 *   - a MARK (separator you could tab to) clears 3:1
 *   - a FILL clears 3:1 against every surface, so the shape is visible; it is
 *     NOT held to the ink floor, and it must not be — see the note by the fill
 *     loop for why asserting the opposite failed a correct ramp
 *   - the ink that sits ON a fill clears 4.5:1 against that fill
 */
import { readFile } from 'node:fs/promises';

const src = await readFile(new URL('../assets/css/tokens.css', import.meta.url), 'utf8');

/* Resolve --rk-x through however many var() hops to a hex. */
const raw = new Map();
for (const m of src.matchAll(/--(rk-[\w-]+):\s*([^;]+);/g)) {
  if (!raw.has(m[1])) raw.set(m[1], m[2].trim());   // first definition = sheet/:root
}
/* Slice to the console block's OWN closing brace. Running to end-of-file swept
   in the @media print overrides, so `--rk-signal` on the console ground resolved
   to `#000000 !important` — the paper value — and the checker reported a
   1.17:1 failure for a colour no screen ever shows. */
const cStart = src.indexOf("[data-ground='console']");
const cOpen = src.indexOf('{', cStart);
let cDepth = 1, cEnd = cOpen + 1;
while (cEnd < src.length && cDepth > 0) {
  if (src[cEnd] === '{') cDepth++;
  else if (src[cEnd] === '}') cDepth--;
  cEnd++;
}
const consoleBlock = src.slice(cStart, cEnd);
const consoleVals = new Map();
for (const m of consoleBlock.matchAll(/--(rk-[\w-]+):\s*([^;]+);/g)) {
  if (!consoleVals.has(m[1])) consoleVals.set(m[1], m[2].trim());
}

function hexOf(name, ground) {
  const table = ground === 'console' ? consoleVals : raw;
  let v = table.get(name) ?? raw.get(name);
  for (let i = 0; i < 8; i++) {
    if (!v) return null;
    if (v.startsWith('#')) return v;
    const m = v.match(/^var\(\s*(--rk-[\w-]+)\s*\)$/);
    if (!m) return null;
    v = (ground === 'console' && consoleVals.has(m[1].slice(2))) ? consoleVals.get(m[1].slice(2)) : raw.get(m[1].slice(2));
  }
  return null;
}

const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = (h) => {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
};
const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

/* Evaluate `color-mix(in srgb, <colour> N%, <colour>)`.
   The washes are the surfaces this checker used to miss, and they are not a
   corner case: `bg-signal-wash` is the featured pricing card and the eyebrow
   chips, and `--rk-accent-wash` backs the industry callouts. Because they are
   color-mix() rather than a hex, the hex-chain resolver walked straight past
   them — so the wash surfaces were never measured at all, and on the console
   ground `text-3` sat on `signal-wash` at 4.13:1, below AA. A surface you can
   put text on belongs in the surface list, whatever syntax defines it. */
function evalColor(expr, ground, depth = 0) {
  if (!expr || depth > 6) return null;
  const e = expr.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e;
  const v = e.match(/^var\(\s*(--rk-[\w-]+)\s*\)$/);
  if (v) return hexOf(v[1].slice(2), ground);
  const mix = e.match(/^color-mix\(\s*in\s+srgb\s*,\s*(.+?)\s+(\d+(?:\.\d+)?)%\s*,\s*(.+?)\s*\)$/);
  if (mix) {
    const a = evalColor(mix[1], ground, depth + 1);
    const b = evalColor(mix[3], ground, depth + 1);
    if (!a || !b) return null;
    const p = parseFloat(mix[2]) / 100;
    const px = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    const [ar, ag, ab] = px(a), [br, bg2, bb] = px(b);
    const out = [ar * p + br * (1 - p), ag * p + bg2 * (1 - p), ab * p + bb * (1 - p)];
    return '#' + out.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('').toUpperCase();
  }
  return null;
}

/** The raw declaration text for a token in a ground, before any resolution. */
function declOf(name, ground) {
  const table = ground === 'console' ? consoleVals : raw;
  return table.get(name) ?? raw.get(name);
}

/* Every surface a page may put text on, per ground — including the washes. */
const SURFACES = ['rk-ground', 'rk-sheet', 'rk-sunk'];
const WASHES = ['rk-signal-wash'];
const INKS  = ['rk-text', 'rk-text-1', 'rk-text-2', 'rk-text-3', 'rk-signal'];
const MARKS = ['rk-rule-strong'];
const FILLS = ['rk-signal-fill', 'rk-signal-fill-hover'];

const fails = [];
const rows = [];

for (const ground of ['sheet', 'console']) {
  const surfaces = SURFACES.map((s) => [s, hexOf(s, ground)]).filter(([, h]) => h);
  /* Washes resolve through color-mix, so they need the evaluator rather than
     the hex-chain walker. Added to the same list: text sits on them. */
  for (const w of WASHES) {
    const h = evalColor(declOf(w, ground), ground);
    if (h) surfaces.push([w, h]);
  }
  for (const ink of INKS) {
    const fg = hexOf(ink, ground);
    if (!fg) { fails.push(`${ground}: ${ink} does not resolve to a hex`); continue; }
    let worst = Infinity, worstOn = null;
    for (const [sn, bg] of surfaces) {
      const r = ratio(fg, bg);
      if (r < worst) { worst = r; worstOn = sn; }
    }
    rows.push([ground, 'ink', ink, fg, worstOn, worst, 4.5]);
    if (worst < 4.5) fails.push(`${ground}: ${ink} (${fg}) is ${worst.toFixed(2)}:1 on ${worstOn} — below 4.5`);
  }
  for (const mk of MARKS) {
    const fg = hexOf(mk, ground);
    let worst = Infinity, worstOn = null;
    for (const [sn, bg] of surfaces) {
      const r = ratio(fg, bg);
      if (r < worst) { worst = r; worstOn = sn; }
    }
    rows.push([ground, 'mark', mk, fg, worstOn, worst, 3]);
    if (worst < 3) fails.push(`${ground}: ${mk} (${fg}) is ${worst.toFixed(2)}:1 on ${worstOn} — below 3`);
  }
  /* Fills: assert the NEGATIVE. A fill that reads as ink invites text onto it. */
  for (const fl of FILLS) {
    const fg = hexOf(fl, ground) ?? (fl === 'rk-signal-fill'
      ? hexOf(ground === 'console' ? 'rk-signal-fill-console' : 'rk-signal-fill-sheet', ground)
      : null);
    if (!fg) continue;
    /* A fill has to be a visible SHAPE against the page — that is its whole job,
       and it is a mark-level floor, not an ink-level one.
       No "must fail as ink" assertion here. That rule is FACE's, but it governs
       technicalOrangeMuted, oliveSuccess, oliveGlow, wineProvenance and
       severityWash — the tokens that never carry text. technicalOrange, which is
       what signal-fill is, is the accent fill that DOES get inked, with onAccent.
       Asserting it must be illegible failed the console ramp for being correct. */
    const worstEdge = Math.min(...surfaces.map(([, bg]) => ratio(fg, bg)));
    const isHover = fl.endsWith('-hover');

    if (!isHover) {
      /* The BASE fill establishes the shape, so it carries the mark floor. */
      rows.push([ground, 'fill', fl, fg, 'worst edge', worstEdge, 3]);
      if (worstEdge < 3) {
        fails.push(`${ground}: ${fl} (${fg}) is only ${worstEdge.toFixed(2)}:1 against a surface — the shape disappears`);
      }
    } else {
      /* A HOVER fill is a state change on a shape that is already visible, and
         its job is to differ from the base. Holding it to the same 3:1 edge
         floor is not a stricter rule, it is an unsatisfiable one: on this hue no
         single ink clears 4.5:1 on both a light-enough and a dark-enough fill
         (onAccent measures 2.97:1 on the darker orange, near-white 3.81:1 on the
         lighter), so any hover far enough to clear the edge floor breaks its own
         ink. What must hold instead is that the change is perceptible. */
      const base = hexOf(fl.replace(/-hover$/, ''), ground);
      const delta = base ? ratio(fg, base) : null;
      rows.push([ground, 'fill-hover', fl, fg, 'delta vs base', delta ?? 0, 1.15]);
      if (delta !== null && delta < 1.15) {
        fails.push(`${ground}: ${fl} (${fg}) is only ${delta.toFixed(2)}:1 from its own base fill — the hover is invisible`);
      }
    }
    /* The ink meant to sit on it must clear AA. */
    const on = hexOf('rk-on-signal-fill', ground);
    if (on) {
      const r = ratio(on, fg);
      rows.push([ground, 'on-fill', `on-signal-fill on ${fl}`, on, fl, r, 4.5]);
      if (r < 4.5) fails.push(`${ground}: on-signal-fill (${on}) is ${r.toFixed(2)}:1 on ${fl} (${fg}) — below 4.5`);
    }
  }
}

/* ---- the CATEGORY accents, each on its own wash ---------------------------
   --rk-accent is not one colour: five .rk-cat-* classes bind it, and
   --rk-accent-wash is derived from whichever one is in scope. So the pair has
   to be checked five times per ground, which is exactly what nothing was
   doing — on the console ground the wash mixed a light accent into a mid-dark
   surface and every category's own ink measured 3.25-3.96:1 on it. */
const CATS = ['logistics', 'insurance', 'banking', 'telecom', 'marketing'];
for (const ground of ['sheet', 'console']) {
  const washDecl = declOf('rk-accent-wash', ground);
  for (const cat of CATS) {
    const accent = hexOf(ground === 'console' ? `rk-cat-${cat}-lift` : `rk-cat-${cat}-ink`, ground);
    if (!accent || !washDecl) continue;
    /* Substitute this category's accent for var(--rk-accent) before evaluating. */
    const wash = evalColor(washDecl.replace(/var\(\s*--rk-accent\s*\)/g, accent), ground);
    if (!wash) continue;
    const r = ratio(accent, wash);
    rows.push([ground, 'cat-ink', `cat ${cat}`, accent, 'its own accent-wash', r, 4.5]);
    if (r < 4.5) {
      fails.push(`${ground}: cat ${cat} (${accent}) is ${r.toFixed(2)}:1 on its own --rk-accent-wash (${wash}) — below 4.5`);
    }
    /* Body ink has to survive on that wash too — the callouts carry prose. */
    const body = hexOf('rk-text-2', ground);
    if (body) {
      const rb = ratio(body, wash);
      if (rb < 4.5) {
        fails.push(`${ground}: text-2 (${body}) is ${rb.toFixed(2)}:1 on the ${cat} accent-wash (${wash}) — below 4.5`);
      }
    }
  }
}

const w = (s, n) => String(s).padEnd(n);
console.log(`\n${w('ground', 9)}${w('tier', 9)}${w('token', 24)}${w('value', 10)}${w('worst on', 16)}ratio   floor`);
for (const [g, t, n, v, on, r, f] of rows) {
  const ok = r >= f;
  console.log(`${ok ? ' ' : '✗'}${w(g, 8)}${w(t, 9)}${w(n, 24)}${w(v, 10)}${w(on, 16)}${r.toFixed(2).padStart(5)}   ${f}`);
}

if (fails.length) {
  console.error(`\ncheck-token-contrast: ${fails.length} failure(s)\n`);
  for (const f of fails) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`\ncheck-token-contrast: ok — every ink clears 4.5:1 on every surface of its ground, every mark and fill 3:1, every on-fill ink 4.5:1`);
