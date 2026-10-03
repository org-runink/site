#!/usr/bin/env node
/**
 * Check the search and share metadata of the BUILT site, page by page.
 *
 * Usage:
 *   node scripts/check-seo-head.mjs <publicDir>                 gate: exit 1 on an error
 *   node scripts/check-seo-head.mjs <publicDir> --report a/ b/  print a table for those paths
 *   node scripts/check-seo-head.mjs <publicDir> --og-gaps       list indexable pages whose
 *                                                               og:image is under 1200px wide,
 *                                                               or is only the site-wide card
 *
 * WHY IT READS THE OUTPUT. Every rule below has been broken at least once on
 * this site by a template that rendered without an error: an empty description
 * on 587 pages, a logo URL that 404'd in the Organization node, JSON-LD that
 * Hugo printed happily and no parser could read. The source cannot show any of
 * that; the rendered head can.
 *
 * ERRORS (fail the build), on every indexable page:
 *   - not exactly one <title>, or an empty one
 *   - no canonical, or a canonical that is not absolute https://runink.org/
 *   - a JSON-LD block that does not parse
 *   - an aggregateRating or Review anywhere in JSON-LD (no fake signals)
 *   - an hreflang alternate that points at a page the build does not contain
 *   - robots meta missing max-image-preview:large on an indexable page
 *   - no og:image, or one whose declared og:image:width is under 1200
 *   - og:type article without article:published_time
 *
 * WARNINGS (printed, never fatal): title over 60 characters, description over
 * 160, more or fewer than one <h1>. These are copy questions, and copy belongs
 * to whoever owns the page; the gate only names them.
 *
 * Alias pages (Hugo's meta-refresh redirects) and noindex pages are skipped:
 * neither is meant to be found in a search result.
 */
import { readFile, stat } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const pub = args[0];
if (!pub) {
  console.error('usage: check-seo-head.mjs <publicDir> [--report path/ ...] [--og-gaps]');
  process.exit(2);
}
const reportIdx = args.indexOf('--report');
const reportPaths = reportIdx >= 0 ? args.slice(reportIdx + 1).filter((a) => !a.startsWith('--')) : null;
const ogGaps = args.includes('--og-gaps');
const ORIGIN = 'https://runink.org/';

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? decode(m[1] ?? m[2] ?? m[3] ?? '') : null;
}

function metas(html) {
  const out = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = attr(tag, 'property') ?? attr(tag, 'name');
    if (!key) continue;
    (out[key.toLowerCase()] ??= []).push(attr(tag, 'content') ?? '');
  }
  return out;
}

/** Width/height of a PNG, JPEG or WebP, or null. Enough for an og:image check. */
async function imageSize(file) {
  let b;
  try {
    b = await readFile(file);
  } catch {
    return null;
  }
  if (b.slice(0, 8).toString('hex') === '89504e470d0a1a0a') return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b.slice(0, 4).toString() === 'RIFF' && b.slice(8, 12).toString() === 'WEBP') {
    const kind = b.slice(12, 16).toString();
    if (kind === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
    if (kind === 'VP8L') {
      const v = b.readUInt32LE(21);
      return { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1 };
    }
    if (kind === 'VP8X') return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker))
        return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
      i += 2 + len;
    }
  }
  return null;
}

