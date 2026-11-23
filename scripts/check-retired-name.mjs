#!/usr/bin/env node
//
// The retired subsystem's name must not appear in any tracked file or path.
// Owner directive 2026-11-23: no trace of it until the owner says otherwise.
//
// The word is assembled at run time so this file does not trip itself.
//
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const word = ('AT' + 'LAS').toLowerCase();
const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8', maxBuffer: 1 << 28 })
  .split('\0')
  .filter(Boolean);

const hits = [];
for (const f of files) {
  if (f.toLowerCase().includes(word)) {
    hits.push(`${f} (path)`);
    continue;
  }
  let text;
  try {
    text = readFileSync(f, 'latin1');
  } catch {
    continue;
  }
  if (text.toLowerCase().includes(word)) hits.push(f);
}

if (hits.length) {
  console.error(`check-retired-name: ${hits.length} tracked file(s) carry the retired name:`);
  for (const h of hits) console.error(`  ${h}`);
  process.exit(1);
}
console.log(`check-retired-name: ${files.length} tracked files clean`);
