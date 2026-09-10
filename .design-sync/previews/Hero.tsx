import { Hero, Surface } from '@runink/ui';

/**
 * `site/static/` is not served from the design bundle, so a `/images/…` `src`
 * would 404 into a broken-image box. This is the repo's own
 * `static/images/hero-dashboard.svg`, inlined verbatim so the screenshot column
 * is real. In production the prop takes a path: `heroImage="/images/face/overview.png"`.
 */
const HERO_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="600" fill="#f3f4f6"/><rect x="40" y="40" width="720" height="520" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/><rect x="60" y="60" width="680" height="60" rx="4" fill="#f9fafb"/><circle cx="100" cy="90" r="15" fill="#60a5fa"/><rect x="140" y="80" width="120" height="20" rx="4" fill="#e5e7eb"/><rect x="60" y="140" width="320" height="200" rx="4" fill="#f9fafb"/><path d="M80 300 L140 260 L200 280 L260 220 L320 240 L360 200" stroke="#60a5fa" stroke-width="2" fill="none"/><rect x="400" y="140" width="340" height="200" rx="4" fill="#f9fafb"/><rect x="420" y="160" width="140" height="20" rx="4" fill="#e5e7eb"/><rect x="420" y="200" width="300" height="8" rx="4" fill="#60a5fa"/><rect x="420" y="220" width="260" height="8" rx="4" fill="#818cf8"/><rect x="420" y="240" width="220" height="8" rx="4" fill="#a78bfa"/><rect x="60" y="360" width="680" height="180" rx="4" fill="#f9fafb"/><rect x="80" y="380" width="200" height="140" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/><rect x="300" y="380" width="200" height="140" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/><rect x="520" y="380" width="200" height="140" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/></svg>`)}`;

/**
 * The canonical product hero, exactly as `content/products/face.md` configures
 * it: headline, a subhead against the `border-edge` left rule, one filled CTA,
 * and the floating screenshot in the right column over the FACE brown gradient.
 */
export function Default() {
  return (
    <Hero
      headline="The Team That Never Sleeps."
      subHeadline={
        <>
          Stop treating symptoms. Deploy automated systems that <strong>find lost money</strong>,{' '}
          <strong>block bad orders</strong>, and <strong>fix problems</strong> while you sleep.
          It&rsquo;s not software. It&rsquo;s an automated workforce.
        </>
      }
      primaryButtonText="Meet Your New System"
      primaryButtonUrl="/#contact"
      heroImage={HERO_IMAGE}
      heroImageAlt="The FACE cockpit showing live shipment exceptions across the network"
      gradientFrom="#3A2F2A"
      gradientTo="#1A1512"
      gradientAngle={135}
    />
  );
}

/**
 * No gradient stops and no screenshot: the band falls back to a flat
 * `surface` and the image column still paints its pulsing orb, so the right
 * half is never visually empty. Both CTAs are present here — the outlined
 * secondary only renders when it has both a label and a surviving URL.
 */
export function FlatBandTwoCtas() {
  return (
    <Hero
      headline="Run the Autonomous Supply Chain."
      subHeadline="Achieve real-time supply chain visibility and mitigate disruption instantly, with telemetry that reaches a decision in under forty milliseconds."
      primaryButtonText="See the platform"
      primaryButtonUrl="/platform"
      secondaryButtonText="Read the docs"
      secondaryButtonUrl="/docs"
    />
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from
 * `FlatBandTwoCtas` — only `ground`, because every token rebinds underneath: the
 * band's `bg-surface`, the headline and subhead inks, the subhead's `border-edge`
 * rule, the filled CTA's `fill-accent`/`on-accent` pair, the outlined CTA, and the
 * accent orb behind the image column.
 *
 * That rule is `edge` rather than `hairline` because it is the only thing setting the
 * subhead apart, and `hairline` never exceeds 1.35:1 against any surface on either
 * ground — on this one it measured `rgb(237,226,211)` on `rgb(255,252,249)` and all
 * but disappeared. `edge` clears 3:1 on all four surfaces of both ramps.
 *
 * The flat band is the cell to mirror rather than `Default`: `Default`'s gradient
 * stops arrive from page front matter as raw hex, so that band stays dark whatever
 * the ground and the sheet's dark ink would sit on it. With no stops the band is a
 * token and the hero follows the page.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <Hero
        headline="Run the Autonomous Supply Chain."
        subHeadline="Achieve real-time supply chain visibility and mitigate disruption instantly, with telemetry that reaches a decision in under forty milliseconds."
        primaryButtonText="See the platform"
        primaryButtonUrl="/platform"
        secondaryButtonText="Read the docs"
        secondaryButtonUrl="/docs"
      />
    </Surface>
  );
}

/**
 * `size="double"` scales the type only — the band's `py-24 md:py-32` rhythm is
 * fixed either way. This is the single-statement treatment the product pages use
 * when the headline *is* the page's argument.
 */
export function DoubleSize() {
  return (
    <Hero
      size="double"
      headline={
        <>
          Mitigate disruption <em>in real time.</em>
        </>
      }
      subHeadline="One live model of your whole network, not a nightly snapshot."
      primaryButtonText="Book a walkthrough"
      primaryButtonUrl="/#contact"
      gradientFrom="#1b1919"
      gradientTo="#0f1330"
      gradientAngle={160}
    />
  );
}

/**
 * A script-bearing destination suppresses the button entirely rather than
 * rendering a dead one — `safeHref` gates both CTAs. Only the secondary survives
 * here, which is the visible proof that the guard fires on the URL and not on
 * the label.
 */
export function UnsafeCtaSuppressed() {
  return (
    <Hero
      headline="Zero-Hold Customs Gate"
      subHeadline="Automatic customs and weighbridge auditing clears compliant loads without a manual hold."
      primaryButtonText="This button is dropped"
      primaryButtonUrl="javascript:alert(1)"
      secondaryButtonText="See how it works"
      secondaryButtonUrl="/use-cases/claims-recovery"
      gradientFrom="#526332"
      gradientTo="#0f1330"
      gradientAngle={135}
    />
  );
}
