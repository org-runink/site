#!/usr/bin/env node
/**
 * Makes the palette's contrast table executable instead of decorative.
 *
 * FACE enforces this in `flutter/test/token_contrast_test.dart`; the web side had the
 * same tokens and no check at all. An unenforced table drifts — that is precisely how
 * `#ca4708` came to be published as usable while measuring 4.22:1 on the two grounds it
 * actually sat on.
 *
 * The maths is a straight port of `face/flutter/test/support/contrast.dart`, including
 * the alpha compositor, which is not optional here: several tokens carry alpha
 * (`text-secondary` is 60% on console and 70% on sheet, deliberately), and comparing an
 * unresolved translucent colour against a ground reports the ratio of a colour that
 * never reaches a pixel.
 *
 * Zero dependencies on purpose. Adding one to the root package.json would desync
 * pnpm-lock.yaml and break `pnpm install --frozen-lockfile` in CI.
 *
 * Usage: node scripts/check-contrast.mjs
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = resolve(HERE, '..');
const TOKENS = join(PKG, 'tokens');

const ramp = JSON.parse(readFileSync(join(TOKENS, 'face-ramp.json'), 'utf8'));
const registry = JSON.parse(readFileSync(join(TOKENS, 'registry.json'), 'utf8'));
const derived = JSON.parse(readFileSync(join(TOKENS, 'derived.json'), 'utf8'));

// ── the maths, ported from face/flutter/test/support/contrast.dart ─────────────

/** '#AARRGGBB' → {r,g,b,a} in 0..1. */
function argb(hex) {
  const n = /^#([0-9A-Fa-f]{8})$/.exec(hex)[1];
  return {
    a: parseInt(n.slice(0, 2), 16) / 255,
    r: parseInt(n.slice(2, 4), 16) / 255,
    g: parseInt(n.slice(4, 6), 16) / 255,
    b: parseInt(n.slice(6, 8), 16) / 255,
  };
}

const srgbChannel = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));

function relativeLuminance(c) {
  return 0.2126 * srgbChannel(c.r) + 0.7152 * srgbChannel(c.g) + 0.0722 * srgbChannel(c.b);
}

function contrastRatio(a, b) {
  const x = relativeLuminance(a);
  const y = relativeLuminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/**
 * Composite a possibly-translucent foreground over an opaque background.
 * Without this, every alpha-bearing token is measured as a colour that never
 * reaches a pixel.
 */
function over(fg, bg) {
  return {
    a: 1,
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
  };
}

const cbrt = (v) => (v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3));
const linear = (v) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));

/**
 * Perceptual distance in OKLab — the right instrument for "can these two marks be told
 * apart", where contrast ratio answers "can this ink be read on that ground". The two
 * questions are different, and conflating them is what collapsed the severity ramp:
 * WCAG sees no hue, so a vivid red and a vivid green can measure 1.03:1.
 */
function oklabDeltaE(x, y) {
  const toOklab = (c) => {
    const r = linear(c.r);
    const g = linear(c.g);
    const b = linear(c.b);
    const l = cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
    ];
  };
  const a = toOklab(x);
  const b = toOklab(y);
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

/** A token at a given alpha, as a colour object. */
const at = (hex, alpha) => ({ ...argb(hex), a: alpha });

// ── the checks ────────────────────────────────────────────────────────────────

const TEXT_FLOOR = 4.5;
const MARK_FLOOR = 3.0;
const SURFACES = ['backgroundDark', 'surfaceDark', 'surfaceElevated', 'surfaceHighlight'];
const GROUNDS = ['console', 'sheet'];

let failures = 0;
let checks = 0;
const lines = [];

