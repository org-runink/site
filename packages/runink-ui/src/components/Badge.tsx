import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/**
 * Badge accents. `sage` and `orange` are the two brand accents the site leans on
 * for metadata pills; `neutral` is the quiet default; `outline` is the
 * border-only treatment used where several pills sit in a row.
 */
export type BadgeTone = 'neutral' | 'sage' | 'orange' | 'outline';

const TONES: Record<BadgeTone, string> = {
  neutral: 'bg-surface-raised text-primary',
  sage: 'bg-fill-success-wash text-ink-success',
  orange: 'bg-fill-accent-wash text-ink-accent',
  outline: 'border border-hairline/40 text-secondary',
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Accent treatment. Defaults to `neutral`. */
  tone?: BadgeTone;
  /**
   * Uppercase the label with widened tracking — the treatment DESIGN.md calls
   * for on pills acting as UI controls rather than prose. Defaults to true.
   */
  uppercase?: boolean;
  children?: ReactNode;
}

/**
 * A heavily rounded metadata pill.
 *
 * DESIGN.md's interaction guidance is explicit about these: tight padding, full
 * radius, widened letter spacing and uppercase text so they read as distinct
 * controls against dense copy.
 *
 * @example
 * <Badge tone="sage">Sovereign</Badge>
 * <Badge tone="outline" uppercase={false}>12 min read</Badge>
 */
export function Badge({ tone = 'neutral', uppercase = true, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        uppercase && 'uppercase tracking-wider',
        TONES[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
