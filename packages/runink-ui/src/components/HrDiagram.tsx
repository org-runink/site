import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { Icon, type IconName } from './Icon';

export interface HrDiagramNode {
  /** Node heading — the actor, assistant, or system being drawn. */
  title: string;
  /** One short line under the heading. Keep it to a clause; the boxes are narrow. */
  description?: string;
  /** Icon in the circular tile above the heading. Omit for a text-only box. */
  icon?: IconName;
}

export interface HrDiagramDependency {
  /** System the assistant reaches out to, e.g. "Active Directory". */
  title: string;
  /** What it holds, e.g. "Key Personas & Org Chart". */
  description?: string;
  /** Caption on the dashed connector, e.g. "Queries Persona Mapping". */
  label?: string;
}

export interface HrDiagramProps extends HTMLAttributes<HTMLDivElement> {
  /** Top node: who starts the flow, and what they need. */
  actor: HrDiagramNode;
  /** Caption on the arrow into the platform — the request, phrased as the actor would. */
  requestLabel?: string;
  /** Tag on the platform boundary, e.g. "Runink HR Platform". */
  platformLabel: string;
  /** The emphasised node inside the boundary — the thing that answers the request. */
  assistant: HrDiagramNode;
  /**
   * Systems the assistant reads from, each drawn to the right of it with its own
   * dashed connector. Two fit the layout comfortably; more simply stack.
   */
  dependencies?: HrDiagramDependency[];
  /** Caption on the arrow out of the platform — what comes back to the actor. */
  responseLabel?: string;
  /** Bottom node: the resolved end state, drawn in the green success treatment. */
  outcome: Omit<HrDiagramNode, 'icon'>;
  className?: string;
}

/** The vertical connector: a gradient rule, a chevron head, and a floating caption. */
function Connector({ label, tone }: { label?: string; tone: 'request' | 'response' }) {
  const line = tone === 'request' ? 'bg-gradient-to-b from-primary-700 to-secondary-500' : 'bg-gradient-to-b from-secondary-500 to-brand-green';
  const head = tone === 'request' ? 'border-secondary-500' : 'border-brand-green';
  const text = tone === 'request' ? 'text-secondary-500' : 'text-brand-green';
  return (
    <div className="relative z-0 -my-2 flex flex-col items-center">
      {label && (
        <div
          className={cx(
            'absolute top-1/2 z-10 -translate-y-1/2 whitespace-nowrap rounded-full border border-primary-800 bg-brand-ink-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-md',
            text,
          )}
        >
          {label}
        </div>
      )}
      <div className={cx('h-20 w-0.5', line)} />
      <div className={cx('-mt-2 h-3 w-3 rotate-45 transform border-b-2 border-r-2', head)} />
    </div>
  );
}

/**
 * A top-to-bottom request-resolution diagram: actor → platform → outcome.
 *
 * Despite the name this is **not an org chart**. The `hr-diagram` shortcode draws
 * the *flow* of a single support request through an assistant: an employee asks a
 * policy question, the arrow carries the question into a labelled platform
 * boundary, inside which one emphasised assistant node fans out over dashed
 * connectors to the systems of record it reads (directory, wiki), and a second
 * arrow carries the answer down to a green "resolved" node. HR was only the
 * example; the structure is the generic shape for any agent-answers-a-question
 * story, so every label is a prop and nothing Runink-specific is baked in.
 *
 * The shortcode took zero parameters — it was one hardcoded illustration — so the
 * parameterisation here is the diagram's five structural slots: `actor`,
 * `requestLabel`, the platform (`platformLabel` + `assistant` + `dependencies`),
 * `responseLabel`, and `outcome`. The only thing that is not a prop is the
 * direction: the flow is always vertical, because the arrow geometry and the
 * negative margins that tuck the connectors into the nodes depend on it.
 *
 * Purely static — the connector captions sit over the rules at rest, so it
 * screenshots complete. On a narrow screen the platform's interior stacks and the
 * dashed horizontal connectors drop out (`hidden md:flex`), which is intended:
 * the vertical reading order still carries the story. Expects a dark canvas, and
 * the captions punch through the rules with `brand-ink-soft`, so keep it on a
 * `Surface` of tone `canvas`.
 *
 * @example
 * <HrDiagram
 *   actor={{
 *     title: 'Employee',
 *     description: 'Needs a policy or technical help.',
 *     icon: 'user-group',
 *   }}
 *   requestLabel="Asks: Who handles IFRS 17?"
 *   platformLabel="Runink HR Platform"
 *   assistant={{
 *     title: 'HR Assistant Chatbot',
 *     description: 'Context-aware guidance.',
 *     icon: 'bolt',
 *   }}
 *   dependencies={[
 *     {
 *       title: 'Active Directory',
 *       description: 'Key Personas & Org Chart',
 *       label: 'Queries Persona Mapping',
 *     },
 *     {
 *       title: 'Corporate Wiki',
 *       description: 'Onboarding & Policies',
 *       label: 'Retrieves relevant docs',
 *     },
 *   ]}
 *   responseLabel="Provides Name, Email & Doc Link"
 *   outcome={{
 *     title: 'Action Complete',
 *     description: 'Employee continues flow seamlessly.',
 *   }}
 * />
 */