function assert(ok, label, detail) {
  checks++;
  if (!ok) {
    failures++;
    lines.push(`  ✗ ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

function entriesByTier(tier) {
  const out = [];
  for (const group of ['surfaces', 'inks', 'fills', 'onFills']) {
    for (const e of registry[group] ?? []) if (e.tier === tier) out.push(e);
  }
  if (registry.severity.wash.tier === tier) out.push(registry.severity.wash);
  for (const b of registry.severity.bands) if (b.tier === tier) out.push(b);
  return out;
}

/** Resolve a registry entry to a colour on a ground, honouring baked alpha. */
function colourOf(entry, ground) {
  if (entry.const) return argb(entry.const);
  if (entry.face) return argb(ramp[ground][entry.face]);
  if (entry.web === 'edge') return at(ramp[ground].textPrimary, derived.alpha.edge[ground]);
  return null;
}

for (const ground of GROUNDS) {
  const surfaces = SURFACES.map((s) => argb(ramp[ground][s]));

  // 1. Every ink clears the text floor on all four surfaces of its ramp.
  for (const e of entriesByTier('ink')) {
    const c = colourOf(e, ground);
    if (!c) continue;
    // on-* inks are sanctioned only on their own fill, checked separately below.
    if (e.validOn) continue;
    surfaces.forEach((bg, i) => {
      const r = contrastRatio(over(c, bg), bg);
      assert(r >= TEXT_FLOOR, `${ground}: ink \`${e.web}\` on ${SURFACES[i]}`, `${r.toFixed(2)}:1 < ${TEXT_FLOOR}`);
    });
  }

  // 2. Every mark clears the non-text floor.
  for (const e of entriesByTier('mark')) {
    const c = colourOf(e, ground);
    if (!c) continue;
    const applicable = SURFACES.filter((s) => !(e.notOver ?? []).includes(s));
    applicable.forEach((s) => {
      const bg = argb(ramp[ground][s]);
      const r = contrastRatio(over(c, bg), bg);
      assert(r >= MARK_FLOOR, `${ground}: mark \`${e.web}\` on ${s}`, `${r.toFixed(2)}:1 < ${MARK_FLOOR}`);
    });
  }

  /*
   * 3. The never-ink negative.
   *
   * Scoped to the tokens FACE actually measured as illegible, on the ramp it
   * measured them on — NOT every fill on every ground. A blanket assertion here was
   * wrong and the test said so: on the sheet ramp the fills are dark and perfectly
   * legible (fill-provenance reaches 9.34:1), and oliveInk IS oliveSuccess there, so
   * "every fill must fail as ink" is false by construction.
   *
   * What actually keeps a fill out of a text position is the preset, which gives it
   * no textColor entry. This assertion guards the narrower claim: the token FACE
   * singled out as fill-only must stay below the floor, so it cannot quietly become
   * legible and look like it earned an ink position.
   */
  for (const e of entriesByTier('fill')) {
    if (!(e.neverInkOn ?? []).includes(ground)) continue;
    const c = colourOf(e, ground);
    const best = Math.max(...surfaces.map((bg) => contrastRatio(over(c, bg), bg)));
    assert(
      best < TEXT_FLOOR,
      `${ground}: fill \`${e.web}\` reaches ${best.toFixed(2)}:1 as ink`,
      'FACE measured this token as fill-only; a value moved',
    );
  }

  // 4. The chip pairing: family ink on family wash, at the measured ceiling —
  //    and it must FAIL above it, so the ceiling cannot be raised silently.
  const washAlpha = derived.alpha.wash.value;
  for (const group of ['fills']) {
    for (const e of registry[group]) {
      if (!e.wash || !e.pairInk) continue;
      const inkEntry = [...entriesByTier('ink')].find((x) => x.web === `ink-${e.web.replace('fill-', '')}`);
      if (!inkEntry) continue;
      const fill = argb(ramp[ground][e.face]);
      const ink = colourOf(inkEntry, ground);
      for (const surface of surfaces) {
        const wash = over({ ...fill, a: washAlpha }, surface);
        const r = contrastRatio(over(ink, wash), wash);
        assert(r >= TEXT_FLOOR, `${ground}: \`${inkEntry.web}\` on \`${e.web}\` wash @${washAlpha}`, `${r.toFixed(2)}:1`);
      }
    }
  }

  // 5. on-* inks: valid on their own fill, and NOT valid elsewhere.
  for (const e of registry.onFills) {
    const ink = colourOf(e, ground);
    for (const target of e.validOn) {
      const fillEntry = registry.fills.find((f) => f.web === target);
      const fill = argb(ramp[ground][fillEntry.face]);
      const r = contrastRatio(over(ink, fill), fill);
      assert(r >= TEXT_FLOOR, `${ground}: \`${e.web}\` on \`${target}\``, `${r.toFixed(2)}:1`);
    }
  }
  /*
   * on-accent must NOT be legible on the accent INK — the trap the token exists to
   * close. Sheet only, and that is not a loophole: `technicalOrangeLight` is a LIGHT
   * peach on console and a DARK brown on sheet ("the light value is dark on purpose"),
   * so near-black over it is legible on one ramp and not the other. FACE's 2.44
   * measurement is the sheet ramp. Asserting failure on console would assert
   * something false; the pairing is unsanctioned there regardless, and the preset is
   * what prevents it.
   */
  if (ground === 'sheet') {
    const onAccent = argb(ramp[ground].onAccent);
    const accentInk = argb(ramp[ground].technicalOrangeLight);
    const r = contrastRatio(over(onAccent, accentInk), accentInk);
    assert(r < TEXT_FLOOR, `${ground}: on-accent must fail on ink-accent`, `measured ${r.toFixed(2)}:1`);
  }

  // 6. Severity: legible, ordered, and perceptually separable.
  const bands = registry.severity.bands.map((b) => ({ web: b.web, c: argb(ramp[ground][b.face]) }));
  const washFill = argb(ramp[ground][registry.severity.wash.face]);
  for (const b of bands) {
    surfaces.forEach((bg, i) => {
      const r = contrastRatio(over(b.c, bg), bg);
      assert(r >= TEXT_FLOOR, `${ground}: severity \`${b.web}\` on ${SURFACES[i]}`, `${r.toFixed(2)}:1`);
    });
    const washOverCanvas = over({ ...washFill, a: derived.alpha.wash.value }, surfaces[0]);
    const rw = contrastRatio(over(b.c, washOverCanvas), washOverCanvas);
    assert(rw >= TEXT_FLOOR, `${ground}: severity \`${b.web}\` on its own wash`, `${rw.toFixed(2)}:1`);
  }
  // Luminance strictly ordered critical -> ok, so the ramp cannot be shuffled.
  const lums = bands.map((b) => relativeLuminance(b.c));
  const ordered = ground === 'console'
    ? lums.every((v, i) => i === 0 || v > lums[i - 1])
    : lums.every((v, i) => i === 0 || v > lums[i - 1]);
  assert(ordered, `${ground}: severity luminance is monotone critical->ok`, lums.map((l) => l.toFixed(3)).join(' '));
  // Adjacent bands separable by hue, since WCAG cannot see hue at all.
  for (let i = 1; i < bands.length; i++) {
    const d = oklabDeltaE(bands[i - 1].c, bands[i].c);
    assert(d >= 0.06, `${ground}: severity ${bands[i - 1].web} vs ${bands[i].web} OKLab dE`, d.toFixed(3));
  }
}

