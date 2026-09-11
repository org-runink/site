import { CtaBanner, Surface } from '@runink/ui';

/**
 * The structured API: both actions passed as `CtaBannerAction` objects. This is
 * the shape to reach for when you are composing a page in React rather than
 * transcribing a Markdown shortcode (that is `Cta`). Also the cell that shows
 * the primary link's `animate-cta-pulse` ring at rest.
 */
export function Default() {
  return (
    <CtaBanner
      title="Stop The Bleeding."
      description="See your operational risks in real-time and fix them automatically."
      primaryButton={{ text: 'Get Started', url: '/#contact' }}
      secondaryButton={{ text: 'Talk to an engineer', url: '/company' }}
    />
  );
}

/**
 * `Default` on the sheet ground — both actions, the same props, not one class changed.
 * Only `ground` differs, because every token rebinds underneath.
 *
 * The band is the hardest case in this set: the panel is `bg-surface-raised/40` behind
 * a `backdrop-blur`, both buttons are translucent `bg-surface` / `bg-surface/50`, and
 * the glow is a 20%-opacity token gradient. All four depend on what shows through, so
 * this cell is where a console-only assumption in the band would surface.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <CtaBanner
        title="Stop The Bleeding."
        description="See your operational risks in real-time and fix them automatically."
        primaryButton={{ text: 'Get Started', url: '/#contact' }}
        secondaryButton={{ text: 'Talk to an engineer', url: '/company' }}
      />
    </Surface>
  );
}

/**
 * One loud action and nothing else — the closing band most pages actually ship.
 * Dropping `secondaryButton` removes the pill rather than leaving a gap.
 */
export function PrimaryOnly() {
  return (
    <CtaBanner
      title="Zero-Hold Customs Gate."
      description="Automatic customs and weighbridge auditing clears compliant loads without a manual hold."
      primaryButton={{ text: 'Book a briefing', url: '/#contact' }}
    />
  );
}

/**
 * `gradientFrom` + `gradientTo` switch the glow off the token stops
 * (`fill-provenance` → `accent-lift`) and onto an explicit `linear-gradient`. The two
 * values here are raw hex from the port's palette, not tokens — a pale sage into a hot
 * orange — so the retint is unmistakable against `Default`. Raw hex is also the point
 * of the escape hatch and its cost: these stops cannot follow the ground.
 */
export function CustomGradient() {
  return (
    <CtaBanner
      title="Recover Every Demurrage Charge."
      description="Weighbridge telemetry cross-checked against the Bill of Lading, with the refund claim drafted for you."
      primaryButton={{ text: 'Get Started', url: '/#contact' }}
      secondaryButton={{ text: 'Talk to an engineer', url: '/company' }}
      gradientFrom="#A8B88B"
      gradientTo="#E2610B"
    />
  );
}

/**
 * The gradient-angle sweep — the band's most visual axis. Same two stops,
 * three values of `gradientAngle`: `0` runs bottom-to-top, the default `90`
 * runs left-to-right, `180` runs top-to-bottom. The section's own `my-24
 * py-12` rhythm is zeroed inline so all three fit one frame; do not do that in
 * a real page.
 */
export function GradientAngleSweep() {
  const flat = { margin: 0, paddingTop: 0, paddingBottom: 0 };

  return (
    <div>
      <CtaBanner
        title="0° — bottom to top"
        gradientFrom="#A8B88B"
        gradientTo="#E2610B"
        gradientAngle={0}
        style={flat}
      />
      <CtaBanner
        title="90° — left to right"
        gradientFrom="#A8B88B"
        gradientTo="#E2610B"
        gradientAngle={90}
        style={flat}
      />
      <CtaBanner
        title="180° — top to bottom"
        gradientFrom="#A8B88B"
        gradientTo="#E2610B"
        gradientAngle={180}
        style={flat}
      />
    </div>
  );
}

/**
 * A script-bearing destination is rejected by `safeHref` and falls back to
 * `#`, so a Markdown-authored URL cannot smuggle a payload into the loudest
 * link on the page. The band renders exactly as normal — that is the point.
 */
export function UnsafeUrlDegrades() {
  return (
    <CtaBanner
      title="Rejected Destination."
      description="This banner was given a javascript: primary URL; the link renders pointing at # instead."
      primaryButton={{ text: 'Get Started', url: 'javascript:alert(1)' }}
    />
  );
}
