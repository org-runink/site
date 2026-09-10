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

/* ---------------------------------------------------------------------------
 * 3. RENDERED MODE — `--rendered <dir>`, run after the Hugo build.
 *
 * WHY THIS EXISTS. An adversarial sweep found surviving false claims in `alt`
 * text, a JSON-LD Organization description, a meta description, a front-matter
 * title, an <h2>, a shortcode parameter, hugo.toml and three untouched
 * translations — and in NOT ONE of the places the source-mode checks above look.
 * The blind spots were structural, not incidental: English-only, content/-only,
 * and markdown-only. Everything the audit missed lived in exactly those gaps.
 *
 * Reading the built site closes all three at once. Every language, every string
 * that reaches a reader or a crawler, whatever produced it. The two worst items
 * found by hand were a phantom SKU in the commercial terms and a capability in
 * the JSON-LD that exists only in a mock data file — both invisible to a prose
 * pass, both trivially catchable here.
 * ------------------------------------------------------------------------- */
const renderedFlag = process.argv.indexOf('--rendered');
if (renderedFlag > -1) {
  const dir = process.argv[renderedFlag + 1];
  if (!dir) { console.error('--rendered needs a directory'); process.exit(2); }

  /*
   * Names that were published as shipped products and exist in no repository.
   * Enumerated, not pattern-matched: a heuristic for "sounds like a product"
   * would fire on every legitimate feature name. Adding one here is deliberate,
   * and removing one should mean the thing now exists.
   */
  const PHANTOM = [
    'Target Compute Runner', 'Runink Managed', 'ReAct Live Console',
    'Data Posture Module', 'Herd Observability', 'Runink Analytics',
    'Specialist Persona Swarm', 'Fuel Canister', 'backhaul matching',
  ];
  /*
   * Claims the code contradicts. Each was corrected by hand at least once.
   *
   * TWO FALSE-POSITIVE CLASSES ARE EXCLUDED, both found by running this against
   * the real site. A guard that cries wolf gets switched off, which is worse than
   * no guard, so these matter as much as the rules themselves.
   *
   * 1. DENIALS. The FACE whitepaper says "It does NOT take a copy of your
   *    records" — the correct statement, and the first version of this rule
   *    flagged it. `negated()` looks back a short way for a negation.
   * 2. THE INDUSTRY, NOT US. "best-in-class" is a standard benchmarking term:
   *    "a best-in-class benchmark sits at 95-98%", "Gartner indicates
   *    best-in-class organizations manage 80-85% of spend". All legitimate trade
   *    writing about other companies. Puffery is only a problem when the subject
   *    is Runink, so those rules carry `needsSubject`.
   */
  const negated = (hay, at) =>
    /\b(not|never|no|without|cannot|does not|is not|doesn't|isn't)\b[^.!?]{0,40}$/i
      .test(hay.slice(Math.max(0, at - 60), at));
  const SUBJECT = /\b(Runink|FACE|PULSE)\b/i;

  const CONTRADICTED = [
    [/nothing goes out before|nothing leaves your (building|business|organisation)/i,
     'blanket approval gate — REQUIRE_HITL is read by no enforcement code', false],
    [/(on )?a copy of your (own )?records/i,
     'the hypothesis engine is a prompt over supplied rules; there is no copy and no sandbox', false],
    [/cutting-edge|industry-leading|world-class|best-in-class/i,
     'unfalsifiable puffery — only flagged when Runink is the subject', true],
  ];

  const html = [];
  (function collect(d) {
    for (const n of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, n.name);
      if (n.isDirectory()) collect(p);
      else if (/\.html$/.test(n.name)) html.push(p);
    }
  })(dir);

  for (const p of html) {
    const src = readFileSync(p, 'utf8');
    const where = p.replace(dir, '').replace(/^\/*/, '');
    for (const name of PHANTOM) {
      if (src.includes(name)) {
        problems.push({ where, msg: `phantom product name "${name}" reaches a reader`,
          why: 'it exists in no repository; it was published as if shipped' });
      }
    }
    for (const [re, why, needsSubject] of CONTRADICTED) {
      const m = src.match(re);
      if (!m) continue;
      if (negated(src, m.index)) continue;                       // "does NOT take a copy of…"
      if (needsSubject) {
        // Only a problem when we are describing ourselves, not the industry.
        const near = src.slice(Math.max(0, m.index - 120), m.index + 120);
        if (!SUBJECT.test(near)) continue;
      }
      problems.push({ where, msg: `contradicted claim — "${m[0]}"`, why });
    }
    if (SAVES.test(src)) {
      const m = src.match(SAVES);
      problems.push({ where, msg: `savings figure attributed to Runink — "${m[0].slice(0, 90).trim()}"`,
        why: 'no producer exists for such a number' });
    }
  }
  console.log(`content-doctrine (rendered): checked ${html.length} built pages, all languages`);
  if (problems.length) {
    console.error(`\n✗ ${problems.length} problem(s):\n`);
    for (const p of problems) {
      console.error(`  ${p.where}\n    ${p.msg}\n    ${p.why}`);
    }
    process.exit(1);
  }
  console.log('✓ no phantom product name, contradicted claim or Runink savings figure reaches a reader');
  process.exit(0);
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
