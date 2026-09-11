#!/usr/bin/env node
/**
 * Fail on CSS that parses but does not mean what it says.
 *
 * WHY THIS EXISTS. `assets/css/tokens.css` shipped a @media print block that
 * had been dead for months. Three drafts of one comment had been merged without
 * removing the delimiters between them, so a comment closed early and ~28 lines
 * of English sat outside any comment. CSS error recovery does not throw that
 * away — it reads the prose as a selector prelude and keeps consuming until the
 * next `{`, which was the rule that blacked out the palette for paper. The
 * result: every category accent printed in colour at about 2.4:1, with no
 * error, no warning, and a comment directly above it reading "Verified on
 * paper, not assumed."
 *
 * A stylesheet with an unbalanced comment is always a bug, and it is invisible
 * precisely because CSS refuses to fail. So:
 *
 *   1. comment delimiters balance, scanned properly (a `/*` inside a comment is
 *      not a nested open; a `*\/` outside one is a stray)
 *   2. braces balance
 *   3. no selector contains prose — a prelude with sentence punctuation or an
 *      absurd length is the signature of exactly this failure
 *   4. the print blackout specifically still applies, since that is the rule
 *      that was silently lost
 */
import { readFile } from 'node:fs/promises';

const FILE = new URL('../assets/css/tokens.css', import.meta.url);
const src = await readFile(FILE, 'utf8');
const fails = [];

/* ---- 1: comments, scanned as a state machine ----------------------------- */
let i = 0, line = 1, inComment = false, openedAt = 0, comments = 0;
const stripped = [];          // source with comments blanked, for later checks
while (i < src.length) {
  if (!inComment && src.startsWith('/*', i)) {
    inComment = true; openedAt = line; comments++; stripped.push(' ', ' '); i += 2; continue;
  }
  if (inComment && src.startsWith('*/', i)) {
    inComment = false; stripped.push(' ', ' '); i += 2; continue;
  }
  if (!inComment && src.startsWith('*/', i)) {
    fails.push(`line ${line}: stray "*/" outside any comment — everything before it up to the next "{" becomes a selector`);
    stripped.push(' ', ' '); i += 2; continue;
  }
  if (src[i] === '\n') line++;
  stripped.push(inComment ? (src[i] === '\n' ? '\n' : ' ') : src[i]);
  i++;
}
if (inComment) fails.push(`comment opened at line ${openedAt} is never closed`);

const code = stripped.join('');

/* ---- 2: braces ----------------------------------------------------------- */
let depth = 0, ln = 1;
for (let k = 0; k < code.length; k++) {
  if (code[k] === '\n') ln++;
  else if (code[k] === '{') depth++;
  else if (code[k] === '}') {
    depth--;
    if (depth < 0) { fails.push(`line ${ln}: unmatched "}"`); depth = 0; }
  }
}
if (depth !== 0) fails.push(`${depth} unclosed "{" at end of file`);

/* ---- 3: selectors that are actually prose -------------------------------- */
let selectors = 0;
for (const m of code.matchAll(/(^|[};])\s*([^{};]+?)\s*\{/g)) {
  const sel = m[2].trim();
  if (!sel || sel.startsWith('@')) continue;
  selectors++;
  /* Length is the wrong signal — this file has legitimate selector lists of
     180 characters, and flagging those trains people to ignore the check.
     The actual tell is English: a selector never contains a bare "the" or
     "that". The negative lookbehind for ":" keeps `:not(` from matching, and
     hyphen/underscore boundaries keep `data-they-said` style names out. */
  const PROSE_WORD = /(?<![:\w-])(the|that|which|because|therefore|they|their|would|should|does|cannot|into|from|with)(?![\w-])/i;
  if (PROSE_WORD.test(sel)) {
    const hit = sel.match(PROSE_WORD)[0];
    fails.push(`a selector contains the English word "${hit}": "${sel.slice(0, 90).replace(/\s+/g, ' ')}…" — almost certainly comment text being read as a selector`);
  }
}

/* ---- 4: the rule that was lost still applies ----------------------------- */
const printIdx = code.indexOf('@media print');
if (printIdx < 0) {
  fails.push('no @media print block — paper is a ground, not an afterthought');
} else {
  const printBody = code.slice(printIdx);
  if (!/:root:root\s*\{/.test(printBody)) {
    fails.push('the @media print `:root:root` blackout is gone — category accents will print in colour');
  } else {
    const blk = printBody.slice(printBody.indexOf(':root:root'));
    const decls = blk.slice(0, blk.indexOf('}'));
    for (const need of ['--rk-signal-ink', '--rk-signal-lift', '--rk-cat-logistics-ink']) {
      if (!decls.includes(need)) fails.push(`print blackout no longer sets ${need}`);
    }
  }
}

if (fails.length) {
  console.error(`check-token-syntax: ${fails.length} problem(s)\n`);
  for (const f of fails) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`check-token-syntax: ok — ${comments} comments balanced, braces balanced, ${selectors} selectors, print blackout intact`);
