import { UsageSection } from '@runink/ui';

/**
 * The canonical three-step sequence: centred header over the numbered grid, which
 * is one column, two from `sm`, three from `lg`.
 */
export function Default() {
  return (
    <UsageSection
      title="How Runink deploys into your operation"
      description="Three weeks from first telemetry to autonomous execution — no rip-and-replace."
      steps={[
        {
          title: 'Connect your telemetry',
          text: 'Point the Twin at your existing TMS, WMS and sensor feeds over a mutually authenticated link. Nothing leaves your perimeter.',
        },
        {
          title: 'Validate the rules',
          text: 'Your operators confirm the business constraints the agents will enforce, so every action is defensible before it is automated.',
        },
        {
          title: 'Let the agents execute',
          text: 'Claims, reroutes and compliance holds are drafted and actioned continuously, with the audit trail attached.',
        },
      ]}
    />
  );
}

/**
 * Six steps — the top of the range the grid is built for, and the cell that shows
 * the numbering keeps running across grid rows rather than restarting.
 */
export function SixSteps() {
  return (
    <UsageSection
      title="How an automated freight claim is recovered"
      description="From delivery exception to filed dispute, without a coordinator retyping anything."
      steps={[
        {
          title: 'Capture the delivery exception',
          text: 'The Bill of Lading, delivery receipt and damage photos are uploaded to one repository as the driver leaves the dock.',
        },
        {
          title: 'Extract the evidence',
          text: 'OCR reads driver signatures and handwritten shortage notes off the receipt and reconciles them against the original manifest.',
        },
        {
          title: 'Price the loss',
          text: 'Product value, disposal and replacement freight are totalled so the claim is filed for what the incident actually cost.',
        },
        {
          title: 'Pre-empt the denial',
          text: "Historical weather records are pulled in to rebut the carrier's standard 'Act of God' defence before it is raised.",
        },
        {
          title: 'Draft the rebuttal',
          text: 'A template assembles the evidence and cites the Carmack Amendment to produce a filing a carrier has to answer.',
        },
        {
          title: 'Auto-file below threshold',
          text: 'Valid claims under $500 are filed without review, which is where high-volume recovery actually comes from.',
        },
      ]}
    />
  );
}

/**
 * Header omitted, so the band renders the steps alone — how a second sequence later
 * on the same page avoids repeating a heading.
 */
export function WithoutHeader() {
  return (
    <UsageSection
      steps={[
        {
          title: 'Scan the return',
          text: 'Condition codes and warranty status are validated in the field from the mobile app.',
        },
        {
          title: 'Price the recovery',
          text: 'Current resale demand is weighed against refurbishment cost for that exact SKU.',
        },
        {
          title: 'Route the item',
          text: 'Restock, refurbish or recycle is decided at the scan, before the item congests the dock.',
        },
      ]}
    />
  );
}

/**
 * `text` is a `ReactNode`, not a string — the shortcode ran it through
 * `markdownify`, and rich content is passed as elements now. Emphasis, a figure and
 * a link inside the step copy.
 */
export function RichStepText() {
  return (
    <UsageSection
      title="How the Cold Chain Guard intervenes"
      description="Prevention rather than monitoring, measured in minutes."
      steps={[
        {
          title: 'Detect the degradation',
          text: (
            <>
              Reefer <strong className="text-white">MSCU-8849201</strong> is flagged when its cooling rate
              declines — not when it crosses the threshold.
            </>
          ),
        },
        {
          title: 'Price the exposure',
          text: (
            <>
              The Twin values the load at <strong className="text-white">$42,000</strong> in biologics and
              raises the alert with that figure attached.
            </>
          ),
        },
        {
          title: 'Execute the reroute',
          text: (
            <>
              An alternative port power-plug is claimed automatically. See the{' '}
              <a href="/use-cases/cold-chain-safety/" className="text-secondary-500 underline">
                cold chain use case
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
