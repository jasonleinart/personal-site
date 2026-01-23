# CLAUDE.md - Project Instructions

## Project Overview
Personal portfolio site for Jason Leinart built with Astro using the "Case" theme. Focus on showcasing AI systems work, strategic thinking, and the "builder in motion" positioning.

## Tech Stack
- **Framework:** Astro v5
- **Styling:** Tailwind CSS
- **Content:** MDX files with Zod schema validation
- **Hosting:** Cloudflare Pages (planned)
- **CMS:** None - content in markdown files

## Key Files
- `src/content.config.ts` - Content collection schemas (source of truth for frontmatter)
- `src/config.ts` - Site configuration (reads from `.env`)
- `.env` - Environment variables (personal info, social links)

## Content Collections

All content lives in `src/content/` as `.mdx` files.

### Projects (`src/content/projects/`)
Case studies with structured narrative format.

**Required frontmatter:**
```yaml
title: "Project Title"
role: "Your Role"
year: 2025
outcomeSummary: "Brief outcome description"
overview: "High-level overview"
problem: "Problem being solved"
constraints:
  - "Constraint 1"
  - "Constraint 2"
approach: "Solution approach"
keyDecisions:
  - decision: "What was decided"
    reasoning: "Why"
    alternatives:
      - "Alternative 1"
techStack:
  - "Tech 1"
  - "Tech 2"
impact:
  metrics:
    - label: "Metric Name"
      value: "Metric Value"
  qualitative: "Qualitative impact description"
learnings:
  - "Learning 1"
  - "Learning 2"
featured: true  # boolean
status: completed  # MUST be: completed | ongoing | archived
order: 1  # optional, for sorting
```

### Decisions (`src/content/decisions/`)
Strategic and technical decision records.

**Required frontmatter:**
```yaml
title: "Decision Title"
date: 2025-01-15  # YYYY-MM-DD format
context: "Background and situation"
decision: "What was decided"
alternatives:
  - option: "Alternative 1"
    pros:
      - "Pro 1"
    cons:
      - "Con 1"
  - option: "Alternative 2"
    pros:
      - "Pro 1"
    cons:
      - "Con 1"
reasoning: "Why this decision was made"
tags:
  - "tag1"
  - "tag2"
```

### Journey (`src/content/journey/`)
Career timeline entries.

**Required frontmatter:**
```yaml
date: 2025-01-15  # YYYY-MM-DD format
title: "Entry Title"
type: milestone  # MUST be: milestone | learning | transition
description: "Brief description"
skills:  # optional
  - "Skill 1"
  - "Skill 2"
```

### Writing (`src/content/writing/`)
Blog posts and articles.

**Required frontmatter:**
```yaml
title: "Article Title"
description: "Article description for SEO"
publishDate: 2025-01-15  # YYYY-MM-DD format
tags:  # optional
  - "tag1"
  - "tag2"
draft: false  # boolean, optional
```

### Speaking (`src/content/speaking/`)
Talks and presentations.

**Required frontmatter:**
```yaml
title: "Talk Title"
description: "Talk description"
event: "Event Name"
eventUrl: "https://event-url.com"  # optional
date: 2025-01-15  # YYYY-MM-DD format
location: "City, State" or "Online"
type: conference  # MUST be: conference | meetup | podcast | workshop | webinar
duration: "45 min"  # optional
topics:  # optional
  - "Topic 1"
  - "Topic 2"
featured: true  # boolean
slides: "https://slides-url.com"  # optional
video: "https://video-url.com"  # optional
```

### Testimonials (`src/content/testimonials/`)
Endorsements and recommendations.

**Required frontmatter:**
```yaml
name: "Person Name"
role: "Their Role"
company: "Their Company"
relationship: "How you know them"
quote: "The testimonial text"
linkedin: "https://linkedin.com/in/username"  # optional
featured: true  # boolean
date: 2025-01-15  # YYYY-MM-DD format
```

## Common Mistakes to Avoid

1. **Enum values are strict:**
   - `status`: Must be exactly `completed`, `ongoing`, or `archived` (not `complete`)
   - `type` (journey): Must be exactly `milestone`, `learning`, or `transition`
   - `type` (speaking): Must be exactly `conference`, `meetup`, `podcast`, `workshop`, or `webinar`

2. **Dates must be valid:** Use `YYYY-MM-DD` format

3. **Arrays can't be empty if required:** Provide at least one item for `constraints`, `keyDecisions`, `techStack`, `learnings`, `alternatives`

4. **URLs must be valid:** Include `https://` prefix

## Site Positioning

Jason's positioning: **"Builder in motion"** - not a consultant agency, but a high-agency individual doing interesting work.

**Key themes:**
- AI implementation and strategy
- Learning in public
- Documenting decisions and thinking
- Building systems that move business metrics

**Target audiences:**
- Hiring managers (show capability and growth)
- Potential clients/collaborators (show thinking and outcomes)
- Peers (share learning and ideas)

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## File Locations

- Site config: `src/config.ts` + `.env`
- Content schemas: `src/content.config.ts`
- Pages: `src/pages/`
- Components: `src/components/`
- Layouts: `src/layouts/`
- Styles: `src/styles/`
