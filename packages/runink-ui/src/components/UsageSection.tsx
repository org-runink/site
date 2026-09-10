import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

export interface UsageStep {
  /** The step's name. */
  title: string;
  /** What the reader does, or what happens, in this step. */
  text: ReactNode;
}

export interface UsageSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Centred heading above the grid. Omit it to render the steps alone. */
  title?: ReactNode;
  /** Supporting line under the heading. Ignored when there is no `title`. */
  description?: ReactNode;
  /**
   * The steps, in order. They are numbered automatically from 1, so the array
   * order *is* the sequence — do not put the number in `title`.
   */
  steps: UsageStep[];
}

/**
 * A numbered "how you use it" grid: heading over three columns of numbered step cards.
 *
 * Ported from the `usage-section` shortcode, which took its whole payload as a JSON
 * body (`{"title": …, "steps": [...]}`); here that payload is the props. Used for
 * short procedural sequences — onboarding, a deployment path, how a workflow runs.
 * Three to six steps is the shape it is built for: the grid goes one column, then
 * two from `sm`, then three from `lg`.
 *
 * Each card is a `group` — the number medallion flips from accent ink on a well to a
 * filled `fill-success` circle (with its paired `on-success` ink) on hover, which is
 * the only interactive signal here (the cards are not links).
 *
 * Paints its own `surface` band with `surface-raised` cards on it, so place it between
 * sections rather than inside one.
 *
 * @example
 * <UsageSection
 *   title="How Runink deploys into your operation"
 *   description="Three weeks from first telemetry to autonomous execution — no rip-and-replace."
 *   steps={[
 *     { title: 'Connect your telemetry', text: 'Point the Twin at your existing TMS, WMS and sensor feeds over a mutually authenticated link. Nothing leaves your perimeter.' },
 *     { title: 'Validate the rules', text: 'Your operators confirm the business constraints the agents will enforce, so every action is defensible before it is automated.' },
 *     { title: 'Let the agents execute', text: 'Claims, reroutes and compliance holds are drafted and actioned continuously, with the audit trail attached.' },
 *   ]}
 * />
 */
export function UsageSection({ title, description, steps, className, ...rest }: UsageSectionProps) {
  return (
    <section className={cx('bg-surface py-16', className)} {...rest}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">{title}</h2>
            {description && <p className="mt-4 text-xl text-secondary">{description}</p>}
          </div>
        )}

        {steps.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={`${index}-${step.title}`}
                className="group relative rounded-card border border-hairline bg-surface-raised p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-surface-well font-semibold text-ink-accent transition-colors group-hover:bg-fill-success group-hover:text-on-success">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                    <p className="mt-2 text-secondary">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
