import { Surface, ValueCard } from '@runink/ui';

/** The canonical use: large bare icon, the value, one sentence expanding on it. */
export function Default() {
  return (
    <ValueCard
      icon="lightbulb"
      title="Operational Intelligence"
      description="We believe logistics should think for itself. Every workflow we design learns, predicts, and adapts with purpose."
    />
  );
}

/**
 * No icon — the panel with the icon block omitted entirely, which is what the
 * quietest editorial use of this card looks like.
 */
export function WithoutIcon() {
  return (
    <ValueCard
      title="Sovereignty is not a feature"
      description="Your data and your models stay on infrastructure you control. There is no hosted copy to reclaim and no export window to race."
    />
  );
}

/**
 * Three across, as the company page's "Our Core Values" band renders it. This is
 * the cell that shows whether the opaque panels read as a set and whether uneven
 * copy lengths leave ragged heights.
 */
export function InAGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <ValueCard
        icon="adjustments-vertical"
        title="Transparency in Motion"
        description="We build systems that reveal — not obscure — how data flows, decisions are made, and operations evolve."
      />
      <ValueCard
        icon="users"
        title="Human + Machine Collaboration"
        description="Our automation amplifies human judgment. We design tools that help people focus on strategy, not maintenance."
      />
      <ValueCard
        icon="rocket-launch"
        title="Sustainable Growth"
        description="Efficiency and responsibility go hand-in-hand. We help companies reduce waste, energy use, and operational drag."
      />
    </div>
  );
}

/**
 * The icon sweep at a readable size: the 12×12 `secondary-500` glyph is the card's
 * only colour, so this is where a missing or mis-keyed icon would show up.
 */
export function IconRange() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <ValueCard
        icon="scale"
        title="Innovation by Design"
        description="From data mesh architectures to decision assistance systems, we turn complexity into clarity through design-led engineering."
      />
      <ValueCard
        icon="hand-thumb-up"
        title="Customer-Centric Excellence"
        description="We measure our success through the outcomes we enable — speed, reliability, and resilience for every client."
      />
      <ValueCard
        icon="shield-check"
        title="Zero Trust by Default"
        description="Every internal call is mutually authenticated with short-lived certificates. Nothing on the network is trusted by position."
      />
    </div>
  );
}

/**
 * Deliberately text-heavy with no icon — proves long descriptions wrap inside the
 * `primary-800` panel rather than overflowing it, and that the brand body face is
 * really loading.
 */
export function LongCopy() {
  return (
    <ValueCard
      icon="circle-stack"
      title="One ecosystem, not a toolchain"
      description="We empower businesses to connect every data signal — from procurement to delivery — through a platform built for speed, automation, and real-time decision-making. By combining modern data engineering, structured data integration, and event-driven automation, Runink transforms operations into resilient, intelligent systems."
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
      <ValueCard
        icon="lightbulb"
        title="Operational Intelligence"
        description="We believe logistics should think for itself. Every workflow we design learns, predicts, and adapts with purpose."
      />
    </Surface>
  );
}
