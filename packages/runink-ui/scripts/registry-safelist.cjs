/**
 * Derives the Tailwind safelist from tokens/registry.json.
 *
 * Every token is safelisted only in the positions the registry grants it, so the
 * safelist cannot accidentally resurrect a utility the preset deliberately omits —
 * i.e. `text-fill-success` stays non-existent even here.
 */
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

/** Tailwind theme key → the utility prefixes that read from it. */
const PREFIX_FOR = {
  backgroundColor: ['bg'],
  textColor: ['text'],
  borderColor: ['border'],
  divideColor: ['divide'],
  ringColor: ['ring'],
  outlineColor: ['outline'],
  fill: ['fill'],
  stroke: ['stroke'],
  gradientColorStops: ['from', 'via', 'to'],
  boxShadowColor: ['shadow'],
  caretColor: ['caret'],
  textDecorationColor: ['decoration'],
};

/** Alpha steps the components actually use. Keep tight — every entry is emitted CSS. */
const ALPHAS = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90];

function registrySafelist() {
  const registry = JSON.parse(readFileSync(join(__dirname, '../tokens/registry.json'), 'utf8'));

  const entries = [];
  for (const group of ['surfaces', 'inks', 'fills', 'onFills']) {
    for (const e of registry[group] ?? []) entries.push(e);
  }
  entries.push(registry.severity.wash, ...registry.severity.bands);

  const out = new Set();
  for (const e of entries) {
    for (const pos of e.positions) {
      for (const prefix of PREFIX_FOR[pos] ?? []) {
        out.add(`${prefix}-${e.web}`);
        // Baked-alpha tokens carry their own opacity; a /NN modifier on them is
        // meaningless, so they are deliberately not expanded.
        if (!e.bakedAlpha && e.web !== 'edge') {
          for (const a of ALPHAS) out.add(`${prefix}-${e.web}/${a}`);
        }
      }
    }
    if (e.wash) out.add(`bg-${e.web}-wash`);
  }

  // Non-colour scales the components rely on and the layouts do not reference yet.
  for (const r of ['badge', 'chip', 'card', 'pill']) out.add(`rounded-${r}`);
  for (const s of ['glow-success', 'glow-accent']) out.add(`shadow-${s}`);
  for (const f of ['sans', 'display', 'mono']) out.add(`font-${f}`);
  for (const a of ['cta-pulse', 'marquee', 'testimonials-scroll', 'pulse-slow']) out.add(`animate-${a}`);

  return [...out].sort();
}

module.exports = { registrySafelist };
