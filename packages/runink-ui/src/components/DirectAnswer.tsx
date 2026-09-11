import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

export interface DirectAnswerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The answer. One self-contained paragraph that answers the heading above it
   * without depending on the surrounding prose — an answer engine may lift it out
   * on its own.
   */
  children: ReactNode;
  /**
   * Bold lead-in above the answer. Defaults to "Quick Answer:". Pass the
   * translated string on non-English pages; pass `null` to drop the lead-in.
   */
  label?: ReactNode;
}

/**
 * The answer-engine callout that opens a section — a bold "Quick Answer:" lead-in
 * over one lift-able paragraph.
 *
 * Ported from the `direct-answer` shortcode, which the blog and use-case pages
 * place directly under an `##` heading so that crawlers and answer engines find a
 * complete, quotable response before the long-form argument starts. The
 * `schema.org/Answer` microdata is the reason the component exists, so the
 * `itemScope`/`itemType`/`itemProp` attributes are part of its contract, not
 * decoration — keep them even if the styling is overridden.
 *
 * The site styles this through the `.aeo-direct-answer` component class in
 * `assets/css/main.css`, which does not exist in this package. It is expressed
 * here as utilities instead: a 4px `fill-accent` left rule and an `ink-accent`
 * lead-in over a `surface` panel with `primary` body copy, rather than the site's
 * `stone-*` neutrals.
 *
 * **The panel fill does not bound the callout — the border does.** `surface` over
 * `canvas` is a 1.05:1 lift on the sheet ramp, so with only the copper rule drawn the
 * panel dissolved into the page and the rule did all the work. The other three sides
 * are an `edge` border (≥3.15:1 on every surface of both grounds), and the left side
 * overrides back to the 4px copper rule via the per-side `border-l-*` utilities,
 * which Tailwind emits after the all-sides ones so they win regardless of class order.
 *
 * Flows inline in prose and brings its own `my-6` rhythm, so do not wrap it in a
 * `Section` or add vertical margin around it.
 *
 * @example
 * <DirectAnswer>
 *   Demurrage and detention fees are among the largest hidden costs in global
 *   logistics, costing the industry over $5 billion annually. These charges
 *   accumulate when containers sit idle at port (demurrage) or when equipment is
 *   held beyond the carrier's allocated free time inland (detention), and they are
 *   largely preventable with proactive container visibility and automated dispute
 *   workflows.
 * </DirectAnswer>
 */
export function DirectAnswer({ children, label = 'Quick Answer:', className, ...rest }: DirectAnswerProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/Answer"
      className={cx(
        // `border border-edge` bounds the panel; `border-l-4 border-l-fill-accent`
        // then re-states the left side as the copper rule. Both per-side utilities
        // are emitted after their all-sides counterparts, so the left wins.
        'my-6 rounded-r-lg border border-l-4 border-edge border-l-fill-accent bg-surface p-6 text-primary',
        className,
      )}
      {...rest}
    >
      <div itemProp="text">
        {label && <strong className="mb-2 block text-lg font-bold text-ink-accent">{label}</strong>}
        {children}
      </div>
    </div>
  );
}
