import { useId, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import type { ButtonVariant } from './Button';
import { Button } from './Button';
import { Container } from './Container';
import { Icon } from './Icon';
import { Logo } from './Logo';

/** A leaf entry in the navigation — one row of a dropdown, or one top-level link. */
export interface HeaderNavLink {
  /** Visible label, already in the reader's language. */
  label: string;
  /** Destination. Sanitised with `safeHref`; a rejected or missing value renders plain text instead of a link. */
  href?: string;
}

/** A top-level navigation entry, optionally owning a dropdown of child links. */
export interface HeaderNavItem extends HeaderNavLink {
  /**
   * Child links. Supplying any turns the entry into a dropdown. `href` is still
   * honoured: the partial renders the parent as `<a href="{{ .URL }}">` because the
   * entry has a real destination (the section overview), so a keyboard user can Tab
   * to it and press Enter. Only a parent with no usable `href` falls back to a
   * `<button>` that toggles the panel.
   */
  children?: HeaderNavLink[];
}

/** One of the header's call-to-action links. */
export interface HeaderAction {
  /** Button label. */
  label: string;
  /** Destination. Sanitised with `safeHref`; the button is dropped entirely if it is rejected or missing. */
  href?: string;
}

/** One flag in the language switcher. */
export interface HeaderLanguage {
  /** Language name — the flag's accessible name, its `title`, and its label in the mobile list. */
  label: string;
  /** Where this translation lives. Sanitised with `safeHref`; a rejected value drops the flag. */
  href?: string;
  /** Flag image, e.g. `/images/flags/gb.svg`. */
  flagSrc: string;
  /** Marks the language being read: ringed on desktop, bold white on mobile. */
  current?: boolean;
}

type ActionKind = 'signIn' | 'getStarted' | 'checkItOut';

/**
 * Per-CTA overrides on top of `Button`. Each kind keeps its own desktop and
 * mobile treatment because the partial styles them differently: the bar's
 * buttons are compact and inline, the drawer's are full-width blocks.
 */
const ACTIONS: Record<ActionKind, { variant: ButtonVariant; desktop: string; mobile: string }> = {
  signIn: {
    variant: 'outline',
    // The desktop border travels with the label. It read `hover:border-hairline`, the
    // value the button already rests on, so the outline sat still while only the ink
    // moved — and the mobile row has always moved both (to `ink-success`, the drawer's
    // hue). Now both placements recolour border and ink together, each in its own hue.
    desktop: 'border-hairline font-bold text-primary hover:border-ink-accent hover:text-ink-accent',
    mobile: 'w-full border-hairline font-bold text-primary hover:border-ink-success hover:text-ink-success',
  },
  getStarted: {
    variant: 'primary',
    desktop:
      'bg-gradient-to-r from-fill-accent to-accent-lift px-6 py-2.5 text-sm font-bold text-on-accent hover:-translate-y-0.5 ',
    mobile: 'w-full bg-gradient-to-r from-fill-accent to-accent-lift font-bold text-on-accent hover:opacity-90',
  },
  checkItOut: {
    variant: 'outline',
    desktop: 'border-hairline px-4 py-2 text-sm font-bold text-ink-accent hover:bg-fill-accent hover:text-on-accent',
    mobile: 'w-full border-hairline font-bold text-ink-accent hover:bg-fill-accent hover:text-on-accent',
  },
};

/**
 * The top-level link treatment. The site writes this as a literal `text-[#F5F1E8]`,
 * which pins it to the console; here it is the `primary` ink, so the bar reads on
 * either ground. The hover is the accent, which is the one thing a nav link is.
 */
const NAV_LINK = 'inline-block px-2 py-4 text-base font-bold text-primary transition duration-200 hover:text-ink-accent';

/** Same shape inside the drawer, where links stack and read larger. */
const MOBILE_NAV_LINK = 'block py-2 text-xl font-bold text-primary transition duration-200 hover:text-ink-success';

export interface HeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** The main menu, in order. Entries with `children` render as dropdowns. */
  navItems?: HeaderNavItem[];
  /** Where the lockup links. Defaults to `/`. */
  logoHref?: string;
  /** Logo mark. Defaults to the site's `/images/logo.png`. */
  logoSrc?: string;
  /** Wordmark beside the mark. Defaults to `"Runink"`. */
  logoLabel?: string;
  /** Quiet outlined action, the partial's `buttons.signIn`. Omit it and nothing renders. */
  signIn?: HeaderAction;
  /** The loud gradient action, the partial's `buttons.getStarted`. Omit it and nothing renders. */
  getStarted?: HeaderAction;
  /** The secondary-outlined demo action, the partial's `buttons.checkItOut`. Omit it and nothing renders. */
  checkItOut?: HeaderAction;
  /** Language switcher entries. Omit or pass an empty array to hide the switcher entirely. */
  languages?: HeaderLanguage[];
  /** Accessible name for the `<nav>`. Defaults to `"Main"`. */
  navLabel?: string;
  /** Accessible name for the hamburger. Defaults to `"Toggle navigation menu"`. */
  menuButtonLabel?: string;
  /**
   * Start with the mobile drawer open. Defaults to `false` — the closed bar is the
   * real default state and the one that screenshots correctly. Pass `true` to
   * preview the drawer; it stays toggleable from the hamburger either way.
   */
  defaultMobileMenuOpen?: boolean;
  /**
   * Index into `navItems` whose dropdown starts open, for previewing that state.
   * Defaults to `null` (all closed).
   */
  defaultOpenDropdownIndex?: number | null;
  /**
   * Pin the bar to the top of the viewport, as the site does. Defaults to `true`;
   * pass `false` to render it in flow (useful when a preview needs the page to
   * start below the header rather than under it).
   */
  fixed?: boolean;
  className?: string;
}

