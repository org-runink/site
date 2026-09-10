#!/usr/bin/env node
/**
 * Content-side guards for the two things a fact-audit had to fix by hand.
 *
 * Both failures below were found by people reading pages, not by any check, and
 * both are the kind that ship silently: nothing errors, the page renders, and the
 * claim is simply false. A rule with no check is a comment.
 *
 * 1. PRODUCT ATTRIBUTION ON USE-CASE PAGES.
 *    The site sells three things — FACE (the flagship), PULSE (a separate
 *    product) and core (the platform underneath). A use-case page that does not
 *    say which one it belongs to lets a reader take the whole set as one
 *    product's track record, which is exactly the conflation this was written to
 *    stop. `layout: "use_case"` never resolved to a layout that renders
 *    `.Params.product` (see layouts/use_cases/single.html), so attribution lives
 *    as hand-written HTML in each page body — meaning a writer who forgets the
 *    paragraph ships an unattributed page. The front-matter key is the thing that
 *    can actually be checked, so it is required here whether or not a layout
 *    renders it yet.
 *
 * 2. SAVINGS FIGURES PRESENTED AS RUNINK RESULTS.
 *    There is no producer for one. face/grpc/cmd/savings_summary_test.go:24:
 *    "EVERY DERIVED SAVINGS SOURCE WAS AN INVENTED RATE, and all four are now
 *    gone" — spend x 0.08, km x an invented $/km, reserve x 0.45, spend x
 *    unusedShare x 0.66. So a number offered as something Runink saves, recovers
 *    or cuts is unsupported BY CONSTRUCTION, not merely unmeasured.
 *
 *    What this deliberately does NOT flag: third-party statistics about the
 *    problem domain. "Demurrage costs the industry $5B a year (UNCTAD)" is trade
 *    writing and is fine. The test is whether RUNINK is the subject of the verb.
 *
 * Usage: node scripts/check-content-doctrine.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const SITE = new URL('..', import.meta.url).pathname;
const problems = [];

/** English pages only — translations mirror whatever the English page says. */
const isEnglish = (f) => /\.md$/.test(f) && !/\.(es|fr|pt)\.md$/.test(f);

// ---------------------------------------------------------------------------
// 1. Every use-case page names its product.
// ---------------------------------------------------------------------------
const UC = join(SITE, 'content/use-cases');
for (const f of readdirSync(UC).filter(isEnglish)) {
  if (f === '_index.md') continue; // the index carries its own attribution prose
  const src = readFileSync(join(UC, f), 'utf8');
  const fm = src.split('---')[1] ?? '';
  if (!/^product:\s*\S/m.test(fm)) {
    problems.push({
      where: `content/use-cases/${f}`,
      msg: 'no `product:` in front matter',
      why: 'a use-case page that does not name its product lets a reader read the whole set as one product\'s track record',
    });
  }
}

/*
 * Runink as the subject of a saving verb. Deliberately narrow: it wants the
 * company or a product name close in front of the verb, so an industry
 * statistic ("demurrage costs the industry $5B") does not trip it.
 */
const SAVES = /\b(Runink(?:\s+(?:FACE|PULSE|core))?|FACE|PULSE)\b[^.!?]{0,60}?\b(saves?|saved|savings of|recovers?|recovered|cuts?|reduces?|reduced)\b[^.!?]{0,60}?(\d+\s*%|[$£€]\s?\d)/i;

// ---------------------------------------------------------------------------
// 2. No savings figure attributed to Runink, anywhere in content.
// ---------------------------------------------------------------------------
function walk(dir, out = []) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.name === 'tests' || name.name === 'design') continue; // fixtures, noindex specimen
    const p = join(dir, name.name);
    if (name.isDirectory()) walk(p, out);
    else if (isEnglish(name.name)) out.push(p);
  }
  return out;
}

for (const p of walk(join(SITE, 'content'))) {
  const src = readFileSync(p, 'utf8');
  if (/^\s*draft:\s*true/m.test(src)) continue; // held for a decision, not published
  for (const line of src.split('\n')) {
    const m = line.match(SAVES);
    if (m) {
      problems.push({
        where: p.replace(SITE, ''),
        msg: `savings figure attributed to Runink — "${m[0].slice(0, 90).trim()}"`,
        why: 'every derived savings source was an invented rate and all four were deleted; there is no producer for this number',
      });
      break; // one report per file is enough to send someone to it
    }
  }
}

console.log(`content-doctrine: checked ${walk(join(SITE, 'content')).length} English pages`);
if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s):\n`);
  for (const p of problems) {
    console.error(`  ${p.where}`);
    console.error(`    ${p.msg}`);
    console.error(`    ${p.why}`);
  }
  process.exit(1);
}
console.log('✓ every use-case page names its product; no savings figure is attributed to Runink');
