import type { HTMLAttributes, ReactNode } from 'react';
import { Section } from './Section';

export interface FeaturesSectionProps extends HTMLAttributes<HTMLElement> {
  /** Section heading. Omit it and the whole header block is skipped. */
  title?: string;
  /** Standfirst under the heading. Only renders alongside a `title`. */
  description?: string;
  /** The feature rows — normally a stack of `Feature` components. */
  children?: ReactNode;
}

/**
 * A page band that stacks feature rows with a centred header above them.
 *
 * The wrapper half of the `Feature` pair: it owns the section rhythm, the narrow
 * centred header column, and the `space-y-32` gap that gives a run of `Feature`
 * rows room to breathe. Put `Feature` components in as children and let this set
 * the spacing rather than spacing them yourself.
 *
 * The header is all-or-nothing — with no `title` the band renders only its
 * children, which is how the shortcode behaved when `title` was absent.
 *
 * @example
 * <FeaturesSection
 *   title="One platform, from telemetry to decision"
 *   description="Runink connects live logistics telemetry to predictive analytics, so disruption is mitigated while it is still happening."
 * >
 *   <Feature
 *     badge="Tariff & Demurrage Recovery"
 *     title="Automatic Customs & Weighbridge Auditing"
 *     description="Weighbridge telemetry is cross-checked against Bill of Lading manifests, and amendments are drafted the moment a variance exceeds 5%."
 *     image="/images/face/claims.png"
 *   />
 *   <Feature
 *     badge="Compliance & Safety"
 *     title="Real-Time HazMat Enforcement"
 *     description="The Yard Operations Sentinel pauses crane movement until a compliant buffer between incompatible cargo classes is restored."
 *     image="/images/face/rules.png"
 *     imagePosition="left"
 *   />
 * </FeaturesSection>
 */
export function FeaturesSection({ title, description, className, children, ...rest }: FeaturesSectionProps) {
  return (
    <Section className={className} {...rest}>
      {title && (
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">{title}</h2>
          {description && <p className="text-xl text-secondary">{description}</p>}
        </div>
      )}

      <div className="space-y-32">{children}</div>
    </Section>
  );
}
