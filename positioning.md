# Site Positioning & Content Architecture

**Core positioning:** Practitioner who's built the systems, positioned to lead adoption at scale. Technical enough to evaluate solutions and build PoCs. Strategic enough to drive organizational change.

**The differentiator:** Not an AI researcher. Not a developer. Not a pure strategist. The intersection—with change management as the throughline.

---

## Target Role Clusters

The site targets three overlapping role types:

| Cluster | Example Roles | What They Want | Site Signal |
|---------|--------------|----------------|-------------|
| **AI Enablement** | KPMG AI Initiatives, Ford AI Integrations, AI Enablement Coach | Change management, adoption, training, governance | Playbook + Notes |
| **CRM/MarTech Strategy** | Deloitte CRM Strategist, Marketing Technology PM | Journey orchestration, personalization, multi-channel | Projects (CRM) |
| **Technical Program Management** | Ford Manager AI Integrations (hybrid) | PoC development, build vs buy, business cases | Projects (AI) + Analysis |

**Common thread across all clusters:** Change management. Every target role emphasizes getting organizations to adopt technology, not just building it. The technical bar is "can build PoCs and evaluate solutions"—not "AI engineer."

---

## Domain Experience (Actual, Not Researched)

**Career pattern: Multi-location operations.** This is the throughline, not a one-job detail.

| Role | Domain | Scale | Relevance |
|------|--------|-------|-----------|
| Marketing Director | Hospitality (bars & restaurants) | 7 locations | Distributed teams, location-specific marketing |
| Operations/Marketing Leadership | PE-backed retail (flooring) | 50 locations, $100M+ portfolio | Enterprise scale, franchise-like complexity |
| Adjacent | Home services (builder business) | Service operations | Consumer-facing, field coordination |

**Why this matters for target roles:**
- **Ford** - Dealer networks are multi-location operations
- **Deloitte CRM** - Retail and hospitality are both client verticals
- **Any enterprise role** - Franchise-like complexity, location-specific personalization, distributed team adoption

**Framing principle:** Lead with the pattern ("multi-location operations across retail and hospitality"), not one job's metrics ("$100M portfolio").

**Domains researched** (from WKM case studies): Legal AI, Finance AI, Healthcare AI, Manufacturing AI, Retail ML

**Domains researched** (from WKM case studies): Legal AI, Finance AI, Healthcare AI, Manufacturing AI, Retail ML

---

## Content Architecture

Four content types work together to demonstrate competence across all three role clusters.

### Analysis → Strategic Landscape

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

### Playbook → Methodology & Tools

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

### Projects → Technical Proof

**Purpose:** "I can actually build this"

**What belongs here:**
- Working implementations with outcomes
- Architecture decisions with rationale
- Technical READMEs with implementation details
- Demo applications that prove feasibility

**What doesn't belong:**
- Pure strategy without implementation
- Theoretical frameworks without proof points

**Hiring signal:** PoC Development, Technical Credibility
**Target cluster:** Technical Program Management, CRM/MarTech Strategy

**Project coverage needed:**
- AI projects (Contract Review Prototype) → AI Enablement roles
- CRM/MarTech projects (Lead Routing, Marketing Automation) → CRM Strategy roles
- Integration projects (BigQuery/GCP work) → Technical PM roles

### Notes → Continuous Engagement

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
- Project → "Can actually build it"
- Notes → "Engages continuously with details"

---

## Target Audience

**Why the shift:** The JPM signal (January 2026) clarified enterprise reality:
- Enterprises don't want AI-native transformation. They want vendor AI adoption.
- Platform expertise matters more than building skills for consulting.
- Change management and adoption are the real constraints, not AI capability.
- The "bubble-up" theory has limits. Personal AI mastery is necessary but not sufficient.

The target audience—Big 4 consultants, Fortune 1000 hiring managers, mid-market executives—isn't looking for someone on a journey. They're looking for someone who can guide *their* journey.

## Target Audience

