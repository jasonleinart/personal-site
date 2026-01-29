/**
 * Content Collections Configuration
 * 
 * Defines all content collections for the site with their schemas and validation rules.
 * Uses Astro's Content Collections API with Zod for type-safe content management.
 * 
 * Collections:
 * - projects: Case studies with structured narrative format
 * - decisions: Architectural and technical decision records
 * - journey: Career timeline entries
 * - writing: Blog posts and articles
 * - uses: Tools, stack, and environment documentation
 * - speaking: Conference talks and presentations
 * - testimonials: Endorsements and recommendations
 * 
 * All collections use the glob loader to read MDX files from their respective directories.
 * Schemas enforce data structure and provide TypeScript types throughout the application.
 * 
 * @module content.config
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects (Case Studies) Collection
 * 
 * Structured case studies following a narrative format: Overview → Problem → 
 * Constraints → Approach → Key Decisions → Tech Stack → Impact → Learnings.
 * 
 * Features:
 * - Required narrative sections for consistent storytelling
 * - Key decisions with reasoning and alternatives
 * - Impact metrics (quantitative and qualitative)
 * - Featured flag for homepage showcase
 * - Optional custom order for manual curation
 * - Related project and decision slugs for cross-referencing
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    /** Project title */
    title: z.string(),
    
    /** Your role in the project */
    role: z.string(),
    
    /** Year the project was completed */
    year: z.number(),
    
    /** Project duration (e.g., "3 months", "1.5 years") */
    duration: z.string().optional(),
    
    /** Team size for scope context */
    teamSize: z.number().optional(),
    
    /** Brief summary of outcomes and impact */
    outcomeSummary: z.string(),
    
    /** High-level project overview */
    overview: z.string(),
    
    /** Problem being addressed */
    problem: z.string(),
    
    /** Project constraints and limitations */
    constraints: z.array(z.string()),
    
    /** Solution approach and strategy */
    approach: z.string(),
    
    /** Key technical decisions with reasoning */
    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })),
    
    /** Technologies and frameworks used */
    techStack: z.array(z.string()),
    
    /** Project impact and results */
    impact: z.object({
      /** Quantitative metrics (optional) */
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),
      /** Qualitative impact description */
      qualitative: z.string(),
    }),
    
    /** Key learnings and takeaways */
    learnings: z.array(z.string()),
    
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Project status */
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),

    /** Use MDX content only, skip template sections */
    contentOnly: z.boolean().optional(),

    /** Optional TL;DR summary displayed above table of contents */
    tldr: z.object({
      summary: z.string(),
      points: z.array(z.string()),
    }).optional(),

    /** Custom sort order (lower numbers first) */
    order: z.number().optional(),
    
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),
    
    /** Related decision slugs for cross-referencing */
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

/**
 * Decisions Collection
 * 
 * Architectural and technical decision records documenting the context,
 * decision made, alternatives considered, and reasoning.
 * 
 * Features:
 * - Context and decision documentation
 * - Alternatives with pros/cons analysis
 * - Reasoning explanation
 * - Optional tags for categorization
 * - Related project and decision slugs for cross-referencing
 */
const decisionsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/decisions' }),
  schema: z.object({
    /** Decision title */
    title: z.string(),
    
    /** Date the decision was made */
    date: z.coerce.date(),
    
    /** Context and background for the decision */
    context: z.string(),
    
    /** The decision that was made */
    decision: z.string(),
    
    /** Alternative options considered */
    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
    })),
    
    /** Reasoning behind the decision */
    reasoning: z.string(),
    
    /** Optional tags for categorization */
    tags: z.array(z.string()).optional(),
    
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),
    
    /** Related decision slugs for cross-referencing */
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

/**
 * Journey Timeline Collection
 * 
 * Career growth and learning progression timeline with milestones,
 * learning experiences, and career transitions.
 * 
 * Features:
 * - Three entry types (milestone, learning, transition)
 * - Skills/technologies per entry
 * - Optional expandable content
 */
const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journey' }),
  schema: z.object({
    /** Date of the timeline entry */
    date: z.coerce.date(),
    
    /** Entry title */
    title: z.string(),
    
    /** Type of timeline entry */
    type: z.enum(['milestone', 'learning', 'transition']),
    
    /** Brief description */
    description: z.string(),
    
    /** Skills or technologies associated with this entry */
    skills: z.array(z.string()).optional(),
  }),
});

/**
 * Writing (Blog) Collection
 * 
 * Blog posts and technical articles with MDX support.
 * 
 * Features:
 * - Draft mode for unpublished content
 * - Publish and update dates
 * - Optional tags for categorization
 */
const analysisCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/analysis' }),
  schema: z.object({
    /** Article title */
    title: z.string(),

    /** Optional subtitle */
    subtitle: z.string().optional(),

    /** Article description for SEO and previews */
    description: z.string(),

    /** Original publication date */
    publishDate: z.coerce.date(),

    /** Last updated date (optional) */
    updatedDate: z.coerce.date().optional(),

    /** Tags for categorization */
    tags: z.array(z.string()).optional(),

    /** Whether the article is a draft (hidden from production) */
    draft: z.boolean().default(false),

    /** Optional audio file path for listen feature */
    audioFile: z.string().optional(),

    /** Optional TL;DR summary displayed above table of contents */
    tldr: z.object({
      summary: z.string(),
      points: z.array(z.string()),
    }).optional(),
  }),
});

