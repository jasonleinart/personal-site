# Content Architecture

Four content types work together to demonstrate competence across all three target role clusters (AI Enablement, CRM/MarTech Strategy, Technical Program Management).

---

## Analysis → Strategic Landscape

**Purpose:** "I understand the domain deeply"

**What belongs here:**
- Domain research synthesis (Legal AI, Finance AI, Healthcare AI)
- Market/industry analysis with strategic implications
- Organizational transformation frameworks
- 30,000 ft architecture decisions (not implementation details)

**What doesn't belong:**
- Code snippets or configuration details
- Step-by-step implementation guides
- Tool-specific tutorials

**Hiring signal:** AI Strategy & Advisory, Executive Communication
**Target cluster:** Technical Program Management, AI Enablement

---

## Playbook → Methodology & Tools

**Purpose:** "I have a repeatable process for driving adoption"

**What belongs here:**
- Change management methodology and frameworks
- Tools for each phase (templates, calculators, checklists)
- Adoption playbooks with metrics
- Process discovery and ROI modeling approaches

**What doesn't belong:**
- Domain-specific strategy (goes in Analysis)
- Project-specific implementation (goes in Projects)

**Hiring signal:** Change Management, Adoption Leadership, Methodology
**Target cluster:** AI Enablement (primary), all clusters (secondary)

**Subpages planned:**
- `/playbook/change-management` - CM tools, stakeholder mapping, resistance patterns
- `/playbook/process-discovery` - Current state assessment, automation candidates
- `/playbook/roi-modeling` - Business case frameworks, TCO models

---

## Projects → Strategy in Action

**Purpose:** "I bridge business strategy to technical execution"

The technical work exists to prove strategic analysis is actionable—not to demonstrate developer skills. Projects show you can speak both languages: translate business requirements into technical questions, evaluate vendor solutions, and lead implementation conversations with IT teams.

**What belongs here:**

- Implementations that validate strategic frameworks (e.g., Contract Review proves Legal AI Roadmap methodology)
- Business outcomes with enough technical context to show feasibility understanding
- Architecture decisions framed as business trade-offs
- Evidence of managing the strategy-to-execution gap

**What doesn't belong:**

- Deep technical tutorials (you're not teaching developers)
- Code-first documentation without business context
- Projects framed as "I built X" without "which validated Y strategy"

**Hiring signal:** Strategy Translation, Implementation Leadership, Vendor/Tech Fluency
**Target cluster:** Technical Program Management, CRM/MarTech Strategy, AI Enablement

**Project coverage needed:**

- AI projects (Contract Review Prototype) → Validates domain analysis, shows tech fluency
- CRM/MarTech projects (Marketing Automation) → Proves multi-location expertise is actionable
- Integration projects (BigQuery/GCP) → Demonstrates platform literacy for enterprise conversations

---

## Notes → Continuous Engagement

**Purpose:** "I'm in the weeds on the details"

**What belongs here:**
- Specific insights pulled from analysis or projects
- Implementation learnings ("Why hybrid search matters for legal text")
- Change management observations (Westerman's Risk Slope)
- Links back to related analysis or projects

**What doesn't belong:**
- Full strategic analysis (goes in Analysis)
- Complete project documentation (goes in Projects)

**Hiring signal:** Thought Leadership, Depth of Understanding
**Target cluster:** All clusters

---

## Content Relationship Pattern

Content links bidirectionally. For the Legal AI domain:

```
Analysis: "Legal AI Roadmap"
├── Strategic landscape, architecture at 30,000 ft
├── Links to → Project, Playbook
│
Playbook: "/playbook" (methodology)
├── Change management frameworks
├── Tools for each phase
├── Links to → Analysis (why), Projects (proof)
│
Project: "/contract-review-prototype"
├── Working implementation with outcomes
├── Technical decisions with rationale
├── Links to → Analysis, Notes
│
Notes: "Westerman's Risk Slope"
├── Specific insight (accuracy baseline = adoption gate)
├── Links to → Project
```

**What this tells hiring managers:**

- Analysis → "Thinks strategically about AI in [domain]"
- Playbook → "Has methodology for driving adoption"
- Project → "Can translate strategy into action and lead implementation"
- Notes → "Engages continuously with details"

---

## Quick Reference

| Type | Purpose | Belongs | Doesn't Belong | Hiring Signal |
|------|---------|---------|----------------|---------------|
| **Analysis** | Domain understanding | Research synthesis, strategic implications, 30k ft architecture | Code, tutorials, implementation guides | Strategy & Advisory |
| **Playbook** | Repeatable process | Methodology, tools, templates, adoption metrics | Domain strategy, project specifics | Change Management |
| **Projects** | Strategy in action | Implementations validating strategy, business outcomes with tech context | Code tutorials, tech-first docs without business framing | Strategy Translation |
| **Notes** | Continuous engagement | Specific insights, implementation learnings, observations | Full analysis, complete project docs | Thought Leadership |
