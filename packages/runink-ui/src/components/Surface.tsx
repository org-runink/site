import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/**
 * The three canvas depths the Runink identity layers content on. `canvas` is the
 * page background, `raised` the band or card behind content, `panel` the
 * innermost surface. They step up the `primary` ramp rather than using neutrals,
 * which is what gives the dark UI its indigo cast.
 */
export type SurfaceTone = 'canvas' | 'raised' | 'panel';

const TONES: Record<SurfaceTone, string> = {
  canvas: 'bg-primary-950 text-brand-paper',
  raised: 'bg-primary-900 text-brand-paper',
  panel: 'bg-primary-800 text-white',
};

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  /** Which canvas depth to paint. Defaults to `canvas`. */
  tone?: SurfaceTone;
  /**
   * Element to render. Defaults to `div`. Use it when the band is semantically
   * something else — `footer`, `header`, `main`, `aside` — so a landmark does not
   * have to be traded away for the canvas.
   */
  as?: ElementType;
  children?: ReactNode;
}

/**
 * The dark canvas every Runink screen sits on — **wrap your page in this**.
 *
 * The design system is dark-canvas-first: components set their own accent and
 * heading colours but inherit body text colour from the surface beneath them.
 * Rendered on a default white background with no Surface, text tuned for a dark
 * canvas (`text-brand-paper`, `text-primary-300`) is close to invisible, so a
 * page that forgets this wrapper looks broken rather than merely unstyled.
 *
 * @example
 * <Surface tone="canvas" className="min-h-screen">
 *   <Section>…</Section>
 * </Surface>
 */
export function Surface({ tone = 'canvas', as, className, children, ...rest }: SurfaceProps) {
  const Tag = (as ?? 'div') as ElementType;
  return (
    <Tag className={cx(TONES[tone], className)} {...rest}>
      {children}
    </Tag>
  );
}
