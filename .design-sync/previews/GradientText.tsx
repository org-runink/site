import { GradientText } from '@runink/ui';

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
