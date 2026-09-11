#!/usr/bin/env node
/**
 * Measure text contrast on the RENDERED site and report failures grouped by the
 * class that caused them.
 *
 * WHY IT MEASURES THE RENDER. The site is moving from a black canvas to a light
 * one. Class-level reasoning cannot tell you whether a given piece of text is
 * legible, because the answer depends on the nearest opaque ancestor's
 * background, on alpha compositing, and on which of several colour systems won
 * the cascade for that element. The only honest way to know is to ask the
 * browser what it actually painted.
 *
 * WHY IT GROUPS BY CLASS. A raw list of failing elements is a list of symptoms —
 * the same `text-[#F5F1E8]` can fail on forty pages. Grouping by the offending
 * utility turns thousands of symptoms into a short list of causes, each of which
 * greps back to a handful of templates. That list is the work.
 *
 * Usage:
 *   node scripts/audit-contrast.mjs --base http://127.0.0.1:1314 [--paths a,b,c]
 *                                   [--json out.json] [--all]
 *
 * Exits 1 if any failure is found, so it can gate a build.
 */
import { writeFile, readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { glob } from 'node:fs/promises';

const require = createRequire('/home/me/Documents/org-runink/site/.ds-sync/');
const { chromium } = require('playwright');

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const BASE = arg('--base', 'http://127.0.0.1:1314').replace(/\/$/, '');
const OUT = arg('--json', null);
const PUB = arg('--pub', '/home/me/.cache/rk-verify/pub');
const GROUND = arg('--ground', null);   // 'console' | 'sheet' | null (as authored)

/* One page per distinct template, not every page — 709 pages exercise maybe
   twenty layouts, and the twenty-first identical blog post teaches nothing. */
let paths = arg('--paths', '')
  ? arg('--paths', '').split(',').filter(Boolean)
  : ['/', '/pricing/', '/company/', '/license/', '/blog/', '/use-cases/',
     '/industries/', '/products/', '/whitepapers/', '/tags/',
     /* one leaf per template too — a list page and its detail page share almost
        no markup, and the detail pages are where the prose lives. */
     '/blog/automated-open-source-dropshipping-logistics/',
     '/use-cases/claims-recovery/',
     '/industries/banking-financial-services/',
     '/products/face/'];

if (argv.includes('--all')) {
  paths = [];
  for await (const f of glob('**/index.html', { cwd: PUB })) {
    paths.push('/' + f.replace(/index\.html$/, ''));
  }
}

/** Runs inside the page. Returns one record per failing text node. */
const PROBE = () => {
  /* Chrome returns a computed color-mix() as `color(srgb 0.47 0.23 0.2)`, with
     components in 0..1 rather than 0..255. Reading those as 8-bit made every
     wash look near-black: `--rk-signal-wash` is a color-mix, so `bg-signal-wash`
     was reported at 2.84:1 against a background of "rgb(1, 1, 1)" that exists
     nowhere in the CSS. That is a bug in the measuring instrument, and acting on
     it would have sent agents to fix pages that are fine. */
  const parse = (s) => {
    if (!s) return null;
    const srgb = s.match(/^color\(\s*srgb\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s*(?:\/\s*([\d.eE+-]+%?))?\s*\)$/);
    if (srgb) {
      const a = srgb[4] === undefined ? 1
        : srgb[4].endsWith('%') ? parseFloat(srgb[4]) / 100 : +srgb[4];
      return [+srgb[1] * 255, +srgb[2] * 255, +srgb[3] * 255, a];
    }
    const m = s.match(/[\d.]+/g);
    return m ? [+m[0], +m[1], +m[2], m[3] === undefined ? 1 : +m[3]] : null;
  };
  const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  /** Composite src over dst — an alpha colour measured bare is a lie. */
  const over = (src, dst) => src.slice(0, 3).map((c, i) => c * src[3] + dst[i] * (1 - src[3]));

  /** Every colour stop in a gradient, so a gradient-filled button can be judged
      against its WORST stop rather than against whatever is behind it.
      A gradient is a background-IMAGE; reading only background-color walks
      straight past it to the ancestor and reports a confident wrong number —
      which is how a signal-filled CTA came back as 1.53:1 when it measures
      5.69:1 against the ink that is actually on it. */
  const gradientStops = (bgImage) => {
    if (!bgImage || bgImage === 'none' || !/gradient\(/.test(bgImage)) return null;
    const stops = [...bgImage.matchAll(/(rgba?\([^)]*\)|color\(srgb[^)]*\))/g)]
      .map((m) => parse(m[1])).filter(Boolean).filter((c) => c[3] > 0.05);
    return stops.length ? stops : null;
  };

  /** Walk to the nearest opaque ancestor, compositing every translucent layer.
      Returns {bg} for a flat background, or {stops} when a gradient paints it. */
  const bgOf = (el) => {
    const stack = [];
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      const grad = gradientStops(cs.backgroundImage);
      if (grad) {
        return {
          stops: grad.map((g) => {
            let acc = g.slice(0, 3);
            for (let i = stack.length - 1; i >= 0; i--) acc = over(stack[i], acc);
            return acc;
          }),
        };
      }
      const c = parse(cs.backgroundColor);
      if (!c || c[3] === 0) continue;
      stack.push(c);
      if (c[3] >= 0.999) break;
    }
    let acc = [255, 255, 255];
    for (let i = stack.length - 1; i >= 0; i--) acc = over(stack[i], acc);
    return { bg: acc };
  };

  const out = [];
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
    if (!el.offsetParent && cs.position !== 'fixed') continue;
    /* Only elements with their OWN text, or a wrapper counts its children twice. */
    const text = [...el.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim())
      .map((n) => n.textContent.trim()).join(' ');
    if (!text) continue;

    /* Gradient text paints through the background with a transparent fill, so
       cs.color is rgba(0,0,0,0) and any ratio computed from it is fiction.
       Skip it rather than report a confident 1:1 that sends someone to fix a
       heading that is perfectly legible. */
    const clip = cs.webkitBackgroundClip || cs.backgroundClip;
    if (clip === 'text') continue;

    const fg = parse(cs.color);
    if (!fg || fg[3] === 0) continue;

    /* Against a gradient, judge by the worst stop — a button whose text is
       legible at one end and not the other is not legible. */
    const painted = bgOf(el);
    const candidates = painted.stops ?? [painted.bg];
    let ratio = Infinity, bg = candidates[0], ink = fg.slice(0, 3);
    for (const cand of candidates) {
      const thisInk = fg[3] < 0.999 ? over(fg, cand) : fg.slice(0, 3);
      const L1 = lum(thisInk), L2 = lum(cand);
      const r = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      if (r < ratio) { ratio = r; bg = cand; ink = thisInk; }
    }

    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const floor = large ? 3 : 4.5;
    if (ratio >= floor) continue;

    const classes = (el.className && el.className.toString ? el.className.toString() : '')
      .split(/\s+/).filter(Boolean);
    /* Candidates only — `text-sm` and `bg-clip-text` match this shape but carry
       no colour. Node filters them against the resolved Tailwind theme below,
       because the theme is the only thing that knows which names are colours. */
    const blame = classes.filter((c) =>
      /^(?:[a-z-]+:)*(bg|text|border|from|to|via|ring|divide|fill|stroke)-/.test(c));
    out.push({
      text: text.slice(0, 60), ratio: +ratio.toFixed(2), floor,
      fg: cs.color, bg: `rgb(${bg.map((v) => Math.round(v)).join(', ')})`,
      tag: el.tagName.toLowerCase(), blame,
    });
  }
  return out;
};

