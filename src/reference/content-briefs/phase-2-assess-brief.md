# Content Brief: Phase 2 — Assess

**Page:** `/playbook/phase-2-assess`
**Source:** `/ai-transformation-playbook/phases/02-assess/README.md`
**Reference:** `/src/reference/playbook-v1/phase-2-opportunity-assessment.mdx` (good writing examples)

---

## Page Purpose

Demonstrate methodology for quantifying the current state and establishing the baseline for proving value later. This phase answers whether the organization is ready for AI—or whether the process needs fixing first.

**Phase question:** Where are we now, and how bad is the gap?

---

## Content Architecture

### Frontmatter (Already Done)

The placeholder file has accurate frontmatter. Tools list is good. Keep as-is.

---

## Key Structural Changes from v1

The old "Opportunity Assessment" phase combined content now split across Phase 2 (Assess) and Phase 3 (Design):

**Keep in Phase 2:**
- Current-state costing (four cost categories)
- Process mapping (SIPOC, swimlanes) — moved FROM old Phase 1
- Automation scoring
- Data readiness assessment

**Move to Phase 3: Design:**
- Build vs. Buy analysis
- ROI modeling (detailed)
- Vendor evaluation
- TCO analysis

**Add new:**
- Mess-O-Meter tool (process readiness diagnostic)
- POV vs. POC distinction (big differentiator)
- Readiness Scorecard (dual dimension)
- Trustworthiness baseline concept
- NIST mapping table

---

### Section 1: Opening Hook

**Goal:** Establish stakes, preview the phase question, set up the POV vs. POC distinction early.

**Structure:**
- Punchy opening about why projects fail here
- Context on what this phase does
- State the phase question explicitly

**Content direction:**

The source README has a great hook: "Most AI initiatives fail in 'Pilot Purgatory' because they prove technical feasibility without proving business value."

The v1 had: "Most AI projects die in assessment, not implementation. They die because someone couldn't answer basic questions."

Combine these angles—projects die here because they can't prove value, not because they can't prove the tech works.

**Draft elements:**
- Hook: Most AI initiatives die in Pilot Purgatory. They prove the chatbot works but can't prove it's worth the investment.
- Context: This phase establishes the baseline that makes Proof of Value possible later.
- Question callout: **"Where are we now, and how bad is the gap?"**

**Format:** Prose only. No lists or tables in opening.

---

### Section 2: Framework Connections

**Goal:** Show how this phase connects to the three integrated frameworks.

**Structure:**
- Brief intro sentence
- 3-row table
- One-sentence closer

**Content from source:**

| Framework | Application in This Phase |
|-----------|---------------------------|
| **BSPF** | Steps 3-4: Measure drivers, uncover problems, quantify dollar impact |
| **Governance** | Assess data quality and process readiness (NIST Map 2.1-2.2, Govern 1.1, 2.3) |
| **Change Management** | Document current pain points; identify where resistance will come from |

**Closer:** Something like "The quantification you do here becomes the baseline against which success is measured in Phase 6."

---

### Section 3: POV vs. POC (NEW—key differentiator)

**Goal:** Establish the critical distinction that separates expert practice from common failure.

**Structure:** Prose intro, 4-row comparison table, test statement, punchy closer.

**Content from source:**

| | POC (Insufficient) | POV (Required) |
|---|-------------------|----------------|
| **Proves** | Technical feasibility | Business impact |
| **Deliverable** | "We built a chatbot" | "Chatbot reduced ticket volume 30%" |
| **Leads to** | "Now what?" | Budget for scaling |
| **Measurement** | It works | It's worth it |

**The test (from source):**
> "If this initiative succeeds, we will [measurable outcome] worth [$X] annually."

If you can't fill in the blanks, you're not ready for Phase 3.

**Writing notes:**
- This is the conceptual anchor for the whole phase
- Every activity in this phase feeds POV, not POC
- This distinguishes the methodology from "just build something and see"

---

### Section 4: Key Activities

**Goal:** Walk through what actually happens in this phase.

**Structure:** Mix of prose subsections with varied formats.

**Subsections:**

#### 4a. Process Discovery

Content that moved FROM old Phase 1 (Discovery) into Phase 2:
- Map current workflows (SIPOC, swimlanes)
- Observe actual work (not documented process)
- Identify handoffs, exceptions, workarounds

**From v1 phase-1-discovery (reuse this content):**
- "Yesterday interviews" concept could be referenced (but main explanation stays in Phase 1)
- SIPOC gives 30,000-foot view
- Swimlane shows handoff reality—"Most process inefficiency isn't in the tasks themselves. It's in the white space between roles."

**Writing approach:** Brief since Phase 1 covered stakeholder discovery. Focus on the HOW of mapping, not the WHY.

#### 4b. Automation Assessment & Mess-O-Meter (NEW)

This is the big new addition. The Mess-O-Meter is a diagnostic tool.

**Principle from source:** *Standardize before you Automate.*

**Mess-O-Meter evaluates:**
- Workflow documentation quality
- Tribal knowledge dependency
- Conversational bottlenecks
- Manual micro-decisions
- Data readiness
- Decision criteria clarity

