import { BackgroundEffects, UseCaseParallax } from '@runink/ui';

/**
 * The homepage's cold-chain band, left-copy / right-steps (`invert` unset). Shows
 * the whole scene at rest: pill, ember gradient headline, CTA, the dark problem
 * panel, then the green **monitor** track (steps 1–3) and the red **cockpit** track
 * (steps 4–6) numbered as one continuous loop. Parallax is the identity transform
 * before any scroll, so this is the real composition.
 */
export function Default() {
  return (
    <UseCaseParallax
      pill="IoT-Edge Telemetry"
      title="The Autonomous Cold Chain Guard"
      subtitle="Perishable Loss Prevention"
      url="/use-cases/cold-chain-safety/"
      problem="Temperature excursions in transit cost pharmaceutical and food enterprises billions in annual cargo spoilage. Static temperature monitors register failures after they occur. The IoT Cold Chain Sentinel subscribes to real-time container telematics. When compressor degradation is detected (e.g. Reefer #MSCU-8849201 rising to 3.2°C), the Twin automatically issues a Secure API reroute command to alternative port power-plugs and quarantines affected cargo."
      monitor={[
        {
          title: 'Real-Time Subscriptions',
          text: 'ingest live telematics streams from connected reefer sensors using Secure streams to ensure high-throughput, low-latency telemetry ingestion.',
        },
        {
          title: 'Predictive Degradation',
          text: 'leverages predictive algorithms to identify compressor failures before cargo spoilage occurs, evaluating sensor data against strict safety constraints.',
        },
        {
          title: 'Actionable Alerts',
          text: 'notify operators of the exact financial risk in play, pushing instant notifications directly to the Dashboard UI.',
        },
      ]}
      cockpit={[
        {
          title: 'Actionable Twins',
          text: 'display the live temperature variance against ambient port conditions, updating state securely in real-time across the network.',
        },
        {
          title: 'Orchestration Engine',
          text: 'autonomously drafts an express LTL alternate carrier injection and resolves logistics bottlenecks intelligently.',
        },
        {
          title: 'ROI Impact:',
          text: 'Protects high-value cargo assets (e.g., $42,000 in biologics) from spoilage by executing instant edge-plug interventions.',
        },
      ]}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" cellSize={80} />}
    />
  );
}

/**
 * `invert` — the steps column leads instead of the copy (left of it from `lg` up,
 * above it below that), which is the alternate rung of the homepage's zig-zag.
 * The problem panel is dropped so both tracks are in one frame: the green
 * **monitor** cards as steps 1–2 and the red **cockpit** cards continuing at 3–4,
 * against the red wash rather than the green one.
 */
export function Inverted() {
  return (
    <UseCaseParallax
      invert
      pill="Circular Economy"
      title="Responsive Reverse Logistics"
      subtitle="Returns Triage & Closed-Loop Routing"
      url="/use-cases/responsive-reverse-logistics/"
      ctaLabel="Read the triage playbook"
      monitorLabel="Field Scan & Validation"
      monitor={[
        {
          title: 'Barcode Scanning Validation',
          text: 'instantly validates warranty periods and logs condition codes from the field via mobile scanning.',
        },
        {
          title: 'Real-Time Cost-Benefit Triage',
          text: "evaluates a returned item's residual value against repair cost via instant Secure API calls.",
        },
      ]}
      cockpitLabel="Disposition Execution"
      cockpit={[
        {
          title: 'Automated Disposition Routing',
          text: 'dynamically routes inventory for restock, refurbishment, or recycling, diverting e-waste from landfill.',
        },
        {
          title: 'ROI Impact:',
          text: 'Reclaims margin on returns by triaging at the point of origin.',
        },
      ]}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-red)" cellSize={80} />}
    />
  );
}

/**
 * Monitor track only, no problem panel and no CTA — the reduced band a secondary
 * page uses. Numbering stops at the end of the green track, which is the cell that
 * would catch the continuous-numbering offset being applied when there is no
 * cockpit half.
 */
export function MonitorTrackOnly() {
  return (
    <UseCaseParallax
      pill="Voice-AI Dispatcher"
      title="Active Driver Voice Dispatch"
      subtitle="Hands-Free Fleet Control"
      stepLabel="Phase"
      monitorLabel="Telemetry-Driven Visibility"
      monitor={[
        {
          title: 'Hands-Free Voice Support',
          text: 'drivers interact with the Interface mobile app through smart headsets, using on-device voice transcription rather than a dashboard list.',
        },
        {
          title: 'Real-Time Rerouting',
          text: 'calculates detours around road closures and weather events in under two seconds, without the driver pulling over.',
        },
        {
          title: 'Hands-Free Incident Logging',
          text: 'drivers log exceptions and maintenance alerts verbally, updating the dispatch map instantly.',
        },
      ]}
      parallax={false}
    />
  );
}