/* Chromium puts its user-data dir and shared-memory segment under TMPDIR and
   dies with a bare "Page crashed" when that filesystem is full — no disk-space
   error anywhere in the message. Give it somewhere with room, and stop it using
   /dev/shm, which is the same tmpfs. */
/* Which of the candidate classes actually name a colour. Resolved from the real
   Tailwind theme so this cannot drift from the palette it is auditing. */
const resolveConfig = require('tailwindcss/resolveConfig.js');
const twTheme = resolveConfig(require('/home/me/Documents/org-runink/site/tailwind.config.js')).theme;
const POS_KEY = {
  bg: 'backgroundColor', text: 'textColor', border: 'borderColor',
  ring: 'ringColor', divide: 'divideColor', fill: 'fill', stroke: 'stroke',
  from: 'gradientColorStops', to: 'gradientColorStops', via: 'gradientColorStops',
};
function isColourClass(cls) {
  const bare = cls.replace(/^(?:[a-z-]+:)*/, '');
  const m = bare.match(/^(bg|text|border|from|to|via|ring|divide|fill|stroke)-(.+?)(?:\/\d{1,3})?$/);
  if (!m) return false;
  const [, pos, value] = m;
  if (/^\[/.test(value)) return /^\[(#|rgb|hsl|color)/i.test(value);   // arbitrary: colour or not
  const palette = twTheme[POS_KEY[pos]] || {};
  const r = value.match(/^([a-z]+)-(\d+)$/);
  return r ? typeof palette[r[1]]?.[r[2]] === 'string' : typeof palette[value] === 'string';
}

const browser = await chromium.launch({
  args: ['--disable-dev-shm-usage', '--no-sandbox'],
  env: { ...process.env, TMPDIR: arg('--tmp', '/home/me/.cache/rk-verify/tmp') },
});
const byClass = new Map();      // class -> {n, pages:Set, worst, example}
const byPage = [];
let checked = 0, totalFail = 0;

for (const p of paths) {
  /* A fresh page per path. Some pages navigate on load, and a redirect fired by
     one path was tearing down the execution context of the NEXT one — six of
     fourteen pages failed that way, none of them because of anything on the
     page being measured. Sharing one tab made the audit report its own bug. */
  let res;
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    const r = await page.goto(BASE + p, { waitUntil: 'load', timeout: 30000 });
    if (r && !r.ok()) { byPage.push({ path: p, error: `HTTP ${r.status()}` }); await page.close(); continue; }
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});

    /* --ground console audits the site as a reader who chose dark sees it.
       Offering a dark mode that has never been measured is how you ship a
       control that makes half the pages unreadable. Set on <html> so it is the
       same mechanism the toggle uses, then re-measure everything. */
    if (GROUND) {
      await page.evaluate((g) => document.documentElement.setAttribute('data-ground', g), GROUND);
      /* Wait for the colour TRANSITIONS to finish, not just for a tick. The site
         uses transition-colors at 200-300ms; measuring 60ms after the flip reads
         a blend of the old and new colours and reports ~100 failures per page
         that exist for a fifth of a second and belong to neither ground. */
      await page.waitForTimeout(700);
    }

    /* REFUSE TO MEASURE ANYTHING THAT LEFT THIS ORIGIN.
       Hugo emits pagination aliases like /tags/x/page/1/ as a 269-byte stub
       whose only content is <meta http-equiv="refresh" url=https://runink.org/…>.
       A browser follows that, so the audit was loading the LIVE PRODUCTION SITE
       over the network for ~224 pages and reporting its colours as if they were
       this build's — which is how literal #8B9A6E gradients and un-rebound
       slate appeared in a tree that contains neither. Silently auditing
       somebody else's deployment is worse than auditing nothing. */
    const landed = new URL(page.url());
    if (landed.origin !== new URL(BASE).origin) {
      byPage.push({ path: p, skipped: `redirects off-origin to ${landed.origin}` });
      await page.close();
      continue;
    }
    res = await page.evaluate(PROBE);
  } catch (e) {
    byPage.push({ path: p, error: String(e.message || e).split('\n')[0].slice(0, 110) });
    await page.close().catch(() => {});
    continue;
  }
  await page.close().catch(() => {});
  checked++;
  totalFail += res.length;
  byPage.push({ path: p, failures: res.length });
  for (const f of res) {
    const real = f.blame.filter(isColourClass);
    const keys = real.length ? real : [`(inherited / not a class) <${f.tag}>`];
    for (const k of keys) {
      if (!byClass.has(k)) byClass.set(k, { n: 0, pages: new Set(), worst: 99, example: null });
      const rec = byClass.get(k);
      rec.n++; rec.pages.add(p);
      if (f.ratio < rec.worst) { rec.worst = f.ratio; rec.example = f; }
    }
  }
}
await browser.close();

