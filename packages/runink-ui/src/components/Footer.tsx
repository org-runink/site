import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { Container } from './Container';
import { Logo } from './Logo';

/** One link in a footer column or in the bottom row. */
export interface FooterLink {
  /** Visible label, already in the reader's language. */
  label: string;
  /** Destination. Sanitised with `safeHref`; a rejected or missing value renders plain text instead of a link. */
  href?: string;
}

/** One titled column of links. */
export interface FooterColumn {
  /** Column heading, rendered uppercase and letter-spaced. */
  title: string;
  /** The column's links, in order. */
  links: FooterLink[];
}

/** One icon in the social row. */
export interface FooterSocialLink {
  /** Network name. Used as the link's accessible name and the icon's `alt`. */
  label: string;
  /** Profile URL. Sanitised with `safeHref`; a rejected or missing value drops the icon. */
  href?: string;
  /**
   * Icon path. Defaults to `/images/social/<label lowercased>.svg`, where the site
   * keeps them. Painted as a **mask**, not loaded as an `<img>` — so it must be a
   * single-colour glyph whose shape is its alpha. It takes the link's ink; any
   * colour baked into the file is discarded.
   */
  iconSrc?: string;
}

const LINK = 'text-secondary transition-colors hover:text-primary';

/**
 * Mask properties for one social glyph.
 *
 * The theme's social SVGs are `fill="currentColor"`, and the port loaded them with
 * `<img src>`. An SVG in an `<img>` is an INDEPENDENT document: there is no `color`
 * to inherit, so `currentColor` falls back to the initial value — pure black. That
 * measured 1.1:1 on the canvas band and the LinkedIn mark was invisible on console
 * (it only looked fine on sheet, where black happens to read). No class on the
 * anchor can reach inside an `<img>`, so the fix has to stop it being one.
 *
 * Masking keeps `iconSrc` an arbitrary caller-supplied path while making the glyph's
 * colour ours: the box is painted `bg-current` and the file supplies only the shape,
 * so the anchor's `text-secondary` / `hover:text-primary` flow through and the mark
 * reads on both grounds.
 *
 * `"` is percent-escaped because the URL goes inside a quoted `url("…")` — the prop
 * is caller data and must not be able to terminate the string early.
 */
function maskStyle(iconSrc: string) {
  const url = `url("${iconSrc.replace(/"/g, '%22')}")`;
  return {
    maskImage: url,
    WebkitMaskImage: url,
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
  } as const;
}

export interface FooterProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Wordmark beside the logo, and the name in the copyright line. Defaults to `"Runink"`. */
  title?: string;
  /** Where the lockup links. Defaults to `/`. */
  logoHref?: string;
  /** Logo mark. Defaults to the site's `/images/logo.png`. */
  logoSrc?: string;
  /** The link columns, left to right. Three is the theme's layout; fewer or more still distribute evenly. */
  columns?: FooterColumn[];
  /** Social profiles under the lockup. Omit or pass an empty array and the row disappears. */
  social?: FooterSocialLink[];
  /** Year in the copyright line. Defaults to the current year. */
  year?: number;
  /** Replaces the generated `© year title. All rights reserved.` line outright. */
  copyright?: ReactNode;
  /** Legal/credit links on the right of the bottom row — privacy, terms, licence. */
  bottomLinks?: FooterLink[];
  className?: string;
}

