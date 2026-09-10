import { BackgroundEffects, ReasonsGrid, Surface } from '@runink/ui';
import type { Reason } from '@runink/ui';

const VISIBILITY: Reason = {
  title: 'Telemetry-Driven Visibility',
  category: 'Visibility & Intelligence',
  tone: 'sage',
  capabilities: [
    {
      icon: 'check-circle',
      title: 'Data & Operations Maturity Assessments',
      description:
        'Evaluate data quality and operational maturity directly from logistics documents, EDI feeds, spreadsheets, PDFs, and core WMS/TMS databases.',
    },
    {
      icon: 'clipboard-document-list',
      title: 'Rules Reconciliation',
      description:
        'Map SOPs against legacy code (SQL/VBA/Python) or new platforms (SAP/Salesforce/Shopify). Add unmapped rules manually that our engine hasn’t uncovered yet.',
    },
    {
      icon: 'light-bulb',
      title: 'Hypothesis Lab',
      description: 'Simulate changes to your rules before deployment. Test the future without risking the present.',
    },
  ],
};

const TWINS: Reason = {
  title: 'Operations Actionable Twins',
  category: 'Autonomous Execution',
  tone: 'ember',
  capabilities: [
    {
      icon: 'magnifying-glass',
      title: 'ASK (QuickAsk)',
      description:
        'Natural language querying across the entire supply chain network for rapid S&OP pressure-testing.',
    },
    {
      icon: 'chart-bar',
      title: 'DIAGNOSTICS (UploadAnalyze)',
      description:
        'Self-service file uploads for automated root-cause analysis on delays, inventory anomalies, and spend leakage.',
    },
    {
      icon: 'attribution',
      title: 'PREDICTIVE ANALYTICS',
      description: 'S&OP Planning and Maturity Roadmap generation powered by real-time logistics data.',
    },
    {
      icon: 'pencil',
      title: 'DRAFT',
      description:
        'Automatic generation of claims, legally compliant BOL amendments, and regulatory filings without human intervention.',
    },
    {
      icon: 'currency-dollar',
      title: 'ANALYSE (Spend Analytics)',
      description:
        'Deep financial and spend analytics for immediate ROI identification and continuous cost reduction.',
    },
  ],
};

/**
 * The full "Why Runink?" architecture band: eyebrow pill, ember gradient display
 * heading, uppercase standfirst, and the two capability columns — `sage` on the
 * left, the single `ember` column on the right — over the background-effects
 * wash the live page paints behind it.
 */
export function Default() {
  return (
    <ReasonsGrid
      eyebrow="Architecture"
      title="Why Runink?"
      subtitle="Deploy the right level of intelligence for your operations. Choose between deep analytical visibility or automated execution."
      reasons={[VISIBILITY, TWINS]}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" />}
    />
  );
}

/**
 * The same two columns with the heading chrome stripped back to a one-line title
 * — no eyebrow, no standfirst — so the capability lists themselves are in frame.
 * This is the cell to read the two tones off: the sage column's green bloom and
 * `brand-sage` category kicker beside the ember column's orange glow and
 * `secondary-500` kicker.
 */
export function ToneContrast() {
  return (
    <ReasonsGrid
      title="Why Runink?"
      reasons={[VISIBILITY, TWINS]}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" cellSize={80} />}
    />
  );
}

/**
 * Both columns on the quiet `sage` tone and no `backgroundEffect` — the band a
 * page that already has its own wash would use, and the reminder that `ember` is
 * meant for at most one column. Against Default this isolates what the wash and
 * the single loud column each contribute.
 */
export function AllSageFlatBand() {
  return (
    <ReasonsGrid
      eyebrow="Platform tiers"
      title="Pick your depth"
      reasons={[
        { ...TWINS, tone: 'sage' },
        VISIBILITY,
      ]}
    />
  );
}

/**
 * `ToneContrast` on the sheet ground. Not one class differs — only `ground`, because
 * every token rebinds underneath. Both tones are in frame on purpose: the sage
 * column's success bloom and the ember column's accent bloom are washes, and a wash
 * that was tuned against the dark canvas is the thing most likely to disappear here.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <ReasonsGrid
        title="Why Runink?"
        reasons={[VISIBILITY, TWINS]}
        backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" cellSize={80} />}
      />
    </Surface>
  );
}