function localFile(url) {
  if (!url || !url.startsWith(ORIGIN)) return null;
  return path.join(pub, decodeURI(url.slice(ORIGIN.length).split(/[?#]/)[0]));
}

async function exists(url) {
  const f = localFile(url);
  if (!f) return false;
  const target = f.endsWith('/') || !path.extname(f) ? path.join(f, 'index.html') : f;
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

function findKeys(node, keys, hits = []) {
  if (Array.isArray(node)) node.forEach((n) => findKeys(n, keys, hits));
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (keys.includes(k)) hits.push(k);
      if (k === '@type' && (v === 'Review' || v === 'AggregateRating')) hits.push(v);
      findKeys(v, keys, hits);
    }
  }
  return hits;
}

const types = (node, acc = []) => {
  if (Array.isArray(node)) node.forEach((n) => types(n, acc));
  else if (node && typeof node === 'object') {
    if (node['@type']) acc.push(node['@type']);
    if (node['@graph']) types(node['@graph'], acc);
  }
  return acc;
};

async function inspect(file) {
  const html = await readFile(file, 'utf8');
  const rel = '/' + path.relative(pub, file).replace(/index\.html$/, '');
  if (/<meta http-equiv="?refresh/i.test(html) && html.length < 2000) return { rel, alias: true };
  const head = html.split(/<\/head>/i)[0];
  const m = metas(head);
  const titles = [...head.matchAll(/<title>([\s\S]*?)<\/title>/gi)].map((x) => decode(x[1].trim()));
  const canon = (head.match(/<link\b[^>]*rel="canonical"[^>]*>/i) ?? [])[0];
  const alternates = [...head.matchAll(/<link\b[^>]*rel="alternate"[^>]*hreflang[^>]*>/gi)].map((x) => ({
    lang: attr(x[0], 'hreflang'),
    href: attr(x[0], 'href'),
  }));
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((x) => x[1]);
  const parsed = [];
  const ldErrors = [];
  for (const block of ld) {
    try {
      parsed.push(JSON.parse(block));
    } catch (e) {
      ldErrors.push(e.message);
    }
  }
  const body = html.split(/<\/head>/i)[1] ?? '';
  const h1 = (body.match(/<h1\b/gi) ?? []).length;
  const robots = (m.robots ?? [''])[0];
  return {
    rel,
    title: titles[0] ?? '',
    titleCount: titles.length,
    description: (m.description ?? [''])[0],
    canonical: canon ? attr(canon, 'href') : null,
    robots,
    noindex: /noindex/i.test(robots),
    og: {
      title: (m['og:title'] ?? [])[0],
      description: (m['og:description'] ?? [])[0],
      type: (m['og:type'] ?? [])[0],
      image: (m['og:image'] ?? [])[0],
      imageWidth: (m['og:image:width'] ?? [])[0],
      published: (m['article:published_time'] ?? [])[0],
      modified: (m['article:modified_time'] ?? [])[0],
    },
    twitterCard: (m['twitter:card'] ?? [])[0],
    twitterImage: (m['twitter:image'] ?? [])[0],
    alternates,
    ldTypes: types(parsed).flat(),
    ldErrors,
    fake: findKeys(parsed, ['aggregateRating', 'review']),
    h1,
  };
}

const files = [];
for await (const f of glob('**/*.html', { cwd: pub })) files.push(path.join(pub, f));
files.sort();

if (reportPaths) {
  const pick = reportPaths.map((p) => path.join(pub, p.replace(/^\//, ''), 'index.html'));
  for (const f of pick) {
    const r = await inspect(f);
    const img = r.og?.image ? await imageSize(localFile(r.og.image)) : null;
    console.log(`\n== ${r.rel}`);
    console.log(`title (${r.title.length}) x${r.titleCount}: ${r.title}`);
    console.log(`description (${r.description.length}): ${r.description}`);
    console.log(`canonical: ${r.canonical}`);
    console.log(`robots: ${r.robots}`);
    console.log(`hreflang: ${r.alternates.map((a) => a.lang).join(', ') || '(none)'}`);
    console.log(`og:type ${r.og.type} | og:image ${r.og.image} ${img ? `${img.w}x${img.h}` : '(size unknown)'}`);
    console.log(`article times: ${r.og.published ?? '-'} / ${r.og.modified ?? '-'}`);
    console.log(`twitter:card ${r.twitterCard} | twitter:image ${r.twitterImage ? 'yes' : 'no'}`);
    console.log(`JSON-LD types: ${r.ldTypes.join(', ')} | parse errors: ${r.ldErrors.length} | rating/review: ${r.fake.length}`);
    console.log(`h1: ${r.h1}`);
  }
  process.exit(0);
}

const errors = [];
const warnings = [];
const gaps = [];
let checked = 0;
for (const f of files) {
  const r = await inspect(f);
  if (r.alias || r.noindex) continue;
  checked++;
  const e = (msg) => errors.push(`${r.rel}: ${msg}`);
  const w = (msg) => warnings.push(`${r.rel}: ${msg}`);
  if (r.titleCount !== 1 || !r.title) e(`expected one non-empty <title>, found ${r.titleCount}`);
  if (!r.canonical || !r.canonical.startsWith(ORIGIN)) e(`canonical missing or not on ${ORIGIN}: ${r.canonical}`);
  for (const msg of r.ldErrors) e(`JSON-LD does not parse: ${msg}`);
  if (r.fake.length) e(`JSON-LD carries ${r.fake.join(', ')} — no rating or review markup on this site`);
  if (!r.og.image) e('no og:image');
  else if (Number(r.og.imageWidth) < 1200) e(`og:image is ${r.og.imageWidth || 'of unknown'} px wide; Discover wants at least 1200: ${r.og.image}`);
  if (r.og.type === 'article' && !r.og.published) e('og:type article without article:published_time');
  if (!/max-image-preview:large/.test(r.robots)) e(`robots meta lacks max-image-preview:large: "${r.robots}"`);
  for (const a of r.alternates) if (!(await exists(a.href))) e(`hreflang ${a.lang} points at a page not in the build: ${a.href}`);
  if (r.title.length > 60) w(`title is ${r.title.length} chars`);
  if (r.description.length > 160) w(`description is ${r.description.length} chars`);
  if (r.h1 !== 1) w(`${r.h1} <h1> elements`);
  if (ogGaps) {
    const img = r.og.image ? await imageSize(localFile(r.og.image)) : null;
    if (!img || img.w < 1200) gaps.push(`${r.rel}\t${r.og.image ?? '(none)'}\t${img ? `${img.w}x${img.h}` : 'unknown'}`);
    // A page on the site-wide card has a large image, but not one about it.
    else if (/\/images\/og\/runink-og\.jpg$/.test(r.og.image)) gaps.push(`${r.rel}\tsite card only (no image of its own)`);
  }
}

if (ogGaps) {
  console.log(`# ${gaps.length} indexable pages without a large og:image of their own`);
  console.log(gaps.join('\n'));
  process.exit(0);
}

const byKind = (list) => {
  const counts = {};
  for (const x of list) {
    const k = x.split(': ').slice(1).join(': ').replace(/\d+/g, 'N').slice(0, 60);
    counts[k] = (counts[k] ?? 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
};
console.log(`check-seo-head: ${checked} indexable pages checked`);
if (warnings.length) {
  console.log(`${warnings.length} warnings (not fatal):`);
  for (const [k, n] of byKind(warnings)) console.log(`  ${n} x ${k}`);
}
if (errors.length) {
  console.error(`${errors.length} errors:`);
  for (const x of errors.slice(0, 50)) console.error(`  ${x}`);
  process.exit(1);
}
console.log('OK');
