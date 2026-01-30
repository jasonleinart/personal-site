# Content Brief: Phase 1 — Understand

**Page:** `/playbook/phase-1-understand`
**Source:** `/ai-transformation-playbook/phases/01-understand/README.md`
**Reference:** `/src/reference/playbook-v1/phase-1-discovery.mdx` (good writing examples)

---

## Page Purpose

Demonstrate methodology for the first phase of AI transformation: defining the actual business problem before touching technology. Target audience is hiring managers evaluating AI transformation candidates—this page proves "I have a repeatable process."

**Phase question:** What's the actual problem we're solving?

---

## Content Architecture

### Frontmatter (Already Done)

The placeholder file has accurate frontmatter. Keep tools, tldr, and relatedAnalysis as-is.

---

### Section 1: Opening Hook

**Goal:** Grab attention, establish stakes, preview the phase question.

**Structure:**
- Punchy opening statement (1-2 sentences)
- Brief context on why this matters
- State the phase question explicitly

**Content direction:**

Open with a failure story or provocative claim. The old v1 had a good hook: "The most expensive AI failure mode is building the wrong thing well."

New angle from source README: "Before touching technology, establish what business outcome we're trying to achieve."

**Draft elements:**
- Hook: Most AI projects fail before a line of code gets written. Not from technical problems—from solving the wrong problem.
- Context: The Understand phase exists to prevent this. Before models, before vendors, before architecture discussions.
- Question callout: **"What's the actual problem we're solving?"**

**Format:** Prose only. No lists or tables in opening.

---

### Section 2: Framework Connections (NEW)

**Goal:** Show how this phase connects to the three integrated frameworks. Establishes governance credibility.

**Structure:**
- Brief intro sentence
- 3-row table (max 4 rows per spec)
- One-sentence closer

**Content from source:**

| Framework | Application in This Phase |
|-----------|---------------------------|
| **BSPF** | Steps 1-2: View business as machine, understand drivers |
| **Governance** | Identify potential AI use case; begin risk awareness (NIST Map 1.1, Govern 1.2) |
| **Change Management** | Map stakeholders; understand who will be affected |

**Writing notes:**
- Don't explain what BSPF is here (assume reader has context from index page)
- The NIST references (Map 1.1, Govern 1.2) add credibility without requiring explanation
- Keep table tight—3 rows, strong first column

**Closer:** Something like "These frameworks aren't sequential. They apply simultaneously from day one."

---

### Section 3: Key Activities

**Goal:** Walk through what actually happens in this phase. The methodology.

**Structure:** Mix of prose subsections with varied formats (per content-format-spec).

**Subsections (from source README):**

#### 3a. Intake and Scoping
- Capture problem statement, constraints, timeline
- Identify business sponsor and key stakeholders
- Establish success criteria

**Writing approach:** Short opener, then bullet list with 3 items (not 5+). End with insight.

#### 3b. Stakeholder Mapping
- Who benefits from solving this?
- Who might resist?
- Who has decision authority?

**Writing approach:** Start with provocative claim about why stakeholder work matters. Use the old v1 line adapted: "Stakeholder resistance kills more projects than technical failure."

Include the differentiation from source:
- **Decision Makers** — Budget authority, go/no-go decisions
- **Data/System Experts** — Technical constraints, data availability
- **Impacted Communities** — End users, customers, employees affected by AI output

This satisfies NIST Govern 2.1 (Roles and Responsibilities).

#### 3c. Driver Hypotheses
- What do we believe is causing the problem?
- What data would validate or invalidate these hypotheses?

**Writing approach:** Use contrast structure. "Teams often skip this because they're certain about the problem. Then they build solutions that don't address the actual cause."

#### 3d. Success Metrics Definition
- What does "solved" look like in measurable terms?
- Include both business KPIs and trustworthiness criteria

**Writing approach:** This is NEW compared to v1. Emphasize the dual nature—not just "did revenue go up" but "is the AI behaving responsibly."

