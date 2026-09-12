/**
 * Contrast failures that are MEASURED, REPORTED, and not yet gated.
 *
 * A waiver here is debt with a name on it. It is not a way to make a checker
 * pass: every waived pair is still measured, still printed by
 * check-token-contrast.mjs, and still published as FAILS on /design/. The only
 * thing a waiver buys is that the build does not go red while the fix is
 * somebody else's to make.
 *
 * ── 2026-09-12 ───────────────────────────────────────────────────────────────
 * WHAT. Three category accents do not clear the 4.5:1 text floor on the console
 * ground's RAISED surface, `--rk-sheet` (#3F382D / --rk-n-800):
 *
 *     insurance  --rk-cat-insurance-lift  #9B8CF0   4.08:1
 *     marketing  --rk-cat-marketing-lift  #E4809C   4.33:1
 *     telecom    --rk-cat-telecom-lift    #5FA8DC   4.47:1
 *
 * All three clear it on `--rk-ground` (4.72 / 5.01 / 5.18) and on `--rk-sunk`
 * (6.33 / 6.73 / 6.95). The sheet is the one surface they fail on, and it is
 * reachable: layouts/partials/industries-style.html binds
 * `--accent-ink: var(--rk-accent)` and paints `var(--rk-sheet)` as a background
 * in six places, so this is category-accent text on a raised card, on a real
 * page, below AA.
 *
 * WHY NOTHING CAUGHT IT. The two checkers that look at category accents each
 * looked somewhere else. gen-contrast-proof.mjs measured them against
 * `--rk-ground` only; check-token-contrast.mjs measured them only against their
 * own `--rk-accent-wash`. The surface between the two — the plain sheet — was
 * in neither. Both now measure every surface of each ground, which is how the
 * ink tokens have been measured since --rk-text-3 shipped at 4.39:1 on
 * --rk-sunk.
 *
 * WHY IT IS NOT GATED. The fix is a new value for three accents, and the
 * palette is not this checker's to re-solve — a colour change is the design
 * owner's call. Gating on the spot would redden main for every unrelated pull
 * request until somebody else picked three hexes under time pressure, which is
 * how palettes get worse. This mirrors the readability `-exclude` waiver for
 * /license/ and /privacy/ in .github/workflows/deploy.yaml: state the debt,
 * name the rows, keep the gate for everything else.
 *
 * WHAT STILL FAILS THE BUILD, so this is a waiver and not a hole:
 *   - any category/surface pair NOT listed below that drops under 4.5:1;
 *   - any pair listed below that measures materially worse than the `ratio`
 *     recorded here. The waiver is pinned to the number it was granted for, so
 *     the debt cannot quietly deepen behind it.
 *
 * TO REMOVE. Re-solve --rk-cat-insurance-lift, --rk-cat-marketing-lift and
 * --rk-cat-telecom-lift to clear 4.5:1 on #3F382D, delete the three entries
 * below, and run `node scripts/gen-contrast-proof.mjs` to refresh the committed
 * proof table. Nothing else needs to change: with the list empty both checkers
 * gate every pair.
 */

/** Pairs measured below their floor and deliberately not gated, with the date
 *  and the ratio each was granted at. */
export const CONTRAST_WAIVERS = [
  { ground: 'console', cat: 'insurance', surface: 'rk-sheet', ratio: 4.08, since: '2026-09-12' },
  { ground: 'console', cat: 'marketing', surface: 'rk-sheet', ratio: 4.33, since: '2026-09-12' },
  { ground: 'console', cat: 'telecom',   surface: 'rk-sheet', ratio: 4.47, since: '2026-09-12' },
];

/** Tolerance on a waived ratio before the waiver stops covering it. Rounding in
 *  a re-solved ramp moves the second decimal; a real regression moves more. */
const DRIFT = 0.05;

/** The waiver covering this pair, or null. */
export function waiverFor(ground, cat, surface) {
  return CONTRAST_WAIVERS.find(
    (w) => w.ground === ground && w.cat === cat && w.surface === surface) ?? null;
}

/**
 * Does a waiver still cover this measurement?
 * Returns { covered, waiver, deepened } — `deepened` means the pair is waived
 * but now measures worse than the waiver was granted for, which must fail.
 */
export function waived(ground, cat, surface, ratio) {
  const w = waiverFor(ground, cat, surface);
  if (!w) return { covered: false, waiver: null, deepened: false };
  const deepened = ratio < w.ratio - DRIFT;
  return { covered: !deepened, waiver: w, deepened };
}
