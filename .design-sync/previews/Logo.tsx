import { Logo, Surface } from '@runink/ui';

// The site's real mark. `assets/images/logo.png` is what Hugo publishes as
// `/images/logo.png` — the path `Logo` defaults to — so importing it here gives
// the capture the genuine artwork instead of a 404 placeholder.
import logoSrc from '../../assets/images/logo.png';

/** The navigation lockup as the header renders it: 40x40 mark plus the wordmark. */
export function Default() {
  return <Logo src={logoSrc} href="/" />;
}

/**
 * The same lockup on the sheet ground. Not one class differs from `Default` — only
 * `ground`, because every token rebinds underneath.
 *
 * Two things have to hold here, and neither is the artwork: the tile is
 * `bg-surface-raised` with a `border-hairline`, which on the sheet ground go *darker*
 * than the canvas rather than lighter, so the mark still sits in a visible well; and
 * the wordmark is `text-primary`, which inverts with the ground instead of being
 * pinned light. The mark itself is a raster asset and does not rebind — if it ever
 * stops reading against a light tile, this is the cell that says so.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <Logo src={logoSrc} href="/" />
    </Surface>
  );
}

/**
 * The mark alone (`showLabel={false}`) — the narrow-header treatment, shown
 * beside the full lockup so the wordmark is the only difference.
 */
export function MarkOnly() {
  return (
    <div className="flex items-center gap-10">
      <Logo src={logoSrc} href="/" showLabel={false} />
      <Logo src={logoSrc} href="/" />
    </div>
  );
}

/**
 * Scaled up rather than re-implemented at a larger size, which is the
 * component's documented contract. At 2.5x the bordered tile, its rounded
 * corners, the mark's `object-cover` crop and the wordmark's tight tracking are
 * all legible.
 *
 * The transform sits on a wrapper for two reasons: Tailwind's `scale-*`
 * utilities are not in the preview bundle (it only carries the classes the
 * design system's own source uses), and `Logo` accepts no `style` prop — it
 * takes only `href`/`src`/`alt`/`label`/`showLabel`/`className` and spreads no
 * rest props.
 */
export function ScaledUp() {
  return (
    <div style={{ height: 128 }}>
      <div style={{ transform: 'scale(2.5)', transformOrigin: 'top left', width: 'fit-content' }}>
        <Logo src={logoSrc} href="/" />
      </div>
    </div>
  );
}

/**
 * A custom wordmark — the lockup is reused verbatim for the product sites, only
 * `label` changes. `alt` is set too, because the accessible name should track it.
 */
export function ProductWordmark() {
  return (
    <div className="flex flex-col gap-6">
      <Logo src={logoSrc} href="/products/face/" label="Runink FACE" alt="Runink FACE Logo" />
      <Logo src={logoSrc} href="/pulse/" label="Runink PULSE" alt="Runink PULSE Logo" />
    </div>
  );
}
