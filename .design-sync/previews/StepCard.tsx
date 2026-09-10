import { StepCard, Surface } from '@runink/ui';

/** The canonical step: green `monitor` track, bolded lead-in, glowing `Step 2` badge. */
export function Default() {
  return (
    <StepCard
      track="monitor"
      stepNum={2}
      title="Predictive Degradation"
      desc="leverages predictive algorithms to identify compressor failures before cargo spoilage occurs, evaluating sensor data against strict safety constraints."
    />
  );
}

/**
 * The primary variant axis, side by side: `monitor` olive telemetry against
 * `cockpit` wine execution. The track swaps the border, the 15% wash, the badge and
 * the lead-in colour — but not the glow. `monitor` has `shadow-glow-success` and
 * `cockpit` has nothing, because the port's neon red had no counterpart here. That
 * asymmetry is the one thing to check in this cell, since it looks like an omission.
 */
export function TrackSweep() {
  return (
    <div>
      <StepCard
        track="monitor"
        stepNum={1}
        title="Real-Time Subscriptions"
        desc="ingest live telematics streams from connected reefer sensors over secure streams, for high-throughput, low-latency telemetry."
      />
      <StepCard
        track="cockpit"
        stepNum={5}
        title="Orchestration Engine"
        desc="autonomously drafts an express LTL alternate carrier injection and resolves logistics bottlenecks intelligently."
      />
    </div>
  );
}

/**
 * The real composition: one continuously numbered observe-then-act loop — the
 * `monitor` steps first, then the `cockpit` ones — as the right-hand column of a
 * use-case band renders it. The card carries its own `mb-5`, so the column needs
 * no gap. Four steps is what the 700px-tall capture viewport holds; a real band
 * runs six.
 */
export function FullLoop() {
  return (
    <div>
      <StepCard
        track="monitor"
        stepNum={1}
        title="Real-Time Subscriptions"
        desc="ingest live telematics from connected reefer sensors over secure streams."
      />
      <StepCard
        track="monitor"
        stepNum={2}
        title="Predictive Degradation"
        desc="identifies compressor failures before cargo spoilage occurs, against strict safety constraints."
      />
      <StepCard
        track="cockpit"
        stepNum={3}
        title="Orchestration Engine"
        desc="autonomously drafts an express LTL alternate carrier injection."
      />
      <StepCard
        track="cockpit"
        stepNum={4}
        title="ROI Impact"
        desc="protects $42,000 in biologics by executing instant edge-plug interventions."
      />
    </div>
  );
}

/**
 * No `title` — the unlabelled step Hugo's `hasParts: false` produced: body copy
 * only, with the badge still carrying the sequence.
 */
export function WithoutTitle() {
  return (
    <div>
      <StepCard
        track="monitor"
        stepNum={1}
        desc="Yard telemetry analyses real-time GPS and RFID staging locations across the terminal, modelling physical yard topologies."
      />
      <StepCard
        track="cockpit"
        stepNum={2}
        desc="The safety engine locks crane movements until a compliant 15-metre buffer is restored, transmitting physical control commands securely."
      />
    </div>
  );
}

/**
 * A custom `stepLabel` and double-digit numbers — the badge is `whitespace-nowrap`
 * and `shrink-0`, so this is where a longer label would crowd the copy if it could.
 */
export function CustomLabel() {
  return (
    <div>
      <StepCard
        track="monitor"
        stepNum={9}
        stepLabel="Phase"
        title="Market Pricing Analysis"
        desc="compares an item's original retail value against current resale demand, using internal models to forecast asset depreciation."
      />
      <StepCard
        track="cockpit"
        stepNum={10}
        stepLabel="Phase"
        title="Disposition Engine"
        desc="dynamically assigns inventory to restock, refurbish or recycle pathways, mitigating storage overflow."
      />
    </div>
  );
}

/**
 * The same step on the sheet ground. Not one class differs from `Default` — only
 * `ground`, because every token rebinds underneath. This is the `monitor` track, so the
 * card leans on the 15% `fill-success-wash` and `shadow-glow-success` — and neither
 * rebinds: `fill-success` carries one value in both registers, so the wash and the glow
 * are literally the console treatment laid over a light page. This is the cell where
 * either would show up as muddy rather than quiet.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <StepCard
        track="monitor"
        stepNum={2}
        title="Predictive Degradation"
        desc="leverages predictive algorithms to identify compressor failures before cargo spoilage occurs, evaluating sensor data against strict safety constraints."
      />
    </Surface>
  );
}
