import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

export interface StatsGridProps extends HTMLAttributes<HTMLDivElement> {
  /** The metrics. Normally `Stat` elements. */
  children?: ReactNode;
}

/**
 * The three-up grid headline metrics sit in — one column on mobile, three from `md` up.
 *
 * A pure wrapper, ported from the `stats-grid` shortcode. Unlike `CardGrid` the
 * column count is fixed: the site only ever shows stats three at a time, which is
 * what keeps `Stat`'s oversized numerals from crowding. Carries `mb-20` below the
 * block.
 *
 * **`className` cannot override that margin.** Tailwind resolves competing margin
 * utilities by stylesheet order, not class order, so `mb-20` wins whatever you
 * pass. When the band already supplies its own rhythm, use
 * `style={{ marginBottom: 0 }}`.
 *
 * @example
 * <StatsGrid>
 *   <Stat number="40%" label="More freight spend recovered" />
 *   <Stat number="11x" label="Faster customs clearance" />
 *   <Stat number="<40ms" label="Agent decision latency" />
 * </StatsGrid>
 */
export function StatsGrid({ className, children, ...rest }: StatsGridProps) {
  return (
    <div className={cx('grid grid-cols-1 gap-8 mb-20 md:grid-cols-3', className)} {...rest}>
      {children}
    </div>
  );
}