**Primary:** Hiring managers and decision-makers for AI transformation roles

| Persona | What They're Looking For | What Signals Value |
|---------|-------------------------|-------------------|
| **Big 4 Partner/Manager** | Platform certs, domain expertise, client-facing ability | Case studies, certifications, executive communication |
| **Fortune 1000 AI Manager** | Vendor ecosystem knowledge, adoption experience | Copilot/Einstein fluency, change management evidence |
| **Mid-market Executive** | Fast time-to-value, practical solutions | "I built X for Y, resulted in Z" stories |

**Secondary:** Peers and network (other practitioners, consultants, analysts)

| Persona | What They're Looking For | What Signals Value |
|---------|-------------------------|-------------------|
| **Enterprise architects** | Technical depth, platform understanding | Integration architecture, cloud service knowledge |
| **AI/ML practitioners** | Credible technical foundation | Implementation details, honest trade-off analysis |
| **Industry analysts** | Domain insights, trend validation | Research synthesis, data-backed perspectives |

### Fortune 1000 AI Transformation Manager (Peer-Level Target)
**What they're actually looking for:**
- Vendor ecosystem knowledge (M365 + Copilot, Salesforce + Einstein)
- Adoption playbooks with metrics
- Stakeholder management experience
- Evidence of driving organizational change

### Mid-Market CEO/COO (Services Target)
**What they're actually looking for:**
- "I did X for a company like yours, resulted in Y"
- Fast time-to-value
- Specific industry understanding
- Technical capability without needing to hire a team
## The Strategic Pivot

**Don't abandon AI-native identity. Demonstrate it through domain-relevant implementation rather than explain it through frameworks.**

| Current Approach | Recommended Approach |
|------------------|---------------------|
| "Here's what AI-native means" (framework) | "Here's what I built for a retail client" (proof) |
| "Three Horizons explain transformation" (theory) | "Here's how I helped a team adopt Copilot" (story) |
| "Capability loading is real" (concept) | "I loaded manufacturing scheduling optimization" (evidence) |
| "I'm on a journey" (process) | "I solved this problem" (outcome) |

**Problems I Think About:**
- Why enterprise AI adoption stalls at vendor integration
- The trust-building progression from analytics to automation
- How regulatory burden shapes deployment timelines across industries
- The gap between vendor AI promises and implementation reality
- How mid-market can access enterprise-grade AI at accessible cost

## Quick Reference: Language

**Use:**
- "I solved X for a company like yours"
- "Here's what the research says about [domain]"
- "Built and deployed"
- "Drove adoption across [scope]"
- "Platform architecture on AWS/Azure"

## The Value Proposition

**For enterprise/consulting roles:**

> "I bridge domain research and practical implementation. I understand what the academic literature says about AI in manufacturing, retail, finance, healthcare, and legal. I understand what enterprise platforms (AWS, Azure) actually offer. And I can build enough to demonstrate feasibility without needing a dev team."

**The differentiator:** Research depth + platform knowledge + technical execution capability. Not an AI researcher. Not a developer. Not a pure strategist. The intersection.

**Proof points:**
- 6 domain case studies processed (Finance, Healthcare, Legal, Retail, Manufacturing x2)
- AWS SAA + Azure AI certifications in progress
- Production implementations: lead scoring system, client sites, knowledge management architecture
- Transformation playbook synthesized from 5+ primary sources
- Multi-location retail transformation (50 locations, $100M portfolio)

---

## Projects from Actual Experience

The site currently only has AI projects. To cover all three target role clusters, add CRM/MarTech projects from PE/flooring experience.

### Project: Contract Review Prototype (exists)
**Cluster:** AI Enablement, Technical PM
**Frame:** Strategic prototype validating Legal AI Roadmap methodology
**Key signals:** Azure AI services, LangGraph orchestration, accuracy baseline, change management (Westerman)

