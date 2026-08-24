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
Case studies with structured narrative format. A project that is still running should carry a
current measurement and the date it was taken, not only a past-tense outcome. A hand-written
outcome is a document and starts rotting the day it ships; a dated grade can be re-derived.

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
A position on a question worth deciding, with the sources named and the reasoning visible.
Must pass the two-question Analysis gate in "Site Positioning & Content Architecture" below
before it is written, not after. Not a domain survey.

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
| **Analysis** | "I hold a position on a question I would be paid to decide" | A named decision, the sources behind it, and where the evidence runs out | AI Strategy & Advisory |
| **Playbook** | "I have a repeatable process" | Methodology phases, tools, templates | Change Management, Adoption |
| **Projects** | "I run it, and here is the current grade" | Working implementations with a live measurement and a date | PoC Development |
| **Notes** | "I'm in the details" | Specific insights, implementation learnings, observations | Thought Leadership |

**Content relationship:** Analysis commits to a position, Playbook shows the process that position produces, Projects prove it ran, Notes pull out specific insights. They link to each other bidirectionally.

### The Analysis gate (set 2026-08-16)

Two questions. A draft that fails either one is not Analysis.

1. **Is there a question here that somebody has to decide?**
2. **Does the piece commit to an answer, and can a reader trace how you got there?**

First-party evidence (your own numbers, systems, or scars) is what separates a strong Analysis
from a merely good one. It is **not** the entry condition. A reasoned position on a live question,
argued from public research with the sources named, is legitimate Analysis, because making
defensible calls on incomplete evidence is the job these roles hire for.

**Why this gate exists.** The prior definition was "I understand the domain," which licensed four
articles that summarized other people's research and decided nothing: a healthcare deployment-gap
survey, a JPMorgan case study, a generic enterprise-transformation piece, and a law-firm roadmap.
A survey describes a state. It does not answer a question, so under this gate it does not ship.

**Three guards, or this becomes opinion blogging:**

- **Show where the position came from.** Never assert from nowhere. What satisfies this depends on
  the kind of evidence:
  - *Argued from public research:* the convergence table is the format, not a courtesy. Independent
    sources, what each contributes, the quote that carries it, then the position and where it diverges.
  - *Argued from your own systems:* the artifact and the number are the citation. Name the repo, the
    file, the count, the date. A first-party piece needs no external sources and is stronger without
    bolted-on ones.

  The obligation is a traceable reasoning chain, not a bibliography.
- **State the position so it could be shown wrong.** "Name the binding risk first, then the vendor
  follows" is falsifiable. "AI is changing everything" is not.
- **Never borrow certainty from a source.** Where the evidence is one anonymous post from one metro,
  say so. Match the honest-boundaries discipline in vault `career/positioning/source-of-truth.md`.

### Site scope (set 2026-08-16)

**This site optimizes for precision. The feed optimizes for recall.** They are not one pipeline at
two lengths, they are two surfaces with opposite targets.

A hiring manager here is doing evaluation, so every additional item dilutes the signal and adds
another chance to land on something weaker than the best thing. **More content makes this site
worse.** A reader on LinkedIn or X is doing discovery, where volume is how you get found and how
you practice. More content makes the feed better. Publish fast there, publish curated here.

| | This site | LinkedIn / X |
|---|---|---|
| Publish gate | Stabilize | Scaffold or Iterate |
| Volume | Few, curated | Many, fast |
| Failure mode | Dilution | Silence |
| Being wrong is | Expensive | Cheap and correctable |

**The scope rule:** every item answers a different question a hiring manager actually has, and
**nothing answers the same question twice.** When two items answer one question, the weaker one is
cut, not kept for completeness. Coverage of the question set is the target, never volume.

Each item leads with a number in its first line, because the site's own constraint is a recruiter
running a ten-second scan.

**How the question set is derived.** From the real `career/listings/` corpus, the same way skill
demand is derived by `career/scripts/skill-demand.py` rather than hand-counted. Never type a
question set from intuition. Re-derive it when the corpus grows enough to move it.

**PROVISIONAL question set and inventory verdict — pending the listings pass.** Sketched
2026-08-16 from the lane doc and the summer-2026 listings already read. A fresh batch of listings
lands next, and the set below is re-derived against it before anything is cut or written.

| Hiring question | Current best answer | Site item |
|---|---|---|
| Can you build production AI systems? | Eval-gated reporting pipeline | Project (exists) |
| Do you know whether they work? | 18 cases, 0.72 baseline, failure taxonomy | Project (exists, needs numbers) |
| Can you run a fleet without becoming the bottleneck? | 84 checks, selftest, run history | Project (exists as security audit, needs rework) |
| Do you know when *not* to build? | 579 deleted, 297 numbers proved, read/write asymmetry | Analysis (to write) |
| Can you make people adopt something? | Adoption loop, 44 stores, 70% | Playbook + Project |
| Do you have judgment about risk? | Security audit, HITL, risk classification | Project (exists) |

Roughly three or four Projects and two or three Analyses, plus the playbook. That is the whole
site. Items answering none of the derived questions are cut regardless of quality, and portfolio
pieces built on demo data are the first candidates, because a skimming reader cannot tell them
from client work and will average them in.

**Promotion, so scope is derived rather than guessed.** Publish an idea to the feed first. What
lands gets promoted into a site item. The feed does the selection, so this site does not have to
guess which candidate deserves a permanent URL.

Two constraints on that. The feed selects **among** things that already pass the Analysis gate; it
decides what is resonant, never what is true. And the signal is **engagement and profile views, not
clickthroughs**, for the reason below.

**This site is not a funnel, and feed posts do not route here (corrected 2026-08-17).** An earlier
version of this section said every post should link back. That was wrong on two counts. LinkedIn's
ranking rewards content that keeps people on the platform, so routing every post off-site fights the
algorithm. And more fundamentally, it imports a lead-generation model into a hiring context that does
not work that way.

**The site has one job: survive evaluation by a hiring manager who already decided to look you up.**
Not attract, not convert, not nurture. People arrive here from a profile, a resume, a recruiter, or a
search of the name, at the point where they are checking whether the claims hold. Optimize for that
reader and no other.

The real path is: post delivers complete value on LinkedIn, reader wonders who wrote it, reader
visits the **profile**, and the minority who want to evaluate deeply come here from there. That makes
the LinkedIn profile the load-bearing link in the system, not the posts.

Linking out is not banned, it is rare. Link when the link *is* the artifact (a repo, a spec) and the
post is complete without it.

**What NOT to do:**
- Don't put implementation details in Analysis (goes in Project README)
- Don't put pure strategy in Projects (goes in Analysis)
- Don't write Notes that should be full Analysis articles
- Don't publish a survey, a roundup, or a vendor-news recap. If the piece reports what happened
  without deciding anything, it is a link, not an article.

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

**Cloudflare Pages is the only deploy target. Do not enable GitHub Pages.** It was enabled on
this repo and set to `legacy` build type, so GitHub tried to build an Astro site with Jekyll on
every push to `master`. It failed 39 of its last 40 runs going back to 2026-01-28 and never
served the site, only a Jekyll-rendered README at `jasonleinart.github.io/personal-site/`.
Disabled 2026-08-14 (`gh api -X DELETE repos/jasonleinart/personal-site/pages`, which needs
`gh auth switch --user jasonleinart` first). If a `pages-build-deployment` run appears again,
something re-enabled it; turn it off rather than trying to make the Jekyll build pass.

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
