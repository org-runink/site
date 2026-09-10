#!/usr/bin/env node
/**
 * Generates the shared Tailwind token preset from DESIGN.md.
 *
 * DESIGN.md's YAML frontmatter is the single source of truth for Runink's design
 * tokens. This script turns it into two dependency-free artifacts:
 *
 *   site/design-tokens.preset.js   a Tailwind preset consumed by BOTH
 *                                  site/tailwind.config.js and @runink/ui
 *   src/tokens.css                 the same tokens as CSS custom properties,
 *                                  so the synced design-system bundle ships a
 *                                  token layer that is reachable from styles.css
 *
 * Run `npm run gen:tokens` after editing DESIGN.md. Both outputs are committed
 * so the site build never depends on this package being installed.
 *
 * Deliberately narrow: we only emit tokens that DIFFER from Tailwind's stock
 * theme. DESIGN.md's typography scale, spacing scale and motion durations are
 * byte-identical to Tailwind's defaults, so emitting them would add vocabulary
 * without adding meaning — and every extra name is one more thing the design
 * agent has to choose between.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const SITE = resolve(PKG, '../..');

const DESIGN_MD = resolve(SITE, 'DESIGN.md');
const PRESET_OUT = resolve(SITE, 'design-tokens.preset.js');
const TOKENS_CSS_OUT = resolve(PKG, 'src/tokens.css');

/**
 * `primary-950` is referenced 38 times across layouts/ but is defined in no
 * Tailwind config, so those backgrounds currently render transparent. It is the
 * near-black canvas that replaced `stone-950` (#0c0a09) during the move off hex
 * literals onto the named ramp. Chosen to hold the ramp's ~230deg hue at
 * near-black. This is the one value NOT derived from DESIGN.md.
 */
const PRIMARY_950 = '#0f1330';

/**
 * Hex literals used directly in layouts/ that DESIGN.md names, plus three it
 * does not. Naming them is the whole point of the preset: `bg-brand-green`
 * instead of `bg-[#65793e]` (44 occurrences), and so on.
 */
const EXTRA_BRAND = {
  // Deep canvases used as arbitrary values in layouts/. DESIGN.md documents
  // #161515 in its prose; #1b1919 and #526332 are undocumented but in use.
  ink: '#161515',
  'ink-soft': '#1b1919',
  // One step lighter again: the inset panel / secondary button fill that sits
  // just above `ink-soft`. Appears in layouts/ as #211F1F, #1f1d1b and #1a1716 —
  // three values within ~6 units of each other, i.e. one intended surface
  // written three ways. Named once here so ports stop approximating it.
  'ink-raised': '#211F1F',
  'green-deep': '#526332',
  // The interactive sage accent: hover border + hover icon colour throughout the
  // card idiom. Sits between `sage` (#C8D9A8) and `green` (#65793e); DESIGN.md
  // omits it, but the components can't express their hover state without it.
  'sage-dark': '#A8B88B',
  // The hero halo's warm stop. Used once in layouts/ as a literal; DESIGN.md
  // omits it entirely.
  copper: '#B87333',
};

/**
 * Motion the site defines as hand-written CSS rather than tokens.
 *
 * `cta-pulse` and `testimonials-scroll` are real `@keyframes` in
 * `assets/css/main.css`, reachable only through the bare class names `.cta-pulse`
 * and `.testimonials-track.animate`. `pulse-slow` is referenced in layouts/ as
 * `animate-pulse-slow` but is defined NOWHERE — a dead class, given a real
 * definition here.
 *
 * Promoting all three to Tailwind keyframes/animation makes them available as
 * `animate-*` utilities, which is what the ported React components use (they have
 * no access to the site's stylesheet).
 */
const EXTRA_KEYFRAMES = {
  'cta-pulse': {
    '0%': { boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.4)' },
    '70%': { boxShadow: '0 0 0 15px rgba(234, 88, 12, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(234, 88, 12, 0)' },
  },
  // The site names this one after its first use (`testimonials-scroll`), but the
  // same loop drives the client-logo wall too. `marquee` is the neutral name the
  // components use; the site's original name is kept so the Hugo CSS and the
  // React package still speak the same vocabulary.
  marquee: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(calc(-100% / 2))' },
  },
  'testimonials-scroll': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(calc(-100% / 2))' },
  },
  'pulse-slow': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.4' },
  },
};

const EXTRA_ANIMATION = {
  'cta-pulse': 'cta-pulse 2s infinite',
  marquee: 'marquee 40s infinite linear',
  'testimonials-scroll': 'testimonials-scroll 40s infinite linear',
  'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

function readFrontmatter(path) {
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error(`${path}: no YAML frontmatter found`);
  const data = yaml.load(m[1]);
  if (!data || typeof data !== 'object') throw new Error(`${path}: frontmatter is not a mapping`);
  return data;
}

/** YAML parses `50:` as a number; Tailwind wants string shade keys. */
function shades(obj, extra = {}) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) out[String(k)] = v;
  return { ...out, ...extra };
}

/** `dark_orange` -> `orange-dark`, `light_sage` -> `sage`. */
function brandKey(k) {
  const explicit = { dark_orange: 'orange-dark', dark_green: 'green-dark', light_sage: 'sage' };
  return explicit[k] ?? k.replace(/_/g, '-');
}

