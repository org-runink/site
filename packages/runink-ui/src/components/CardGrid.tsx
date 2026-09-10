import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/** Number of columns the grid opens out to from `md` up. */
export type CardGridCols = 1 | 2 | 3 | 4;

const COLS: Record<CardGridCols, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

export interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Columns from `md` up; a single column below that. Defaults to 3. */
  cols?: CardGridCols;
  /** The cards. Normally `Card`, `FeatureCard` or `ValueCard` elements. */
  children?: ReactNode;
}

/**
 * The grid that lays out a row of cards — one column on mobile, `cols` from `md` up.
 *
 * A pure wrapper, ported from the `card-grid` shortcode: `gap-8` between cards and
 * a deep `mb-32` below the block, which is the rhythm the site uses to separate a
 * card section from the prose that follows.
 *
 * **`className` cannot override that margin.** Tailwind resolves competing margin
 * utilities by stylesheet order, not class order, and `mb-32` is emitted after
 * the smaller scales — so it wins whatever you pass. When the grid is not the end
 * of a section, use `style={{ marginBottom: '1rem' }}`.
 *
 * Cards inside it stretch to the row height (`Card` is `h-full`), so mixed copy
 * lengths still line up.
 *
 * @example
 * <CardGrid cols={3}>
 *   <Card
 *     icon="currency-dollar"
 *     title="The Claims Module"
 *     description="Reads BOLs, identifies damage, and fights carrier denials on autopilot."
 *     href="/use-cases/claims-recovery"
 *   />
 *   <Card
 *     icon="box"
 *     title="The Fulfillment Module"
 *     description="Orchestrates inventory and routing based on real-time constraints."
 *     href="/use-cases/fulfillment-optimization"
 *   />
 *   <Card
 *     icon="scale"
 *     title="The Finance Module"
 *     description="Audits every invoice against your contracts and reconciles ledgers instantly."
 *     href="/use-cases/finance"
 *   />
 * </CardGrid>
 */
export function CardGrid({ cols = 3, className, children, ...rest }: CardGridProps) {
  return (
    <div className={cx('grid gap-8 mb-32', COLS[cols], className)} {...rest}>
      {children}
    </div>
  );
}
