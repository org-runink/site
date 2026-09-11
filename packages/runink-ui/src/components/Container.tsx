import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * The standard content column: centred, `max-w-7xl`, with responsive gutters.
 *
 * Ported from the site's `.container` component class. Use it inside `Section`
 * for anything that should line up with the rest of the page; full-bleed
 * backgrounds go on the `Section` or `Surface` outside it.
 */
export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...rest}>
      {children}
    </div>
  );
}
