import { GradientText, Surface } from '@runink/ui';

/**
 * All four sweeps on the same headline, so the palettes are comparable. The captions
 * name what renders, which is not what these sweeps were once called: they were
 * re-pointed onto the FACE fills during the migration, and no cool sweep survived it:
 * the palette's two cool marks, `ink-ice` and `ink-violet`, are INKS, and a gradient
 * stop needs a surface or a fill.
 * `ember` is the accent fill lifting into `accent-lift`; `iris` is **deprecated** — the
 * name is kept only so existing call sites resolve, and it now runs
 * `fill-accent-deep` into the same lift, a copper that reads as a deeper ember rather
 * than as the cool sweep the name promises; `moss` is `fill-success` into
 * `fill-success-glow`; `signal` closes `fill-provenance` into `fill-accent`, which is
 * the landing hero's treatment.
 */
export function Sweeps() {
  return (
    <div className="space-y-4 font-heading text-4xl font-black">
      <div>
        <GradientText sweep="ember">Ember</GradientText> — accent orange into its lift
      </div>
      <div>
        <GradientText sweep="iris">Iris</GradientText> — deprecated, a deeper ember
      </div>
      <div>
        <GradientText sweep="moss">Moss</GradientText> — deep olive into its glow
      </div>
      <div>
        <GradientText sweep="signal">Signal</GradientText> — wine into accent orange
      </div>
    </div>
  );
}

/**
 * The same four sweeps on the sheet ground. Not one class differs from `Sweeps` —
 * only `ground`, because every token rebinds underneath.
 *
 * Worth a look rather than a glance: the text is `text-transparent` with the sweep
 * showing through `bg-clip-text`, so a stop that resolves to nothing renders the word
 * INVISIBLE rather than merely wrong. `ember` and `moss` are the live pairs; `iris` and
 * `signal` were re-pointed onto fills during the migration — `iris` deprecated into a
 * deeper ember because FACE has no cool gradient family — and a dead stop on any of
 * them would show up here as a missing word.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div className="space-y-4 font-heading text-4xl font-black">
        <div>
          <GradientText sweep="ember">Ember</GradientText> — accent orange into its lift
        </div>
        <div>
          <GradientText sweep="iris">Iris</GradientText> — deprecated, a deeper ember
        </div>
        <div>
          <GradientText sweep="moss">Moss</GradientText> — deep olive into its glow
        </div>
        <div>
          <GradientText sweep="signal">Signal</GradientText> — wine into accent orange
        </div>
      </div>
    </Surface>
  );
}

/** The intended use: one emphatic span inside an otherwise plain heading. */
export function InAHeading() {
  return (
    <h2 className="max-w-2xl font-heading text-5xl font-black leading-tight text-primary">
      Run the autonomous supply chain.{' '}
      <GradientText sweep="ember">Mitigate disruption in real time.</GradientText>
    </h2>
  );
}

/**
 * Direction is a prop, not a `className` override — Tailwind resolves competing
 * gradient utilities by stylesheet order, so an override only appears to work.
 */
export function Directions() {
  return (
    <div className="space-y-3 font-heading text-3xl font-black">
      <div>
        <GradientText sweep="signal" direction="r">
          Left to right
        </GradientText>
      </div>
      <div>
        <GradientText sweep="signal" direction="br">
          Diagonal, as the landing hero sets it
        </GradientText>
      </div>
      <div>
        <GradientText sweep="signal" direction="b">
          Top to bottom
        </GradientText>
      </div>
    </div>
  );
}
