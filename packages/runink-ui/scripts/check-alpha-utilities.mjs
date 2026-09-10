#!/usr/bin/env node
/**
 * Fails if any colour utility used in the package compiles to nothing.
 *
 * WHY THIS EXISTS. Colour flows through CSS custom properties so one class works on
 * both grounds. Tailwind's alpha modifier (`bg-x/30`) needs an `<alpha-value>`
 * placeholder, and `withAlphaValue` cannot parse a bare `var(--x)` — so if the preset
 * ever emits plain `var()` instead of `rgb(var(--…-ch) / <alpha-value>)`, Tailwind
 * DROPS every alpha-modified declaration. It does not error.
 *
 * That failure is invisible to everything else in the pipeline: the render check only
 * fails on blank/thin output, and a card that has lost its washes and hairlines is
 * neither — it just looks like a slightly flatter design system. Grading cannot catch
 * it either, because on a palette migration there is no baseline to compare against.
 * This is the same shape as two defects already recorded in NOTES.md, so it gets a
 * gate rather than a comment.
 *
 * Usage: node scripts/check-alpha-utilities.mjs [--css dist/runink-ui.css]
 */
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const cssArg = process.argv.indexOf('--css');
const CSS = cssArg > -1 ? resolve(process.argv[cssArg + 1]) : join(PKG, 'dist/runink-ui.css');

if (!existsSync(CSS)) {
  console.error(`✗ ${CSS} not found — run \`npm run build:css\` first`);
  process.exit(2);
}
const css = readFileSync(CSS, 'utf8');

/** Colour-bearing utility prefixes, i.e. the ones the preset controls. */
const PREFIX = '(?:bg|text|border|divide|ring|outline|fill|stroke|from|via|to|caret|decoration)';
/** A token name from the registry: role words, optionally with a -wash suffix. */
const TOKEN = '[a-z][a-z0-9-]*';

function usedUtilities() {
  // ripgrep over the sources Tailwind itself scans.
  let out = '';
  try {
    out = execFileSync(
      'grep',
      ['-rhoE', `\\b${PREFIX}-${TOKEN}(/[0-9]{1,3})?\\b`, join(PKG, 'src'), resolve(PKG, '../../.design-sync/previews')],
      { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 },
    );
  } catch (e) {
    if (e.status === 1) return new Set(); // no matches
    throw e;
  }
  return new Set(out.split('\n').filter(Boolean));
}

/** Tailwind escapes `/` and `.` in selectors. */
const escapeClass = (c) => c.replace(/[./]/g, (m) => '\\' + m);

const used = usedUtilities();
const alphaModified = [...used].filter((c) => c.includes('/'));

const missing = [];
for (const c of used) {
  if (!css.includes('.' + escapeClass(c))) missing.push(c);
}

// A utility can be legitimately absent: it may name a Tailwind stock colour we did not
// define, or a token that genuinely has no such position. What must NEVER happen is an
// alpha-modified utility whose BASE form exists — that is the silent-drop signature.
const silentDrops = missing.filter((c) => {
  const base = c.split('/')[0];
  return c.includes('/') && css.includes('.' + escapeClass(base));
});

console.log(`scanned ${used.size} colour utilities (${alphaModified.length} alpha-modified)`);
console.log(`css: ${CSS}`);

if (silentDrops.length) {
  console.error(`\n✗ ${silentDrops.length} alpha-modified utilit${silentDrops.length === 1 ? 'y' : 'ies'} dropped:`);
  for (const c of silentDrops) console.error(`    ${c}   (base \`${c.split('/')[0]}\` compiles, the modifier does not)`);
  console.error(
    '\n  The preset is emitting a bare var() somewhere instead of\n' +
      '  rgb(var(--…-ch) / <alpha-value>). Check gen-tokens.mjs.',
  );
  process.exit(1);
}

if (missing.length) {
  console.log(`\n  ${missing.length} utilit${missing.length === 1 ? 'y' : 'ies'} not in the stylesheet (base form absent too —`);
  console.log('  stock Tailwind colours or unused positions, not a silent drop):');
  for (const c of missing.slice(0, 20)) console.log(`    ${c}`);
  if (missing.length > 20) console.log(`    … and ${missing.length - 20} more`);
}

console.log(`\n✓ every alpha-modified utility with a compiling base also compiles`);
