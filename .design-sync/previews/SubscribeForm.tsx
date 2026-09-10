import { SubscribeForm } from '@runink/ui';

// The panel is designed for a sidebar column, so every cell gives it one rather
// than letting it stretch across the full content width.
const RAIL = 'w-80';

/**
 * Every default: the site's own heading and standfirst, the visually hidden label,
 * the `type="email" required` field and the submit button. No `action`, so the form
 * stays local — which is also what makes it screenshot sensibly in isolation.
 */
export function Default() {
  return (
    <div className={RAIL}>
      <SubscribeForm />
    </div>
  );
}

/**
 * Custom copy in every slot — `title`, `description`, `placeholder`, `buttonText`
 * and the `disclaimer` fine print, which only renders when it is supplied.
 */
export function CustomCopy() {
  return (
    <div className={RAIL}>
      <SubscribeForm
        title="The Runink logistics briefing"
        description="Demurrage recovery, cold chain telemetry and S&OP teardowns. One email a fortnight."
        placeholder="you@yourcompany.com"
        buttonText="Send me the briefing"
        disclaimer="We respect your privacy. Unsubscribe at any time."
      />
    </div>
  );
}

/**
 * Wired to a real endpoint, with `hiddenFields` carrying the list id and redirect
 * the endpoint expects. Those inputs are `type="hidden"`, so the point of the cell
 * is that neither they nor a configured `action` change the visible panel at all.
 */
export function WithEndpoint() {
  return (
    <div className={RAIL}>
      <SubscribeForm
        action="https://formspree.io/f/runink-newsletter"
        emailName="email"
        disclaimer="By subscribing you agree to the Runink privacy notice."
        hiddenFields={{ list: 'logistics-briefing', _next: 'https://www.runink.org/thanks/' }}
      />
    </div>
  );
}

/**
 * In the blog sidebar it was built for, beside a column of post copy. Narrow by
 * design, so this is the cell that shows it reads correctly at rail width instead
 * of stretched across a content row.
 */
export function InSidebar() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-white">Preventing demurrage and detention fees</h2>
        <p className="text-lg leading-relaxed text-secondary">
          Demurrage and detention fees are among the largest hidden costs in global logistics, costing the
          industry over $5 billion annually. They accumulate when containers sit idle at port or when equipment
          is held beyond the carrier's free time inland.
        </p>
        <p className="text-lg leading-relaxed text-secondary">
          They are also largely preventable. Proactive container visibility plus automated dispute workflows
          recover 40–60% of the charges that do land.
        </p>
      </div>
      <aside className={`${RAIL} shrink-0`}>
        <SubscribeForm disclaimer="No more than two emails a month." />
      </aside>
    </div>
  );
}

/**
 * An endpoint that is really a `javascript:` payload — which a form `action` *would*
 * execute on submit — is run through `safeHref` and treated as absent, so the panel
 * falls back to local handling instead of becoming a submittable payload.
 */
export function UnsafeActionDegrades() {
  return (
    <div className={RAIL}>
      <SubscribeForm
        title="Rejected endpoint"
        description="This panel was given a javascript: action and falls back to local handling."
        action="javascript:alert(1)"
      />
    </div>
  );
}

/*
 * Not previewed: the `successMessage` state. `submitted` is component-local state
 * that only flips inside the form's own submit handler, and there is no prop to
 * seed it, so it cannot be reached without interaction — see batch-d learnings.
 */
