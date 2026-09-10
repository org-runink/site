import { useEffect, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Icon } from './Icon';
import { safeHref } from '../lib/safeHref';

export interface UseCasesCarouselItem {
  /** Card heading — in the Hugo version this was the use-case page's title. */
  title: string;
  /** One- or two-sentence summary under the heading. */
  description: string;
  /** Small outlined pill at the top of the card, e.g. `"Claims Agent"`. */
  badge?: string;
  /**
   * The badge's colour as a **CSS colour string**, applied to both its border and
   * its text. These arrive from use-case front matter as raw hex (`"#7c3aed"`),
   * one per agent, so they are an inline style rather than a token. Omit it and
   * the badge falls back to the system accent.
   */
  badgeColor?: string;
  /** Where the card's footer link goes. Omit to render the card without a link. */
  href?: string;
  /**
   * Footer link text. Defaults to `Read about <title>` — the shortcode's wording,
   * which is why the label reads as a sentence rather than a button.
   */
  linkLabel?: string;
}

export interface UseCasesCarouselProps extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'> {
  /** Uppercase letterspaced pill above the heading, e.g. `"Applications"`. */
  eyebrow?: ReactNode;
  /** The band's gradient headline. */
  title: ReactNode;
  /** Supporting line under the headline, in uppercase letterspaced caps. */
  subtitle?: ReactNode;
  /** The cards, in scroll order. The first two or three are what a reader sees. */
  items: UseCasesCarouselItem[];
  /**
   * `id` on the heading block, so in-page nav can jump to the band. Defaults to
   * `"use-cases"`, the anchor the site's header links at. Pass `undefined` when
   * rendering more than one carousel on a page.
   */
  anchorId?: string;
  /**
   * Nudge the rail forward on a timer, looping back to the start at the end, and
   * pause while the pointer is over it. Defaults to true. Disabled outright under
   * `prefers-reduced-motion`, and irrelevant to the static render — the rail
   * starts at `scrollLeft: 0` either way.
   */
  autoAdvance?: boolean;
  /** Milliseconds between auto-advances. Defaults to `3000`. */
  intervalMs?: number;
  /** Pixels per auto-advance. Defaults to `340` — one card plus the gap. */
  stepPx?: number;
  /**
   * Optional decorative layer painted behind the content — pass the ported
   * background-effects component here. The Hugo shortcode always rendered it.
   */
  backgroundEffect?: ReactNode;
}

/** True when the visitor has asked the OS to minimise animation. */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * The full-bleed "explore every use case" band: a heading over a horizontally scrolling rail of cards.
 *
 * Ported from the `use-cases-carousel` shortcode, which walked the `use-cases`
 * section and rendered a card per page. Here the pages are the `items` prop, so
 * the component works for any list.
 *
 * The rail is a real scroll container (`overflow-x-auto` with `snap-x
 * snap-mandatory` below `lg`), not a transform track: it is keyboard- and
 * trackpad-scrollable, and it renders at `scrollLeft: 0` with the first cards
 * visible before any JS runs. `hide-scrollbar` suppresses the scrollbar, so the
 * rail must stay wider than its content for the affordance to come from the cards
 * bleeding off the right edge. `autoAdvance` only nudges that same scroll
 * position, and never runs under `prefers-reduced-motion`.
 *
 * Each card is a `group`: the heading takes the accent colour, the card lifts 2
 * units and its glow comes up on hover.
 *
 * This band paints its own `primary-950` canvas and top rule and spans the
 * viewport, so place it between sections rather than inside one.
 *
 * @example
 * <UseCasesCarousel
 *   eyebrow="Applications"
 *   title="Explore All Cures"
 *   subtitle="Discover how the Operations Actionable Twin transforms your operational workflows."
 *   items={[
 *     {
 *       title: 'Automated Claims Audit & Demurrage Recovery',
 *       description: 'Forensic chronology reconstruction auto-drafts tariff disputes & short-pays.',
 *       badge: 'Claims Agent',
 *       badgeColor: '#7c3aed',
 *       href: '/use-cases/claims-recovery/',
 *     },
 *     {
 *       title: 'Cold Chain & Terminal Safety',
 *       description: 'IoT-Edge Sentinel locks yard cranes on segregation violations and protects perishable cargo.',
 *       badge: 'IoT Sentinel',
 *       badgeColor: '#3b82f6',
 *       href: '/use-cases/cold-chain-safety/',
 *     },
 *     {
 *       title: 'Predictive JIT & Sourcing Optimization',
 *       description: 'Solve supplier capacity bottlenecks and automate backup supplier routing to reduce stockouts.',
 *       badge: 'Fulfillment Agent',
 *       badgeColor: '#ea580c',
 *       href: '/use-cases/fulfillment-optimization/',
 *     },
 *     {
 *       title: 'ESG Compliance & Data Privacy Auditing',
 *       description: 'Auto-hashes customer PII to comply with DPA and compiles Scope 3 emissions.',
 *       badge: 'Compliance Auditor',
 *       badgeColor: '#10b981',
 *       href: '/use-cases/compliance/',
 *     },
 *   ]}
 * />
 */
