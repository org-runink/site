import { useId, useState } from 'react';
import type { FormEvent, FormEventHandler, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface SubscribeFormProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onSubmit'> {
  /** Panel heading. Defaults to "Subscribe to Newsletter". */
  title?: ReactNode;
  /** Line under the heading. Defaults to the site's "Get the latest posts…" copy. */
  description?: ReactNode;
  /**
   * Form endpoint, POSTed to on submit (the site points this at a Formspree form).
   * Leave it unset to keep the form local: submitting then shows `successMessage`
   * instead of navigating. Run through `safeHref`, so an endpoint that is really a
   * `javascript:` payload — which a form `action` *will* execute on submit — is
   * treated as if it were absent.
   */
  action?: string;
  /** Name of the email field, so the endpoint gets the key it expects. Defaults to `email`. */
  emailName?: string;
  /** Accessible label for the email field. Visually hidden. Defaults to "Email address". */
  label?: string;
  /** Placeholder inside the email field. Defaults to "Enter your email". */
  placeholder?: string;
  /** Submit button label. Defaults to "Subscribe". */
  buttonText?: ReactNode;
  /** Fine print under the button — consent or unsubscribe wording. */
  disclaimer?: ReactNode;
  /**
   * Extra values posted alongside the email, rendered as hidden inputs. Used for
   * list ids, tags and the redirect fields an endpoint needs. This is the partial's
   * `hidden` param, renamed so it cannot be confused with the DOM `hidden`
   * attribute on the panel.
   */
  hiddenFields?: Record<string, string>;
  /**
   * Confirmation shown in place of the form once it is submitted without a backend
   * (no `action`, or an `onSubmit` that calls `preventDefault`).
   */
  successMessage?: ReactNode;
  /**
   * Called with the submit event before anything else. Call `preventDefault()` to
   * handle the subscription yourself; the panel then shows `successMessage`.
   */
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
}

/**
 * Newsletter sign-up panel — heading, one email field, one submit button.
 *
 * The blog sidebar's top block, ported from the `components/subscribe-form`
 * partial. Narrow by design: it stacks to a single column and reads well at
 * sidebar width, so give it a column rather than a full content row.
 *
 * It works with or without a backend. Given `action` it is a plain POST form and
 * the browser handles submission; given nothing it keeps state locally, blocks
 * the navigation and swaps in `successMessage`, which is also what makes it
 * screenshot sensibly in isolation. The label is visually hidden rather than
 * dropped, and the input is `type="email" required`, so native validation and
 * screen readers both behave.
 *
 * @example
 * <SubscribeForm
 *   title="Subscribe to Newsletter"
 *   description="Get the latest posts delivered right to your inbox"
 *   action="https://formspree.io/f/your-form-id"
 *   disclaimer="We respect your privacy. Unsubscribe at any time."
 * />
 */
export function SubscribeForm({
  title = 'Subscribe to Newsletter',
  description = 'Get the latest posts delivered right to your inbox.',
  action,
  emailName = 'email',
  label = 'Email address',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  disclaimer,
  hiddenFields,
  successMessage = 'Thanks — check your inbox to confirm your subscription.',
  onSubmit,
  className,
  ...rest
}: SubscribeFormProps) {
  const inputId = useId();
  const [submitted, setSubmitted] = useState(false);
  const endpoint = safeHref(action);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit?.(event);
    if (!endpoint) event.preventDefault();
    if (event.defaultPrevented) setSubmitted(true);
  }

  return (
    <div
      className={cx('rounded-card border border-hairline bg-surface p-6', className)}
      {...rest}
    >
      <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
      {description && <p className="mb-4 text-sm text-secondary">{description}</p>}

      {submitted ? (
        <p className="text-sm font-medium text-ink-success" role="status">
          {successMessage}
        </p>
      ) : (
        <form action={endpoint} method="POST" onSubmit={handleSubmit} className="space-y-3">
          {hiddenFields &&
            Object.entries(hiddenFields).map(([name, value]) => (
              <input key={name} type="hidden" name={name} value={value} />
            ))}

          <div>
            <label htmlFor={inputId} className="sr-only">
              {label}
            </label>
            <input
              id={inputId}
              type="email"
              name={emailName}
              placeholder={placeholder}
              autoComplete="email"
              required
              // `fill-accent` measures 3.02:1 over `surface-well` on the sheet
              // ground — zero headroom — so the focus ring carries a 1px offset in
              // the field's own ground rather than sitting flush on the border.
              className="w-full rounded-card border border-hairline bg-canvas px-4 py-2 text-secondary placeholder:text-secondary focus:border-hairline focus:ring-2 focus:ring-fill-accent focus:ring-offset-1 focus:ring-offset-canvas"
            />
          </div>

          <button
            type="submit"
            // `on-accent` inks `fill-accent` only, so the hover state stays in that
            // token and merely dims it; `fill-accent-deep` would drop the label to
            // 2.97:1.
            className="w-full rounded-card bg-fill-accent px-4 py-2 text-on-accent transition-colors duration-200 hover:bg-fill-accent/90"
          >
            {buttonText}
          </button>

          {disclaimer && <p className="mt-2 text-xs text-secondary">{disclaimer}</p>}
        </form>
      )}
    </div>
  );
}