export function HrDiagram({
  actor,
  requestLabel,
  platformLabel,
  assistant,
  dependencies = [],
  responseLabel,
  outcome,
  className,
  ...rest
}: HrDiagramProps) {
  return (
    <div
      className={cx(
        'relative z-10 mb-4 mt-8 flex flex-col items-center gap-6 overflow-hidden md:overflow-visible',
        className,
      )}
      {...rest}
    >
      {/* Actor */}
      <div className="group relative w-64 rounded-2xl border border-primary-700 bg-primary-800/80 p-5 text-center shadow-lg backdrop-blur transition-all duration-300 hover:border-secondary-500/50">
        <div className="absolute inset-0 rounded-2xl bg-secondary-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
        {actor.icon && (
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary-700 bg-primary-900">
            <Icon name={actor.icon} className="h-6 w-6 text-secondary-500" />
          </div>
        )}
        <h4 className="text-lg font-bold text-white">{actor.title}</h4>
        {actor.description && <p className="mt-1 text-xs text-primary-400">{actor.description}</p>}
      </div>

      <Connector label={requestLabel} tone="request" />

      {/* Platform boundary */}
      <div className="relative w-full max-w-3xl rounded-card border border-secondary-500/30 bg-secondary-500/5 p-8 shadow-neon-orange">
        <div className="absolute -top-3 left-8 rounded-card border border-secondary-500/30 bg-brand-ink-soft px-4 py-1 text-[10px] font-black uppercase tracking-widest text-secondary-500 shadow-sm">
          {platformLabel}
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Assistant */}
          <div className="relative z-10 w-full flex-1 rounded-2xl border border-secondary-500/50 bg-primary-900 p-6 text-center shadow-neon-orange-strong">
            {assistant.icon && (
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-500/20">
                <Icon name={assistant.icon} className="h-5 w-5 text-secondary-500" />
              </div>
            )}
            <h4 className="mb-1 text-xl font-black tracking-tight text-white">{assistant.title}</h4>
            {assistant.description && <p className="text-sm text-primary-400">{assistant.description}</p>}
          </div>

          {/* Systems of record */}
          {dependencies.length > 0 && (
            <div className="relative z-20 flex w-full flex-col items-center gap-6 md:w-1/2 md:items-start">
              {dependencies.map((dependency) => (
                <div
                  key={dependency.title}
                  className="relative flex w-full flex-col items-center justify-center gap-3 md:flex-row md:justify-start"
                >
                  <div className="hidden w-12 shrink-0 items-center md:flex">
                    <div className="w-full border-t-2 border-dashed border-primary-600" />
                    <div className="-ml-1 h-2 w-2 rotate-45 transform border-r-2 border-t-2 border-primary-600" />
                  </div>
                  {dependency.label && (
                    <div className="left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-brand-ink-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-500 shadow-sm md:absolute md:-top-4 md:left-6 md:translate-x-0 md:bg-brand-ink-raised">
                      {dependency.label}
                    </div>
                  )}
                  <div className="relative z-10 w-full rounded-xl border border-primary-700 bg-primary-800 p-4 text-center shadow-lg md:min-w-[180px]">
                    <h4 className="mb-1 text-sm font-bold text-white">{dependency.title}</h4>
                    {dependency.description && (
                      <p className="text-[11px] text-primary-400">{dependency.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Connector label={responseLabel} tone="response" />

      {/* Outcome */}
      <div className="relative z-10 w-64 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-5 text-center shadow-neon-green">
        <h4 className="text-base font-bold text-white">{outcome.title}</h4>
        {outcome.description && (
          <p className="mt-1 text-xs font-bold tracking-wide text-brand-green">{outcome.description}</p>
        )}
      </div>
    </div>
  );
}
