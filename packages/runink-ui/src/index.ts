/**
 * @runink/ui — the Runink design system.
 *
 * React ports of the components the runink.org Hugo site ships, built on the
 * shared Tailwind token preset generated from DESIGN.md. This barrel is the
 * package entry the design-sync converter bundles, so every component intended
 * to be public must be exported here.
 */

// ── Foundations ────────────────────────────────────────────────────────────────
export { Icon } from './components/Icon';
export type { IconProps, IconName } from './components/Icon';
export { Surface } from './components/Surface';
export type { SurfaceProps, SurfaceTone } from './components/Surface';
export { Container } from './components/Container';
export type { ContainerProps } from './components/Container';
export { Section } from './components/Section';
export type { SectionProps } from './components/Section';
export { CardGrid } from './components/CardGrid';
export type { CardGridProps, CardGridCols } from './components/CardGrid';
export { StatsGrid } from './components/StatsGrid';
export type { StatsGridProps } from './components/StatsGrid';

// ── Controls and inline treatments ────────────────────────────────────────────
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant } from './components/Button';
export { Badge } from './components/Badge';
export type { BadgeProps, BadgeTone } from './components/Badge';
export { GradientText } from './components/GradientText';
export type { GradientTextProps, GradientTextSweep } from './components/GradientText';

// ── Heroes ────────────────────────────────────────────────────────────────────
export { Hero } from './components/Hero';
export type { HeroProps, HeroSize } from './components/Hero';
export { LandingHero } from './components/LandingHero';
export type { LandingHeroProps, LandingHeroLayer } from './components/LandingHero';
export { HeroImage } from './components/HeroImage';
export type { HeroImageProps } from './components/HeroImage';

// ── Cards ─────────────────────────────────────────────────────────────────────
export { Card } from './components/Card';
export type { CardProps } from './components/Card';
export { FeatureCard } from './components/FeatureCard';
export type { FeatureCardProps } from './components/FeatureCard';
export { ValueCard } from './components/ValueCard';
export type { ValueCardProps } from './components/ValueCard';
export { CaseStudyCard } from './components/CaseStudyCard';
export type { CaseStudyCardProps } from './components/CaseStudyCard';
export { Stat } from './components/Stat';
export type { StatProps } from './components/Stat';

// ── Features ──────────────────────────────────────────────────────────────────
export { Feature } from './components/Feature';
export type { FeatureProps, FeatureBadgeTone } from './components/Feature';
export { FeaturesSection } from './components/FeaturesSection';
export type { FeaturesSectionProps } from './components/FeaturesSection';
export { FeaturesList } from './components/FeaturesList';
export type { FeaturesListProps, FeaturesListItem, FeaturesListTone } from './components/FeaturesList';
export { BenefitsGrid } from './components/BenefitsGrid';
export type { BenefitsGridProps, Benefit, BenefitTone } from './components/BenefitsGrid';

// ── Calls to action ───────────────────────────────────────────────────────────
export { Cta } from './components/Cta';
export type { CtaProps } from './components/Cta';
export { CtaBanner } from './components/CtaBanner';
export type { CtaBannerProps, CtaBannerAction } from './components/CtaBanner';
export { SubscribeForm } from './components/SubscribeForm';
export type { SubscribeFormProps } from './components/SubscribeForm';

// ── Social proof ──────────────────────────────────────────────────────────────
export { Testimonials } from './components/Testimonials';
export type { TestimonialsProps } from './components/Testimonials';
export { TestimonialCard } from './components/TestimonialCard';
export type { TestimonialCardProps } from './components/TestimonialCard';
export { TeamMember } from './components/TeamMember';
export type { TeamMemberProps } from './components/TeamMember';
export { TrustSignals } from './components/TrustSignals';
export type { TrustSignalsProps, TrustSignalLink } from './components/TrustSignals';
export { ClientLogos } from './components/ClientLogos';
export type { ClientLogosProps, ClientLogo } from './components/ClientLogos';
export { InvestorLogo } from './components/InvestorLogo';
export type { InvestorLogoProps } from './components/InvestorLogo';
export { Logo } from './components/Logo';
export type { LogoProps } from './components/Logo';