const ranked = [...byClass.entries()]
  .map(([cls, r]) => ({ cls, n: r.n, pages: r.pages.size, worst: r.worst, example: r.example }))
  .sort((a, b) => b.n - a.n);

console.log(`\naudit-contrast: ${checked}/${paths.length} pages, ${totalFail} failing text nodes\n`);
if (ranked.length) {
  console.log('causes, most references first:\n');
  for (const r of ranked.slice(0, 30)) {
    console.log(`  ${String(r.n).padStart(5)}x  ${r.cls.padEnd(34)} worst ${String(r.worst).padStart(5)}:1  on ${r.pages} page(s)`);
    if (r.example) console.log(`         e.g. "${r.example.text.slice(0, 44)}"  fg ${r.example.fg} on ${r.example.bg}`);
  }
  if (ranked.length > 30) console.log(`\n  ... and ${ranked.length - 30} more causes`);
}
const errs = byPage.filter((p) => p.error);
if (errs.length) {
  console.log(`\npages that did not load (${errs.length}):`);
  for (const e of errs.slice(0, 8)) console.log(`  ${e.path}  ${e.error}`);
}
const skipped = byPage.filter((p) => p.skipped);
if (skipped.length) {
  /* Announced, not silent: a page this audit did not measure must not look
     like a page that passed. These are Hugo's pagination aliases. */
  console.log(`\nnot measured — ${skipped.length} page(s) redirect off this origin (Hugo pagination aliases):`);
  for (const s of skipped.slice(0, 3)) console.log(`  ${s.path}  ${s.skipped}`);
  if (skipped.length > 3) console.log(`  ... and ${skipped.length - 3} more`);
}

if (OUT) {
  await writeFile(OUT, JSON.stringify({ base: BASE, checked, totalFail, causes: ranked, pages: byPage }, null, 2));
  console.log(`\nwrote ${OUT}`);
}

process.exit(totalFail > 0 ? 1 : 0);
