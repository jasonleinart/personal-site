# Personal Site — Continue

**Status:** Active
**Last session:** 2026-01-27

---

## Current State

Site live at jasonleinart.com. Content architecture established with four interconnected content types:

| Type | Purpose | Status |
|------|---------|--------|
| **Analysis** | Strategic "why" | Live, Legal AI Roadmap published |
| **Playbook** | Methodological "how" | Restructured to /playbook, ready for phase subpages |
| **Projects** | Proof of execution | Contract Review Prototype live |
| **Notes** | Specific insights | Westerman's Risk Slope published |

Content links bidirectionally (Analysis ↔ Playbook ↔ Projects ↔ Notes).

**Gap:** Site only has AI projects. Need CRM/MarTech projects to cover all three target role clusters.

---

## Target Role Clusters

| Cluster | Example Roles | Site Signal Needed |
|---------|--------------|-------------------|
| **AI Enablement** | KPMG AI Initiatives, Ford AI Integrations | Playbook + Contract Review + Notes |
| **CRM/MarTech Strategy** | Deloitte CRM Strategist | CRM/Marketing Automation projects |
| **Technical Program Management** | Ford Manager (hybrid) | All projects + Analysis |

**Common thread:** Change management. Every target role emphasizes getting organizations to adopt technology, not just building it.

---

## Recent Progress

### 2026-01-27
- Renamed `contract-review-demo` → `contract-review-prototype`
- Created Westerman's Risk Slope note with video embed
- Updated positioning.md with:
  - Target role clusters
  - Domain experience (retail, home services)
  - Projects to create from actual experience
  - Platform positioning (enterprise vs SMB)
- Added tech tags to project detail pages
- Fixed nav link to `/playbook`

### 2026-01-26
- Created playbook content collection with tools schema
- Restructured `/ai-transformation-playbook` → `/playbook`
- PageSpeed optimizations

---

## Next Actions

### Priority 1: Projects from Actual Experience

The site needs CRM/MarTech projects to cover Deloitte-type roles. Create from PE/flooring experience.

#### Project: Marketing Automation Architecture
**Source:** GHL implementation for multi-location retail
**Target cluster:** CRM/MarTech Strategy

| Wrong Frame | Right Frame |
|-------------|-------------|
| "I implemented Go High Level" | "I architected a marketing automation system handling 200+ daily leads across 50 retail locations" |

**Key signals to include:**
- Multi-location complexity (50 locations, franchise-like operations)
- Lead routing with real-time distribution logic
- Journey orchestration at scale
- Multi-channel campaigns (email, SMS, direct mail)
- Integration architecture (API connections, data flows)

**Questions to answer before writing:**
- What was the measurable outcome? (lead response time, conversion rate, efficiency gain)
- What was the before/after state?
- What technical decisions mattered? (routing logic, data structure, integration approach)

#### Project: ML-Powered Lead Scoring
**Source:** BigQuery/GCP work, subscriber segmentation
**Target cluster:** Technical PM, CRM/MarTech

| Wrong Frame | Right Frame |
|-------------|-------------|
| "I built a lead scoring system for myself" | "I built an ML pipeline that segments 20K+ subscribers by engagement patterns and purchase propensity" |

**Key signals to include:**
- GCP/BigQuery (enterprise platform signal)
- Predictive segmentation methodology
- Data quality and pipeline architecture
- Business outcome (conversion improvement, targeting efficiency)

**Questions to answer before writing:**
- What features drove the segmentation?
- What was the business impact?
- What infrastructure decisions mattered?

---

### Priority 2: Contract Review Prototype - Narrative Updates

Apply framing from user notes:

1. **Purpose section**: Reframe as "How" to Roadmap's "What" - functional bridge demonstrating methodology
2. **Triage section**: Add $675/contract benchmark, frame as service delivery model transformation
3. **Accuracy Baseline**: Reference Westerman's Risk Slope - baseline as key step for firm-wide rollout
4. **ROI calculation**: Add actual figures ($33,750 baseline → $16,875 savings → 14,000% ROI)

**Open question:** $675/contract vs $33K/month framing - which metric leads?

---

### Priority 3: Playbook Phase Subpages

Create subpages with tool showcases. Order by which signals matter most for target roles:

1. `/playbook/change-management` - CM tools, stakeholder mapping, resistance patterns
   - **Why first:** Change management is THE skill in target roles
2. `/playbook/process-discovery` - Current state assessment, automation candidates
3. `/playbook/roi-modeling` - Business case frameworks, TCO models

---

### Priority 4: Outstanding Items

- [ ] Update "In Motion" section on homepage
- [ ] Update "Problems I Think About" on homepage
- [ ] Add platform/cert signals to Journey
- [ ] Update author title in `.env`

---

## Key Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| Add CRM/MarTech projects | Cover all three target role clusters | 2026-01-27 |
| Frame GHL as "architecture" not tool | Enterprise positioning, avoid SMB signal | 2026-01-27 |
| Change management as throughline | Central to every target role | 2026-01-27 |
| Rename to "prototype" not "demo" | Better reflects strategic validation purpose | 2026-01-27 |
| Playbook subpages for tools | Enables change management methodology showcase | 2026-01-26 |

---

## Context for Claude

- Site lives at `Workspace/personal-site/`
- **Positioning strategy:** `positioning.md` (source of truth for content decisions)
- **Content schemas:** `src/content.config.ts` (source of truth for frontmatter)
- **Site config:** `src/config.ts` + `.env`
- **Contract Review source:** `Workspace/contract-review-demo/docs/PROJECT_DECISIONS.md`
- **Target roles:** `Workspace/vault/career/listings/` (for language alignment)
- Tech stack: Astro v5 + Tailwind + MDX
- Deploys automatically via Cloudflare Pages on push to master

---

## Links

| Resource | Location |
|----------|----------|
| Live site | https://jasonleinart.com |
| Positioning strategy | `positioning.md` |
| Content schemas | `src/content.config.ts` |
| Site config | `src/config.ts` + `.env` |
| Target role listings | `Workspace/vault/career/listings/` |
| Contract Review docs | `Workspace/contract-review-demo/docs/` |
