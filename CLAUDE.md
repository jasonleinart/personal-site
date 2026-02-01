# CLAUDE.md - Project Instructions

## Project Overview
Personal portfolio site for Jason Leinart built with Astro. A systems architect disguised as a marketer—transitioning into AI-native operations, bringing cross-domain fluency and problem-led leadership. Change management is the throughline.

## Tech Stack
- **Framework:** Astro v5
- **Styling:** Tailwind CSS
- **Content:** MDX files with Zod schema validation
- **Hosting:** Cloudflare Pages (auto-deploys from GitHub)
- **CMS:** None - content in markdown files

## Styling

All prose content (analysis, playbook, notes) uses the `.prose-content` class from `src/styles/global.css`. This provides:
- Terracotta-accented tables (left border, header styling)
- Consistent typography, headings, lists, blockquotes
- Responsive sizing

**Never duplicate these styles in page templates.** See `docs/styling-spec.md` for details.

## Writing Quality Gate

All content must pass the anti-AI writing rules in `Workspace/writing/universal/anti-ai-patterns.md`. Key rules:

- No inanimate subjects "doing" things ("This highlights...", "The data demonstrates...")
- No banned buzzwords (transformative, leverage, seamlessly, robust, etc.)
- No mechanical transitions (Furthermore, Moreover, Additionally)
- Use human subjects, specific examples with names/numbers, varied sentence lengths
- Self-check: Would a human actually write this?

## Key Files
- `src/content.config.ts` - Content collection schemas (source of truth for frontmatter)
- `src/config.ts` - Site configuration (reads from `.env`)
- `.env` - Environment variables (personal info, social links)
- `docs/` - Strategy documentation (positioning, content architecture, target audience)

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
contentOnly: true  # optional, skip template sections and render MDX body only
tldr:  # optional, summary displayed above content
  summary: "One sentence summary"
  points:
    - "<strong>Point 1:</strong> Description"
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

### Analysis (`src/content/analysis/`)
Strategic domain analysis articles. See `docs/positioning.md` for content guidelines.

**Required frontmatter:**
```yaml
title: "Article Title"
subtitle: "Optional subtitle"  # optional
description: "Article description for SEO"
publishDate: 2025-01-15  # YYYY-MM-DD format
updatedDate: 2025-01-20  # optional
tags:
  - "tag1"
  - "tag2"
draft: false  # boolean, optional
audioFile: "/audio/filename.m4a"  # optional
tldr:  # optional but recommended
  summary: "One sentence summary"
  points:
    - "<strong>Point 1:</strong> Description"
    - "<strong>Point 2:</strong> Description"
```

### Writing (`src/content/writing/`)
Blog posts and articles (general, non-strategic).

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

### Notes (`src/content/notes/`)
Short-form insights that highlight specific aspects of analysis or projects.

**Required frontmatter:**
```yaml
title: "Note Title"
description: "Brief abstract for card display"  # optional but recommended
date: 2025-01-15  # YYYY-MM-DD format
relatedAnalysis: "analysis-slug"  # optional, links to related analysis
relatedProject: "project-slug"  # optional, links to related project
tags:  # optional
  - "tag1"
  - "tag2"
draft: false  # boolean, optional
```

**Content guidelines:**
- Keep notes focused on a single insight
- Link back to related Analysis or Project when applicable
- Use for observations that don't warrant full articles
- If referencing external companies/products, add a **Sources** footer (not inline links):
  ```markdown
  ---

  **Sources**
  - [Company Name](https://example.com)
  - [Product Name](https://example.com)
  ```

### Playbook (`src/content/playbook/`)
Methodology phases with tool showcases. Each entry represents a phase of the AI transformation methodology.

**Required frontmatter:**
```yaml
title: "Phase Title"
description: "Phase description for SEO"
phase: 1  # Phase number (1-6) for ordering
summary: "Brief summary shown in playbook overview"
tools:  # optional
  - name: "Tool Name"
    description: "What this tool does"
    type: template  # MUST be: template | calculator | framework | checklist | dashboard
relatedAnalysis:  # optional
  - "analysis-slug"
tldr:  # optional but recommended
  summary: "One sentence summary"
  points:
    - "<strong>Point 1:</strong> Description"
    - "<strong>Point 2:</strong> Description"
draft: false  # boolean, optional
```

