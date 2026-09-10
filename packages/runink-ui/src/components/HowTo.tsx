import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

/** One numbered step of the guide. */
export interface HowToStep {
  /** Short imperative title for the step, e.g. "Digitize and centralize documentation". */
  name: string;
  /**
   * What the reader actually does. The shortcode ran this through `markdownify`,
   * so pass elements for rich content — nothing in this package parses markdown.
   */
  text: ReactNode;
}

export interface HowToProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** The guide's title — the `name` of the HowTo. Required by the schema. */
  name: string;
  /** One-line summary of what following the steps achieves. */
  description?: ReactNode;
  /** The steps, in order. They are numbered automatically from 1. */
  steps: HowToStep[];
}

/**
 * A numbered, schema-marked how-to guide — the AEO block on use-case pages.
 *
 * Ported from the `howto` shortcode, which takes its content as a JSON block. The
 * shortcode declared its structured data as a separate `application/ld+json`
 * script rather than inline microdata; a React component cannot serialise
 * `ReactNode` body copy into JSON-LD, so the same `schema.org/HowTo` graph is
 * expressed as **microdata on the markup instead** — `itemScope`/`itemType` on the
 * section, `itemProp="name"`/`"description"`, and an `itemProp="step"`
 * `schema.org/HowToStep` per row. That structured data is the point of the
 * component, so keep the attributes even when restyling. Each step also carries an
 * `id` of `step-1`, `step-2`, … matching the per-step anchor URLs the shortcode
 * emitted, so deep links into a single step keep working.
 *
 * Paints its own opaque `primary-900` panel with a 1.5rem radius and brings
 * `mt-16` of its own rhythm — it is designed to sit at the end of a prose column
 * on `Surface` tone `canvas`, not inside a `Section`.
 *
 * @example
 * <HowTo
 *   name="How to automate freight claims recovery"
 *   description="A guide to implementing an automated system to fight carrier denials and recover lost freight spend."
 *   steps={[
 *     {
 *       name: 'Digitize and centralize documentation',
 *       text: 'Ensure every Bill of Lading, Delivery Receipt and damage photo is uploaded to a central repository immediately after delivery.',
 *     },
 *     {
 *       name: 'Deploy OCR for automatic evidence extraction',
 *       text: 'Run optical character recognition over delivery receipts to pick up driver signatures and handwritten shortage or damage notes, cross-checking them against the original Bill of Lading.',
 *     },
 *     {
 *       name: 'Integrate external verification APIs',
 *       text: "Connect the claims system to external APIs such as NOAA historical weather data to pre-emptively rebut the carrier's standard 'Act of God' denial.",
 *     },
 *     {
 *       name: 'Build a legal rebuttal template engine',
 *       text: 'Create standardized templates that pull in the OCR evidence and weather records and cite the relevant federal statute — the Carmack Amendment — to draft detailed dispute filings.',
 *     },
 *     {
 *       name: 'Set a low-value auto-filing threshold',
 *       text: 'Configure a rule that files and disputes every valid claim under $500 without human intervention, guaranteeing high-volume, low-cost recovery.',
 *     },
 *   ]}
 * />
 */
export function HowTo({ name, description, steps, className, ...rest }: HowToProps) {
  return (
    <section
      itemScope
      itemType="https://schema.org/HowTo"
      className={cx(
        'relative z-10 mt-16 rounded-3xl border border-hairline/80 bg-surface p-8 shadow-2xl',
        className,
      )}
      {...rest}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-10">
        <div className="mx-auto mb-8 max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl font-black uppercase italic tracking-tight text-white" itemProp="name">
            {name}
          </h2>
          {description && (
            <p className="font-light text-secondary sm:text-xl" itemProp="description">
              {description}
            </p>
          )}
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li
              key={`${step.name}-${index}`}
              id={`step-${index + 1}`}
              itemProp="step"
              itemScope
              itemType="https://schema.org/HowToStep"
              className="flex flex-col gap-6 rounded-card border border-hairline bg-surface-raised p-6 md:flex-row"
            >
              <div
                aria-hidden="true"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary-600 text-xl font-bold text-white"
              >
                {index + 1}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white" itemProp="name">
                  {step.name}
                </h3>
                <div className="text-primary" itemProp="text">
                  {step.text}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
