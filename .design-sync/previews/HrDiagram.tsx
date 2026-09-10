import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { HrDiagram, Surface } from '@runink/ui';

/**
 * Scales the diagram down when it is taller than the capture viewport, so the
 * green outcome node at the bottom of the flow is inside the cell rather than
 * clipped off it. The factor comes from the live window, so it is 1 — no
 * transform at all — once the card is given a taller viewport.
 */
function FitHeight({ children }: { children: ReactNode }) {
  const inner = useRef<HTMLDivElement | null>(null);
  const [fit, setFit] = useState<{ scale: number; width: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const el = inner.current;
    if (!el) return;
    const height = el.scrollHeight;
    const width = el.clientWidth;
    const available = window.innerHeight - 80;
    setFit({ scale: height > available ? available / height : 1, width, height });
  }, []);

  return (
    <div style={fit ? { width: fit.width * fit.scale, height: fit.height * fit.scale, overflow: 'hidden' } : undefined}>
      <div
        ref={inner}
        // `flow-root` so the diagram's own `mt-8 mb-4` is measured rather than
        // collapsing out through this wrapper and throwing the factor off.
        style={
          fit
            ? { display: 'flow-root', width: fit.width, transform: `scale(${fit.scale})`, transformOrigin: 'top left' }
            : { display: 'flow-root' }
        }
      >
        {children}
      </div>
    </div>
  );
}

/**
 * The shortcode's own illustration, verbatim from the component's @example: an
 * employee's question travels into the platform boundary, the assistant node fans
 * out over dashed connectors to the two systems of record it reads, and the
 * answer comes back down to the green resolved node.
 */
export function Default() {
  return (
    <FitHeight>
      <HrDiagram
        actor={{
          title: 'Employee',
          description: 'Needs a policy or technical help.',
          icon: 'user-group',
        }}
        requestLabel="Asks: Who handles IFRS 17?"
        platformLabel="Runink HR Platform"
        assistant={{
          title: 'HR Assistant Chatbot',
          description: 'Context-aware guidance.',
          icon: 'bolt',
        }}
        dependencies={[
          {
            title: 'Active Directory',
            description: 'Key Personas & Org Chart',
            label: 'Queries Persona Mapping',
          },
          {
            title: 'Corporate Wiki',
            description: 'Onboarding & Policies',
            label: 'Retrieves relevant docs',
          },
        ]}
        responseLabel="Provides Name, Email & Doc Link"
        outcome={{
          title: 'Action Complete',
          description: 'Employee continues flow seamlessly.',
        }}
      />
    </FitHeight>
  );
}

/**
 * No `dependencies` — the boundary collapses to the assistant alone and the
 * dashed fan-out drops out entirely. The flow an agent answers from its own
 * continuously-scored state rather than by reading a system of record.
 */
export function WithoutDependencies() {
  return (
    <FitHeight>
      <HrDiagram
        actor={{
          title: 'Dispatch Planner',
          description: 'Needs tomorrow’s load plan.',
          icon: 'user-group',
        }}
        requestLabel="Asks: Which lanes are at risk?"
        platformLabel="Runink FACE"
        assistant={{
          title: 'Fulfillment Agent',
          description: 'Scores every lane continuously.',
          icon: 'cpu-chip',
        }}
        responseLabel="Returns ranked lane risk"
        outcome={{
          title: 'Load plan released',
          description: 'Confirmed without a war room.',
        }}
      />
    </FitHeight>
  );
}

/**
 * Three systems of record instead of two — the fan-out simply stacks, which is
 * the documented behaviour past the two that fit comfortably. Also the generic
 * case the doc argues for: nothing here is HR, only the structure is shared.
 */
export function ThreeSystemsOfRecord() {
  return (
    <FitHeight>
      <HrDiagram
        actor={{
          title: 'Claims Analyst',
          description: 'Disputing a demurrage invoice.',
          icon: 'user',
        }}
        requestLabel="Asks: Why was MSCU4821 held?"
        platformLabel="Runink Claims Recovery"
        assistant={{
          title: 'Claims Recovery Agent',
          description: 'Assembles the evidence pack.',
          icon: 'bolt',
        }}
        dependencies={[
          {
            title: 'TMS',
            description: 'Gate-in & gate-out events',
            label: 'Reads container milestones',
          },
          {
            title: 'Carrier Invoices',
            description: 'Free time & per-diem rates',
            label: 'Matches billed free time',
          },
          {
            title: 'Terminal Feed',
            description: 'Congestion & hold codes',
            label: 'Pulls hold reason codes',
          },
        ]}
        responseLabel="Files the dispute with evidence"
        outcome={{
          title: 'Charge reversed',
          description: '$18,400 recovered in four days.',
        }}
      />
    </FitHeight>
  );
}

/**
 * `WithoutDependencies` on the sheet ground. Not one class differs — only `ground`,
 * because every token rebinds underneath. The shortest flow is the one mirrored so the
 * connectors, not the `FitHeight` scale factor, are what the cell is reporting on: both
 * rules are gradients between *fill* tokens (`surface-well` → `fill-accent`, then
 * `fill-accent` → `fill-success`) with their chevron heads and floating captions on
 * top, so this is where a gradient stop that only reads against the dark canvas would
 * wash out.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <FitHeight>
        <HrDiagram
          actor={{
            title: 'Dispatch Planner',
            description: 'Needs tomorrow’s load plan.',
            icon: 'user-group',
          }}
          requestLabel="Asks: Which lanes are at risk?"
          platformLabel="Runink FACE"
          assistant={{
            title: 'Fulfillment Agent',
            description: 'Scores every lane continuously.',
            icon: 'cpu-chip',
          }}
          responseLabel="Returns ranked lane risk"
          outcome={{
            title: 'Load plan released',
            description: 'Confirmed without a war room.',
          }}
        />
      </FitHeight>
    </Surface>
  );
}