### Project: Marketing Automation Architecture (to create)
**Cluster:** CRM/MarTech Strategy
**Source:** GHL implementation for multi-location retail
**Frame:** "Built marketing technology stack for 50-location retail network"
**Key signals:**
- Multi-location complexity (franchise-like operations)
- Lead routing across locations (200+ daily leads)
- Journey orchestration at scale
- Integration architecture (not tool-specific)

**Wrong frame:** "I implemented Go High Level"
**Right frame:** "I architected a marketing automation system handling 200+ daily leads across 50 retail locations with real-time routing, multi-channel campaigns, and location-specific personalization."

### Project: ML-Powered Lead Scoring (to create)
**Cluster:** Technical PM, CRM/MarTech
**Source:** BigQuery/GCP work, subscriber segmentation
**Frame:** "Data pipeline and ML segmentation for 20K+ subscriber base"
**Key signals:**
- GCP/BigQuery (enterprise platform)
- Predictive segmentation
- Data quality and pipeline architecture
- Business outcome (conversion improvement)

**Wrong frame:** "I built a lead scoring system for myself"
**Right frame:** "I built an ML pipeline that segments 20K+ subscribers by engagement patterns and purchase propensity, enabling targeted campaigns with measurable conversion lift."

### Project: Process Automation Portfolio (optional)
**Cluster:** Technical PM
**Source:** Various automation work (Cloud Functions, API integrations)
**Frame:** Collection of automation patterns with business outcomes
**Key signals:**
- API integration patterns
- Cloud Functions / serverless
- Measurable efficiency gains

---

## Platform Positioning

**Emphasize (enterprise):**
- Azure AI services (OpenAI, Document Intelligence, AI Search)
- GCP (BigQuery, Cloud Functions)
- AWS (when certified)
- M365 / Copilot ecosystem
- CRM architecture (platform-agnostic framing)

**De-emphasize (SMB-coded):**
- Go High Level by name (frame as "marketing automation architecture")
- Tool-specific tutorials
- SMB-scale examples

---

### Build: Three Content Pillars

**Pillar 1: Domain Case Studies (60% of content)**

| Domain | Content Angle |
|--------|---------------|
| Retail | "ML in retail: What Walmart and IKEA figured out that mid-market can't afford to ignore" |
| Manufacturing | "The trust-building progression: Why you can't sell automation to skeptical plant managers" |
| Finance | "Why JPMorgan laughs off in-housing software (and what that means for AI transformation)" |
| Healthcare | "Why healthcare AI is 90-365 days to deploy while retail is 60-90" |

Format: Research breakdown posts, comparison insights, "here's what the data says" authority.

Why it works: Demonstrates domain expertise. Shows you understand enterprise reality. Creates content that enterprise people actually search for and share.

**Pillar 2: Platform/Tool Deep Dives (25% of content)**

| Topic | Content Angle |
|-------|---------------|
| AWS Bedrock vs Azure AI Foundry | "Where Claude lives in the enterprise: Bedrock explained" |
| Cloud service models | "IaaS, PaaS, SaaS: Why this matters for your AI strategy" |
| Copilot adoption | "What the JPM signal tells us about Copilot" |

Format: Platform explainers, certification study insights, "here's what I learned" with practical application.

Why it works: Signals platform expertise. Shows you're investing in enterprise-relevant skills.

**Pillar 3: Implementation Stories (15% of content)**

| Story | Wrong Frame | Right Frame |
|-------|-------------|-------------|
| Lead scoring system | "Capability loading worked for me" | "I built a lead scoring system that processes 20K+ subscribers. Here's what I learned about data quality requirements." |
| Client websites | "I'm not a developer anymore" | "I delivered 3 production sites with near-perfect technical SEO. The implementation pattern is repeatable." |
| Knowledge system | "I built personal infrastructure" | "I systematized research analysis across 6 industry domains. Here's the architecture." |

Format: Outcome-first, technical details, transferable insight.

Why it works: Proves you can execute. Shows technical depth without claiming developer identity. Creates "show me" evidence.