// 7. The wash ceiling is a ceiling: the olive pair must FAIL above it. FACE pins
//    0.15 because light olive measures 4.64 there and 4.44 at 0.18.
{
  const ground = 'sheet';
  const fill = argb(ramp[ground].oliveSuccess);
  const ink = argb(ramp[ground].oliveInk);
  /*
   * Measured over the WORST surface, not the canvas. A wash sits on whatever surface
   * is under it, and the ceiling has to hold on all of them — measuring over the
   * lightest one is measuring the best case, which is how a ceiling stops biting.
   * FACE's 4.64 / 4.44 pair is the worst-surface number.
   */
  const atAlpha = (alpha) =>
    Math.min(
      ...SURFACES.map((s) => {
        const wash = over({ ...fill, a: alpha }, argb(ramp[ground][s]));
        return contrastRatio(over(ink, wash), wash);
      }),
    );
  assert(atAlpha(0.15) >= TEXT_FLOOR, 'wash ceiling: olive pair passes at 0.15', atAlpha(0.15).toFixed(2));
  assert(atAlpha(0.18) < TEXT_FLOOR, 'wash ceiling: olive pair must FAIL at 0.18', `measured ${atAlpha(0.18).toFixed(2)} — the ceiling moved`);
  assert(atAlpha(0.3) < TEXT_FLOOR, 'wash ceiling: olive pair must FAIL at 0.30', atAlpha(0.3).toFixed(2));
}

// 8. textSecondary's two alphas are deliberate: the sheet ramp must FAIL at the
//    console alpha, which is the whole reason they differ.
{
  const consoleAlpha = argb(ramp.console.textSecondary).a;
  const sheetInk = argb(ramp.sheet.textSecondary);
  const worstSheet = Math.min(
    ...SURFACES.map((s) => {
      const bg = argb(ramp.sheet[s]);
      return contrastRatio(over({ ...sheetInk, a: consoleAlpha }, bg), bg);
    }),
  );
  assert(
    worstSheet < TEXT_FLOOR,
    'sheet text-secondary must FAIL at the console alpha',
    `measured ${worstSheet.toFixed(2)} — the two alphas no longer need to differ`,
  );
}

console.log(`contrast: ${checks} assertions over ${GROUNDS.length} grounds`);
console.log(`palette: FACE ${ramp.provenance.commit.slice(0, 12)}`);
if (failures) {
  console.error(`\n✗ ${failures} contrast assertion(s) failed:\n`);
  console.error(lines.join('\n'));
  process.exit(1);
}
console.log('\n✓ every sanctioned pair clears its floor, every fill still fails as ink,');
console.log('  the wash ceiling still bites, and the severity ramp is ordered and separable');
