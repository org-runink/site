import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { BackgroundEffects, Badge, Hero } from '@runink/ui';

/**
 * Scales its child down when it is taller than the capture viewport, so the
 * bottom edge of a full hero band is inside the cell rather than clipped off it.
 * The factor comes from the live window, so it is 1 — no transform at all — once
 * the card is given a taller viewport.
 */
function FitHeight({ children }: { children: ReactNode }) {
  const inner = useRef<HTMLDivElement | null>(null);
  const [fit, setFit] = useState<{ scale: number; width: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const el = inner.current;
    if (!el) return;
    const height = el.scrollHeight;
    const width = el.clientWidth;
    const available = window.innerHeight - 80;
    setFit({ scale: height > available ? available / height : 1, width, height });
  }, []);

  return (
    <div style={fit ? { width: fit.width * fit.scale, height: fit.height * fit.scale, overflow: 'hidden' } : undefined}>
      <div
        ref={inner}
        style={
          fit
            ? { display: 'flow-root', width: fit.width, transform: `scale(${fit.scale})`, transformOrigin: 'top left' }
            : { display: 'flow-root' }
        }
      >
        {children}
      </div>
    </div>
  );
}

/**
 * The band every cell below reuses. `relative overflow-hidden` is not decoration
 * here: `BackgroundEffects` is `absolute inset-0`, so without a positioned,
 * clipping parent it escapes to the nearest positioned ancestor and tiles the
 * wrong box. Content sits at `z-10` because the effect occupies `z-0`.
 */
function Band({ children, effect }: { children: ReactNode; effect: ReactNode }) {
  return (
    <section
      className="relative overflow-hidden rounded-card border border-hairline"
      style={{ minHeight: 280 }}
    >
      {effect}
      <div className="relative z-10 p-10">{children}</div>
    </section>
  );
}

function Copy({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <>
      <Badge tone="sage">{eyebrow}</Badge>
      <h2 className="mt-4 font-heading text-3xl font-black text-primary">{title}</h2>
      <p className="mt-4 max-w-lg leading-relaxed">{body}</p>
    </>
  );
}

/**
 * The default: the radial wash from `primary-900` to `primary-950` with the
 * violet `secondary-500` grid at 60px, which is exactly what the Hugo partial
 * hardcoded. On its own the component is invisible — it paints nothing but a
 * backdrop — so it only ever grades as something you can see when it is behind
 * real content, as it is here.
 */
export function Default() {
  return (
    <Band effect={<BackgroundEffects />}>
      <Copy
        eyebrow="Real-time visibility"
        title="Run the autonomous supply chain"
        body="Connect live logistics telemetry to a model of your whole network, so a disruption shows up as a decision rather than a surprise."
      />
    </Band>
  );
}

/**
 * The token-coloured variant: `color="var(--color-brand-green)"` with a wider
 * 80px cell — the treatment the use-case sections use so the grid recedes and the
 * green reads as the analytical, non-alarming tone.
 */
export function BrandGreenGrid() {
  return (
    <Band effect={<BackgroundEffects color="var(--color-brand-green)" cellSize={80} />}>
      <Copy
        eyebrow="Cold chain"
        title="The Autonomous Cold Chain Guard"
        body="Perishable loss prevention that watches every reefer continuously, not at checkpoints."
      />
    </Band>
  );
}

/**
 * `cellSize` takes a string as well as a number, so CSS units work: `"2rem"`
 * against the copper token gives a dense, near-technical ruling. Compare with the
 * two cells above — same component, only `color` and `cellSize` differ.
 */
export function TightCopperGrid() {
  return (
    <Band effect={<BackgroundEffects color="var(--color-brand-copper)" cellSize="2rem" />}>
      <Copy
        eyebrow="Claims recovery"
        title="Recover what the carrier billed twice"
        body="Every demurrage and detention charge reconciled against the milestones that actually happened."
      />
    </Band>
  );
}

/**
 * What it is really for: the `backgroundEffect` slot. `Hero` — like
 * `TabbedPitches`, `ContactSection`, `ReasonsGrid`, `CapabilityShowcase`,
 * `UseCasesCarousel` and `UseCaseParallax` — is already `relative
 * overflow-hidden` and renders the slot behind its own content, so this is the
 * placement that needs no wrapper of yours at all.
 */
export function InTheHeroSlot() {
  return (
    <FitHeight>
      <Hero
        headline="The Team That Never Sleeps."
        subHeadline={
          <>
            Stop treating symptoms. Deploy automated systems that <strong>find lost money</strong>,{' '}
            <strong>block bad orders</strong>, and <strong>fix problems</strong> while you sleep.
          </>
        }
        primaryButtonText="Meet Your New System"
        primaryButtonUrl="/#contact"
        backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" cellSize={80} />}
      />
    </FitHeight>
  );
}
