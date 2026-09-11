#!/usr/bin/env node
//
// Template syntax does not belong in a content file.
//
// WHY THIS EXISTS. A Go template comment is a layouts construct. Hugo evaluates
// template syntax in layouts/ and NOT inside content/. A note written that way
// in a markdown file is not a comment. It is text, and it renders.
//
// That happened on 11 September 2026. A 1,213-character reviewer note explaining
// why a sovereignty claim had been softened shipped to production as visible
// body copy on /company/ - a page robots.txt explicitly opens to GPTBot,
// ClaudeBot, PerplexityBot and CCBot. It broke rule 10 (never publish the
// mechanics of how the site treats the reader) and rule 2 (never state what the
// product lacks) in one paragraph, and an external audit found it rather than
// anything here.
//
// Nothing caught it because nothing was looking: it is valid markdown, it does
// not break the build, it does not 404, and check-content-doctrine.mjs scans for
// banned vocabulary rather than for stray syntax.
//
// In content/, a note goes in the YAML front matter behind a hash.
//
// Shortcodes are the legitimate exception - the angle-bracket and percent forms
// ARE evaluated in content - so only comments and template actions are matched.
//
// This file uses line comments on purpose: a block comment describing the
// offending syntax would contain the sequence that ends a block comment, which
// is how the first version of this checker failed to parse.
//
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'content';
const OFFENDERS = [
  { re: /\{\{\/\*/,            what: 'Go template comment {{/* */}} — renders as visible text' },
  { re: /\{\{-?\s*(if|range|with|end|define|block|partial|template)\b/, what: 'Go template action — renders as visible text' },
];

const walk = (d) => readdirSync(d).flatMap((e) => {
  const p = join(d, e);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
});

let bad = 0;
for (const file of walk(ROOT)) {
  const lines = readFileSync(file, 'utf8').split('\n');
  let inFrontMatter = false, seen = 0;
  lines.forEach((line, i) => {
    if (line.trim() === '---') { seen++; inFrontMatter = seen < 2; return; }
    if (inFrontMatter || seen < 2) return;            // front matter is not rendered
    if (line.trimStart().startsWith('#')) return;      // a markdown heading, not a comment
    for (const { re, what } of OFFENDERS) {
      if (re.test(line)) {
        console.error(`${file}:${i + 1}  ${what}`);
        console.error(`  ${line.trim().slice(0, 100)}`);
        bad++;
      }
    }
  });
}

if (bad) {
  console.error(`\ncheck-content-template-syntax: ${bad} line(s) would render as visible text.`);
  console.error('Move the note into the YAML front matter behind a "#".');
  process.exit(1);
}
console.log('check-content-template-syntax: ok — no template syntax in content bodies');