export function UseCasesCarousel({
  eyebrow,
  title,
  subtitle,
  items,
  anchorId = 'use-cases',
  autoAdvance = true,
  intervalMs = 3000,
  stepPx = 340,
  backgroundEffect,
  className,
  ...rest
}: UseCasesCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!autoAdvance || prefersReducedMotion()) return;
    const rail = railRef.current;
    if (!rail) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      // Within 10px of the end counts as the end — scroll positions are fractional.
      if (rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 10) {
        rail.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        rail.scrollBy({ left: stepPx, behavior: 'smooth' });
      }
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, stepPx, items.length]);

  return (
    <section
      className={cx('relative overflow-hidden border-t border-primary-800 bg-primary-950 py-32', className)}
      {...rest}
    >
      {backgroundEffect}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id={anchorId} className="mx-auto mb-16 max-w-7xl px-6">
          {eyebrow && (
            <div className="mb-6 inline-flex items-center justify-center rounded-card border border-secondary-500/30 bg-primary-900/50 px-6 py-2 text-sm font-black uppercase tracking-[0.25em] text-secondary-500 shadow-neon-orange backdrop-blur md:text-base">
              {eyebrow}
            </div>
          )}
          <h2 className="mb-2 bg-gradient-to-r from-secondary-500 to-brand-orange-dark bg-clip-text text-6xl font-black uppercase italic leading-[0.9] tracking-tighter text-transparent drop-shadow-lg md:text-7xl lg:text-[90px]">
            {title}
          </h2>
          {subtitle && (
            <div className="mb-10 mt-6 max-w-3xl text-lg font-bold uppercase tracking-[0.15em] text-primary-500 md:text-xl">
              {subtitle}
            </div>
          )}
        </div>

        <div
          ref={railRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          className="hide-scrollbar flex max-w-[100vw] snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 lg:snap-none lg:pl-16"
        >
          {items.map((item, index) => {
            const href = safeHref(item.href);
            const accent = item.badgeColor ?? 'var(--color-secondary-500)';
            return (
              <div
                key={`${index}-${item.title}`}
                className="group flex w-80 shrink-0 snap-start flex-col rounded-3xl border border-primary-700 bg-primary-800/80 p-8 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:border-secondary-500/50 hover:shadow-neon-orange-strong md:w-96 lg:snap-align-none"
              >
                {item.badge && (
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className="rounded border bg-transparent px-3 py-1 text-xs font-bold uppercase tracking-widest"
                      style={{ borderColor: accent, color: accent }}
                    >
                      {item.badge}
                    </span>
                  </div>
                )}
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-secondary-500">
                  {item.title}
                </h3>
                <p className="mb-8 flex-grow text-sm leading-relaxed text-primary-400">{item.description}</p>
                {href && (
                  <a
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 border-t border-primary-700 pt-4 text-sm font-bold uppercase tracking-widest text-secondary-500 transition-all group-hover:gap-3"
                  >
                    {item.linkLabel ?? `Read about ${item.title}`}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
