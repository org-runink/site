#!/usr/bin/env node
/**
 * Every published page must be reachable by following links from another page.
 *
 * WHY THIS EXISTS, AND WHY linkcheck.go DOES NOT COVER IT. linkcheck verifies
 * that every link has a target. This verifies the other direction: that every
 * target has a link. They are not the same property and a site can pass one
 * while failing the other completely — /company/ was written, translated,
 * styled, and shipped with nothing anywhere pointing at it. It returned 200 the
 * whole time, so linkcheck was green. CONTENT.md rule 9 states the failure in
 * its own words: "A page with no inbound link is still published."
 *
 * This is the same class of defect as a function with no caller. The artefact
 * exists and is correct; nothing reaches it. From outside it is indistinguishable
 * from work that was never done, which is the expensive part — you do not find
 * out by looking at the thing itself, only by looking at what points to it.
 *
 * TWO THINGS THAT LOOK LIKE DETAIL AND ARE NOT.
 *
 * 1. PERCENT-ENCODING. Hugo writes the directory /pt/tags/gêmeos-digitais/ and
 *    writes the href to it as /pt/tags/g%C3%AAmeos-digitais/. Comparing the two
 *    as strings reports four Portuguese taxonomy pages as orphans that are
 *    perfectly well linked. Both sides are decoded before comparison. The first
 *    version of this measurement did not do that and produced exactly those four
 *    false positives.
 *
 * 2. SELF-LINKS DO NOT COUNT. Nearly every page links to itself — canonical
 *    nav highlighting, a language switcher's current entry, a pager's own
 *    number. Counting those makes every page reachable from itself and the
 *    check always passes. An inbound link has to come from somewhere else.
 *
 * WHAT IS EXEMPT, AND ON WHAT PRINCIPLE. Only `noindex`. A page marked noindex
 * is one we have told search engines not to list; being unlinked is then the
 * intent rather than the defect. That covers Hugo's alias redirect stubs
 * (/whitepapers/, /products/, /en/) and the /design/ specimen without naming any
 * of them here, so the exemption cannot rot into a list of pages someone
 * forgot to link. Paginator pages are exempt for the same reason in the
 * opposite direction: /page/2/ is reached from /page/1/, which the pager
 * renders, and the last one is reached only from the one before it.
 *
 * Usage: node scripts/check-orphan-pages.mjs <publicDir>
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const pub = process.argv[2];
if (!pub) { console.error('usage: check-orphan-pages.mjs <publicDir>'); process.exit(2); }

/* Decode once and tolerate a malformed escape rather than throwing: a bad
   sequence is a link that will not resolve, which is linkcheck's finding to
   report, not this one's to crash on. */
const norm = (u) => {
  let s = u.split('#')[0].split('?')[0];
  try { s = decodeURIComponent(s); } catch { /* leave as written */ }
  if (!s.endsWith('/')) s += '/';
  return s.toLowerCase();
};

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name === 'index.html') yield p;
  }
}

const pages = new Map();          // url -> { noindex }
const inbound = new Map();        // url -> Set of source urls

for await (const file of walk(pub)) {
  const dir = relative(pub, file).split(sep).slice(0, -1).join('/');
  const self = norm('/' + dir);
  const html = await readFile(file, 'utf8');

  pages.set(self, { noindex: /name="robots"[^>]*noindex|content="[^"]*noindex/i.test(html) });

  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;  // off-site or relative
    const target = norm(href);
    if (target === self) continue;                                  // rule 2 above
    if (!inbound.has(target)) inbound.set(target, new Set());
    inbound.get(target).add(self);
  }
}

const PAGER = /\/page\/\d+\/$/;
const orphans = [...pages.entries()]
  .filter(([url, meta]) => url !== '/' && !meta.noindex && !PAGER.test(url) && !inbound.has(url))
  .map(([url]) => url)
  .sort();

if (!pages.size) { console.error('check-orphan-pages: no pages found — did the build run?'); process.exit(2); }
if (orphans.length) {
  console.error(`check-orphan-pages: ${orphans.length} published page(s) that nothing links to\n`);
  for (const u of orphans) console.error(`  ✗ ${u}`);
  console.error('\nA page with no inbound link is still published (CONTENT.md rule 9).');
  console.error('Either link to it from somewhere a reader actually goes, or unpublish it.');
  process.exit(1);
}
console.log(`check-orphan-pages: ok — ${pages.size} pages, every one of them reachable from another page`);
