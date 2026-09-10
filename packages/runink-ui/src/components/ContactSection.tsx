import { useId, useState } from 'react';
import type { FormEvent, FormEventHandler, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { Icon } from './Icon';

/**
 * One way to reach the team, rendered as a glowing panel with a single action —
 * the shortcode's "Direct Link (Video)" widget, generalised.
 */
export interface ContactMethod {
  /** Panel heading, e.g. "Direct Link (Video)". */
  title: ReactNode;
  /** What this channel is for and what happens after you use it. */
  description?: ReactNode;
  /** Action label, e.g. "Initiate Briefing". */
  actionText?: ReactNode;
  /**
   * Where the action goes — a scheduling link, `mailto:`, or `tel:`. Passed
   * through `safeHref`; a rejected or absent value renders the panel without its
   * action rather than an inert link. Absolute `http(s)` links open in a new tab.
   */
  href?: string;
}

/** A control type the contact form knows how to render. */
export type ContactFieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select';

/** One field of the contact form. */
export interface ContactField {
  /**
   * The `name` attribute posted to `action`. On the live site these are the Google
   * Form entry ids (`entry.2005620554`), which is why they are caller-supplied
   * rather than derived from the label.
   */
  name: string;
  /** Visible label above the control. */
  label: ReactNode;
  /** Which control to render. Defaults to `text`. */
  type?: ContactFieldType;
  /** Placeholder inside the control. Ignored for `select`. */
  placeholder?: string;
  /** Marks the field required and appends the accent asterisk to its label. */
  required?: boolean;
  /** `autocomplete` token, e.g. `name`, `email`, `organization`. */
  autoComplete?: string;
  /** Choices for `type: 'select'`. Ignored for every other type. */
  options?: Array<{ value: string; label: string }>;
  /** Placeholder row shown selected-and-disabled at the top of a `select`. */
  optionsPlaceholder?: string;
  /** Visible rows for `type: 'textarea'`. Defaults to 4. */
  rows?: number;
}

/**
 * The shortcode's five fields, with **generic** `name` attributes.
 *
 * The live site posts to a Google Form, so its field names are opaque entry ids
 * (`entry.2005620554`). Those are deployment configuration, not design: baking
 * them in here would make every contact form built from this component post
 * Runink's form ids. Pass `fields` with the real ids when wiring the live site —
 * the `@example` below shows that.
 */
const DEFAULT_FIELDS: ContactField[] = [
  { name: 'name', label: 'Full Name', placeholder: 'Jane Doe', required: true, autoComplete: 'name' },
  {
    name: 'email',
    label: 'Business Email',
    type: 'email',
    placeholder: 'jane@company.com',
    required: true,
    autoComplete: 'email',
  },
  {
    name: 'company',
    label: 'Company Name',
    placeholder: 'Logistics Corp',
    autoComplete: 'organization',
  },
  {
    name: 'source',
    label: 'Where did you find out about us?',
    type: 'select',
    optionsPlaceholder: 'Select an option',
    options: [
      { value: 'Referral', label: 'Referral' },
      { value: 'LinkedIn', label: 'LinkedIn' },
      { value: 'Web Search', label: 'Web Search' },
      { value: 'Event', label: 'Event' },
      { value: 'Other', label: 'Other' },
    ],
  },
  {
    name: 'message',
    label: 'Briefly describe your needs or project',
    type: 'textarea',
    placeholder: 'Tell us about your operational bottlenecks...',
    required: true,
  },
];

/**
 * One scheduling channel, with no destination.
 *
 * `href` is deliberately absent: a default pointing at Runink's own booking link
 * would send traffic from every design built with this component to a real
 * calendar. The method renders as static copy until a caller supplies `href`.
 */
const DEFAULT_METHODS: ContactMethod[] = [
  {
    title: 'Direct Link (Video)',
    description:
      "Schedule a strategic briefing immediately. We'll map your operational bottlenecks and deploy a shadow simulation.",
    actionText: 'Initiate Briefing',
  },
];

export interface ContactSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onSubmit'> {
  /** Small uppercase pill above the headline. Defaults to "Secure Comm Channel". */
  eyebrow?: ReactNode;
  /** The headline, set in the huge italic gradient display face. */
  title?: ReactNode;
  /** The pitch under the headline, in the uppercase tracked treatment. */
  description?: ReactNode;
  /**
   * The contact channels shown in the left column, above the form. Defaults to the
   * site's single video-briefing panel; pass `[]` to show none.
   */
  methods?: ContactMethod[];
  /** Heading on the form panel. Defaults to "Initialize Deployment". */
  formTitle?: ReactNode;
  /** Monospaced line under the form heading — response-time expectations. */
  formDescription?: ReactNode;
  /**
   * Form endpoint, POSTed to on submit (the site points this at a Google Form).
   * Leave it unset to keep the form local: submitting then shows the success panel
   * instead of navigating, which is also what makes the section screenshot sensibly
   * in isolation.
   */
  action?: string;
  /** The fields to collect. Defaults to the site's five. */
  fields?: ContactField[];
  /** Submit button label. Defaults to "Transmit Data". */
  submitText?: ReactNode;
  /** Fine print under the submit button. */
  formNote?: ReactNode;
  /** Heading of the panel that replaces the form once submitted. */
  successTitle?: ReactNode;
  /** Body of the panel that replaces the form once submitted. */
  successMessage?: ReactNode;
  /**
   * Called with the submit event before anything else. Call `preventDefault()` to
   * handle the submission yourself; the panel then shows the success state.
   */
  onSubmit?: FormEventHandler<HTMLFormElement>;
  /**
   * The decorative layer behind the band — on the site this is the
   * `background-effects.html` partial. Rendered first, inside the section's
   * `overflow-hidden` clip and underneath the `z-10` content, so it can position
   * itself absolutely and bleed.
   */
  backgroundEffect?: ReactNode;
  className?: string;
}

