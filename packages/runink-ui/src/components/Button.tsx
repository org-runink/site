import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

/**
 * The three button treatments the site ships, ported from the `.btn-primary`,
 * `.btn-secondary` and `.btn-outline` component classes in `main.css`.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

/*
 * One accent, three emphasis levels — solid, tonal, neutral.
 *
 * `secondary` was `bg-secondary-600`, a second CHROMATIC variant, and FACE has no
 * second chroma to give it (olive and wine are semantic: success and provenance, not
 * "another button"). So emphasis carries the distinction instead: `primary` is the
 * solid accent fill, `secondary` is the same accent at wash strength with the accent
 * border and accent ink, `outline` stays neutral. That also keeps `secondary` apart
 * from `outline`, which a surface-based treatment (`bg-surface-well` + `border-edge`)
 * would not have — both would have read as "the quiet bordered one".
 *
 * No variant changes colour on hover. `hover:` on an accent button has nowhere to go:
 * `fill-accent` measures 4.69:1 against `on-accent` on the sheet ground, so ANY
 * darkening (`fill-accent-deep`, or an alpha step) drops the label below 4.5:1 — and
 * `accent-lift` has no `backgroundColor` utility, only gradient stops. The feedback is
 * the `hover:scale-105` in BASE, which costs no contrast.
 */

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-fill-accent text-on-accent',
  secondary: 'border border-fill-accent bg-fill-accent-wash text-ink-accent',
  outline: 'border-2 border-edge text-secondary',
};

/**
 * `.btn` itself. The 2rem radius is the `rounded-card` token — on the site this
 * arrives via a hand-written `border-radius` in the component class rather than
 * a utility, so it is expressed here with the real token instead.
 */
/*
 * The site's `.btn-*` classes carry no disabled styling, because every button on
 * the marketing site is an `<a>` and links cannot be disabled. A design system
 * used to build real applications needs the state, so it is added here — it
 * changes nothing about how the site renders.
 */
const BASE =
  'inline-flex items-center justify-center rounded-card px-6 py-3 font-medium transition duration-200 ease-in-out hover:scale-105 disabled:pointer-events-none disabled:opacity-50 disabled:saturate-50';

type Common = {
  /** Visual treatment. Defaults to `primary`. */
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
};

export type ButtonProps = Common &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
  );

/**
 * The system's call-to-action control.
 *
 * Renders an `<a>` when given `href` and a `<button>` otherwise — most buttons
 * on the marketing site are links, so this keeps the markup honest without
 * making callers choose an element.
 *
 * `outline` is the quietest of the three — neutral `edge` border over whatever is
 * behind it — so prefer `primary`/`secondary` when the control needs to be found.
 *
 * `href` is run through `safeHref`, so a script-bearing destination still renders
 * the anchor — same size, same treatment — but without an `href`, which makes it
 * inert and unfocusable rather than clickable.
 *
 * @example
 * <Button href="/demo">Book a demo</Button>
 * <Button variant="outline" href="/docs">Read the docs</Button>
 */
export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const classes = cx(BASE, VARIANTS[variant], className);
  if (typeof (rest as { href?: string }).href === 'string') {
    const { href, ...anchor } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={safeHref(href)} {...anchor}>
        {children}
      </a>
    );
  }
  const button = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...button}>
      {children}
    </button>
  );
}
