import { useId, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Icon } from './Icon';

/** One question/answer pair in the accordion. */
export interface FaqItem {
  /** The question, rendered as the accordion trigger's label. */
  question: string;
  /**
   * The answer. The shortcode ran this through `markdownify`, so rich content is
   * expected here — pass elements (`<p>`, `<ul>`, `<strong>`) rather than markdown
   * source, since nothing in this package parses markdown.
   */
  answer: ReactNode;
}

export interface FaqProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Band heading above the accordion. */
  title?: ReactNode;
  /** Standfirst under the heading. Only renders alongside a `title`. */
  description?: ReactNode;
  /** The questions, in the order they should appear. */
  items: FaqItem[];
  /**
   * Which item is expanded on first render. Defaults to `0` — the first answer is
   * always visible so the band reads as an answer rather than a row of closed
   * bars. Pass `null` to start fully collapsed.
   */
  defaultOpenIndex?: number | null;
}

/**
 * The FAQ band: a heading over an accordion of question/answer pairs.
 *
 * Ported from the `faq` shortcode, which takes its content as a JSON block and
 * shipped an inline `onclick` handler per row; the open/closed state is React
 * `useState` here instead. Rows toggle independently, matching the shortcode — one
 * answer being open never closes another.
 *
 * Each trigger is a real `<button>` wired to its panel with `aria-expanded` and
 * `aria-controls`, and each panel is a `role="region"` labelled by its trigger, so
 * the accordion is operable from the keyboard without any extra handling. The
 * collapse itself animates the panel's `grid-template-rows` from `1fr` to `0fr`
 * (the shortcode's technique, which needs no measured height), and a closed panel
 * is marked `aria-hidden` so assistive tech agrees with what is on screen.
 *
 * Paints its own `primary-900` band and `primary-800` rows, so drop it straight
 * onto `Surface` tone `canvas`; it owns its vertical rhythm and does not need a
 * `Section` wrapper.
 *
 * @example
 * <Faq
 *   title="Billing Logic. No Surprises."
 *   description="Low barrier to entry. Revenue scales with your actual infrastructure usage."
 *   items={[
 *     {
 *       question: 'When is the Lite License a good fit?',
 *       answer: 'The Lite License is designed for SMEs, startups, and highly lean teams (1-9 seats) who need immediate automation ROI without massive upfront commitments. It operates on shared high-density nodes at $75/seat annually.',
 *     },
 *     {
 *       question: 'Why should we choose the Dedicated License over Lite?',
 *       answer: 'Once your team scales to 10+ seats, the Dedicated License provisions an isolated Sovereign Node exclusively for your organization, with custom domain routing and strict data boundaries.',
 *     },
 *     {
 *       question: 'Do I have to commit to an annual plan?',
 *       answer: 'Only for Dedicated and Enterprise. Lite Licenses offer full flexibility with a month-to-month option at a 15% markup.',
 *     },
 *   ]}
 * />
 */
export function Faq({ title, description, items, defaultOpenIndex = 0, className, ...rest }: FaqProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(defaultOpenIndex === null ? [] : [defaultOpenIndex]);

  function toggle(index: number) {
    setOpen((current) => (current.includes(index) ? current.filter((i) => i !== index) : [...current, index]));
  }

  return (
    <section className={cx('bg-surface', className)} {...rest}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-20">
        {title && (
          <div className="mx-auto mb-12 max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">{title}</h2>
            {description && <p className="mb-5 font-light text-secondary sm:text-xl">{description}</p>}
          </div>
        )}

        <div className="space-y-6">
          {items.map((item, index) => {
            const isOpen = open.includes(index);
            const buttonId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={`${item.question}-${index}`}
                className="overflow-hidden rounded-card border border-hairline bg-surface-raised shadow-lg transition-shadow duration-200 hover:shadow-xl"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-surface-well focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500"
                  >
                    <span className="text-lg font-medium text-white">{item.question}</span>
                    <Icon
                      name="chevron-down"
                      className={cx(
                        'h-5 w-5 flex-shrink-0 text-secondary transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className="grid border-hairline transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-hairline p-6 text-primary">{item.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