/*
 * The focus ring carries a 1px offset on purpose: `ring-fill-accent` only measures
 * 3.02:1 over `surface-well` on the sheet ground, so on its own it can vanish into
 * the control. The offset gives it a guaranteed edge against the panel.
 */
const CONTROL =
  'w-full rounded-card border border-hairline bg-surface-raised p-4 text-primary placeholder-secondary transition-all focus:border-hairline focus:outline-none focus:ring-1 focus:ring-fill-accent focus:ring-offset-1 focus:ring-offset-surface';

const LABEL = 'text-xs font-bold uppercase tracking-widest text-secondary';

/**
 * The site's closing contact band: pitch and direct-booking panel on the left, a
 * full contact form on the right.
 *
 * Ported from the `contact-section` shortcode, which hardcoded every string in four
 * languages and took no parameters at all. The structure is what was worth keeping,
 * so all of it is props: headline block, a list of `methods`, and a `fields`-driven
 * form. The defaults reproduce the live English page's copy and layout, so
 * `<ContactSection />` with no props renders the complete band.
 *
 * Deployment details are deliberately NOT defaulted: the field `name`s default to
 * generic keys (`name`, `email`, `company`, `source`, `message`) rather than the
 * live site's Google Form entry ids, and the scheduling method ships with no
 * `href`. Otherwise every contact form built from this component would post to —
 * and link at — Runink's own endpoints. Pass `fields`, `action` and the method
 * `href` to wire a real destination, as the example does.
 *
 * The shortcode faked a no-reload submit with a hidden iframe and a `window.submitted`
 * flag; that is React state here. Given no `action` the form blocks its own
 * navigation and swaps in the success panel — so it behaves sensibly with no backend
 * — and given an `action` it is a plain POST the browser handles.
 *
 * Two load-bearing details: the two glowing panels are each a `group` (their
 * gradient blooms brighten on hover), and the section is `overflow-hidden` +
 * `relative` so `backgroundEffect` can bleed without growing the page. Paints its
 * own `brand-ink` canvas and owns its `py-24` rhythm — put it directly in the page,
 * not inside a `Section`.
 *
 * @example
 * // The band as the marketing page uses it — copy from the defaults.
 * <ContactSection />
 *
 * @example
 * // Wired to a real Google Form: the `action`, the matching entry-id field
 * // names, and a booking destination all come from the caller.
 * <ContactSection
 *   action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
 *   fields={[
 *     { name: 'entry.2005620554', label: 'Full Name', required: true, autoComplete: 'name' },
 *     { name: 'entry.1045781291', label: 'Business Email', type: 'email', required: true, autoComplete: 'email' },
 *     { name: 'entry.1065046570', label: 'Briefly describe your needs', type: 'textarea', required: true },
 *   ]}
 *   methods={[
 *     {
 *       title: 'Direct Link (Video)',
 *       description: 'Schedule a strategic briefing immediately.',
 *       actionText: 'Initiate Briefing',
 *       href: 'https://calendar.app.google/YOUR_LINK',
 *     },
 *   ]}
 * />
 */