#### 3e. Shadow AI Discovery (NEW—important differentiator)

This is entirely new from source. Big opportunity to show current thinking.

**Content from source:**
- Where are employees already using consumer AI tools (ChatGPT, Claude, Gemini, Copilot)?
- What tasks are they trying to accomplish?
- What data are they putting into unsanctioned systems?
- What does this usage reveal about automation demand?

**Key insight to include:** "Shadow AI usage is a signal, not just a risk. It reveals where people are desperate enough for AI help that they'll work around official channels. These 'desire paths' often point to high-value automation candidates."

**Writing approach:** Use story or example. The JPMorgan connection from related analysis would work here.

---

### Section 4: NIST AI RMF Mapping (NEW—governance credibility)

**Goal:** Connect activities to specific NIST subcategories. Shows depth.

**Structure:** Table (4 rows max) with Activity | NIST Mapping | Consulting Level-Up

**Content from source:**

| Activity | NIST Mapping | Consulting Level-Up |
|----------|--------------|---------------------|
| **Intake & Scoping** | Map 1.1 & 1.5 | Capture "intended use" and "potential for significant impact" |
| **Stakeholder Mapping** | Govern 5.1 | Include "impacted communities," not just executives |
| **Driver Hypotheses** | Map 1.2 & 2.1 | Document technical constraints early |
| **Success Metrics** | Measure 1.1 | Include "trustworthiness" alongside business KPIs |

**Writing note:** The "Consulting Level-Up" column is gold—it shows what differentiates expert practice from checkbox compliance.

**Closer:** "This mapping prevents the 'starting with the solution' mistake by forcing stakeholders to defend the data behind their assumptions."

---

### Section 5: Phase Output

**Goal:** Make the deliverable concrete. What do you leave with?

**Structure:** Opening statement, numbered list of outputs, then example stakeholder quote (from source).

**Content from source:**

Outputs:
1. **Problem statement** — Articulated in business terms, not technology terms
2. **Stakeholder map** — Including impacted communities, not just decision-makers
3. **Driver hypotheses** — With data requirements for validation
4. **Success metrics** — Both business KPIs and trustworthiness criteria

**Example delivery quote from source:**
> "We have a clear business problem, but our Govern 1.2 maturity is low because we haven't defined who is legally responsible for this AI's output. We must address this in the Assess phase."

**Writing note:** This quote positions you as someone who thinks about governance from day one—a differentiator.

---

### Section 6: Exit Criteria

**Goal:** Clear checklist for when this phase is complete.

**Structure:** Checklist with 5-6 items (per spec, keep lists under 5-6).

**Content from source:**

Before moving to **Assess**:
- [ ] Problem statement articulated in business terms (not technology terms)
- [ ] Business sponsor identified and committed
- [ ] Key stakeholders mapped—including impacted communities
- [ ] Hypothesized drivers documented with data requirements
- [ ] Success metrics defined with both business KPIs and trustworthiness criteria
- [ ] Intended use and potential impact documented (NIST Map 1.1)

**Writing note:** The checkbox format signals completion criteria. Readers can use this as a literal checklist.

---

### Section 7: Common Mistakes

**Goal:** Show expertise through knowing what goes wrong.

**Structure:** Table format (from source) or bold-label paragraphs (from v1).

**Option A: Table (3 rows)**

| Mistake | Why It Happens | How to Avoid |
|---------|----------------|--------------|
| **Starting with solution** | "We need AI for X" | Force articulation of business problem first |
| **Skipping stakeholders** | Feels like overhead | Stakeholder resistance kills more projects than technical failure |
| **Vague success criteria** | Hard to commit to specifics | Push for quantified outcomes in Phase 2 |

**Option B: Bold paragraphs (from v1 style)**

**Starting with the solution.** Teams arrive with "we need AI for X" already decided. Force articulation of the business problem first. If they can't explain the problem without mentioning the solution, they're not ready.