/**
 * Uses Collection
 * 
 * Documentation of tools, technologies, and environment used in development workflow.
 * 
 * Features:
 * - Three categories (tools, stack, environment)
 * - Items with name, description, and optional URL
 * - Custom order for intentional presentation
 */
const usesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/uses' }),
  schema: z.object({
    /** Category for grouping */
    category: z.enum(['tools', 'stack', 'environment']),
    
    /** List of items in this category */
    items: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
    })),
    
    /** Sort order within category */
    order: z.number(),
  }),
});

/**
 * Speaking/Talks Collection
 * 
 * Conference talks, meetup presentations, podcast appearances, and workshops.
 * 
 * Features:
 * - Five talk types (conference, meetup, podcast, workshop, webinar)
 * - Links to slides and video recordings
 * - Event information and location
 * - Optional topics and duration
 * - Featured flag for highlighting
 */
const speakingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/speaking' }),
  schema: z.object({
    /** Talk title */
    title: z.string(),
    
    /** Talk description */
    description: z.string(),
    
    /** Event name */
    event: z.string(),
    
    /** Event website URL (optional) */
    eventUrl: z.string().url().optional(),
    
    /** Date of the talk */
    date: z.coerce.date(),
    
    /** Location (city, country, or "Online") */
    location: z.string(),
    
    /** Type of speaking engagement */
    type: z.enum(['conference', 'meetup', 'podcast', 'workshop', 'webinar']),
    
    /** Link to slides (optional) */
    slides: z.string().url().optional(),
    
    /** Link to video recording (optional) */
    video: z.string().url().optional(),
    
    /** Talk duration (e.g., "45 min", "1 hour") */
    duration: z.string().optional(),
    
    /** Topics covered in the talk */
    topics: z.array(z.string()).optional(),
    
    /** Whether to feature this talk */
    featured: z.boolean().default(false),
  }),
});

/**
 * Testimonials Collection
 * 
 * Endorsements and recommendations from colleagues and clients.
 * 
 * Features:
 * - Person details (name, role, company)
 * - Relationship context
 * - Quote text
 * - Optional LinkedIn profile link
 * - Featured flag for homepage display
 */
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/testimonials' }),
  schema: z.object({
    /** Person's name */
    name: z.string(),

    /** Person's role/title */
    role: z.string(),

    /** Person's company */
    company: z.string(),

    /** Relationship context (e.g., "Worked together at Company X") */
    relationship: z.string(),

    /** Testimonial quote */
    quote: z.string(),

    /** LinkedIn profile URL (optional) */
    linkedin: z.string().url().optional(),

    /** Whether to feature on homepage */
    featured: z.boolean().default(false),

    /** Date of the testimonial */
    date: z.coerce.date(),
  }),
});

/**
 * Playbook Collection
 *
 * Methodology phases with tool showcases. Each entry represents a phase
 * of the AI transformation methodology with associated tools and templates.
 *
 * Features:
 * - Phase ordering for navigation
 * - Tool showcases with descriptions
 * - Links to related analysis articles
 * - SEO metadata
 */
const playbookCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/playbook' }),
  schema: z.object({
    /** Phase title */
    title: z.string(),

    /** Phase description for SEO and previews */
    description: z.string(),

    /** Phase number for ordering (1-5) */
    phase: z.number(),

    /** Brief summary shown in playbook overview */
    summary: z.string(),

    /** Tools and templates used in this phase */
    tools: z.array(z.object({
      name: z.string(),
      description: z.string(),
      /** Tool type for categorization */
      type: z.enum(['template', 'calculator', 'framework', 'checklist', 'dashboard']).optional(),
    })).optional(),

    /** Related analysis article slugs */
    relatedAnalysis: z.array(z.string()).optional(),

    /** Optional TL;DR summary displayed above content */
    tldr: z.object({
      summary: z.string(),
      points: z.array(z.string()),
    }).optional(),

    /** Whether the phase page is a draft */
    draft: z.boolean().default(false),
  }),
});

/**
 * Notes Collection
 *
 * Short-form content that highlights specific aspects of analysis articles.
 * Lighter weight than full articles, designed for quick insights and takeaways.
 *
 * Features:
 * - Optional link to related analysis article
 * - Simple date-based organization
 * - Tags for categorization
 * - Draft mode for unpublished content
 */
const notesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    /** Note title */
    title: z.string(),

    /** Brief description/abstract for card display */
    description: z.string().optional(),

    /** Publication date */
    date: z.coerce.date(),

    /** Related analysis article slug (optional) */
    relatedAnalysis: z.string().optional(),

    /** Related project slug (optional) */
    relatedProject: z.string().optional(),

    /** Tags for categorization */
    tags: z.array(z.string()).optional(),

    /** Whether the note is a draft */
    draft: z.boolean().default(false),
  }),
});

/**
 * Export all collections
 * 
 * This object is used by Astro to register all content collections
 * and generate TypeScript types for type-safe content queries.
 */
export const collections = {
  projects: projectsCollection,
  decisions: decisionsCollection,
  journey: journeyCollection,
  analysis: analysisCollection,
  uses: usesCollection,
  speaking: speakingCollection,
  testimonials: testimonialsCollection,
  notes: notesCollection,
  playbook: playbookCollection,
};