export function ContactSection({
  eyebrow = 'Secure Comm Channel',
  title = 'Partner With Runink',
  description = "Let's navigate your automated operations together. Bypass the red tape and inject our Operations Actionable Twin into your logistics pipeline.",
  methods = DEFAULT_METHODS,
  formTitle = 'Initialize Deployment',
  formDescription = 'Or drop us a secure message below. We respond within 1 business day.',
  action,
  fields = DEFAULT_FIELDS,
  submitText = 'Transmit Data',
  formNote = '* Data transmission is encrypted and secure.',
  successTitle = 'Transmission Successful',
  successMessage = 'Your secure message has been received. We will respond within 1 business day.',
  onSubmit,
  backgroundEffect,
  className,
  ...rest
}: ContactSectionProps) {
  const baseId = useId();
  const [submitted, setSubmitted] = useState(false);

  /*
   * A form `action` is a script vector — unlike an image `src`, a `javascript:`
   * action really does execute on submit — so it goes through the same guard as
   * every link. A rejected endpoint is treated as absent, which leaves the form in
   * local mode rather than silently pointing submissions at a payload.
   */
  const safeAction = safeHref(action);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit?.(event);
    if (!safeAction) event.preventDefault();
    if (event.defaultPrevented) setSubmitted(true);
  }

  return (
    <section
      className={cx('relative z-10 overflow-hidden border-t border-hairline bg-canvas py-24', className)}
      {...rest}
    >
      {backgroundEffect}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left: the pitch, then the direct channels. */}
          <div className="flex flex-col">
            {eyebrow && (
              <div className="mb-2 inline-flex items-center justify-center rounded-card border border-hairline/30 bg-surface/50 px-6 py-2 text-sm font-black uppercase tracking-[0.25em] text-ink-accent backdrop-blur md:text-base">
                {eyebrow}
              </div>
            )}

            <h2 className="mb-2 bg-gradient-to-r from-fill-accent to-accent-lift bg-clip-text text-6xl font-black uppercase italic leading-[0.9] tracking-tighter text-transparent drop-shadow-lg md:text-7xl lg:text-[80px]">
              {title}
            </h2>

            {description && (
              <div className="mb-10 max-w-lg text-lg font-bold uppercase tracking-[0.15em] text-secondary md:text-xl">
                {description}
              </div>
            )}

            {methods.length > 0 && (
              <div className="space-y-6">
                {methods.map((method, index) => {
                  const href = safeHref(method.href);
                  const external = href?.startsWith('http');

                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-card border border-hairline bg-surface-raised/40 p-8 shadow-2xl backdrop-blur"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-fill-provenance to-accent-lift opacity-20 blur transition duration-1000 group-hover:opacity-40"
                      />
                      <div className="relative z-10">
                        <h3 className="mb-4 text-2xl font-bold text-primary">{method.title}</h3>
                        {method.description && (
                          <p className="mb-8 leading-relaxed text-secondary">{method.description}</p>
                        )}
                        {href && method.actionText && (
                          <a
                            href={href}
                            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="inline-flex w-full items-center justify-center rounded border border-hairline bg-surface px-8 py-4 font-black uppercase tracking-widest text-primary transition-all duration-300 hover:-translate-y-1 hover:border-hairline "
                          >
                            <span className="mr-2">{method.actionText}</span>
                            <Icon name="arrow-right" className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: the form, floated over its own bloom. */}
          <div className="group relative mt-8 lg:mt-0">
            <div
              aria-hidden="true"
              /*
               * Two stops, no midpoint. Both purple `via-` stops are deleted rather
               * than retinted: /10 and /20 are each at or under the 0.15 wash ceiling,
               * so they would have collapsed to the same value and the hover would
               * have changed nothing. The hover now rides `from-fill-provenance/30` alone.
               */
              className="pointer-events-none absolute -inset-1 z-0 rounded-3xl bg-gradient-to-tr from-fill-provenance/20 to-surface blur-2xl transition duration-500 group-hover:from-fill-provenance/30"
            />

            <div className="relative z-10 rounded-3xl border border-hairline bg-surface/80 p-8 shadow-2xl backdrop-blur md:p-12">
              <h3 className="mb-2 text-3xl font-bold text-primary">{formTitle}</h3>
              {formDescription && (
                <p className="mb-8 font-mono text-sm leading-relaxed text-secondary">{formDescription}</p>
              )}

              {submitted ? (
                <div className="py-12 text-center" role="status">
                  <Icon name="check-circle" className="mx-auto mb-4 h-16 w-16 text-ink-success" />
                  <h4 className="mb-2 text-2xl font-bold text-primary">{successTitle}</h4>
                  <p className="text-secondary">{successMessage}</p>
                </div>
              ) : (
                <form action={safeAction} method="POST" onSubmit={handleSubmit} className="space-y-6">
                  {fields.map((field) => {
                    const id = `${baseId}-${field.name}`;
                    const type = field.type ?? 'text';

                    return (
                      <div key={field.name} className="space-y-2">
                        <label htmlFor={id} className={LABEL}>
                          {field.label}
                          {field.required && <span className="text-ink-accent"> *</span>}
                        </label>

                        {type === 'textarea' && (
                          <textarea
                            id={id}
                            name={field.name}
                            placeholder={field.placeholder}
                            rows={field.rows ?? 4}
                            required={field.required}
                            className={cx(CONTROL, 'resize-none')}
                          />
                        )}

                        {type === 'select' && (
                          <div className="relative">
                            <select
                              id={id}
                              name={field.name}
                              defaultValue=""
                              required={field.required}
                              className={cx(CONTROL, 'appearance-none')}
                            >
                              {field.optionsPlaceholder && (
                                <option value="" disabled>
                                  {field.optionsPlaceholder}
                                </option>
                              )}
                              {field.options?.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-secondary">
                              <Icon name="chevron-down" className="h-4 w-4" />
                            </div>
                          </div>
                        )}

                        {type !== 'textarea' && type !== 'select' && (
                          <input
                            id={id}
                            type={type}
                            name={field.name}
                            placeholder={field.placeholder}
                            autoComplete={field.autoComplete}
                            required={field.required}
                            className={CONTROL}
                          />
                        )}
                      </div>
                    );
                  })}

                  <button
                    type="submit"
                    className="mt-4 w-full rounded-card bg-gradient-to-r from-fill-provenance to-accent-lift py-4 font-black uppercase tracking-widest text-primary transition-all duration-300 hover:-translate-y-1 "
                  >
                    {submitText}
                  </button>

                  {formNote && (
                    <p className="mt-6 text-center font-mono text-xs text-secondary">{formNote}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
