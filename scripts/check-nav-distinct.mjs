#!/usr/bin/env node
/**
 * No two navigation controls may point at the same place.
 *
 * WHY. The header had grown two exact duplicates, and neither was obvious from
 * reading the config:
 *   - a "Check it out" button whose original /demo/ target 404s. Rather than
 *     removing it, someone repointed it at /industries/ — where the "Industries"
 *     menu item already went.
 *   - "What makes it a painkiller", pointed at /blog/whitepapers/, which the
 *     "Whitepapers" entry under Blog also pointed at.
 *
 * Both were reasonable individual edits. The redundancy only exists in the
 * aggregate, which is exactly the kind of thing a person reading one block at a
 * time will not see and a machine will.
 *
 * Reads the RENDERED header, not the config, so it also catches duplicates
 * introduced by a template rather than by hugo.toml.
 *
 * Usage: node scripts/check-nav-distinct.mjs <publicDir>
 */
import { readFile } from 'node:fs/promises';

const pub = process.argv[2];
if (!pub) { console.error('usage: check-nav-distinct.mjs <publicDir>'); process.exit(2); }

/* One representative page per language. The header is identical across a
   language's pages, so scanning all 709 would say the same thing 709 times. */
const PAGES = [
  ['en', 'index.html'],
  ['fr', 'fr/index.html'],
  ['es', 'es/index.html'],
  ['pt', 'pt/index.html'],
];

const fails = [];
let checked = 0;

for (const [lang, file] of PAGES) {
  let html;
  try { html = await readFile(`${pub}/${file}`, 'utf8'); } catch { continue; }
  checked++;

  /* The header is everything up to the end of the fixed top bar. Taking the
     whole page would sweep in body links, which are allowed to repeat. */
  const start = html.indexOf('<header');
  const end = html.indexOf('</header>', start);
  if (start === -1 || end === -1) { fails.push(`${lang}: no <header> found`); continue; }
  const header = html.slice(start, end);

  /* Anchor text -> href, skipping the language flags (they are meant to be a
     set of links to the same page in different languages) and anchors with no
     visible text. */
  const seen = new Map();
  for (const m of header.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const href = m[1].trim();
    const text = m[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) continue;                       // flag images, icon-only links
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const key = href.replace(/\/$/, '') || '/';
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(text);
  }

  for (const [href, texts] of seen) {
    const distinct = [...new Set(texts)];
    if (distinct.length > 1) {
      fails.push(`${lang}: ${distinct.map((t) => `"${t}"`).join(' and ')} both point at ${href}`);
    }
  }
}

if (!checked) { console.error('check-nav-distinct: no pages found — did the build run?'); process.exit(2); }
if (fails.length) {
  console.error(`check-nav-distinct: ${fails.length} duplicate destination(s)\n`);
  for (const f of fails) console.error(`  ✗ ${f}`);
  console.error('\nTwo controls that go to the same page is one control and one distraction.');
  process.exit(1);
}
console.log(`check-nav-distinct: ok — ${checked} language header(s), every control has its own destination`);
