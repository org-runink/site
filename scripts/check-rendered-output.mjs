#!/usr/bin/env node
/**
 * Fail on things that are only visible in the BUILT html — the failures that
 * leave the build green and the page wrong.
 *
 * Usage: node scripts/check-rendered-output.mjs <publicDir>
 *
 * 1. ZgotmplZ — Go's contextual escaper replaces a value it considers unsafe
 *    for its context with this literal string. The case that bit this repo:
 *    every value interpolated into a `style="…"` attribute goes through a CSS
 *    filter that REJECTS PARENTHESES, so `var(--rk-sunk)` becomes ZgotmplZ and
 *    the declaration dies. Hex colours passed for years because a hex has no
 *    parentheses — the trap only sprang when the colours became tokens. Hugo
 *    reports no error, the page renders, the background is simply gone.
 *    The fix at the call site is `| safeCSS`.
 *
 * 2. Unrendered template syntax — `{{` surviving into output means a template
 *    was emitted as text rather than executed, usually from markdown that was
 *    not processed as a shortcode.
 *
 * 3. Literal `<no value>` — a nil interpolation that Hugo prints rather than
 *    failing on.
 *
 * Each pattern is reported with the pages it appears on, because one bad
 * partial shows up on hundreds of pages and the count is not the story.
 */
import { readFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';

const pub = process.argv[2];
if (!pub) {
  console.error('usage: check-rendered-output.mjs <publicDir>');
  process.exit(2);
}

const PATTERNS = [
  {
    name: 'ZgotmplZ',
    re: /ZgotmplZ/g,
    why: 'Go refused to interpolate a value into its context. In a style attribute this means a var(...) that needs `| safeCSS`; the declaration is currently dropped.',
  },
  {
    name: 'unrendered template syntax',
    re: /\{\{[-\s]*[\w$.]/g,
    why: 'A Go template was emitted as text instead of executed.',
  },
  {
    name: '<no value>',
    re: /&lt;no value&gt;|<no value>/g,
    why: 'A nil interpolation printed itself instead of failing.',
  },
];

const ORPHAN_CLOSE = 'orphaned template terminator';
const hits = new Map([...PATTERNS.map((p) => [p.name, []]), [ORPHAN_CLOSE, []]]);
let pages = 0;

/** A line that is nothing but `}}`, outside <script>/<style>.
 *  Editing a `{{ range slice … }}` block down to a one-line `{{ range … }}` is
 *  easy to do while leaving the original's closing `}}` behind — it then renders
 *  as literal text on the page. The `{{` pattern above cannot see it, and this
 *  shipped twice on the /design/ specimen. Restricted to a line that is ONLY
 *  `}}` and to text context, because JSON-LD legitimately contains `}}`. */
function orphanedClosers(src) {
  let inRaw = false, n = 0;
  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (/<(script|style)\b/i.test(raw)) inRaw = true;
    if (/<\/(script|style)>/i.test(raw)) { inRaw = false; continue; }
    if (!inRaw && line === '}}') n++;
  }
  return n;
}

for await (const f of glob('**/*.html', { cwd: pub })) {
  pages++;
  const src = await readFile(`${pub}/${f}`, 'utf8');
  for (const p of PATTERNS) {
    const m = src.match(p.re);
    if (m) hits.get(p.name).push({ file: f, n: m.length });
  }
  const orphans = orphanedClosers(src);
  if (orphans) hits.get(ORPHAN_CLOSE).push({ file: f, n: orphans });
}
PATTERNS.push({
  name: ORPHAN_CLOSE,
  why: 'A line containing only `}}` reached the page as text — usually a `{{ range slice … }}` collapsed to one line with its old closing delimiter left behind.',
});

let bad = 0;
for (const p of PATTERNS) {
  const rows = hits.get(p.name);
  if (!rows.length) continue;
  bad += rows.length;
  const total = rows.reduce((s, r) => s + r.n, 0);
  console.error(`\n✗ ${p.name}: ${total} occurrence(s) on ${rows.length} page(s)`);
  console.error(`  ${p.why}`);
  for (const r of rows.slice(0, 10)) console.error(`    ${r.file}  (${r.n})`);
  if (rows.length > 10) console.error(`    ... and ${rows.length - 10} more pages`);
}

if (bad) {
  console.error(`\ncheck-rendered-output: failed`);
  process.exit(1);
}
console.log(`check-rendered-output: ok — ${pages} pages, no escaped-away values, no unrendered templates`);
