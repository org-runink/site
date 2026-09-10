import { cx } from '../lib/cx';
import { Icon, type IconName } from './Icon';

export interface FeatureCardProps {
  /** Feature name. */
  title: string;
  /** What the feature does. */
  description: string;
  /** Icon drawn in the saturated gradient tile. */
  icon?: IconName;
  /**
   * Checked capability list under the copy. The Hugo shortcode took these as a
   * comma-separated string; an array is the honest shape in React.
   */
  features?: string[];
  className?: string;
}

/**
 * A feature panel: icon tile, heading, copy, and an optional checklist.
 *
 * The heavier sibling of `Card` — larger heading, fully saturated icon gradient
 * (no hover reveal), and a 2-unit lift on hover. Use it where a feature needs to
 * enumerate what it includes; use `Card` when a sentence is enough.
 *
 * @example
 * <FeatureCard
 *   icon="circle-stack"
 *   title="Sovereign persistence"
 *   description="Objects, records and vector indexes you actually own."
 *   features={['Per-tenant corpora', 'BM25 + vector search', 'No managed cloud DB']}
 * />
 */
export function FeatureCard({ title, description, icon, features, className }: FeatureCardProps) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-secondary-500/50 bg-primary-900/30 p-8 transition-all',
        'hover:-translate-y-2 hover:border-brand-sage-dark/70',
        className,
      )}
    >
      {icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-card bg-gradient-to-br from-secondary-500 to-primary-600">
          <Icon name={icon} className="h-6 w-6 text-white" />
        </div>
      )}
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-6 leading-relaxed text-brand-paper">{description}</p>
      {features && features.length > 0 && (
        <div className="space-y-3 text-sm text-primary-300">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
