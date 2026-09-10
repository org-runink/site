import type { HTMLAttributes, ReactNode } from 'react';
import { CtaBanner } from './CtaBanner';

export interface CtaProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Headline. Short and imperative — the site uses lines like "Stop The Bleeding." */
  title: ReactNode;
  /** One supporting line under the headline. */
  description?: ReactNode;
  /** Label of the loud action. Omit it and no primary link renders. */
  primaryButtonText?: string;
  /** Destination of the primary action. Defaults to `#`. */
  primaryButtonUrl?: string;
  /** Label of the quiet companion action. Omit it and no secondary link renders. */
  secondaryButtonText?: string;
  /** Destination of the secondary action. Defaults to `#`. */
  secondaryButtonUrl?: string;
  /** Start colour of the glow gradient. Pair it with `gradientTo`. */
  gradientFrom?: string;
  /** End colour of the glow gradient. Pair it with `gradientFrom`. */
  gradientTo?: string;
  /** Glow gradient angle in degrees; `90` is left-to-right. Defaults to 90. */
  gradientAngle?: number;
  className?: string;
}

/**
 * Flat-prop call-to-action, ported from the `cta` shortcode authors use in Markdown.
 *
 * This is the content-authoring face of `CtaBanner`: the Hugo shortcode is a thin
 * adapter that forwards its nine flat params to the `components/cta` partial, so
 * this component does the same and renders the identical band. Reach for it when
 * you are translating page content one-to-one (the props line up with the
 * shortcode's `primary_button_text`, `gradient-angle`, … params); reach for
 * `CtaBanner` when you are composing a layout in React and would rather pass
 * button objects.
 *
 * Like `CtaBanner` it owns its own vertical rhythm and expects the dark canvas
 * behind it — drop it between prose blocks, not inside a `Section`. Both URLs are
 * sanitised by `CtaBanner` (via `safeHref`), so markdown-authored destinations
 * cannot smuggle a `javascript:` payload through this adapter.
 *
 * @example
 * <Cta
 *   title="Stop The Bleeding."
 *   description="See your operational risks in real-time and fix them automatically."
 *   primaryButtonText="Get Started"
 *   primaryButtonUrl="/#contact"
 * />
 */
export function Cta({
  title,
  description,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  gradientFrom,
  gradientTo,
  gradientAngle,
  className,
  ...rest
}: CtaProps) {
  return (
    <CtaBanner
      title={title}
      description={description}
      primaryButton={primaryButtonText ? { text: primaryButtonText, url: primaryButtonUrl } : undefined}
      secondaryButton={secondaryButtonText ? { text: secondaryButtonText, url: secondaryButtonUrl } : undefined}
      gradientFrom={gradientFrom}
      gradientTo={gradientTo}
      gradientAngle={gradientAngle}
      className={className}
      {...rest}
    />
  );
}
