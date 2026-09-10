#!/usr/bin/env node
/**
 * Extracts FACE's two colour ramps from runink_theme.dart into tokens/face-ramp.json.
 *
 * FACE and site are separate GitHub repos, so the site build must not depend on a
 * sibling checkout. This vendors a snapshot instead, stamped with the commit it was
 * read from; `check-face-parity.mjs` re-runs the same parse against a live FACE
 * checkout in CI and fails on any drift.
 *
 * Values are kept as ARGB exactly as Dart writes them, because `textSecondary`
 * carries a meaningful alpha (0x99 dark / 0xB3 light) that a 6-digit hex would lose.
 *
 * Usage: node scripts/extract-face-ramp.mjs <path-to-face-repo>
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const OUT = join(PKG, 'tokens', 'face-ramp.json');

const faceDir = process.argv[2];
if (!faceDir) {
  console.error('usage: node scripts/extract-face-ramp.mjs <path-to-face-repo>');
  process.exit(2);
}
const themePath = join(faceDir, 'flutter/lib/core/theme/runink_theme.dart');
const src = readFileSync(themePath, 'utf8');

/** Pull one `static const <name> = _Ramp( … );` block out of the file. */
function rampBlock(name) {
  const start = src.indexOf(`static const ${name} = _Ramp(`);
  if (start === -1) throw new Error(`_Ramp.${name} not found in ${themePath}`);
  // Walk parens so a nested Color(0x…) call cannot terminate the block early.
  let depth = 0;
  let i = src.indexOf('(', start);
  const from = i;
  for (; i < src.length; i++) {
    if (src[i] === '(') depth++;
    else if (src[i] === ')') {
      depth--;
      if (depth === 0) return src.slice(from + 1, i);
    }
  }
  throw new Error(`unbalanced parens in _Ramp.${name}`);
}

/** `name: Color(0xAARRGGBB),` → { name: '#AARRGGBB' } */
function parseColors(block) {
  const out = {};
  const re = /(\w+)\s*:\s*Color\(0x([0-9A-Fa-f]{8})\)/g;
  let m;
  while ((m = re.exec(block)) !== null) out[m[1]] = '#' + m[2].toUpperCase();
  return out;
}

const dark = parseColors(rampBlock('dark'));
const light = parseColors(rampBlock('light'));

const darkKeys = Object.keys(dark).sort();
const lightKeys = Object.keys(light).sort();
if (darkKeys.join() !== lightKeys.join()) {
  const only = (a, b) => a.filter((k) => !b.includes(k));
  throw new Error(
    `ramps disagree on which tokens exist.\n` +
      `  dark-only:  ${only(darkKeys, lightKeys).join(', ') || '(none)'}\n` +
      `  light-only: ${only(lightKeys, darkKeys).join(', ') || '(none)'}`,
  );
}

/**
 * Tokens that are deliberately the same in both ramps live in the ramp blocks too;
 * we surface them so the registry can assert "does not flip" rather than assuming it.
 */
const invariant = darkKeys.filter((k) => dark[k] === light[k]);

let commit = 'unknown';
try {
  commit = execFileSync('git', ['-C', faceDir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
} catch {
  /* a non-git checkout is still usable, just less traceable */
}

const payload = {
  provenance: {
    repo: 'org-runink/face',
    path: 'flutter/lib/core/theme/runink_theme.dart',
    commit,
    extractedBy: 'packages/runink-ui/scripts/extract-face-ramp.mjs',
  },
  note:
    'ARGB as Dart writes it. textSecondary carries a real alpha (0x99 dark / 0xB3 light) ' +
    'that differs per ramp on purpose — dark ink on a light ground needs more opacity ' +
    'to reach the same contrast ratio. Do not normalise these to 6-digit hex.',
  invariant,
  console: dark,
  sheet: light,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf8');

console.log(`wrote ${OUT}`);
console.log(`  face commit : ${commit}`);
console.log(`  tokens      : ${darkKeys.length} per ramp`);
console.log(`  invariant   : ${invariant.length} (${invariant.join(', ')})`);
