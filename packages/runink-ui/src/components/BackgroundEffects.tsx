import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';

export interface BackgroundEffectsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Line colour of the grid overlay. Any CSS colour works — a token reference
   * (`var(--color-brand-green)`), a channel function, or a raw hex for a
   * third-party brand colour. Defaults to `var(--color-secondary-500)`, the
   * custom property behind `secondary-500`, which is the violet the Hugo partial
   * hardcoded as `#a855f7`.
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
 * The house backdrop: a radial wash from `primary-900` to `primary-950` with a faint grid ruled over it.
 *
 * This is the layer that makes a dark band read as a lit space rather than a flat
 * rectangle. It is what the `backgroundEffect` slot on `Hero`, `TabbedPitches`,
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
 *   backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" cellSize={80} />}
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
  color = 'var(--color-secondary-500)',
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