function buildPreset(d) {
  const colors = d.colors ?? {};
  const brand = {};
  for (const [k, v] of Object.entries(colors.brand_accents ?? {})) brand[brandKey(k)] = v;
  Object.assign(brand, EXTRA_BRAND);
  // Names for the off-white / beige text tones that dark sections rely on.
  if (colors.text?.off_white) brand.paper = colors.text.off_white;
  if (colors.text?.beige_accent) brand.beige = colors.text.beige_accent;

  const fonts = d.typography?.font_families ?? {};
  const toStack = (s) => String(s).split(',').map((x) => x.trim()).filter(Boolean);

  return {
    colors: {
      primary: shades(colors.primary ?? {}, { 950: PRIMARY_950 }),
      secondary: shades(colors.secondary ?? {}),
      brand,
    },
    fontFamily: {
      ...(fonts.sans ? { sans: toStack(fonts.sans) } : {}),
      ...(fonts.heading ? { heading: toStack(fonts.heading) } : {}),
      ...(fonts.mono ? { mono: toStack(fonts.mono) } : {}),
    },
    // Only the two non-stock radii. DESIGN.md's custom_card/custom_large are the
    // generous card corners the aesthetic depends on.
    borderRadius: {
      ...(d.radii?.custom_card ? { card: d.radii.custom_card } : {}),
      ...(d.radii?.custom_large ? { large: d.radii.custom_large } : {}),
    },
    // Only the glow shadows; sm..2xl/inner match Tailwind's stock scale.
    boxShadow: {
      ...Object.fromEntries(
        Object.entries(d.shadows ?? {})
          .filter(([k]) => k.startsWith('neon_'))
          .map(([k, v]) => [k.replace(/_/g, '-'), v]),
      ),
      // The hover intensity of the orange glow. DESIGN.md only defines the
      // at-rest `neon_orange` (15px/0.1); layouts/ reach for this stronger one
      // as an arbitrary value on hover.
      'neon-orange-strong': '0 0 25px rgba(234, 88, 12, 0.3)',
      // The red counterpart to `neon_green`, following its 15px/0.3 shape.
      // DESIGN.md defines glows for orange and green but not red, even though red
      // (`brand-red`, #991b1b) is a first-class accent — the "cockpit" treatment
      // has no glow token without this.
      'neon-red': '0 0 15px rgba(153, 27, 27, 0.3)',
    },
    keyframes: EXTRA_KEYFRAMES,
    animation: EXTRA_ANIMATION,
  };
}

function emitPreset(theme) {
  const body = JSON.stringify(theme, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '    ' + line))
    .join('\n');
  return `/**
 * GENERATED by packages/runink-ui/scripts/gen-tokens.mjs from DESIGN.md.
 * Do not edit by hand — edit DESIGN.md and re-run \`npm run gen:tokens\`
 * from packages/runink-ui.
 *
 * Shared Tailwind preset: the single source of truth for Runink's design tokens.
 * Consumed by site/tailwind.config.js (the Hugo site) and by @runink/ui (the
 * React component library that claude.ai/design builds with), so both render
 * the same brand.
 *
 * Only tokens that DIFFER from Tailwind's stock theme live here. DESIGN.md's
 * type scale, spacing scale and motion durations are identical to Tailwind's
 * defaults and are deliberately not re-emitted.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  theme: {
    extend: ${body},
  },
};
`;
}

function emitTokensCss(theme) {
  const lines = [];
  lines.push('/**');
  lines.push(' * GENERATED by scripts/gen-tokens.mjs from DESIGN.md — do not edit by hand.');
  lines.push(' *');
  lines.push(' * The Runink token layer as CSS custom properties. Tailwind utilities are the');
  lines.push(' * primary styling idiom; these exist so tokens stay reachable from plain CSS');
  lines.push(' * and from the design-system bundle\'s styles.css import closure.');
  lines.push(' */');
  lines.push(':root {');
  for (const [family, shadeMap] of Object.entries(theme.colors)) {
    for (const [shade, value] of Object.entries(shadeMap)) {
      lines.push(`  --color-${family}-${shade}: ${value};`);
    }
  }
  for (const [name, stack] of Object.entries(theme.fontFamily)) {
    lines.push(`  --font-${name}: ${stack.join(', ')};`);
  }
  for (const [name, value] of Object.entries(theme.borderRadius)) {
    lines.push(`  --radius-${name}: ${value};`);
  }
  for (const [name, value] of Object.entries(theme.boxShadow)) {
    lines.push(`  --shadow-${name}: ${value};`);
  }
  lines.push('}');
  lines.push('');
  return lines.join('\n');
}

const design = readFrontmatter(DESIGN_MD);
const theme = buildPreset(design);

mkdirSync(dirname(TOKENS_CSS_OUT), { recursive: true });
writeFileSync(PRESET_OUT, emitPreset(theme), 'utf8');
writeFileSync(TOKENS_CSS_OUT, emitTokensCss(theme), 'utf8');

const count = (o) => Object.keys(o).length;
console.log(`wrote ${PRESET_OUT}`);
console.log(`wrote ${TOKENS_CSS_OUT}`);
console.log(
  `tokens: primary ${count(theme.colors.primary)} shades (incl. injected 950=${PRIMARY_950}), ` +
    `secondary ${count(theme.colors.secondary)}, brand ${count(theme.colors.brand)}, ` +
    `fonts ${count(theme.fontFamily)}, radii ${count(theme.borderRadius)}, shadows ${count(theme.boxShadow)}`,
);