// ── Pricing ───────────────────────────────────────────────────────────────────
export { PricingTable } from './components/PricingTable';
export type {
  PricingTableProps,
  PricingTier,
  PricingOutcome,
  PricingFeature,
  PricingPeriod,
} from './components/PricingTable';
export { PricingTableCompact } from './components/PricingTableCompact';
export type { PricingTableCompactProps, PricingTableCompactTier } from './components/PricingTableCompact';
export { PricingToggle } from './components/PricingToggle';
export type { PricingToggleProps, PricingToggleOption } from './components/PricingToggle';

// ── Narrative sections ────────────────────────────────────────────────────────
export { TabbedPitches } from './components/TabbedPitches';
export type { TabbedPitchesProps, TabbedPitch } from './components/TabbedPitches';
export { ReasonsGrid } from './components/ReasonsGrid';
export type { ReasonsGridProps, Reason, ReasonCapability, ReasonTone } from './components/ReasonsGrid';
export { CapabilityShowcase } from './components/CapabilityShowcase';
export type { CapabilityShowcaseProps, Capability, CapabilityAccent } from './components/CapabilityShowcase';
export { UseCasesCarousel } from './components/UseCasesCarousel';
export type { UseCasesCarouselProps, UseCasesCarouselItem } from './components/UseCasesCarousel';
export { UseCaseParallax } from './components/UseCaseParallax';
export type {
  UseCaseParallaxProps,
  UseCaseParallaxStep,
  UseCaseParallaxTrack,
} from './components/UseCaseParallax';
export { LandingScenario } from './components/LandingScenario';
export type { LandingScenarioProps } from './components/LandingScenario';
export { UsageSection } from './components/UsageSection';
export type { UsageSectionProps, UsageStep } from './components/UsageSection';

// ── Content blocks ────────────────────────────────────────────────────────────
export { ContactSection } from './components/ContactSection';
export type {
  ContactSectionProps,
  ContactMethod,
  ContactField,
  ContactFieldType,
} from './components/ContactSection';
export { Faq } from './components/Faq';
export type { FaqProps, FaqItem } from './components/Faq';
export { HowTo } from './components/HowTo';
export type { HowToProps, HowToStep } from './components/HowTo';
export { DirectAnswer } from './components/DirectAnswer';
export type { DirectAnswerProps } from './components/DirectAnswer';

// ── Site chrome ───────────────────────────────────────────────────────────────
export { Header } from './components/Header';
export type {
  HeaderProps,
  HeaderNavItem,
  HeaderNavLink,
  HeaderAction,
  HeaderLanguage,
} from './components/Header';
export { Footer } from './components/Footer';
export type { FooterProps, FooterColumn, FooterLink, FooterSocialLink } from './components/Footer';
export { Sidebar } from './components/Sidebar';
export type { SidebarProps, SidebarRecentPost, SidebarCategory } from './components/Sidebar';
export { SidebarTags } from './components/SidebarTags';
export type { SidebarTagsProps, SidebarTag } from './components/SidebarTags';
export { BackgroundEffects } from './components/BackgroundEffects';
export type { BackgroundEffectsProps } from './components/BackgroundEffects';

// ── Blog ──────────────────────────────────────────────────────────────────────
export { PostCard } from './components/PostCard';
export type { PostCardProps } from './components/PostCard';
export { PostMeta } from './components/PostMeta';
export type { PostMetaProps, PostMetaTag } from './components/PostMeta';

// ── Diagrams and process ──────────────────────────────────────────────────────
export { StepCard } from './components/StepCard';
export type { StepCardProps, StepCardTrack } from './components/StepCard';
export { HrDiagram } from './components/HrDiagram';
export type { HrDiagramProps, HrDiagramNode, HrDiagramDependency } from './components/HrDiagram';

// ── Utilities ─────────────────────────────────────────────────────────────────
export { safeHref } from './lib/safeHref';
export { initialsOf } from './lib/initials';
