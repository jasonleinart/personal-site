# CLAUDE.md - Project Instructions

## Project Overview
Personal portfolio site for Jason Leinart built with Astro. Positioning (since 2026-07): a practitioner portfolio for AI enablement / forward-deployed / adoption roles — production receipts first, consultant language out (consulting sell lives on Peakscape, not here). Change management remains the throughline; the proof format is case studies with metrics, told as discovery, build, evals, adoption, measured result.

## Tech Stack
- **Framework:** Astro v5
- **Styling:** Tailwind CSS
- **Content:** MDX files with Zod schema validation
- **Hosting:** Cloudflare Pages
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
- `docs/` - Operational specs only (`styling-spec.md`, `content-format-spec.md`). The Feb-2026 strategy docs were deleted 2026-07-27 (git history keeps them); positioning lives in the section below, and canonical career facts live in the vault at `career/positioning/source-of-truth.md`

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
Strategic domain analysis articles.

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

**Positioning (set 2026-07-27, grounded in a 10-listing market sample; see vault `career/listings/` summer 2026 entries):** a practitioner who builds AI systems and runs the adoption loop. Primary audience: hiring managers for AI enablement, adoption/change, forward-deployed, and AI delivery roles. NOT a consulting sales surface — the vendor pitch lives on Peakscape; this site must read candidate-clean (no "Let's Talk" advisory CTAs).

**Vocabulary rule:** describe work in the market's words, which are also the true words for what Jason does daily: agents, grounding/RAG, evals, human-in-the-loop, workflow orchestration, prompt libraries, enablement, champions, governance (NIST/OWASP LLM). Name real tools (Claude, Claude Code, n8n/Zapier-class orchestration). Never the consultant abstractions (intersections, synthesis, transformation journeys).

**Proof format:** Catalyst-tile case studies — 2-3 metric tiles, then the loop: discovery → build → eval → adoption → measured result, with an honest stack line. Canonical facts come from vault `career/positioning/source-of-truth.md`; never fork numbers.

**The playbook is a work sample, not an offer:** framed as "how I run AI adoption, written down," which is direct evidence for practice-building roles.

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
- Hiring managers and practice leads for AI enablement / adoption / delivery roles (primary)
- Recruiters running a 10-second scan (metrics tiles + stack keywords must survive that scan)
- Peers (secondary). Consulting prospects are NOT an audience here; they belong to Peakscape.

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

Cloudflare runs `npm run build` and serves the `dist/` directory. Deploying the site needs
**no local Cloudflare credentials**; the push is the deploy.

`main` and `master` were fast-forwarded to the same commit on 2026-08-14. Before that, `main`
sat 67 commits behind at a January state while `master` was production. If they diverge again,
`master` is the one Pages builds.

### Two Cloudflare accounts, and the trap that follows

This repo spans two accounts. Getting this wrong is the most likely way to waste an hour here.

| What | Account |
|---|---|
| `jasonleinart.com` zone + its Pages project | **personal** account (id not recorded; read it off the dashboard) |
| `email-worker` (`jasonleinart-email-worker`) | **`090ff2bbc69fa3773a65881f1decb269`**, the peakscape account, pinned in `email-worker/wrangler.toml` |

`wrangler` on this machine is logged in as `jason@peakscapedigital.com`, which is the peakscape
account. So:

- `wrangler pages project list` returns only `peakscape-site` and **not** this site.
- The `peakscape-zone-ops` token holds Zone:Read on all its zones and still cannot see
  `jasonleinart.com`.

**Neither absence means the resource is missing. It means you are pointed at the wrong account.**
Verified 2026-08-14. Do not conclude the Pages project was deleted, and never deploy the site
with peakscape credentials.

To get real per-directory credentials, Cloudflare has directory-bound auth profiles
(`wrangler auth create <name>` then `wrangler auth activate <name> <dir>`), which resolve ahead
of the default login. That needs a wrangler newer than the 4.95.0 on this machine and the
`^3.0.0` pinned in `email-worker`, and it only covers both accounts if they sit under one
Cloudflare login. Not set up as of 2026-08-14, and not needed while the site deploys by push.

## File Locations

- Site config: `src/config.ts` + `.env`
- Content schemas: `src/content.config.ts`
- Pages: `src/pages/`
- Components: `src/components/`
- Layouts: `src/layouts/`
- Styles: `src/styles/`
