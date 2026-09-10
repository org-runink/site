import { HeroImage, Surface } from '@runink/ui';

/**
 * `site/static/` is not served from the design bundle, so `src="/images/…"` would
 * 404 into a broken-image box. This is the repo's own
 * `static/images/hero-dashboard.svg`, inlined verbatim so every cell below shows
 * a real figure. In production the prop takes a path:
 * `src="/images/face/overview.png"`.
 */
const DASHBOARD = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="600" fill="#f3f4f6"/><rect x="40" y="40" width="720" height="520" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/><rect x="60" y="60" width="680" height="60" rx="4" fill="#f9fafb"/><circle cx="100" cy="90" r="15" fill="#60a5fa"/><rect x="140" y="80" width="120" height="20" rx="4" fill="#e5e7eb"/><rect x="60" y="140" width="320" height="200" rx="4" fill="#f9fafb"/><path d="M80 300 L140 260 L200 280 L260 220 L320 240 L360 200" stroke="#60a5fa" stroke-width="2" fill="none"/><rect x="400" y="140" width="340" height="200" rx="4" fill="#f9fafb"/><rect x="420" y="160" width="140" height="20" rx="4" fill="#e5e7eb"/><rect x="420" y="200" width="300" height="8" rx="4" fill="#60a5fa"/><rect x="420" y="220" width="260" height="8" rx="4" fill="#818cf8"/><rect x="420" y="240" width="220" height="8" rx="4" fill="#a78bfa"/><rect x="60" y="360" width="680" height="180" rx="4" fill="#f9fafb"/><rect x="80" y="380" width="200" height="140" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/><rect x="300" y="380" width="200" height="140" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/><rect x="520" y="380" width="200" height="140" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/></svg>`)}`;

/**
 * The canonical use: a full-width product figure. `HeroImage` is a thin `<img>`
 * wrapper — it sets `w-full`, high fetch priority, and the `not-prose` escape
 * hatch, and deliberately nothing else. Any framing is the caller's to add.
 */
export function Default() {
  return (
    <HeroImage
      src={DASHBOARD}
      alt="The FACE cockpit showing live shipment exceptions across the network"
    />
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from `Default` —
 * only `ground`. The component sets no colour of its own, so there is nothing in it
 * to rebind; what this cell proves is the consequence of that. A light screenshot
 * on the console canvas reads as a lit panel, and on the sheet canvas it dissolves
 * into the page, which is why the product pages reach for the framing in `Framed`
 * (`border-hairline`) rather than leaving the figure bare.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <HeroImage
        src={DASHBOARD}
        alt="The FACE cockpit showing live shipment exceptions across the network"
      />
    </Surface>
  );
}

/**
 * The reason the component exists. Inside `@tailwindcss/typography` body copy a
 * bare `<img>` inherits prose margins and a max width; the `not-prose` wrapper
 * opts the figure out, so it bleeds to the full measure while the paragraphs
 * around it stay typographically styled.
 */
export function InProse() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>Zero-Hold Customs Gate</h2>
      <p>
        The Terminal Weight Auditor compares incoming weighbridge telemetry against Bill of
        Lading manifests.
      </p>
      <HeroImage
        src={DASHBOARD}
        alt="Rule editor showing a weight-variance threshold of five percent"
        className="h-56 rounded-card object-cover"
      />
      <p>
        When a variance exceeds 5%, the engine drafts a weight amendment and calculates the
        customs tariff refund claim automatically.
      </p>
    </div>
  );
}

/**
 * `className` lands on the `<img>` itself, not on a wrapper — so the framing the
 * product pages use (rounded corners, a hairline border, a shadow) is applied
 * directly, and utilities like `object-cover` actually reach the image box.
 */
export function Framed() {
  return (
    <HeroImage
      src={DASHBOARD}
      alt="Cockpit view of reefer telemetry with an active temperature excursion"
      className="h-64 rounded-card border border-hairline object-cover shadow-2xl"
    />
  );
}

/**
 * Two figures in a column. Both are `w-full`, so they take the measure they are
 * given rather than their intrinsic width — the first left unconstrained, the
 * second capped by a caller-supplied `max-w-lg`. This is the cell that shows the
 * component does no width management of its own.
 */
export function WidthIsTheCallers() {
  return (
    <div className="space-y-6">
      <HeroImage
        src={DASHBOARD}
        alt="Data posture panel scoring each logistics domain"
        className="h-56 rounded-card object-cover"
      />
      <HeroImage
        src={DASHBOARD}
        alt="Hypothesis panel comparing forecast scenarios for a disrupted lane"
        className="mx-auto h-56 max-w-lg rounded-card object-cover"
      />
    </div>
  );
}
