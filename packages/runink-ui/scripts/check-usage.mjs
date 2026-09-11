#!/usr/bin/env node
/**
 * Catches the misuses the type system cannot.
 *
 * The preset makes fill-vs-ink structural — a fill has no textColor entry, so
 * `text-fill-success` does not compile. But nothing stops you writing a SOLID fill and
 * a generic ink on the same element, and that is a real bug with two grounds:
 * `fill-success` is #4A5D23 in BOTH registers while `text-primary` inverts, so the
 * pairing is legible on console and dark-on-dark on sheet. It looks fine in every
 * screenshot anyone takes of the dark ground.
 *
 * A solid fill must carry the ink measured against it (`on-accent`, `on-success`,
 * `on-provenance`). A WASH is different — it is mostly the ground showing through, so
 * the family ink or a generic ink is correct there.
 *
 * WHAT THIS CANNOT SEE. It matches fill and ink on the SAME element. A fill on a parent
 * with the ink on a descendant is the identical bug and is invisible here — two real
 * instances were found by agents reading the code, not by this script (FeatureCard's
 * icon tile, and two demo bands in the Container preview). Catching those needs the
 * rendered DOM, which is what the render check and the graded sheets are for. Treat a
 * clean run as "no same-element pairing errors", not as "contrast is fine".
 *
 * Usage: node scripts/check-usage.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const SITE = resolve(PKG, '../..');

/** Solid fills and the only ink sanctioned on each. */
const PAIRED_INK = {
  'fill-accent': 'on-accent',
  'fill-success': 'on-success',
  'fill-provenance': 'on-provenance',
  'fill-accent-deep': 'on-accent',
  'fill-success-glow': 'on-success',
};
/** Generic inks that are wrong on a solid fill. */
const GENERIC_INKS = ['text-primary', 'text-secondary'];

/*
 * Third-party brand colours, which are deliberately literal.
 *
 * A vendor's mark is not ours to tokenise: rendering the Snowflake logotype in
 * Runink's technical orange misrepresents someone else's trademark, and there is
 * no token that could be correct. These are the ONLY sanctioned raw hexes, they
 * are enumerated rather than pattern-matched, and adding a new one is a
 * deliberate edit to this list — so a Runink colour smuggled in as a hex still
 * fails the way it should.
 */
const BRAND_HEXES = new Map([
  ['#29B5E8', 'Snowflake'],
  ['#FF3621', 'Databricks'],
  ['#4285F4', 'Google'],
]);
/** Names retired by the FACE migration. Any survivor compiles to nothing. */
const RETIRED = /\b(?:bg|text|border|ring|from|via|to|shadow|divide|outline)-(?:primary|secondary)-\d{2,3}\b|\bshadow-neon-[a-z-]+\b|\b(?:bg|text|border|ring|from|via|to)-brand-[a-z-]+\b/;

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx$/.test(name)) out.push(p);
  }
  return out;
}

const files = [...walk(join(PKG, 'src')), ...walk(join(SITE, '.design-sync/previews'))];
const problems = [];

/*
 * Every custom property the token layer actually defines. A `var(--…)` naming
 * anything else silently invalidates its whole declaration — and CSS error recovery
 * drops the declaration without a word, so an inline
 * `linear-gradient(var(--gone) 1px, transparent 1px)` renders NOTHING rather than
 * rendering wrong. That is not hypothetical: the migration retired --color-* and left
 * 19 references behind, so BackgroundEffects' grid was absent in every cell, on both
 * grounds, and no class-based check could see it.
 */
