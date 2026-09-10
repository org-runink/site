import { Surface, TeamMember } from '@runink/ui';

/**
 * A portrait as an inline SVG data URI. The preview server only serves the design
 * bundle, so a site-relative `/images/team/*.jpg` would 404 and every cell would
 * show the initials fallback — this keeps the real `<img>` + `object-cover` crop
 * path exercised in the cells that are about it.
 */
const PORTRAIT =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#4C7A5D"/><stop offset="1" stop-color="#1C1917"/>
      </linearGradient></defs>
      <rect width="256" height="256" fill="url(#g)"/>
      <circle cx="128" cy="100" r="44" fill="#D9CDB8" opacity=".85"/>
      <path d="M32 256c0-53 43-80 96-80s96 27 96 80z" fill="#D9CDB8" opacity=".85"/>
    </svg>`,
  );

/** The canonical card: square portrait, LinkedIn badge pinned to its corner, name, role. */
export function Default() {
  return (
    <TeamMember
      name="Ana Paes"
      role="Lead Data & Cloud Architect"
      image={PORTRAIT}
      linkedinUrl="https://www.linkedin.com/company/runink"
    />
  );
}

/**
 * No portrait supplied — the frame paints its own `primary-800` panel and draws
 * the person's initials. Real, intended behaviour: the card never renders a broken
 * image, so a statically screenshotted team grid always reads as portrait frames.
 */
export function InitialsFallback() {
  return <TeamMember name="Marco Silva" role="VP Supply Chain, Atlas Freight" />;
}

/** Initials fallback with the LinkedIn badge still on it — the badge sits over the panel, not the photo. */
export function InitialsWithBadge() {
  return (
    <TeamMember
      name="Priya Raghunathan"
      role="Head of Terminal Operations"
      linkedinUrl="https://www.linkedin.com/company/runink"
    />
  );
}

/**
 * The intended composition: a wrapped flex row of fixed `w-64` cards, as the
 * company page's leadership band renders it. Mixes portraits and initials, which
 * is what a real roster looks like mid-rollout.
 */
export function InATeamGrid() {
  return (
    <div className="flex flex-nowrap justify-center gap-6">
      <TeamMember
        name="Ana Paes"
        role="Lead Data & Cloud Architect"
        image={PORTRAIT}
        linkedinUrl="https://www.linkedin.com/company/runink"
      />
      <TeamMember name="Tobias Lindqvist" role="Principal Engineer, Event Mesh" linkedinUrl="https://www.linkedin.com/company/runink" />
      <TeamMember name="Helena Duarte" role="Director of Customs Compliance" />
    </div>
  );
}

/**
 * A long job title under a short name, and a `linkedinUrl` that fails `safeHref`
 * so no badge is rendered at all — the two edges that decide whether the
 * centre-aligned card stays balanced.
 */
export function LongRoleAndSuppressedBadge() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <TeamMember
        name="Yusuf Okonkwo"
        role="Subject Matter Expert, AWS Data Analytics & Advanced Supply Chain Forecasting"
      />
      <TeamMember
        name="Claire Bennet"
        role="Dangerous Goods Lead"
        image={PORTRAIT}
        linkedinUrl="javascript:alert(1)"
      />
    </div>
  );
}

/**
 * The same card on the sheet ground. Not one class differs from `Default` — only
 * `ground`, because every token rebinds underneath.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <TeamMember
        name="Ana Paes"
        role="Lead Data & Cloud Architect"
        image={PORTRAIT}
        linkedinUrl="https://www.linkedin.com/company/runink"
      />
    </Surface>
  );
}