**Readiness gates (from source):**
- **Green (0-10):** Proceed to AI
- **Yellow (11-25):** Address specific gaps first
- **Red (26-40):** Standardization sprint required
- **Black (41-60):** Process redesign needed

**Writing approach:** This is a differentiator. Emphasize that most teams skip this and try to "automate the mess"—then AI amplifies chaos instead of reducing it.

**Good story opportunity:** Example of a process that scored Black and needed redesign before AI could help.

#### 4c. Cost Quantification

**Keep from v1 (strong content):**

Four cost categories:
- **Labor costs** — What do people spend time on?
- **Error costs** — What happens when the process goes wrong?
- **Delay costs** — What's the cost of waiting?
- **Opportunity costs** — What could people do instead?

**Great v1 examples to keep:**
- "A paralegal spending 3 hours per contract at $85/hour across 200 contracts monthly is $51,000/year in labor alone."
- "One insurance company traced $340,000 in annual claims rework to data entry errors in a single intake form."

**v1 advice to keep:** "Don't estimate. Interview the people doing the work. Check numbers against system logs when possible. Leadership will challenge your assumptions. Have the receipts."

**New addition from source:** Include "cost of risk" (potential for hallucination or data leak) in financial projections. This satisfies NIST Manage 1.1-1.2.

#### 4d. Trustworthiness Baseline (NEW)

This didn't exist in v1 but is important for governance credibility.

**From source:**
- Current error rates in manual process (so you can compare to AI error rates later)
- Existing human oversight mechanisms (where do humans already catch errors?)
- Data quality and provenance assessment

**Why it matters:** You can't claim AI is "better" than humans if you don't know the human baseline. You can't design appropriate oversight if you don't know where oversight already exists.

---

### Section 5: The Readiness Scorecard (NEW)

**Goal:** Show the dual-dimension assessment that prevents premature AI deployment.

**Structure:** Brief intro, 2-row table, insight paragraph.

**Content from source:**

| Dimension | Tool | What It Measures |
|-----------|------|------------------|
| **Process Readiness** | Mess-O-Meter | Can we automate this without amplifying chaos? |
| **Trustworthiness Readiness** | NIST Gap Analysis | Do we have the governance infrastructure to deploy AI responsibly? |

**Key insight (from source):** "A process can score 'Green' on the Mess-O-Meter but still fail trustworthiness readiness if data ownership is undefined or bias hasn't been assessed."

This is the nuance that separates expert assessment from checkbox assessment.

---

### Section 6: Data Readiness Assessment

**Goal:** Cover what v1 called the "Data Gate" but position as assessment, not formal gate.

**Note:** The formal Data Gate checkpoint happens in Phase 4: Govern. Here we're assessing data readiness.

**Structure:** Brief intro, then four subsections (Ownership, Quality, Compliance, Representativeness) with bold questions.

**Keep from v1 (strong content):**

**Ownership:** "This sounds obvious until you discover the customer data lives in Marketing's Salesforce, the transaction data lives in Finance's ERP, and neither department has agreed to share it."

Great v1 example: "I've watched a 6-month initiative stall for 4 months on data access negotiations that should have happened in week one."

**Quality:** "'Clean enough' depends on the use case. A recommendation engine can tolerate some noise. A fraud detection model can't."

**Compliance:** GDPR, CCPA, HIPAA, industry-specific rules.

Great v1 example: "One healthcare client had to scrap three months of work because nobody checked HIPAA implications until the compliance review."

**Representativeness:** Does the data reflect current reality? Time period, known gaps, process changes since collection.

**New addition from source (NIST AI 600-1):**
- **Bias:** Does the training data reflect the population it will serve?
- **Provenance:** Where did this data come from? Who owns it?

---

### Section 7: NIST AI RMF Mapping

**Goal:** Connect activities to specific NIST subcategories.

**Structure:** 4-row table with Activity | NIST Mapping | Integration Point

**Content from source:**

| Activity | NIST Mapping | Integration Point |
|----------|--------------|-------------------|
| **Process Discovery** | Map 1.1, 5.1-5.2 | Identify where human-in-the-loop oversight is missing or required |
| **Automation Assessment** | Map 2.1-2.2 | Evaluate technical limits and whether data can support intended outputs |
| **Mess-O-Meter** | Govern 1.1, 2.3 | Flag tribal knowledge dependencies as governance risk |
| **Cost Quantification** | Manage 1.1-1.2 | Include "cost of risk" in financial projections |

---

### Section 8: Phase Output

**Goal:** Make the deliverable concrete.

**Structure:** Opening statement, then deliverable description, then example stakeholder quote.

**Content from source:**

The ultimate deliverable is a **Prioritized Transformation Roadmap** that combines:
- **Opportunity Scorecard** (Business Value)
- **NIST Gap Analysis** (Risk/Governance Requirements)

**Example delivery quote (from source):**
> "Process X is our best automation candidate (High Value), but it scores 'Black' on the Mess-O-Meter and 'Low' on NIST Map 1.1. We must standardize the workflow and define data ownership before we can move to the Design phase."