const tokensCss = readFileSync(join(PKG, 'src/tokens.css'), 'utf8');
const DEFINED = new Set([...tokensCss.matchAll(/^\s*(--[\w-]+)\s*:/gm)].map((m) => m[1]));
/** Tailwind defines its own --tw-* at runtime; those are not ours to verify. */
const isForeign = (name) => name.startsWith('--tw-');

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const lineOf = (index) => src.slice(0, index).split('\n').length;

  /*
   * Scan whole className VALUES, not lines. Class strings routinely wrap across
   * several lines, and a line-based scan silently misses exactly the long strings
   * most likely to contain a mistake. `[\s\S]` rather than `.` for that reason.
   */
  const CLASS_ATTR = /(?:className|class)\s*=\s*(?:"([\s\S]*?)"|\{`([\s\S]*?)`\}|\{cx\(([\s\S]*?)\)\s*\})/g;

  for (const m of src.matchAll(CLASS_ATTR)) {
    const where = `${relative(SITE, file)}:${lineOf(m.index)}`;
    /*
     * Strip comments before scanning. A `cx(...)` call routinely carries a block
     * comment explaining the colour choice, and those comments quote measured
     * values — so the raw-hex rule fired on prose that documents WHY a token was
     * picked, which is exactly the comment we want people to write. Reported as a
     * false positive on a comment reading "on the sheet it measured #EDE2D3 on
     * #FFFCF9". Comments are not classes; they cannot reach the stylesheet.
     */
    const classes = (m[1] ?? m[2] ?? m[3] ?? '')
      .replace(/\/\*[\s\S]*?\*\//g, ' ')
      .replace(/\/\/[^\n]*/g, ' ')
      .replace(/['"]/g, ' ');

    checkClasses(classes, where);
  }

  /*
   * Tone maps — the blind spot that let a real bug through to the graders.
   *
   * Components keep their variants in a `Record<Tone, string>` lookup rather than
   * inline, so the rules above never saw them: `Feature`'s BADGE_TONES carried
   * `bg-fill-success text-primary` — a solid fill under a generic ink, the exact
   * pairing this file exists to catch — and shipped clean through every run. It
   * was found by a human reading the map, which is not a repeatable gate.
   *
   * Matched on the flat `key: 'classes',` form, which is how every tone map in
   * this package is written.
   */
  const MAP_BLOCK = /const\s+[A-Z_][A-Za-z0-9_]*\s*(?::[^=]*)?=\s*\{([\s\S]*?)\n\}/g;
  const MAP_ENTRY = /^\s*['"]?[A-Za-z0-9_-]+['"]?\s*:\s*(['"])([^'"]*)\1\s*,?\s*$/gm;
  for (const block of src.matchAll(MAP_BLOCK)) {
    for (const e of block[1].matchAll(MAP_ENTRY)) {
      checkClasses(e[2], `${relative(SITE, file)}:${lineOf(block.index + e.index)}`);
    }
  }

  /*
   * Bare string constants — `const CONTROL = 'rounded-chip border-hairline …'`.
   *
   * A class string hoisted into a plain `const` for a repeated element is neither an
   * attribute nor a map entry, so both scans above skip it. `ContactSection`'s
   * CONTROL is shared by every field on the contact form, which makes it the
   * highest-blast-radius string in the file and the one that was invisible here.
   * Length-gated so short constants (ids, keys, labels) are not treated as classes.
   */
  const CONST_STR = /const\s+[A-Z_][A-Za-z0-9_]*\s*(?::[^=]*)?=\s*(['"])([^'"]{12,})\1/g;
  for (const m of src.matchAll(CONST_STR)) {
    checkClasses(m[2], `${relative(SITE, file)}:${lineOf(m.index)}`);
  }

  function checkClasses(classes, where) {
    {
      for (const [fill, ink] of Object.entries(PAIRED_INK)) {
        /*
         * A SOLID fill is `bg-<fill>` with no /alpha and not the -wash variant — or a
         * GRADIENT whose stop is that fill, which is just as opaque under the text.
         * Missing the gradient case is why FeatureCard's icon tile (a from/to sweep
         * carrying text-primary) slipped past the first version of this check.
         */
        const solid = new RegExp(`(?<![\\w-])(?:bg|from|via|to)-${fill}(?![\\w/-])`);
        if (!solid.test(classes)) continue;
        const generic = GENERIC_INKS.find((g) => new RegExp(`(?<![\\w-])${g}(?![\\w/-])`).test(classes));
        if (generic && !classes.includes(`text-${ink}`)) {
          problems.push({
            where,
            msg: `solid \`bg-${fill}\` carries \`${generic}\` — needs \`text-${ink}\``,
            why: 'the fill does not flip between grounds but the generic ink does, so this reads on one ground and not the other',
          });
        }
      }

      if (/(?<![\w-])text-white(?![\w-])/.test(classes)) {
        problems.push({ where, msg: 'text-white', why: 'invisible on the sheet ground — use text-primary, or the fill\'s paired ink' });
      }
      /*
       * `white`/`black` in ANY colour position, not just `bg-`.
       *
       * The first version tested `bg-white` alone and missed
       * `from-white/10 to-transparent` — Hero's hover sheen, a gloss that lifts on
       * console and is an exact no-op on the sheet, where the content beneath it is
       * already near-white. A gradient stop is as pinned as a background.
       *
       * Two positions are deliberately NOT listed. `text-` has its own rule below
       * with more specific advice. `shadow-` is genuinely ground-neutral: a drop
       * shadow is darker than whatever it falls on in BOTH registers, so
       * `shadow-black/20` is correct rather than pinned — unlike a sheen, which has
       * to be lighter and therefore has no single cross-ground value.
       */
      const pinned = classes.match(/(?<![\w-])(?:bg|from|via|to|border|ring|divide|outline)-(?:white|black)(?:\/\d+)?(?![\w-])/);
      if (pinned) {
        problems.push({
          where,
          msg: `pinned stock colour \`${pinned[0]}\``,
          why: 'white and black do not flip with the ground — one register gets a lift and the other gets nothing; use a token that carries a value in both ramps',
        });
      }
      /*
       * Backdrop-dependent blend modes.
       *
       * A blend mode is a function of what is BEHIND it, so the ground decides what
       * it does: `screen` lightens, `multiply` darkens, and `overlay` switches
       * between the two depending on backdrop luminance. None of them can serve two
       * grounds, and each fails in the direction that looks fine on whichever ground
       * it was tuned against.
       *
       * Both instances in this codebase were tuned on console. `LandingHero`'s
       * `screen` plane vanished outright on the sheet (screen against near-white is
       * a no-op) and its `overlay` wash left a pastel-pink smear; `Hero`'s `overlay`
       * photo would have blown out to near-white, and NO preview exercises that prop,
       * so no graded cell could ever have caught it. Composite with alpha instead.
       *
       * `mix-blend-normal` and `mix-blend-plus-lighter` are not listed: `normal` is
       * the escape hatch a component uses to FORCE ground-neutrality, which is the
       * fix rather than the bug.
       */
      const blend = classes.match(/(?<![\w-])mix-blend-(?:multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity)(?![\w-])/);
      if (blend) {
        problems.push({
          where,
          msg: `backdrop-dependent \`${blend[0]}\``,
          why: 'a blend mode is a function of the backdrop, so it cannot serve both grounds — composite with opacity, or force mix-blend-normal',
        });
      }
      if (/(?<![\w-:])prose-invert(?![\w-])/.test(classes)) {
        problems.push({
          where,
          msg: 'unqualified prose-invert',
          why: 'a hardcoded dark prose palette — use `dark:prose-invert`, which is bound to [data-ground=console]',
        });
      }
      for (const hex of classes.match(/#[0-9a-fA-F]{3,8}\b/g) ?? []) {
        if (BRAND_HEXES.has(hex.toUpperCase())) continue; // a vendor's own mark
        problems.push({
          where,
          msg: `raw hex \`${hex}\` in a class string`,
          why: 'every colour must be a token (see tokens/REGISTRY.md); the only exception is a third-party brand colour, which must be added to BRAND_HEXES with the vendor named',
        });
      }
      const retired = classes.match(RETIRED);
      if (retired) {
        problems.push({ where, msg: `retired token \`${retired[0]}\``, why: 'compiles to nothing since the FACE migration' });
      }
    }
  }

  // Custom properties, anywhere in the file — these live in inline styles and CSS
  // strings, not in class attributes, so the scans above cannot see them.
  // strings, not in class attributes, so the scan above cannot see them.
  for (const m of src.matchAll(/var\((--[\w-]+)\)/g)) {
    const name = m[1];
    if (isForeign(name) || DEFINED.has(name)) continue;
    problems.push({
      where: `${relative(SITE, file)}:${lineOf(m.index)}`,
      msg: `undefined custom property \`${name}\``,
      why: 'an undefined var invalidates its whole declaration, and CSS drops it silently — the rule renders nothing rather than rendering wrong',
    });
  }
}

console.log(`usage: scanned ${files.length} files`);
if (problems.length) {
  console.error(`\n✗ ${problems.length} usage problem(s):\n`);
  for (const p of problems) {
    console.error(`  ${p.where}`);
    console.error(`    ${p.msg}`);
    console.error(`    ${p.why}`);
  }
  process.exit(1);
}
console.log('✓ no solid fill carries an unpaired ink; no hex, no text-white, no retired tokens');
