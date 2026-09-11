import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Wrap children in a `Container`. Defaults to true. */
  contained?: boolean;
  children?: ReactNode;
}

/**
 * A vertical page band with the system's standard rhythm (`py-16 md:py-24`).
 *
 * Ported from the site's `.section` component class plus the `section-container`
 * shortcode, which always paired it with a container — hence `contained`
 * defaulting to true. Set `contained={false}` when the band needs to bleed to
 * the viewport edge and manage its own inner width.
 */
export function Section({ contained = true, className, children, ...rest }: SectionProps) {
  return (
    <section className={cx('py-16 md:py-24', className)} {...rest}>
      {contained ? <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div> : children}
    </section>
  );
}
