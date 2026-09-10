import { LandingScenario } from '@runink/ui';

/**
 * The canonical band: monospace "Target:" pill with its pulsing dot, the black
 * italic headline, lead paragraph, the monospace excerpt block on its
 * `secondary-500` rule, both CTAs, and the console-style visual with the `scale`
 * glyph and the RECOVERY metric chip at 85%.
 */
export function Default() {
  return (
    <LandingScenario
      target="Logistics"
      title="Automated Claims Audit & Demurrage Recovery"
      description="Forensic chronology reconstruction auto-drafts tariff disputes & short-pays."
      excerpt="The Terminal Weight Auditor compares incoming weighbridge telemetry with Bill of Lading manifests, then drafts the amendment and the refund claim itself."
      href="/use-cases/claims-recovery/"
      icon="scale"
      metricLabel="RECOVERY"
      metricValue="+42.8%"
      metricPercent={85}
    />
  );
}

/**
 * A routing scenario: different `target`, the `map` glyph, relabelled CTAs, a
 * separate `secondaryHref`, and a much lower `metricPercent` so the chip's
 * progress bar is visibly a variable rather than decoration.
 */
export function RoutingScenario() {
  return (
    <LandingScenario
      target="Fleet Operations"
      title="Active Driver Voice Dispatch"
      description="Drivers reroute by voice instead of pulling over to read a dispatch list, and every detour is logged as it is spoken."
      excerpt="Automatically calculates detours around road closures and weather events in under 2 seconds, updating the dispatch map from the driver's headset."
      href="/use-cases/voice-dispatch/"
      secondaryHref="/products/"
      icon="map"
      primaryLabel="Deploy the dispatcher"
      secondaryLabel="See the platform"
      metricLabel="ETA VARIANCE"
      metricValue="-18.4%"
      metricPercent={32}
    />
  );
}

/**
 * Title only: no `href` (so neither CTA renders), no `description`, no `excerpt`.
 * Everything else falls back — `target` to "Logistics", the glyph to
 * `cube-transparent`, the chip to EFFICIENCY +42.8% at 85%. With the copy column
 * this short, the console panel lands whole in frame, so this is the cell that
 * shows the window chrome, the centred glyph and the metric chip's progress bar.
 */
export function NoLinkAllDefaults() {
  return <LandingScenario title="Hypothesis Lab" />;
}