/**
 * The site footer: lockup and social row beside the link columns, over a
 * copyright and legal strip.
 *
 * Ported from the theme's `partials/footer.html` — the root site's own
 * `partials/footer.html` is deliberately empty, because the landing page ships no
 * footer. Everything the partial read from `hugo.toml` (`params.social`,
 * `params.footer.column_N_title`, the `footer_column_N` menus) is a prop here, so
 * column count, order and language are the caller's call.
 *
 * Paints its own `canvas` band under a `hairline` top rule — the same value `Surface`
 * tone `canvas` gives, so it sits flush at the bottom of a canvas page and
 * needs no wrapper of its own. It composes `Logo` at navigation size rather than
 * re-implementing the lockup smaller, per that component's contract.
 *
 * One deliberate deviation: the theme hovered column links to its `primary-600`, which
 * *darkens* them — a leftover from when this footer sat on a light background. Here
 * links rest on `secondary` and hover to `primary`, so the move reads on either ground.
 *
 * The social marks are **masked, not loaded as images**: the box takes the link's ink
 * and the SVG supplies only the shape. The theme's files are `fill="currentColor"`,
 * which resolves to pure black inside an `<img>` — invisible on the console band. So
 * an `iconSrc` must be a single-colour glyph; its own colour is discarded.
 *
 * Every destination goes through `safeHref`: a rejected column link renders as
 * plain text, and a rejected social or bottom link is dropped.
 *
 * @example
 * <Footer
 *   columns={[
 *     {
 *       title: 'Platform',
 *       links: [
 *         { label: 'Why Runink?', href: '/#why-runink' },
 *         { label: 'Use cases', href: '/use-cases/' },
 *         { label: 'Pricing', href: '/pricing' },
 *         { label: 'Check it out', href: '/demo/' },
 *       ],
 *     },
 *     {
 *       title: 'Products',
 *       links: [
 *         { label: 'Runink FACE', href: '/products/face/' },
 *         { label: 'Downloads', href: '/downloads/' },
 *         { label: 'Blog', href: '/blog/' },
 *       ],
 *     },
 *     {
 *       title: 'Company',
 *       links: [
 *         { label: 'About Runink', href: '/company/' },
 *         { label: 'Book your Consultation', href: '/#contact' },
 *       ],
 *     },
 *   ]}
 *   social={[{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/runink' }]}
 *   bottomLinks={[
 *     { label: 'Privacy Policy', href: '/privacy/' },
 *     { label: 'License', href: '/license/' },
 *   ]}
 * />
 */
export function Footer({
  title = 'Runink',
  logoHref,
  logoSrc,
  columns = [],
  social = [],
  year = new Date().getFullYear(),
  copyright,
  bottomLinks = [],
  className,
  ...rest
}: FooterProps) {
  return (
    <footer className={cx('border-t border-hairline bg-canvas py-12', className)} {...rest}>
      <Container>
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Lockup and social */}
          <div className="flex-1">
            <Logo href={logoHref} src={logoSrc} label={title} className="mb-4" />
            {social.length > 0 && (
              <div className="flex space-x-3 p-2">
                {social.map((item, index) => {
                  const href = safeHref(item.href);
                  if (!href) return null;
                  const iconSrc = item.iconSrc ?? `/images/social/${item.label.toLowerCase()}.svg`;
                  return (
                    <a
                      key={`${item.label}-${index}`}
                      href={href}
                      className={LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.label}</span>
                      {/* Glyph as a mask over `bg-current` — see `maskStyle`. */}
                      <span aria-hidden="true" className="block h-5 w-5 bg-current" style={maskStyle(iconSrc)} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns.map((column, index) => (
            <div key={`${column.title}-${index}`} className="flex-1">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => {
                  const href = safeHref(link.href);
                  return (
                    <li key={`${link.label}-${linkIndex}`}>
                      {href ? (
                        <a href={href} className={LINK}>
                          {link.label}
                        </a>
                      ) : (
                        <span className="text-secondary">{link.label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 border-t border-hairline pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-secondary">{copyright ?? `© ${year} ${title}. All rights reserved.`}</p>
            {bottomLinks.length > 0 && (
              <div className="flex items-center space-x-6">
                {bottomLinks.map((link, index) => {
                  const href = safeHref(link.href);
                  if (!href) return null;
                  return (
                    <a key={`${link.label}-${index}`} href={href} className={cx('text-sm', LINK)}>
                      {link.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
