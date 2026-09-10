import type { AnchorHTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface LogoProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Where the lockup links to. Defaults to the site root, which is also where a rejected URL lands. */
  href?: string;
  /**
   * Logo mark image.
   *
   * Deliberately has no default. The Hugo partial resolves the mark through
   * `resources.Get "images/logo.png"` (the `assets/` pipeline) and only falls
   * back to a literal `/images/logo.png` when that lookup fails — which it never
   * does, because the asset exists. Defaulting to that dead path would render a
   * broken image everywhere the host app doesn't happen to serve it. Omit it and
   * the tile shows a letter mark instead.
   */
  src?: string;
  /** Accessible name for the mark. Defaults to `"Runink Logo"`. */
  alt?: string;
  /** Wordmark beside the mark. Defaults to `"Runink"`. */
  label?: string;
  /** Hide the wordmark and show the mark alone — for narrow headers. Defaults to true. */
  showLabel?: boolean;
  className?: string;
}

/**
 * The Runink lockup: the logo mark in a bordered tile plus the wordmark, linked home.
 *
 * Ported from the site's `logo.html` partial, so this is the exact mark the header
 * uses. The hover behaviour is split across two elements — the tile's border goes
 * `secondary-500` while the image scales 110% inside it — and both are driven by
 * `group-hover`, so the `group` class on the anchor is load-bearing. The tile is
 * `overflow-hidden`, which is what clips the scaling image instead of letting it
 * grow the header.
 *
 * Sized for a navigation bar (40×40 mark, `text-2xl` wordmark); scale it with
 * `className` rather than re-implementing it for footers.
 *
 * @example
 * <Logo href="/" />
 */
export function Logo({
  href = '/',
  src,
  alt = 'Runink Logo',
  label = 'Runink',
  showLabel = true,
  className,
  ...rest
}: LogoProps) {
  return (
    <a href={safeHref(href) ?? '/'} className={cx('group flex items-center space-x-3', className)} {...rest}>
      <div className="relative h-10 w-10 overflow-hidden rounded-card border border-primary-700 bg-primary-800 shadow-lg transition-colors duration-300 group-hover:border-secondary-500">
        {src ? (
          <img
            src={src}
            alt={alt}
            width={40}
            height={40}
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span
            aria-label={alt}
            role="img"
            className="flex h-full w-full items-center justify-center font-heading text-xl font-black text-brand-paper transition-transform duration-300 group-hover:scale-110"
          >
            {(label || 'R').trim().charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      {showLabel && <span className="text-2xl font-bold tracking-tight text-white">{label}</span>}
    </a>
  );
}
