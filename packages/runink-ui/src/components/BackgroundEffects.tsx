import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';

export interface BackgroundEffectsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Line colour of the grid overlay. Any CSS colour works — a token reference
   * (`rgb(var(--rk-fill-success-ch))`), a channel function, or a raw hex for a
   * third-party brand colour. Defaults to `rgb(var(--rk-hairline-ch))` — the channel
   * behind `hairline`, so the grid rules in the same value as every other separator
   * and rebinds with the ground. The Hugo partial hardcoded a violet `#a855f7` here;
   * that colour has no counterpart in this palette and did not survive.
   */
  color?: string;
  /**
   * Grid cell size. A number is read as pixels; a string is passed through, so
   * `"4rem"` or `"5%"` also work. Defaults to `60` — the value the Hugo partial
   * hardcoded as `60px 60px`.
   */
  cellSize?: number | string;
}

/**
 * The house backdrop: a radial wash from `surface` out to `canvas` with a faint grid ruled over it.
 *
 * This is the layer that makes a band read as a lit space rather than a flat
 * rectangle. The circle is centred at the top, so the lift is `surface` against the
 * `canvas` it falls away to — and `surface` is the lighter of the two in *both*
 * registers, which is why the wash needs no per-ground handling even though `raised`
 * and `well` invert. It is what the `backgroundEffect` slot on `Hero`, `TabbedPitches`,
 * `ContactSection`, `ReasonsGrid`, `CapabilityShowcase`, `UseCasesCarousel` and
 * `UseCaseParallax` is for — pass it there rather than placing it by hand.
 *
 * **It is `absolute inset-0`, so its parent must be `relative` and almost always
 * `overflow-hidden`** (the components above already are). Dropped into a static
 * parent it will escape to the nearest positioned ancestor and tile the wrong box.
 * It sits at `z-0` and is `pointer-events-none` end to end, so content above it
 * needs a positive `z-` and stays fully clickable.
 *
 * Purely decorative: nothing in it is exposed to assistive technology.
 *
 * @example
 * <UseCaseParallax
 *   title="The Autonomous Cold Chain Guard"
 *   backgroundEffect={<BackgroundEffects color="rgb(var(--rk-fill-success-ch))" cellSize={80} />}
 * />
 *
 * @example
 * // Hand-rolled band: `relative overflow-hidden` on the parent is required.
 * <section className="relative overflow-hidden bg-canvas">
 *   <BackgroundEffects />
 *   <div className="relative z-10">…</div>
 * </section>
 */
export function BackgroundEffects({
  color = 'rgb(var(--rk-hairline-ch))',
  cellSize = 60,
  className,
  ...rest
}: BackgroundEffectsProps) {
  const size = typeof cellSize === 'number' ? `${cellSize}px` : cellSize;

  return (
    <div aria-hidden="true" className={cx('pointer-events-none absolute inset-0 z-0', className)} {...rest}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-surface via-canvas to-canvas" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: `${size} ${size}`,
        }}
      />
    </div>
  );
}
