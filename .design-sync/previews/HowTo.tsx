import { HowTo } from '@runink/ui';

/**
 * The canonical guide: a three-step Runink onboarding flow inside the
 * `schema.org/HowTo` microdata the component exists for. Each step also carries an
 * `id` of `step-1`, `step-2`, … so the per-step deep links keep working.
 */
export function Default() {
  return (
    <HowTo
      name="How to run your first Runink audit"
      description="What happens between connecting a telemetry feed and the first defensible automated decision."
      steps={[
        {
          name: 'Connect one telemetry feed',
          text: 'Start with a single source — the weighbridge, the reefer fleet or the TMS — over a mutually authenticated link. A narrow first feed makes the baseline easy to argue about.',
        },
        {
          name: 'Confirm the constraints with your operators',
          text: 'The people who run the yard review every business rule the agents will enforce, so each later action traces back to a constraint a named person signed off.',
        },
        {
          name: 'Run the agents in shadow mode',
          text: 'Claims, reroutes and holds are drafted but not executed for the first two weeks, which lets you audit the judgement before you delegate the authority.',
        },
      ]}
    />
  );
}

/**
 * No `description` — the header collapses to the title alone and the first step
 * moves up under it, which is the shape used when the surrounding `##` heading has
 * already framed the guide.
 */
export function WithoutDescription() {
  return (
    <HowTo
      name="How to stop demurrage before it accrues"
      steps={[
        {
          name: 'Track free time, not containers',
          text: 'Counting down to free-time expiry is the signal; container location on its own is not.',
        },
        {
          name: 'Escalate at the documentation gap',
          text: 'Route a missing certificate or ISF error the hour it appears, before the tier steps up.',
        },
        {
          name: 'Dispute automatically, and keep the evidence',
          text: 'Port-side delay is the terminal’s. Automated disputes recover 40–60% of these charges.',
        },
      ]}
    />
  );
}

/**
 * `text` is a `ReactNode`, not a string — the shortcode ran it through
 * `markdownify`, so rich content is passed as elements. Emphasis, figures and a
 * link inside the step bodies, all still wrapped in `itemProp="text"`.
 */
export function RichStepText() {
  return (
    <HowTo
      name="How demurrage charges escalate"
      description="Why the tier you are in matters more than the container you are chasing."
      steps={[
        {
          name: 'Free time expires',
          text: (
            <>
              Carriers grant <strong className="text-white">two to seven days</strong> depending on the lane.
            </>
          ),
        },
        {
          name: 'The first tier bites',
          text: (
            <>
              Charges start at <strong className="text-white">$75–$150</strong> per container per day.
            </>
          ),
        },
        {
          name: 'The second tier compounds',
          text: (
            <>
              After the first week it climbs past <strong className="text-white">$300</strong> — see the{' '}
              <a href="/blog/demurrage-detention-fees-prevention/" className="text-secondary-500 underline">
                full breakdown
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}

/**
 * The five-step claims-recovery guide the use-case pages publish — the component's
 * own documented example, and the longest guide the site ships. This is the cell
 * that shows the `ol` rhythm and the numbered medallions holding up past three
 * steps.
 */
export function FiveStepGuide() {
  return (
    <HowTo
      name="How to automate freight claims recovery"
      description="A guide to implementing an automated system to fight carrier denials and recover lost freight spend."
      steps={[
        {
          name: 'Digitize and centralize documentation',
          text: 'Ensure every Bill of Lading, Delivery Receipt and damage photo is uploaded to a central repository immediately after delivery.',
        },
        {
          name: 'Deploy OCR for automatic evidence extraction',
          text: 'Run optical character recognition over delivery receipts to pick up driver signatures and handwritten shortage or damage notes, cross-checking them against the original Bill of Lading.',
        },
        {
          name: 'Integrate external verification APIs',
          text: "Connect the claims system to external APIs such as NOAA historical weather data to pre-emptively rebut the carrier's standard 'Act of God' denial.",
        },
        {
          name: 'Build a legal rebuttal template engine',
          text: 'Create standardized templates that pull in the OCR evidence and weather records and cite the relevant federal statute — the Carmack Amendment — to draft detailed dispute filings.',
        },
        {
          name: 'Set a low-value auto-filing threshold',
          text: 'Configure a rule that files and disputes every valid claim under $500 without human intervention, guaranteeing high-volume, low-cost recovery.',
        },
      ]}
    />
  );
}
