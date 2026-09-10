import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/**
 * The gradient sweeps the brand uses for clipped headline text. `ember` is the
 * signature orange-to-red treatment DESIGN.md describes; `iris` is the
 * indigo-to-purple sweep used on the marketing pages; `moss` is the organic
 * green pairing.
 */
export type GradientTextSweep = 'ember' | 'iris' | 'moss' | 'signal';

const SWEEPS: Record<GradientTextSweep, string> = {
  ember: 'from-brand-orange to-brand-red',
  iris: 'from-secondary-500 to-primary-400',
  moss: 'from-brand-sage to-brand-green',
  // The landing hero's headline treatment: deep rose into the purple accent.
  signal: 'from-rose-800 to-secondary-500',
};

/**
 * Sweep direction. A static lookup rather than an interpolated class, because
 * Tailwind only emits classes it can see literally in the source.
 */
export type GradientTextDirection = 'r' | 'l' | 'b' | 't' | 'br' | 'bl' | 'tr' | 'tl';

const DIRECTIONS: Record<GradientTextDirection, string> = {
  r: 'bg-gradient-to-r',
  l: 'bg-gradient-to-l',
  b: 'bg-gradient-to-b',
  t: 'bg-gradient-to-t',
  br: 'bg-gradient-to-br',
  bl: 'bg-gradient-to-bl',
  tr: 'bg-gradient-to-tr',
  tl: 'bg-gradient-to-tl',
};

export interface GradientTextProps extends HTMLAttributes<HTMLElement> {
  /** Which gradient to sweep. Defaults to `ember`. */
  sweep?: GradientTextSweep;
  /**
   * Which way the gradient runs. Defaults to `r` (left to right).
   *
   * Use this rather than passing `bg-gradient-to-br` via `className`: Tailwind
   * resolves competing utilities by stylesheet order, not class order, so an
   * override only appears to work when the direction you want happens to be
   * emitted after the default.
   */
  direction?: GradientTextDirection;
  /** Element to render. Defaults to `span` so it can sit inside a heading. */
  as?: ElementType;
  children?: ReactNode;
}

/**
 * Headline text filled with a brand gradient via background-clip.
 *
 * DESIGN.md treats gradients as a core component rather than decoration — this
 * is the treatment that makes bold headers punch against the dark canvas. Keep
 * it to the emphatic span of a heading, not the whole sentence.
 *
 * @example
 * <h2 className="text-5xl font-black">
 *   Logistics that <GradientText sweep="ember">runs itself</GradientText>
 * </h2>
 */
export function GradientText({
  sweep = 'ember',
  direction = 'r',
  as,
  className,
  children,
  ...rest
}: GradientTextProps) {
  const Tag = (as ?? 'span') as ElementType;
  return (
    <Tag
      className={cx('bg-clip-text text-transparent', DIRECTIONS[direction], SWEEPS[sweep], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
