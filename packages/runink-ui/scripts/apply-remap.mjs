#!/usr/bin/env node
/**
 * Applies tokens/remap.json across the component and preview sources.
 *
 * Mechanical only. Anything listed under `ambiguous` is deliberately left alone and
 * reported with file:line, because those sites were doing more than one job in the old
 * vocabulary and the right target depends on what the element is for.
 *
 * Alpha modifiers ride along: a rule for `bg-primary-900` also rewrites
 * `bg-primary-900/50` unless the suffixed form has its own rule (a wash).
 *
 * Usage:
 *   node scripts/apply-remap.mjs --dry     # report only
 *   node scripts/apply-remap.mjs           # write
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const SITE = resolve(PKG, '../..');
const DRY = process.argv.includes('--dry');

const remap = JSON.parse(readFileSync(join(PKG, 'tokens/remap.json'), 'utf8'));

/** Flatten every non-ambiguous group into one lookup, longest key first. */
const table = new Map();
for (const [group, entries] of Object.entries(remap)) {
  if (group.startsWith('$') || group === 'ambiguous') continue;
  for (const [from, to] of Object.entries(entries)) {
    if (from.startsWith('$')) continue;
    table.set(from, to);
  }
}
const ambiguous = new Set(Object.keys(remap.ambiguous).filter((k) => !k.startsWith('$')));

/** Longest-first so `bg-brand-green/10` wins over `bg-brand-green`. */
const keys = [...table.keys()].sort((a, b) => b.length - a.length);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(name)) out.push(p);
  }
  return out;
}

const files = [...walk(join(PKG, 'src')), ...walk(join(SITE, '.design-sync/previews'))];

let rewritten = 0;
let touchedFiles = 0;
const hits = new Map(); // old -> count
const ambiguousHits = []; // {file, line, util}

for (const file of files) {
  const before = readFileSync(file, 'utf8');
  let after = before;

  for (const from of keys) {
    const to = table.get(from);
    const esc = from.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

    if (to === '') {
      /*
       * Deletion (the retired glows). The whole class TOKEN has to go, including any
       * variant prefixes — deleting just the utility out of `hover:shadow-x/50` leaves
       * a dangling `hover:` that is silently invalid. Consume one adjacent space too,
       * so the class string does not end up with a double gap.
       */
      const re = new RegExp(`(?:(?<=[\\s"'\`])|^)(?:[a-z0-9-]+:)*${esc}(?:/\\d{1,3})?(?=[\\s"'\`]|$)\\s?`, 'g');
      after = after.replace(re, () => {
        hits.set(from, (hits.get(from) ?? 0) + 1);
        rewritten++;
        return '';
      });
      continue;
    }

    // Rewrite. Preserve any variant prefixes (hover:, md:, group-hover:) verbatim.
    const re = new RegExp(`((?:[a-z0-9-]+:)*)${esc}(/\\d{1,3})?(?![\\w-])`, 'g');
    after = after.replace(re, (m, variants, alpha) => {
      hits.set(from, (hits.get(from) ?? 0) + 1);
      rewritten++;
      // A named wash already carries its alpha; never re-suffix it.
      if (to.endsWith('-wash')) return variants + to;
      return variants + to + (alpha ?? '');
    });
  }

  // Report ambiguous occurrences without touching them.
  after.split('\n').forEach((line, i) => {
    for (const a of ambiguous) {
      const esc = a.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
      if (new RegExp(`(?<![\\w-])${esc}(?![\\w-])`).test(line)) {
        ambiguousHits.push({ file: relative(SITE, file), line: i + 1, util: a });
      }
    }
  });

  if (after !== before) {
    touchedFiles++;
    if (!DRY) writeFileSync(file, after, 'utf8');
  }
}

/*
 * There is deliberately NO whitespace-tidying pass here.
 *
 * The first version had one, and it corrupted 57 files: its `\s{2,}` matched newlines,
 * so every JSDoc block whose text contained backticks had its line breaks collapsed —
 * and TypeScript compiles that perfectly happily, because it is all inside comments and
 * string literals. Deletions now consume their own trailing space instead, which is the
 * only place a double gap could come from.
 */

console.log(`${DRY ? 'DRY RUN — ' : ''}files scanned: ${files.length}`);
console.log(`rewrites: ${rewritten} across ${touchedFiles} file(s)`);
console.log('\ntop rewrites:');
for (const [k, v] of [...hits.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(`  ${String(v).padStart(4)}  ${k}  ->  ${table.get(k) || '(deleted)'}`);
}

if (ambiguousHits.length) {
  const byUtil = new Map();
  for (const h of ambiguousHits) byUtil.set(h.util, (byUtil.get(h.util) ?? 0) + 1);
  console.log(`\nAMBIGUOUS — left untouched, need a judgement pass (${ambiguousHits.length} occurrence(s)):`);
  for (const [u, n] of [...byUtil.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(4)}  ${u}`);
    console.log(`        ${remap.ambiguous[u]}`);
  }
  const files = [...new Set(ambiguousHits.map((h) => h.file))];
  console.log(`\n  across ${files.length} file(s)`);
}
