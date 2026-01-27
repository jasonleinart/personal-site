/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'AI Projects & Case Studies | Real-World Implementation Results',
    description: 'AI implementation case studies with documented outcomes: GenAI systems, automation frameworks, and data pipelines. See the decisions, trade-offs, and measurable business impact.',
    heading: 'Projects',
    intro: 'Case studies that demonstrate how I approach complex problems, make technical decisions, and deliver measurable impact. Each project tells the story of the challenge, the constraints, the decisions made, and the outcomes achieved.',
  },

  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Professional Journey | From Marketing Ops to AI Systems Architecture',
    description: '10+ years from marketing operations to AI systems architecture. The career path, pivotal decisions, and skills built bridging business strategy with technical implementation.',
    heading: 'Journey',
    intro: 'A timeline of my professional growth and learning progression. This isn\'t a resume—it\'s a story of how I\'ve evolved as an engineer, the pivotal moments that shaped my thinking, and the skills I\'ve developed along the way.',
  },

  /**
   * Strategic Analysis listing page (/analysis)
   */
  analysis: {
    title: 'Strategic Analysis | Enterprise AI Research & Case Studies',
    description: 'Deep-dive research and case studies on enterprise AI transformation. Analysis of strategic decisions, implementation patterns, and lessons from industry leaders.',
    heading: 'Strategic Analysis',
    intro: 'Deep-dive research into enterprise AI transformation. Case studies, decision frameworks, and lessons from organizations building AI at scale.',
  },

  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact Jason Leinart | AI Consulting & Collaboration',
    description: 'Connect for AI implementation consulting, technical collaboration, or strategic advisory. Working with select clients on AI systems from strategy through production.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