**Content guidelines:**
- Focus on methodology and process ("how I do it")
- Showcase specific tools with practical descriptions
- Link to Analysis articles for strategic context ("why it works")
- Keep tactical and actionable

## Common Mistakes to Avoid

1. **MDX comments use JSX syntax:** Use `{/* comment */}` not `<!-- comment -->`

2. **Enum values are strict:**
   - `status`: Must be exactly `completed`, `ongoing`, or `archived` (not `complete`)
   - `type` (journey): Must be exactly `milestone`, `learning`, or `transition`
   - `type` (speaking): Must be exactly `conference`, `meetup`, `podcast`, `workshop`, or `webinar`

3. **Dates must be valid:** Use `YYYY-MM-DD` format

4. **Arrays can't be empty if required:** Provide at least one item for `constraints`, `keyDecisions`, `techStack`, `learnings`, `alternatives`

5. **URLs must be valid:** Include `https://` prefix

## Site Positioning & Content Architecture

See `docs/positioning.md` for full strategy. Related docs:
- `docs/content-architecture.md` - Content type relationships
- `docs/content-strategy.md` - Content creation guidelines
- `docs/target-audience.md` - Audience personas and signals
- `docs/language-reframing.md` - SMB to Enterprise language mapping

Key points:

**Core positioning:** A systems architect disguised as a marketer—transitioning into AI-native operations. Not an AI researcher, not a developer, not a pure strategist. The value is in working the intersections: Systems + Marketing + Data + Technology + Operations + Strategy. Change management is the throughline.

**Target role clusters:**

| Cluster | Example Roles | Site Signal |
|---------|--------------|-------------|
| **AI Enablement** | KPMG AI Initiatives, Ford AI Integrations | Playbook + Contract Review + Notes |
| **CRM/MarTech Strategy** | Deloitte CRM Strategist | CRM/Marketing Automation projects |
| **Technical Program Management** | Ford Manager (hybrid) | All projects + Analysis |

**Content architecture (Analysis / Playbook / Projects / Notes):**

| Type | Purpose | What Belongs | Hiring Signal |
|------|---------|--------------|---------------|
| **Analysis** | "I understand the domain" | Strategic landscape, 30k ft architecture, org implications | AI Strategy & Advisory |
| **Playbook** | "I have a repeatable process" | Methodology phases, tools, templates | Change Management, Adoption |
| **Projects** | "I can build it" | Working implementations, technical READMEs, demos | PoC Development |
| **Notes** | "I'm in the details" | Specific insights, implementation learnings, observations | Thought Leadership |

**Content relationship:** Analysis provides strategic "why" → Playbook shows methodological "how" → Projects prove execution → Notes pull out specific insights. They link to each other bidirectionally.

**What NOT to do:**
- Don't put implementation details in Analysis (goes in Project README)
- Don't put pure strategy in Projects (goes in Analysis)
- Don't write Notes that should be full Analysis articles

**Target audiences:**
- Hiring managers for AI transformation roles (Big 4, Fortune 1000, mid-market)
- Potential consulting clients
- Peers (secondary)

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## Deployment

Site deploys automatically via Cloudflare Pages when changes are pushed to GitHub.

**Repository:** `github-personal:jasonleinart/personal-site` (master branch)
**Live URL:** https://jasonleinart.com

**Deploy process:**
1. Commit changes locally
2. Push to `origin master`
3. Cloudflare Pages automatically builds and deploys

Cloudflare runs `npm run build` and serves the `dist/` directory.

## File Locations

- Site config: `src/config.ts` + `.env`
- Content schemas: `src/content.config.ts`
- Pages: `src/pages/`
- Components: `src/components/`
- Layouts: `src/layouts/`
- Styles: `src/styles/`
