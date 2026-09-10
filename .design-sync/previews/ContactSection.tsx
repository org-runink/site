import { ContactSection, Surface } from '@runink/ui';

/**
 * `<ContactSection />` with no props at all — the band exactly as the English
 * marketing page closes with it. Every string, the single video-briefing panel
 * and all five form fields come from the component's own defaults, so this cell
 * is the one that proves the defaults really do render a complete band.
 *
 * The deployment details are deliberately absent from those defaults: the
 * briefing panel has no `href` (so it renders as static copy rather than
 * pointing every design at Runink's real calendar) and the form has no
 * `action`, which is what makes it submit locally instead of navigating.
 */
export function Default() {
  return <ContactSection />;
}

/**
 * The second `@example`: wired to a real endpoint. The `action`, the Google
 * Form entry-id field `name`s and the booking destination are all caller-
 * supplied — that is the whole reason they are not defaults. A shorter
 * `fields` list and two `methods` also show the left column stacking and the
 * form shrinking to whatever it is given.
 */
export function WiredToAnEndpoint() {
  return (
    <ContactSection
      eyebrow="Secure Comm Channel"
      title="Deploy The Twin"
      description="Bypass the red tape. Tell us where the operation hurts and we will run a shadow simulation against your own telemetry."
      action="https://docs.google.com/forms/d/e/1FAIpQLSdRuninkBriefing/formResponse"
      formTitle="Request A Shadow Simulation"
      formDescription="Encrypted transport. A logistics engineer replies within 1 business day."
      submitText="Transmit Data"
      fields={[
        {
          name: 'entry.2005620554',
          label: 'Full Name',
          placeholder: 'Jane Doe',
          required: true,
          autoComplete: 'name',
        },
        {
          name: 'entry.1045781291',
          label: 'Business Email',
          type: 'email',
          placeholder: 'jane@company.com',
          required: true,
          autoComplete: 'email',
        },
        {
          name: 'entry.1166974658',
          label: 'Operation Under Pressure',
          type: 'select',
          optionsPlaceholder: 'Select an option',
          options: [
            { value: 'cold-chain', label: 'Cold chain & reefer telemetry' },
            { value: 'customs', label: 'Customs holds & weighbridge audit' },
            { value: 'hazmat', label: 'Yard safety & HazMat staging' },
            { value: 'returns', label: 'Reverse logistics & returns triage' },
          ],
        },
        {
          name: 'entry.1065046570',
          label: 'Briefly describe your needs or project',
          type: 'textarea',
          placeholder: 'Tell us about your operational bottlenecks...',
          required: true,
          rows: 3,
        },
      ]}
      methods={[
        {
          title: 'Direct Link (Video)',
          description:
            "Schedule a strategic briefing immediately. We'll map your operational bottlenecks and deploy a shadow simulation.",
          actionText: 'Initiate Briefing',
          href: 'https://calendar.app.google/RuninkBriefing',
        },
        {
          title: 'Terminal Ops Desk',
          description:
            'Already running Runink at a terminal? Reach the on-call operations engineer directly rather than through the queue.',
          actionText: 'Open a priority channel',
          href: 'mailto:ops@runink.org',
        },
      ]}
    />
  );
}

/**
 * `Default` on the sheet ground — `<ContactSection />` again, with no props. Not one
 * class differs, and here not one *prop* differs either: only `ground`, because every
 * token rebinds underneath. The form is what this cell reports on, since inputs are
 * the one place a band cannot borrow its contrast from the copy around it — the
 * field's `bg-surface-raised` has to stay distinguishable from the panel behind it
 * and the placeholder ink has to stay readable without being mistaken for a value.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <ContactSection />
    </Surface>
  );
}