/**
 * The site's top navigation bar: lockup, main menu with dropdowns, CTAs, language
 * switcher, and a mobile drawer behind a hamburger.
 *
 * Ported from `partials/header.html`, which read everything from `hugo.toml`
 * (`params.header` plus the `menu.main` entries per language) and inlined the
 * four-language switcher. Here all of it arrives as props — `navItems`, the three
 * action props, `languages` — so the caller decides the language and the routes.
 *
 * Interaction is React state, not the partial's CSS-only `:checked` trick. The
 * drawer is closed on first render, which is what a static screenshot shows; set
 * `defaultMobileMenuOpen` to preview it open. Dropdowns open on hover and on
 * `focus-within`, so they are reachable from the keyboard — the partial's
 * `group-hover` alone was not. A submenu parent with an `href` is a link (as the
 * partial now emits), so focus rather than a click opens its panel; a parent with
 * no destination stays a button and toggles on click. `Escape` closes whatever is
 * open.
 *
 * The bar is `fixed` and `z-50` by default, so the page beneath it needs `pt-20`
 * of its own (the bar is `h-20`); pass `fixed={false}` to place it in flow
 * instead. Composes `Logo`, `Container` and `Button` rather than restating their
 * markup, so a change to the lockup or the CTA shape lands here too.
 *
 * Every destination goes through `safeHref`: a rejected nav link renders as plain
 * text, and a rejected CTA or flag is dropped.
 *
 * @example
 * <Header
 *   navItems={[
 *     { label: 'Why Runink?', href: '/#why-runink' },
 *     { label: 'What makes it a painkiller', href: '/#painkiller' },
 *     {
 *       label: 'Use cases',
 *       children: [
 *         { label: 'Claims recovery', href: '/use-cases/claims-recovery/' },
 *         { label: 'Compliance', href: '/use-cases/compliance/' },
 *         { label: 'Fulfillment optimization', href: '/use-cases/fulfillment-optimization/' },
 *       ],
 *     },
 *     { label: 'Blog', href: '/blog/' },
 *     { label: 'Pricing', href: '/pricing' },
 *   ]}
 *   getStarted={{ label: 'Book your Consultation', href: '/#contact' }}
 *   checkItOut={{ label: 'Check it out', href: '/demo/' }}
 *   languages={[
 *     { label: 'English', href: '/', flagSrc: '/images/flags/gb.svg', current: true },
 *     { label: 'Français', href: '/fr/', flagSrc: '/images/flags/fr.svg' },
 *     { label: 'Español', href: '/es/', flagSrc: '/images/flags/es.svg' },
 *     { label: 'Português', href: '/pt/', flagSrc: '/images/flags/br.svg' },
 *   ]}
 * />
 */
