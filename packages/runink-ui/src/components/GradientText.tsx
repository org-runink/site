import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/**
 * The gradient sweeps the brand uses for clipped headline text.
 *
 * `ember` is FACE's actual brand gradient: the accent fill lifting into
 * `accent-lift` (`brandGradientTop`, split off the accent ink on purpose so the ink
 * could darken without flattening the sweep). `moss` is the olive pair. `signal` is
 * the wine-into-accent close the landing hero sets.
 *
 * `iris` is **retired as a treatment**. FACE has no cool gradient family: its two
 * cool marks, `ink-ice` and `ink-violet`, are INKS, and gradient stops exist only
 * for surfaces and fills — `from-ink-ice` compiles to nothing, exactly as
 * `text-fill-accent` does. A dead stop under `bg-clip-text text-transparent` is
 * worse than a wrong colour: the headline renders invisible. The name survives as a
 * deeper ember so the call sites outside this component keep working.
 */
export type GradientTextSweep = 'ember' | 'iris' | 'moss' | 'signal';

const SWEEPS: Record<GradientTextSweep, string> = {
  ember: 'from-fill-accent to-accent-lift',
  moss: 'from-fill-success to-fill-success-glow',
  // The landing hero's headline treatment: `fill-provenance` into `fill-accent` —
  // wine into the technical orange. It is the nearest legal analogue to the close the
  // port shipped here, whose second stop had no counterpart in this palette at all.
  signal: 'from-fill-provenance to-fill-accent',
  /** @deprecated No cool sweep survives the FACE palette; this is a deeper `ember`. Prefer `ember`. */
  iris: 'from-fill-accent-deep to-accent-lift',
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
 * is the treatment that makes bold headers punch off the canvas — on either ground,
 * since every stop is a fill rather than an ink and none of them is tuned for the
 * console alone. Keep it to the emphatic span of a heading, not the whole sentence.
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