This framing shows you're not just cheerleading AI—you're identifying what needs to happen first.

---

### Section 9: Exit Criteria

**Goal:** Clear checklist for when this phase is complete.

**Structure:** Checklist with 6-7 items.

**Content from source:**

Before moving to **Design**:
- [ ] Current state process documented (not just described)
- [ ] Pain points validated with stakeholders
- [ ] Problem quantified in dollars (cost of status quo + cost of risk)
- [ ] Process readiness assessed (Mess-O-Meter score)
- [ ] Data availability, quality, bias, and provenance evaluated
- [ ] Automation candidates prioritized with risk severity
- [ ] Trustworthiness baseline established

---

### Section 10: Common Mistakes

**Goal:** Show expertise through knowing what goes wrong.

**Structure:** Bold paragraphs (since we used tables elsewhere—varies structure).

**Content from source + v1:**

**Documenting the ideal, not the actual.** People describe how work should happen. The process document says one thing; reality says another. Ask "show me" instead of "tell me." Observe actual work.

**Skipping quantification.** "We know it's expensive" isn't a business case. "It's obviously valuable" doesn't get budget approved. No dollars = no business case = no funding for Phase 3.

**Automating the mess.** The pressure to move fast is real. But AI amplifies whatever process it touches. If the process is chaos, AI creates faster chaos. Run the Mess-O-Meter. Standardize first if needed.

**From v1 (if space):**
**Ignoring data readiness.** The excitement to start building is strong. But a model built on data you don't own, can't access, or that violates compliance is a model you'll rebuild.

---

## Writing Quality Gates

### Anti-AI Patterns to Avoid

**Banned words:** transformative, crucial, seamlessly, leverage, robust, navigate, landscape, delve, foster

**Banned patterns:**
- "X isn't just Y; it's Z"
- "Furthermore," "Moreover," "Additionally"
- Trailing "-ing" importance claims
- Inanimate subjects doing things

**Human markers to include:**
- Specific examples with names, numbers, dates
- Personal observations: "I've seen...", "I've watched..."
- Direct opinions backed by reasoning
- Varied sentence lengths

### Content Format Spec Requirements

- Tables: 3-4 rows max (except POV vs POC table which is 4 rows—acceptable)
- Bullet lists: 5 items max
- Start sections with prose, not lists
- End sections with punchy sentences
- Vary structure across adjacent subsections
- Include specific numbers throughout
- At least one story/example per major section

---

## Reusable Elements from v1

**Good hooks:**
- "Most AI projects die in assessment, not implementation."
- "They die because someone couldn't answer basic questions: What does this cost today? What's the realistic payback? Who owns the data?"

**Good specific examples:**
- "$51,000/year in labor" (paralegal calculation)
- "$340,000 in annual claims rework" (insurance company)
- "6-month initiative stall for 4 months on data access negotiations"
- "Three months of work scrapped" (healthcare HIPAA miss)

**Good methodological points:**
- Four cost categories (labor, error, delay, opportunity)
- "Don't estimate. Interview the people doing the work."
- "Leadership will challenge your assumptions. Have the receipts."
- Data quality depends on use case—recommendation vs. fraud detection

**What to drop:**
- Build vs. Buy section (now Phase 3)
- ROI modeling details (now Phase 3)
- Vendor evaluation (now Phase 3)
- "Governance Lens" framing—replace with "Framework Connections"

---

## New Elements to Incorporate

From the source README that weren't in v1:

1. **POV vs. POC distinction** — Critical differentiator, anchor for whole phase
2. **Mess-O-Meter** — Process readiness diagnostic with Green/Yellow/Red/Black scoring
3. **Readiness Scorecard** — Dual dimension (process + trustworthiness)
4. **Trustworthiness baseline** — Error rates, oversight mechanisms, data provenance
5. **NIST mapping table** — Governance credibility
6. **Exit criteria checklist** — Concrete completion markers
7. **"Cost of risk" in quantification** — Hallucination, data leak potential

---

## Estimated Sections and Word Counts

| Section | Estimated Words | Primary Format |
|---------|-----------------|----------------|
| Opening Hook | 100-150 | Prose |
| Framework Connections | 80-100 | Table + prose |
| POV vs. POC | 150-200 | Table + test statement |
| Key Activities (4 subsections) | 500-600 | Mixed |
| Readiness Scorecard | 100-120 | Table + insight |
| Data Readiness Assessment | 250-300 | 4 subsections with bold questions |
| NIST Mapping | 80-100 | Table + closer |
| Phase Output | 100-120 | Deliverable + quote |
| Exit Criteria | 80-100 | Checklist |
| Common Mistakes | 150-200 | Bold paragraphs |

**Total:** ~1,500-1,900 words

Slightly longer than Phase 1 because this phase has more activities and the POV vs. POC section is important enough to warrant space.

---

## Next Steps

1. Review this brief and approve direction
2. Draft content following section structure
3. Apply anti-AI writing check
4. Review against content-format-spec checklist
5. Finalize frontmatter if any changes needed
