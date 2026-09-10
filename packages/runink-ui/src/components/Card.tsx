import type { ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { Icon, type IconName } from './Icon';

export interface CardProps {
  /** Card heading. */
  title: string;
  /** Supporting copy under the heading. */
  description: string;
  /** Icon drawn in the gradient tile above the heading. */
  icon?: IconName;
  /**
   * Make the whole card a link. Ported from the shortcode, which always wrapped
   * the card in an anchor — omit it for a static card.
   */
  href?: string;
  className?: string;
}

/**
 * The system's linked content card: gradient icon tile, heading, supporting copy.
 *
 * This is the most-reused shape in the design system. Its whole personality is in
 * the hover state — the border shifts to `ink-success`, the panel moves to
 * `surface-raised`, the card lifts 1 unit, and the icon tile's gradient goes fully
 * saturated. Those are driven by `group-hover`, so the `group` class on the root is
 * load-bearing.
 *
 * Sits on `Surface` tone `canvas` or `raised`. **The border is what makes this read
 * as a card, not the fill.** `surface` over `canvas` is 1.05:1 on the sheet ramp, so
 * an opaque panel still barely lifts off the ground there; `border-edge` (≥3.15:1 on
 * every surface of both grounds) carries the boundary. `hairline` is a separator tier
 * — 1.35:1 at best — and is only correct for a rule *inside* an already-bounded box.
 *
 * `href` is run through `safeHref`: a script-bearing destination degrades to the
 * static, unlinked card rather than becoming a clickable payload.
 *
 * @example
 * <Card
 *   icon="shield-check"
 *   title="Zero-trust by default"
 *   description="Every internal call is mutually authenticated and short-lived."
 *   href="/platform/security"
 * />
 */
export function Card({ title, description, icon, href, className }: CardProps) {
  const safeUrl = safeHref(href);
  const body = (
    <div
      className={cx(
        // Opaque panels, not `/30` translucency: a 30%-alpha `surface` over the sheet
        // canvas lands within a byte of the ground, which is what made a row of these
        // stop reading as cards there. The fill is still only a 1-level lift — the
        // `edge` border is what bounds the card on both grounds.
        'h-full rounded-card border border-edge bg-surface p-8 transition-all duration-300',
        'hover:-translate-y-1 hover:border-ink-success hover:bg-surface-raised',
        className,
      )}
    >
      {icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-card bg-gradient-to-br from-fill-accent/20 to-surface-raised transition-colors group-hover:from-fill-accent group-hover:to-accent-lift">
          <Icon name={icon} className="h-6 w-6 text-ink-success transition-colors group-hover:text-on-accent" />
        </div>
      )}
      {/* The heading rests on `primary` — the top of the ink ramp — so the
          `group-hover:text-primary` it used to carry painted the rest state. The copy
          below it is the line that actually moves, `secondary` → `primary`. */}
      <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-secondary group-hover:text-primary">{description}</p>
    </div>
  );

  if (safeUrl) {
    return (
      <a href={safeUrl} className="group block h-full">
        {body}
      </a>
    );
  }
  return <div className="group h-full">{body}</div>;
}
