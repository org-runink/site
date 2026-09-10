import { cx } from '../lib/cx';
import { Icon, type IconName } from './Icon';

export interface ValueCardProps {
  /** The value or principle being stated. */
  title: string;
  /** A sentence expanding on it. */
  description: string;
  /** Icon drawn large and unboxed above the heading. */
  icon?: IconName;
  className?: string;
}

/**
 * A values / principles card — solid panel, large bare icon, no gradient tile.
 *
 * The quietest card in the family: it sits on an opaque `primary-800` panel and
 * leans on elevation rather than colour, which is why it reads as editorial
 * rather than promotional. Used for "how we work" style content.
 *
 * @example
 * <ValueCard
 *   icon="scale"
 *   title="Sovereignty is not a feature"
 *   description="Your data and your models stay on infrastructure you control."
 * />
 */
export function ValueCard({ title, description, icon, className }: ValueCardProps) {
  return (
    <div
      className={cx(
        'rounded-card border border-hairline bg-surface-raised p-8 shadow-lg transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-2xl',
        className,
      )}
    >
      {icon && (
        <div className="mb-4">
          <Icon name={icon} className="h-12 w-12 text-ink-accent" />
        </div>
      )}
      <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
