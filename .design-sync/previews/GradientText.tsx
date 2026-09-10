import { GradientText, Surface } from '@runink/ui';

/** All four sweeps on the same headline, so the palettes are comparable. */
export function Sweeps() {
  return (
    <div className="space-y-4 font-heading text-4xl font-black">
      <div>
        <GradientText sweep="ember">Ember</GradientText> — orange into red
      </div>
      <div>
        <GradientText sweep="iris">Iris</GradientText> — purple into indigo
      </div>
      <div>
        <GradientText sweep="moss">Moss</GradientText> — sage into green
      </div>
      <div>
        <GradientText sweep="signal">Signal</GradientText> — rose into purple
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
 * INVISIBLE rather than merely wrong. `ember` and `moss` are the live pairs;
 * `iris` and `signal` were re-pointed onto fills during the migration, and a dead
 * stop on either would show up here as a missing word.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div className="space-y-4 font-heading text-4xl font-black">
        <div>
          <GradientText sweep="ember">Ember</GradientText> — orange into red
        </div>
        <div>
          <GradientText sweep="iris">Iris</GradientText> — purple into indigo
        </div>
        <div>
          <GradientText sweep="moss">Moss</GradientText> — sage into green
        </div>
        <div>
          <GradientText sweep="signal">Signal</GradientText> — rose into purple
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
