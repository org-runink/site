import { DirectAnswer } from '@runink/ui';

/**
 * The canonical callout with the default "Quick Answer:" lead-in — one
 * self-contained, lift-able paragraph, exactly as the demurrage post opens.
 */
export function Default() {
  return (
    <DirectAnswer>
      Demurrage and detention fees are among the largest hidden costs in global logistics, costing the industry
      over $5 billion annually. These charges accumulate when containers sit idle at port (demurrage) or when
      equipment is held beyond the carrier's allocated free time inland (detention), and they are largely
      preventable with proactive container visibility and automated dispute workflows.
    </DirectAnswer>
  );
}

/**
 * A custom `label`. The prop exists for translated pages and for sections where a
 * sharper lead-in reads better than the generic one.
 */
export function CustomLabel() {
  return (
    <DirectAnswer label="In short:">
      Temperature excursions in cold chain logistics cost the pharmaceutical and perishable food industries
      billions annually in destroyed product, regulatory penalties and brand erosion. Real-time IoT telemetry
      fed into a predictive platform can flag a developing excursion before the threshold is breached and cut
      spoilage rates by 25–40%.
    </DirectAnswer>
  );
}

/**
 * `label={null}` drops the lead-in entirely, leaving the orange rule as the only
 * signal. Use it when the heading immediately above already says "Quick answer".
 */
export function WithoutLabel() {
  return (
    <DirectAnswer label={null}>
      Demurrage is the charge levied when a loaded container remains at a port terminal beyond its allotted
      free time. Detention is the fee assessed when a shipper retains the carrier's empty container beyond the
      agreed return window after unstuffing.
    </DirectAnswer>
  );
}

/**
 * In situ: directly under an `##` heading and above the long-form argument, which
 * is the only position the blog templates place it in. This is the cell that proves
 * the component's own `my-6` is the right rhythm and needs no wrapper margin.
 */
export function InProse() {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-white">Why do demurrage costs spiral?</h2>
      <DirectAnswer>
        Demurrage and detention costs spiral because of systemic inefficiencies — port congestion,
        documentation delays, customs holds and fragmented container tracking — not because of shipper
        negligence. The lack of real-time visibility into container status and free time windows means most
        organizations only discover charges after they are already incurred.
      </DirectAnswer>
      <p className="text-lg leading-relaxed text-secondary">
        The mechanics of these fees are designed to incentivize fluid cargo movement, but the modern supply
        chain is anything but fluid. When terminals operate above 90% utilization, drayage appointments slip and
        containers dwell for days past the discharge window — and the shipper pays the demurrage even when the
        delay is entirely port-side.
      </p>
    </div>
  );
}

/**
 * A two-sentence answer. The panel is padding-driven rather than min-height driven,
 * so a short answer should sit tight to the rule instead of floating in a tall box.
 */
export function ShortAnswer() {
  return (
    <DirectAnswer>
      Global demurrage and detention charges exceed $5 billion annually. Individual large-volume importers face
      $2–$10 million per year in avoidable fees.
    </DirectAnswer>
  );
}
