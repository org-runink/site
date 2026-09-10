import { Badge } from '@runink/ui';

/** Every tone, in the uppercase treatment DESIGN.md specifies for pills. */
export function Tones() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Sovereign</Badge>
      <Badge tone="sage">Compliant</Badge>
      <Badge tone="orange">Disruption</Badge>
      <Badge tone="outline">Beta</Badge>
    </div>
  );
}

/** Sentence case, for metadata that reads as prose rather than a control. */
export function NotUppercase() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge tone="outline" uppercase={false}>
        12 min read
      </Badge>
      <Badge tone="sage" uppercase={false}>
        Updated today
      </Badge>
    </div>
  );
}

/** In a row of tags, the density these are designed for. */
export function AsTagRow() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge tone="outline">Cold chain</Badge>
      <Badge tone="outline">Customs</Badge>
      <Badge tone="outline">HazMat</Badge>
      <Badge tone="outline">Returns</Badge>
      <Badge tone="outline">S&amp;OP</Badge>
    </div>
  );
}
