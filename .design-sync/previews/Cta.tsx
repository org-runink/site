import { Cta } from '@runink/ui';

/**
 * The `cta` shortcode from `content/products/face.md`, transcribed prop for
 * prop — this is the whole point of `Cta`: nine flat params in, the same band
 * out. Compare it with `CtaBanner`'s `Default`, which builds the identical
 * markup from button objects instead.
 */
export function Default() {
  return (
    <Cta
      title="Stop The Bleeding."
      description="See your operational risks in real-time and fix them automatically."
      primaryButtonText="Get Started"
      primaryButtonUrl="/#contact"
    />
  );
}

/**
 * Both actions supplied as flat pairs (`secondary_button_text` /
 * `secondary_button_url` in the shortcode) — the quiet pill appears beside the
 * pulsing primary.
 */
export function BothActions() {
  return (
    <Cta
      title="Stop Waiting On IT."
      description="Upload a CSV and get root-cause analysis on delays and inventory anomalies in twenty minutes, not weeks."
      primaryButtonText="Book a briefing"
      primaryButtonUrl="/#contact"
      secondaryButtonText="Read the docs"
      secondaryButtonUrl="/docs"
    />
  );
}

/**
 * Headline only. Omitting every button param leaves the band as a closing
 * statement with no actions at all — what a Markdown author gets from
 * `{{< cta title="…" >}}`.
 */
export function TitleOnly() {
  return <Cta title="Mitigate Disruption In Real Time." />;
}

/**
 * The three gradient params reach `CtaBanner`'s `--gradient-*` custom
 * properties unchanged, so a page author can retint the glow from Markdown
 * without touching the structured API. Sage-to-orange, angled from the corner.
 */
export function CustomGradient() {
  return (
    <Cta
      title="Run The Autonomous Supply Chain."
      description="Live logistics telemetry, predictive disruption scoring, and an operations twin that acts on both."
      primaryButtonText="See it in action"
      primaryButtonUrl="/#contact"
      gradientFrom="#A8B88B"
      gradientTo="#E2610B"
      gradientAngle={135}
    />
  );
}
