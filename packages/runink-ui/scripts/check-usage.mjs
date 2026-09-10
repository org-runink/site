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
    const classes = (m[1] ?? m[2] ?? m[3] ?? '').replace(/['"]/g, ' ');

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
      if (/#[0-9a-fA-F]{3,8}\b/.test(classes)) {
        problems.push({ where, msg: 'raw hex in a class string', why: 'every colour must be a token; see tokens/REGISTRY.md' });
      }
      const retired = classes.match(RETIRED);
      if (retired) {
        problems.push({ where, msg: `retired token \`${retired[0]}\``, why: 'compiles to nothing since the FACE migration' });
      }
    }
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
