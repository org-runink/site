#!/usr/bin/env node
/**
 * Fails if the vendored FACE snapshot has drifted from FACE itself.
 *
 * tokens/face-ramp.json is a snapshot because `face` and `site` are separate repos and
 * the site build must not require a sibling checkout. A snapshot that nothing checks
 * is how a palette silently forks, so this re-runs the same parse against a live FACE
 * and diffs.
 *
 * Skips loudly when FACE_DIR is unset, so a local build works without the sibling
 * repo. Should be REQUIRED in CI.
 *
 * Usage: FACE_DIR=../../face node scripts/check-face-parity.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const snapshot = JSON.parse(readFileSync(join(PKG, 'tokens/face-ramp.json'), 'utf8'));

const faceDir = process.env.FACE_DIR ? resolve(process.env.FACE_DIR) : null;
if (!faceDir || !existsSync(faceDir)) {
  console.warn('⚠ FACE_DIR unset or missing — SKIPPING parity check.');
  console.warn(`  The snapshot claims FACE ${snapshot.provenance.commit.slice(0, 12)}; nothing verified that.`);
  console.warn('  This check must run in CI. Set FACE_DIR to a face checkout.');
  process.exit(0);
}

const themePath = join(faceDir, snapshot.provenance.path);
if (!existsSync(themePath)) {
  console.error(`✗ ${themePath} not found — is FACE_DIR really a face checkout?`);
  process.exit(2);
}
const src = readFileSync(themePath, 'utf8');

function rampBlock(name) {
  const start = src.indexOf(`static const ${name} = _Ramp(`);
  if (start === -1) throw new Error(`_Ramp.${name} not found`);
  let depth = 0;
  let i = src.indexOf('(', start);
  const from = i;
  for (; i < src.length; i++) {
    if (src[i] === '(') depth++;
    else if (src[i] === ')' && --depth === 0) return src.slice(from + 1, i);
  }
  throw new Error(`unbalanced parens in _Ramp.${name}`);
}
function parseColors(block) {
  const out = {};
  const re = /(\w+)\s*:\s*Color\(0x([0-9A-Fa-f]{8})\)/g;
  let m;
  while ((m = re.exec(block)) !== null) out[m[1]] = '#' + m[2].toUpperCase();
  return out;
}

const live = { console: parseColors(rampBlock('dark')), sheet: parseColors(rampBlock('light')) };

const problems = [];
for (const ground of ['console', 'sheet']) {
  const snap = snapshot[ground];
  const now = live[ground];
  for (const k of Object.keys(now)) {
    if (!(k in snap)) problems.push(`${ground}.${k} is NEW in FACE (${now[k]}) — re-run extract-face-ramp.mjs`);
    else if (snap[k] !== now[k]) problems.push(`${ground}.${k} CHANGED: snapshot ${snap[k]} → FACE ${now[k]}`);
  }
  for (const k of Object.keys(snap)) {
    if (!(k in now)) problems.push(`${ground}.${k} was REMOVED from FACE (snapshot still has ${snap[k]})`);
  }
}

if (problems.length) {
  console.error(`✗ the vendored FACE snapshot has drifted (${problems.length} difference(s)):\n`);
  for (const p of problems) console.error(`    ${p}`);
  console.error(`\n  Snapshot was taken at FACE ${snapshot.provenance.commit.slice(0, 12)}.`);
  console.error('  Re-run: node scripts/extract-face-ramp.mjs <face-dir>');
  console.error('  Then re-run gen:tokens and re-check contrast — a value change can move a');
  console.error('  token across a WCAG floor, which is what the tier assignments encode.');
  process.exit(1);
}

const n = Object.keys(live.console).length;
console.log(`✓ FACE parity: ${n} tokens × 2 ramps match the vendored snapshot`);
console.log(`  snapshot commit: ${snapshot.provenance.commit.slice(0, 12)}`);
