import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/**
 * The four surfaces, by role.
 *
 * These are **not** a depth ladder, and naming them `raised-1/2/3` would be a lie in
 * one of the two ramps: on the sheet ground `surface` goes *lighter* than the canvas
 * (`#FFFDFA` on `#FBF7F1`) while `raised` and `well` go darker. Role names survive
 * that; luminance names do not.
 */
export type SurfaceTone = 'canvas' | 'surface' | 'raised' | 'well';

const TONES: Record<SurfaceTone, string> = {
  canvas: 'bg-canvas',
  surface: 'bg-surface',
  raised: 'bg-surface-raised',
  well: 'bg-surface-well',
};

/**
 * Which register to paint in. `console` is the dark ground and the default;
 * `sheet` is the light one.
 */
export type SurfaceGround = 'console' | 'sheet';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  /** Which surface to paint. Defaults to `canvas`. */
  tone?: SurfaceTone;
  /**
   * Flip this subtree to the other ground.
   *
   * Omit it and the surface inherits whatever ground its ancestors set (console at
   * the root). Set it to put a console band inside a sheet page, or the reverse —
   * that nesting is the reason ground is a cascading attribute rather than a
   * root-level dark-mode class.
   */
  ground?: SurfaceGround;
  /**
   * Element to render. Defaults to `div`. Use it when the band is semantically
   * something else — `footer`, `header`, `main`, `aside` — so a landmark does not
   * have to be traded away for the canvas.
   */
  as?: ElementType;
  children?: ReactNode;
}

/**
 * The ground every Runink screen sits on — **wrap your page in this**.
 *
 * It paints a surface and, with `ground`, decides which of the two registers that
 * surface resolves in. Both are one identity: the same token names bind to different
 * values under `data-ground`, so a component written once works on either. That is
 * FACE's model — two ramps behind a getter — expressed in CSS.
 *
 * Text colour comes from the ground rather than from each component, so body copy
 * stays coherent without every child restating it. A page that omits this wrapper
 * inherits the root's console ground and still renders legibly; nesting is what
 * `ground` is for.
 *
 * @example
 * // A sheet page with one console band inside it.
 * <Surface ground="sheet" tone="canvas" className="min-h-screen">
 *   <Section>…</Section>
 *   <Surface ground="console" tone="raised" as="aside" className="rounded-card p-8">
 *     …
 *   </Surface>
 * </Surface>
 */
export function Surface({ tone = 'canvas', ground, as, className, children, ...rest }: SurfaceProps) {
  const Tag = (as ?? 'div') as ElementType;
  return (
    <Tag className={cx(TONES[tone], 'text-primary', className)} data-ground={ground} {...rest}>
      {children}
    </Tag>
  );
}
