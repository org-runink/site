#!/usr/bin/env node
/**
 * Assert the FAQ disclosure is still a disclosure, in the RENDERED output.
 *
 * WHY THIS READS THE BUILD AND NOT THE TEMPLATE. The shortcode used to be a
 * `<button aria-expanded>` beside a `display:grid` panel held at
 * `grid-template-rows: 0fr`, with an inline onclick flipping the track to
 * `1fr`. The template was correct-looking and the shipped page was not:
 * Hugo's HTML minifier rewrites CSS inside `style` attributes, and normalising
 * a zero length by dropping its unit turned `0fr` into `0px` on the way out.
 * Collapsed, `0fr` and `0px` are the same zero, so nothing looked wrong — but
 * `0fr -> 1fr` interpolates and `0px -> 1fr` cannot, so the transition the
 * markup was built around had, in the built page, nothing it could animate.
 *
 * A template-level check could not have seen that. Neither could a screenshot
 * of the closed state, which is what the panel was supposed to look like. Only
 * parsing what the build actually emitted shows it, which is why this file
 * exists and why every assertion below is made against the output directory.
 *
 * WHAT IT ENFORCES.
 *   1. Every FAQ card is a native <details>/<summary>. The open state lives in
 *      the `open` attribute, which is what the accessibility tree reads, so
 *      there is no aria-expanded to drift out of sync with the height.
 *   2. No script anywhere in the FAQ. An `onclick` here is the old design
 *      coming back.
 *   3. No inline `style` attribute inside a FAQ card. That attribute is the
 *      surface the minifier is allowed to rewrite; the fix removed it, and
 *      this keeps it removed.
 *   4. No `grid-template-rows` in any inline style in the whole build — the
 *      specific value that broke, named so the regression is unmistakable.
 *   5. Every question has a non-empty answer in the markup. An answer that is
 *      only reachable by script is not reachable by a crawler or by paper.
 *   6. The stylesheet still forces collapsed answers open for print. A
 *      disclosure that prints as six headings and no answers is CONTENT.md
 *      rule 6, and it is how this component shipped for its whole life.
 *
 * USAGE: node scripts/check-faq-disclosure.mjs [renderedDir]   (default: public)
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ?? 'public';

if (!existsSync(root)) {
  console.error(`check-faq-disclosure: no such directory: ${root}`);
  process.exit(1);
}

/** Every index.html under the rendered tree. */
async function* pages(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* pages(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

/** Slice out each `<details ... class="...rk-faq...">...</details>`, nesting-aware. */
function faqCards(html) {
  const cards = [];
  const open = /<details\b[^>]*\brk-faq\b[^>]*>/g;
  let m;
  while ((m = open.exec(html))) {
    const start = m.index;
    let depth = 0;
    const tag = /<(\/?)details\b/g;
    tag.lastIndex = start;
    let t;
    while ((t = tag.exec(html))) {
      depth += t[1] ? -1 : 1;
      if (depth === 0) {
        cards.push(html.slice(start, html.indexOf('>', t.index) + 1));
        open.lastIndex = t.index;
        break;
      }
    }
  }
  return cards;
}

const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const fail = [];
let nPages = 0;
let nCards = 0;

for await (const file of pages(root)) {
  const html = await readFile(file, 'utf8');
  const where = path.relative(root, file);

  // (4) is a whole-build assertion: the broken value must not reappear anywhere.
  for (const s of html.matchAll(/\sstyle="([^"]*)"/g)) {
    if (/grid-template-rows/i.test(s[1])) {
      fail.push(`${where}: inline style sets grid-template-rows ("${s[1]}") — the collapsed-grid disclosure is back`);
    }
  }

  if (!html.includes('rk-faq')) continue;
  nPages++;

  const cards = faqCards(html);
  if (!cards.length) {
    fail.push(`${where}: page references rk-faq but no <details class="rk-faq"> was rendered`);
    continue;
  }

  // A leftover button-based FAQ would still carry the old class names.
  if (/<button[^>]*\brk-faq\b/.test(html)) {
    fail.push(`${where}: a FAQ control is still a <button> — it must be a <summary>`);
  }

  for (const [i, card] of cards.entries()) {
    nCards++;
    const id = `${where} card ${i + 1}`;

    if (!/<summary\b/.test(card)) fail.push(`${id}: <details> has no <summary>`);
    if (/\bon[a-z]+\s*=/i.test(card)) fail.push(`${id}: carries an inline event handler — the disclosure must need no script`);
    if (/\sstyle="/.test(card)) fail.push(`${id}: carries an inline style attribute — the minifier is free to rewrite it`);
    if (/\baria-expanded\b/.test(card)) fail.push(`${id}: sets aria-expanded — <details> already exposes the state, and two sources disagree`);
    if (/\bopen\b(?=[\s>])/.test(card.slice(0, card.indexOf('>')))) fail.push(`${id}: ships already open`);

    const body = card.match(/class="[^"]*\brk-faq__a\b[^"]*"[^>]*>([\s\S]*?)<\/details>/);
    if (!body || strip(body[1]).length < 2) fail.push(`${id}: has no answer body`);

    const q = card.match(/<summary[\s\S]*?<\/summary>/);
    if (!q || strip(q[0]).length < 2) fail.push(`${id}: has an empty question`);
  }
}

// (6) The print rule, read out of the stylesheet the build actually emitted.
const cssDir = path.join(root, 'css');
let printOk = false;
let cssSeen = null;
if (existsSync(cssDir)) {
  for (const f of await readdir(cssDir)) {
    if (!/^main(\.min)?\..*\.css$/.test(f)) continue;
    cssSeen = f;
    const css = await readFile(path.join(cssDir, f), 'utf8');
    const printBlocks = [...css.matchAll(/@media print\{([\s\S]*?)\}\s*(?=@|$)/g)].map((m) => m[1]);
    printOk = printBlocks.some(
      (b) => /\.rk-faq::details-content\{[^}]*content-visibility:visible/.test(b) &&
             /\.rk-faq:not\(\[open\]\)/.test(b),
    );
    if (printOk) break;
  }
}
if (nCards && !printOk) {
  fail.push(
    `stylesheet${cssSeen ? ` (css/${cssSeen})` : ''}: no @media print rule forces .rk-faq open — ` +
    `collapsed answers will print as nothing (CONTENT.md rule 6)`,
  );
}

if (fail.length) {
  console.error(`\ncheck-faq-disclosure: ${fail.length} problem(s)\n`);
  for (const f of fail.slice(0, 40)) console.error(`  ${f}`);
  if (fail.length > 40) console.error(`  ... and ${fail.length - 40} more`);
  process.exit(1);
}

console.log(
  `check-faq-disclosure: ok — ${nCards} native <details> disclosure(s) across ${nPages} page(s), ` +
  `no inline handlers, no inline styles, print rule present`,
);