export function Header({
  navItems = [],
  logoHref,
  logoSrc,
  logoLabel,
  signIn,
  getStarted,
  checkItOut,
  languages = [],
  navLabel = 'Main',
  menuButtonLabel = 'Toggle navigation menu',
  defaultMobileMenuOpen = false,
  defaultOpenDropdownIndex = null,
  fixed = true,
  className,
  ...rest
}: HeaderProps) {
  const baseId = useId();
  const [mobileOpen, setMobileOpen] = useState(defaultMobileMenuOpen);
  const [openDropdown, setOpenDropdown] = useState<number | null>(defaultOpenDropdownIndex);

  const drawerId = `${baseId}-drawer`;
  const hasActions = Boolean(signIn || getStarted || checkItOut);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Escape') return;
    setOpenDropdown(null);
    setMobileOpen(false);
  }

  function action(kind: ActionKind, item: HeaderAction | undefined, layout: 'desktop' | 'mobile') {
    if (!item) return null;
    const href = safeHref(item.href);
    if (!href) return null;
    const { variant, desktop, mobile } = ACTIONS[kind];
    return (
      <Button variant={variant} href={href} className={layout === 'desktop' ? desktop : mobile}>
        {item.label}
      </Button>
    );
  }

  return (
    <div className="relative" onKeyDown={onKeyDown}>
      <header
        className={cx(
          fixed ? 'fixed top-0' : 'relative',
          'z-50 w-full border-b border-hairline bg-surface/90 backdrop-blur-sm',
          className,
        )}
        {...rest}
      >
        <nav aria-label={navLabel}>
          <Container>
            <div className="flex h-20 items-center justify-between">
              <Logo href={logoHref} src={logoSrc} label={logoLabel} />

              {/*
               * Main menu.
               *
               * `whitespace-nowrap` and a tighter gap are load-bearing, not
               * cosmetic. The bar's min-content width was 1216px against a
               * `max-w-7xl − px-8` container of exactly 1216px — zero slack — so
               * every multi-word label wrapped mid-phrase ("Why / Runink?"), the
               * CTA pills grew taller than the bar, and the outlined pill's
               * bottom stroke was clipped by the bar edge. Keeping labels on one
               * line and reclaiming 12px per gap gives the bar real headroom.
               */}
              <div className="hidden items-center gap-5 whitespace-nowrap md:flex lg:gap-8">
                {navItems.map((item, index) => {
                  if (item.children && item.children.length > 0) {
                    const isOpen = openDropdown === index;
                    const panelId = `${baseId}-dropdown-${index}`;
                    const parentHref = safeHref(item.href);
                    /*
                     * `ring-fill-accent` measures 3.02:1 over `surface-well` on the
                     * sheet ground — no headroom — so the ring always carries a 1px
                     * offset rather than relying on the ring alone.
                     */
                    const triggerClasses = cx(
                      'flex items-center',
                      NAV_LINK,
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-fill-accent focus-visible:ring-offset-1 focus-visible:ring-offset-surface',
                    );
                    return (
                      <div
                        key={`${item.label}-${index}`}
                        /*
                         * `group` so the panel can open on `group-focus-within` too.
                         * Pointer users get the React `openDropdown` state; keyboard
                         * users get the CSS state, which is what makes Tabbing into
                         * the panel work now the parent navigates instead of toggling.
                         */
                        className="group relative"
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown((current) => (current === index ? null : current))}
                      >
                        {/*
                          The parent is a real link when it has a destination, matching
                          `partials/header.html`: the entry is the section overview, so
                          a keyboard user presses Enter on it rather than landing on a
                          control that does nothing without a pointer. With no usable
                          href there is nothing to navigate to, so it stays a button
                          that toggles the panel.
                        */}
                        {parentHref ? (
                          <a
                            href={parentHref}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className={triggerClasses}
                          >
                            {item.label}
                            <Icon name="chevron-down" className="ml-2 h-4 w-4" />
                          </a>
                        ) : (
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenDropdown((current) => (current === index ? null : index))}
                            className={triggerClasses}
                          >
                            {item.label}
                            <Icon name="chevron-down" className="ml-2 h-4 w-4" />
                          </button>
                        )}
                        <div
                          id={panelId}
                          className={cx(
                            'absolute left-0 mt-2 w-72 transition-all duration-200 ease-in-out',
                            isOpen ? 'visible opacity-100' : 'invisible opacity-0',
                            'group-focus-within:opacity-100 group-focus-within:visible',
                          )}
                        >
                          <div className="rounded-card border border-hairline bg-surface-raised py-6 shadow-xl">
                            {item.children.map((child, childIndex) => {
                              const href = safeHref(child.href);
                              const classes = 'block px-8 py-3 text-sm text-primary';
                              return href ? (
                                <a
                                  key={`${child.label}-${childIndex}`}
                                  href={href}
                                  className={cx(classes, 'hover:bg-surface-well hover:text-primary')}
                                >
                                  {child.label}
                                </a>
                              ) : (
                                <span key={`${child.label}-${childIndex}`} className={classes}>
                                  {child.label}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const href = safeHref(item.href);
                  return href ? (
                    <a key={`${item.label}-${index}`} href={href} className={NAV_LINK}>
                      {item.label}
                    </a>
                  ) : (
                    <span key={`${item.label}-${index}`} className={NAV_LINK}>
                      {item.label}
                    </span>
                  );
                })}
              </div>

              {/* CTAs and language switcher */}
              <div className="hidden items-center gap-3 whitespace-nowrap md:flex lg:gap-4">
                {action('signIn', signIn, 'desktop')}
                {action('getStarted', getStarted, 'desktop')}
                {action('checkItOut', checkItOut, 'desktop')}

                {languages.length > 0 && (
                  <div className="flex items-center space-x-3 border-l border-hairline pl-3">
                    {languages.map((language, index) => {
                      const href = safeHref(language.href);
                      if (!href) return null;
                      return (
                        <a
                          key={`${language.label}-${index}`}
                          href={href}
                          title={language.label}
                          className={cx(
                            'flex items-center transition-all duration-200 hover:scale-110',
                            language.current
                              ? 'rounded-sm ring-2 ring-fill-accent ring-offset-2 ring-offset-surface'
                              : 'opacity-50 hover:opacity-100',
                          )}
                          aria-current={language.current ? 'page' : undefined}
                        >
                          <img
                            src={language.flagSrc}
                            alt={language.label}
                            className="h-4 w-6 rounded-sm object-cover"
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile menu toggle */}
              <div className="md:hidden">
                <button
                  type="button"
                  aria-expanded={mobileOpen}
                  aria-controls={drawerId}
                  aria-label={menuButtonLabel}
                  onClick={() => setMobileOpen((open) => !open)}
                  className="rounded-card p-2 text-primary transition-colors hover:bg-surface-raised focus:outline-none focus-visible:ring-2 focus-visible:ring-fill-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <Icon name="menu" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </Container>

          {/* Mobile drawer */}
          <div
            id={drawerId}
            className={cx(
              // Exclusive display utility: `hidden` beats `block` in Tailwind's
              // output order, so only one of the two may ever be emitted.
              mobileOpen ? 'block' : 'hidden',
              fixed ? 'fixed' : 'absolute',
              'left-0 right-0 top-20 w-full border-t border-hairline bg-surface shadow-lg md:hidden',
            )}
          >
            <div className="w-full px-6 py-4">
              {navItems.map((item, index) => {
                if (item.children && item.children.length > 0) {
                  const parentHref = safeHref(item.href);
                  return (
                    <div key={`${item.label}-${index}`} className="py-2">
                      {/*
                        Same call as the desktop parent: the partial makes the drawer's
                        group heading a link to the section overview rather than dead
                        text, so it is a link here whenever there is a destination.
                      */}
                      {parentHref ? (
                        <a
                          href={parentHref}
                          className="mb-2 block text-xl font-bold text-primary transition duration-200 hover:text-ink-success"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <div className="mb-2 text-xl font-bold text-primary">{item.label}</div>
                      )}
                      <div className="pl-4">
                        {item.children.map((child, childIndex) => {
                          const href = safeHref(child.href);
                          return href ? (
                            <a
                              key={`${child.label}-${childIndex}`}
                              href={href}
                              className="block py-2 text-secondary hover:text-ink-success"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <span key={`${child.label}-${childIndex}`} className="block py-2 text-secondary">
                              {child.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const href = safeHref(item.href);
                return href ? (
                  <a key={`${item.label}-${index}`} href={href} className={MOBILE_NAV_LINK}>
                    {item.label}
                  </a>
                ) : (
                  <span key={`${item.label}-${index}`} className={MOBILE_NAV_LINK}>
                    {item.label}
                  </span>
                );
              })}

              {hasActions && (
                <div className="space-y-4 pt-4">
                  {action('signIn', signIn, 'mobile')}
                  {action('getStarted', getStarted, 'mobile')}
                  {action('checkItOut', checkItOut, 'mobile')}
                </div>
              )}

              {/*
               * The drawer's language row uses `flex-wrap` + `gap` rather than a
               * nowrap `space-x-6` row. Four flag+label pairs need ~456px inside
               * the drawer's `px-6`, so at every real phone width (390–430px) the
               * last label ("Português") rendered outside the drawer panel.
               */}
              {languages.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-hairline pt-6">
                  {languages.map((language, index) => {
                    const href = safeHref(language.href);
                    if (!href) return null;
                    return (
                      <a
                        key={`${language.label}-${index}`}
                        href={href}
                        aria-current={language.current ? 'page' : undefined}
                        className={cx(
                          'flex items-center space-x-2 text-secondary',
                          language.current && 'font-bold text-primary',
                        )}
                      >
                        <img src={language.flagSrc} alt="" className="h-4 w-6 rounded-sm object-cover" />
                        <span>{language.label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
