#!/usr/bin/env node
/**
 * Find interaction states that paint the same colour as their own base.
 *
 * WHY. The stone scale is now rebound per position onto the FACE ramp
 * (see tailwind.config.js). Eleven rungs collapse onto three or four tokens, so
 * two rungs that used to differ can land on the SAME token — and when the pair
 * happens to be `border-stone-800` with `hover:border-stone-700`, the hover
 * still compiles, still has a `:hover` selector, and paints nothing new. The
 * element looks interactive in the markup, in the CSS, and in a screenshot of
 * either state. Only a screenshot of BOTH states, compared, would show it.
 *
 * This caught `.card:hover` on the first run, which had been emitting
 * `border-color: rgb(var(--rk-rule-ch))` for both states.
 *
 * HOW. Read the class lists out of the templates, pair every `variant:pos-value`
 * with the `pos-value` on the same element, resolve both through the *resolved*
 * Tailwind theme for that position, and report pairs that resolve identically.
 * Resolving through the real theme is the point — the mapping lives in one
 * place and this must not restate it, or it will agree with a stale copy.
 *
 * Also reports a variant with no base at all in that position: `hover:text-x`
 * on an element with no `text-*` is not dead, but it is usually a mistake, so
 * it is listed separately and does not fail the build.
 */
import { readFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import resolveConfig from 'tailwindcss/resolveConfig.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const theme = resolveConfig(require('../tailwind.config.js')).theme;

/** Tailwind prefix -> the theme key that actually resolves it. */
const POSITION = {
  bg: 'backgroundColor', text: 'textColor', border: 'borderColor',
  ring: 'ringColor', divide: 'divideColor', outline: 'outlineColor',
  decoration: 'textDecorationColor', placeholder: 'placeholderColor',
  shadow: 'boxShadowColor', fill: 'fill', stroke: 'stroke',
  from: 'gradientColorStops', to: 'gradientColorStops', via: 'gradientColorStops',
};
const VARIANTS = ['hover', 'focus', 'focus-visible', 'focus-within', 'active',
                  'group-hover', 'group-focus'];

/** Resolve `stone-800` / `white` / `[#ea580c]` in a position to its final value. */
function resolve(pos, value) {
  const palette = theme[POSITION[pos]];
  if (!palette) return null;
  const arb = value.match(/^\[(.+)\]$/);
  if (arb) return arb[1].toLowerCase();
  const m = value.match(/^([a-z]+)-(\d+)$/);
  const got = m ? palette[m[1]]?.[m[2]] : palette[value];
  return typeof got === 'string' ? got : null;
}

const POS_ALT = Object.keys(POSITION).join('|');
/* The value may be hyphenated — `signal-fill`, `rule-strong`, `signal-fill-hover`,
   `ink-2`. An earlier version matched only `[a-z]+(-\d+)?`, which truncated
   `bg-signal-fill` and `hover:bg-signal-fill-hover` to the same `signal` and
   reported three confident false collapses, one of which was a button whose
   hover demonstrably changes colour. It also swallowed the `/alpha` suffix,
   so two different opacities compared equal. Match the whole name. */
const UTIL = new RegExp(
  `(?:(${VARIANTS.join('|')}):)?(${POS_ALT})-((?:\\[[^\\]]+\\])|(?:[a-z][a-z0-9]*(?:-[a-z0-9]+)*))(?:\\/(\\d{1,3}))?`,
  'g',
);

/* The vendored theme's layouts are ALL shadowed by a project file of the same
   relative path — 43 of 43 — so Hugo never renders one of them. Reporting a
   dead hover in a template that cannot render sends someone to edit vendor code
   for no effect, which is worse than silence. Skip a theme file when the
   project shadows it, and say how many were skipped so the exclusion is visible
   rather than assumed. */
const files = [];
let shadowed = 0;
for (const pat of ['layouts/**/*.html', 'content/**/*.md', 'content/**/*.html',
                   'themes/*/layouts/**/*.html']) {
  for await (const f of glob(pat)) {
    const themed = f.match(/^themes\/[^/]+\/(layouts\/.+)$/);
    if (themed && existsSync(themed[1])) { shadowed++; continue; }
    files.push(f);
  }
}

const dead = [];
const orphan = [];

for (const file of files) {
  const src = await readFile(file, 'utf8');
  const lines = src.split('\n');
  for (let i = 0; i < lines.length; i++) {
    for (const attr of lines[i].matchAll(/class\s*=\s*["']([^"']+)["']/g)) {
      const base = new Map();     // pos -> {value, resolved, alpha}
      const states = [];          // {variant, pos, value, resolved, alpha}
      for (const u of attr[1].matchAll(UTIL)) {
        const [, variant, pos, value, alpha] = u;
        const resolved = resolve(pos, value);
        if (resolved === null) continue;          // not a colour utility
        const rec = { variant, pos, value, resolved, alpha: alpha ?? null };
        if (variant) states.push(rec);
        else if (!base.has(pos)) base.set(pos, rec);
      }
      for (const s of states) {
        const b = base.get(s.pos);
        if (!b) {
          orphan.push({ file, line: i + 1, s });
        } else if (b.resolved === s.resolved && b.alpha === s.alpha) {
          dead.push({ file, line: i + 1, b, s });
        }
      }
    }
  }
}

const group = (rows, key) => {
  const m = new Map();
  for (const r of rows) {
    const k = key(r);
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
};

if (orphan.length) {
  console.log(`\nstates with no base in the same position (${orphan.length}) — not dead, but check:`);
  for (const [k, n] of group(orphan, (r) => `${r.s.variant}:${r.s.pos}-${r.s.value}`).slice(0, 12)) {
    console.log(`  ${String(n).padStart(4)}x  ${k}`);
  }
}

if (dead.length) {
  console.error(`\ncheck-dead-states: ${dead.length} state(s) paint the same colour as their base\n`);
  for (const [k, n] of group(dead, (r) => `${r.b.pos}-${r.b.value}  +  ${r.s.variant}:${r.s.pos}-${r.s.value}   both -> ${r.b.resolved}`)) {
    console.error(`  ${String(n).padStart(4)}x  ${k}`);
  }
  const where = [...new Set(dead.map((r) => `${r.file}:${r.line}`))];
  console.error(`\nfirst sites:`);
  for (const w of where.slice(0, 10)) console.error(`  ${w}`);
  if (where.length > 10) console.error(`  ... and ${where.length - 10} more`);
  process.exit(1);
}

console.log(`check-dead-states: ok — scanned ${files.length} files (${shadowed} shadowed theme templates skipped), no state paints its own base colour`);
