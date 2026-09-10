import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Container } from './Container';
import { GradientText } from './GradientText';

/**
 * Accent for one capability card. Each name is the integration logo whose brand
 * colour the template borrowed for that card's hover border and highlighted word;
 * `platform` is the token-only fallback for a card that belongs to no integration.
 *
 * The three brand hexes are deliberately arbitrary values, not design tokens —
 * they are third-party identities (Snowflake, Databricks, Google) and must not be
 * folded into the Runink palette.
 */
export type CapabilityAccent = 'platform' | 'snowflake' | 'databricks' | 'google';

const ACCENTS: Record<CapabilityAccent, { border: string; text: string; hoverText: string }> = {
  platform: {
    border: 'hover:border-hairline/30',
    text: 'text-secondary-500',
    hoverText: 'group-hover:text-secondary-500',
  },
  snowflake: {
    border: 'hover:border-[#29B5E8]/30',
    text: 'text-[#29B5E8]',
    hoverText: 'group-hover:text-[#29B5E8]',
  },
  databricks: {
    border: 'hover:border-[#FF3621]/30',
    text: 'text-[#FF3621]',
    hoverText: 'group-hover:text-[#FF3621]',
  },
  google: {
    border: 'hover:border-[#4285F4]/30',
    text: 'text-[#4285F4]',
    hoverText: 'group-hover:text-[#4285F4]',
  },
};

export interface Capability {
  /** First half of the display heading, left white. */
  title: string;
  /**
   * The trailing word (or words) of the heading, painted in the card's accent —
   * "Digital **Paralegals**", "Statistical **Buyers**". Omit for a flat heading.
   */
  titleAccent?: string;
  /** What the capability actually does, in two or three sentences. */
  description: string;
  /**
   * The pinned footer line naming what this capability is responsible for —
   * "Focus: Claims & Recovery". Sits on `mt-auto`, so it aligns across the row
   * however ragged the copy above it is.
   */
  focus?: string;
  /** Which integration's accent colour this card wears. Defaults to `platform`. */
  accent?: CapabilityAccent;
}

export interface CapabilityShowcaseProps extends HTMLAttributes<HTMLElement> {
  /** Small bordered pill above the heading — the tier or gating label. */
  eyebrow?: string;
  /** Display heading, clipped to the brand's ember gradient. */
  title: string;
  /** Standfirst under the heading, set uppercase with widened tracking. */
  subtitle?: string;
  /**
   * The capabilities on show. The shortcode hardcoded exactly three with four
   * inlined languages each; as a prop the copy arrives in one language and the grid
   * is three-up from `md` at any count.
   */
  capabilities: Capability[];
  /**
   * Optional decorative layer painted behind the content — pass the ported
   * background-effects component here. This shortcode shipped without it; the slot
   * exists so the band matches the rest of the system when a page wants the wash.
   */
  backgroundEffect?: ReactNode;
}

/**
 * A three-up showcase of gated capabilities: display heading, then equal-height accent cards.
 *
 * Use it for the "what the top tier actually gives you" band — each card names a
 * capability, explains it, and pins a responsibility line to its foot. Cards carry
 * no icon on purpose: the emphasis is the two-tone uppercase italic heading, which
 * is why each one needs an accent.
 *
 * It owns its own `py-24` band, top border and translucent canvas, so drop it into a
 * dark `Surface` rather than a `Section`. Each card is a `group` (the heading and
 * border recolour on hover) and is `flex-col h-full`, so every `focus` line in the
 * row sits on the same baseline.
 *
 * @example
 * <CapabilityShowcase
 *   eyebrow="Enterprise Exclusive"
 *   title="Operations Actionable Twins"
 *   subtitle="Autonomous operations modules deployed on your dedicated infrastructure to augment your team, orchestrate logistics, and protect your margins 24/7."
 *   capabilities={[
 *     {
 *       title: 'Digital',
 *       titleAccent: 'Paralegals',
 *       accent: 'snowflake',
 *       description:
 *         'Your automated legal and compliance team. They autonomously ingest freight bills, cross-reference SLA agreements, and instantly file irrefutable claims to recover lost margins from carriers without manual intervention.',
 *       focus: 'Focus: Claims & Recovery',
 *     },
 *     {
 *       title: 'Statistical',
 *       titleAccent: 'Buyers',
 *       accent: 'databricks',
 *       description:
 *         'Your autonomous demand planning unit. They intelligently ingest market trends and sales velocity to predict exact stock needs, dynamically orchestrating inventory allocation across your entire distribution network.',
 *       focus: 'Focus: Inventory & Fulfilment',
 *     },
 *     {
 *       title: 'Revenue',
 *       titleAccent: 'Operators',
 *       accent: 'google',
 *       description:
 *         'Your forensic financial auditors. They meticulously audit every invoice line against your negotiated carrier contracts, automatically flagging ghost fees and executing Short-Pays to halt margin leakage.',
 *       focus: 'Focus: Finance & Reconciliation',
 *     },
 *   ]}
 * />
 */
export function CapabilityShowcase({
  eyebrow,
  title,
  subtitle,
  capabilities,
  backgroundEffect,
  className,
  ...rest
}: CapabilityShowcaseProps) {
  return (
    <section
      className={cx('relative overflow-hidden border-t border-hairline/50 bg-canvas/50 py-24', className)}
      {...rest}
    >
      {backgroundEffect}

      <Container className="relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-6 inline-flex items-center justify-center rounded-card border border-fill-accent/50 bg-surface px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-ink-accent">
              {eyebrow}
            </div>
          )}

          <GradientText
            as="h2"
            sweep="ember"
            className="mb-4 break-words text-5xl font-black uppercase italic leading-[1.1] tracking-tighter drop-shadow-lg md:text-6xl lg:text-[70px]"
          >
            {title}
          </GradientText>

          {subtitle && (
            <p className="mx-auto mb-10 mt-6 max-w-3xl px-4 text-sm font-bold uppercase leading-relaxed tracking-[0.15em] text-secondary md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {capabilities.map((capability) => {
            const accent = ACCENTS[capability.accent ?? 'platform'];
            return (
              <div
                key={capability.title + (capability.titleAccent ?? '')}
                className={cx(
                  'group flex h-full flex-col rounded-card border border-hairline/60 bg-surface p-8 shadow-inner transition-colors',
                  accent.border,
                )}
              >
                <h3
                  className={cx(
                    'mb-4 break-words text-2xl font-black uppercase italic tracking-tighter text-white transition-colors',
                    accent.hoverText,
                  )}
                >
                  {capability.title}
                  {capability.titleAccent && (
                    <>
                      {' '}
                      <span className={accent.text}>{capability.titleAccent}</span>
                    </>
                  )}
                </h3>

                <p className="mb-8 grow text-sm leading-relaxed text-secondary">{capability.description}</p>

                {capability.focus && (
                  <div className="mt-auto text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                    {capability.focus}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
