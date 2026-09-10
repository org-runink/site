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
 * the hover state — border shifts to `brand-sage-dark`, the surface lightens, the
 * card lifts 1 unit, and the icon tile's gradient goes fully saturated. Those are
 * driven by `group-hover`, so the `group` class on the root is load-bearing.
 *
 * Sits on `Surface` tone `canvas` or `raised`; it paints its own translucent
 * `primary-900/30` panel and assumes something darker behind it.
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
        'h-full rounded-card border border-hairline/30 bg-surface/30 p-8 transition-all duration-300',
        'hover:-translate-y-1 hover:border-ink-success hover:bg-surface-raised/50',
        className,
      )}
    >
      {icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-card bg-gradient-to-br from-fill-accent/20 to-surface-raised transition-colors group-hover:from-fill-accent group-hover:to-accent-lift">
          <Icon name={icon} className="h-6 w-6 text-ink-success transition-colors group-hover:text-on-accent" />
        </div>
      )}
      <h3 className="mb-3 text-xl font-bold text-primary group-hover:text-primary">{title}</h3>
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
