import { FeatureCard, Surface } from '@runink/ui';

/** The canonical use: icon, heading, copy and a capability checklist. */
export function Default() {
  return (
    <FeatureCard
      icon="cube-transparent"
      title="Supply Chain Digital Twin"
      description="Connect live logistics telemetry to a model of your whole network, so a disruption shows up as a decision rather than a surprise."
      features={['Live telemetry ingest', 'Predictive disruption scoring', 'S&OP and spend diagnostics']}
    />
  );
}

/** Without a checklist — the shape most feature grids actually use. */
export function WithoutFeatures() {
  return (
    <FeatureCard
      icon="shield-check"
      title="Zero-Hold Customs Gate"
      description="Automatic customs and weighbridge auditing clears compliant loads without a manual hold."
    />
  );
}

/**
 * Three across, as the component appears in a features grid. This is the cell
 * that catches uneven heights and cramped copy.
 */
export function InAGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <FeatureCard
        icon="eye"
        title="The Autonomous Cold Chain Guard"
        description="Perishable loss prevention that watches every reefer continuously, not at checkpoints."
        features={['Per-container thresholds', 'Excursion alerting']}
      />
      <FeatureCard
        icon="arrow-path"
        title="Automated Returns Triage"
        description="Route every return to its highest recoverable value automatically."
        features={['Condition grading', 'Disposition routing', 'Recovery reporting']}
      />
      <FeatureCard
        icon="command-line"
        title="Real-Time Terminal Safety"
        description="Dangerous goods compliance enforced at the gate, with an auditable trail."
        features={['HazMat rule engine', 'Gate enforcement']}
      />
    </div>
  );
}

/**
 * Long copy with no checklist — deliberately text-heavy, to prove the brand
 * faces (Inter body, Plus Jakarta Sans heading) are really loading and that long
 * descriptions wrap rather than overflow.
 */
export function LongCopy() {
  return (
    <FeatureCard
      icon="circle-stack"
      title="Instant S&OP and Spend Diagnostics"
      description="Achieve real-time supply chain visibility and mitigate disruption instantly. Runink connects live logistics telemetry with predictive analytics — spanning sales and operations planning, spend analytics, and fulfillment — to build durable supply chain resilience and protect your operating margins."
    />
  );
}

/**
 * The same card on the sheet ground. Not one class differs from `Default` — only
 * `ground`, because every token rebinds underneath.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <FeatureCard
        icon="cube-transparent"
        title="Supply Chain Digital Twin"
        description="Connect live logistics telemetry to a model of your whole network, so a disruption shows up as a decision rather than a surprise."
        features={['Live telemetry ingest', 'Predictive disruption scoring', 'S&OP and spend diagnostics']}
      />
    </Surface>
  );
}