**Skipping stakeholder mapping.** It feels like overhead. But stakeholder resistance kills more projects than technical failure. Map them or watch the project die at rollout.

**Vague success criteria.** "Improve efficiency" isn't measurable. Push for specifics: "Reduce contract review time from 4 hours to 1 hour." Without quantified targets, you can't prove value later.

**Recommendation:** Use Option B (bold paragraphs) since Section 4 and Section 6 already use tables/lists. Varies the structure per content-format-spec.

---

## Writing Quality Gates

### Anti-AI Patterns to Avoid

From `/writing/universal/anti-ai-patterns.md`:

**Banned words:** transformative, crucial, seamlessly, leverage, robust, navigate, landscape, delve, foster

**Banned patterns:**
- "X isn't just Y; it's Z"
- "Furthermore," "Moreover," "Additionally"
- Trailing "-ing" importance claims ("...highlighting the significance of")
- Inanimate subjects doing things ("This development signals...")

**Human markers to include:**
- Specific examples with names, numbers, dates
- Personal observations: "I've seen...", "I watched a team..."
- Direct opinions backed by reasoning
- Varied sentence lengths

### Content Format Spec Requirements

From `/docs/content-format-spec.md`:

- Tables: 3-4 rows max
- Bullet lists: 5 items max
- Start sections with prose, not lists
- End sections with punchy sentences
- Vary structure across adjacent subsections
- Include specific numbers (times, quantities, costs)
- At least one story/example per major section

---

## Reusable Elements from v1

The old phase-1-discovery.mdx had strong writing. Preserve or adapt:

**Good hooks:**
- "The most expensive AI failure mode is building the wrong thing well."
- "I've seen teams spend six months on a solution that nobody asked for."

**Good specific examples:**
- "A contract analyst at a law firm told me she spent 3 hours every Monday copying data between two systems that 'definitely talk to each other' according to IT."
- "I've watched teams argue for 20 minutes because they were using the same word for different things."
- "One insurance company I worked with had 47 exception codes. Twelve of them covered 89% of cases."

**Good methodological points:**
- "Yesterday interviews" concept (ask what they did yesterday, not "walk me through your process")
- Contrast between interviews (what people think they do) and observation (what they actually do)
- "It depends" usually means 2-3 common paths plus a long tail of exceptions

**What to drop:**
- The "Governance Lens" framing—replace with "Framework Connections" which is broader
- Process mapping details (SIPOC, swimlanes) now belong in Phase 2: Assess
- Automation Scorecard details now belong in Phase 2: Assess
- Data Gate details—still mention but it's the gate between Assess and Design

---

## New Elements to Incorporate

From the source README that weren't in v1:

1. **Shadow AI Discovery** — Entirely new activity. High-value differentiator.
2. **NIST mapping table** — Adds governance credibility.
3. **Three framework connections** — Shows integrated thinking.
4. **Exit criteria checklist** — Makes completion concrete.
5. **Phase output with stakeholder quote** — Shows consulting positioning.
6. **Trustworthiness criteria in success metrics** — Not just business KPIs.

---

## Estimated Sections and Word Counts

| Section | Estimated Words | Primary Format |
|---------|-----------------|----------------|
| Opening Hook | 100-150 | Prose |
| Framework Connections | 80-100 | Table + prose |
| Key Activities (5 subsections) | 500-700 | Mixed (vary by subsection) |
| NIST AI RMF Mapping | 100-150 | Table + prose |
| Phase Output | 150-200 | Numbered list + quote |
| Exit Criteria | 80-100 | Checklist |
| Common Mistakes | 150-200 | Bold paragraphs |

**Total:** ~1,200-1,600 words

This is shorter than v1 (~1,400 words body) but adds the NIST table and framework connections. Appropriate length for a methodology page.

---

## Next Steps

1. Review this brief and approve direction
2. Draft content following section structure
3. Apply anti-AI writing check
4. Review against content-format-spec checklist
5. Finalize frontmatter if any changes needed
