# Content Brief: Phase 3 — Design

**Page:** `/playbook/phase-3-design`
**Source:** `/ai-transformation-playbook/phases/03-design/README.md`
**Reference:** `/src/reference/playbook-v1/phase-3-architecture.mdx` (good writing examples)

---

## Page Purpose

Demonstrate methodology for making informed build vs. buy decisions, evaluating vendors, and designing solutions based on strategic intent. This phase answers what you're going to build (or buy) and how.

**Phase question:** What are we going to build (or buy)?

---

## Content Architecture

### Key Structural Changes from v1

The old "Architecture" phase focused heavily on technical implementation. The new "Design" phase shifts upstream to strategic decisions that happen before implementation.

**Keep from v1:**
- Quick wins approach (start contained, prove value)
- Some architecture principles
- Good specific examples (recommendation model story, unified platform failure)

**Add from source README:**
- Intent Filter (Cost Center vs. Revenue Center) — major new addition
- Build vs. Buy framework (moved FROM old Phase 2)
- Buy + Build Vertical strategy (resolves binary thinking)
- Use Case Intake Form (governance classification)
- GAI-specific concerns (confabulation, information integrity, etc.)
- NIST mapping table

**Move to Phase 4: Govern:**
- Model Gate checkpoint details (now part of Govern phase)
- Detailed failure mode analysis
- Bias testing details
- Red team review details

**Note:** The v1 content had extensive Model Gate coverage. In the new 6-phase structure, that checkpoint belongs in Phase 4: Govern. Keep only a brief mention here with forward reference.

---

### Section 1: Opening Hook

**Goal:** Establish stakes, preview the phase question, set up the strategic nature of design decisions.

**Structure:**
- Punchy opening about why design decisions matter
- Context on what this phase does
- State the phase question explicitly

**Content direction:**

The source README has good framing: "Binary 'build or buy' thinking creates deadlock."

The v1 had: "Most AI projects focus on the model and treat everything else as an afterthought."

New angle: This phase is about strategic decisions, not just technical architecture. The Intent Filter determines everything downstream.

**Draft elements:**
- Hook: Binary "build or buy" debates can stall projects for months. Engineers want to build. Executives want to buy. Both are usually wrong.
- Context: Design isn't about picking technology—it's about making strategic decisions that align with business intent.
- Question callout: **"What are we going to build (or buy)?"**

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
| **BSPF** | Step 5: Encode algorithms, develop solution approach |
| **Governance** | Risk classification, third-party oversight (NIST Govern 6.1-6.2, Measure 1.1) |
| **Change Management** | Co-design with end users; address concerns early before they become resistance |

**Closer:** Something about how the Intent Filter (Cost Center vs. Revenue Center) shapes every decision in this phase.

---

### Section 3: The Intent Filter (NEW—key differentiator)

**Goal:** Establish the strategic decision that shapes everything else in this phase.

**Structure:** Prose intro explaining the concept, then comparison table, then insight.

**Content from source:**

This is the "North Star" for Phase 3. It aligns with NIST Govern 1.2 (Accountability) and Map 1.1 (Context).

| Intent | Strategy | Governance Focus |
|--------|----------|------------------|
| **Cost Center** (Internal Efficiency) | Favor buying the rails | Internal data security, employee productivity. Goal: reduce toil, speed up outcomes |
| **Revenue Center** (External Growth) | Favor building or Buy + Build Vertical | Customer trust, public fairness, brand reputation. Goal: build the moat |

**Key insight (from source):** "A revenue-generating AI agent that touches customers is fundamentally different from an internal efficiency tool. The governance requirements, risk tolerance, and accountability structures diverge significantly."

**Writing notes:**
- This is the conceptual anchor for the whole phase
- Every subsequent decision flows from this filter
- This distinguishes expert practice from "just pick a vendor"

---

### Section 4: Build vs. Buy Framework

**Goal:** Provide the decision framework that moves past binary thinking.

**Structure:** Prose intro, comparison table, then introduce the third option.

**Content from source + v1 Phase 2:**

| Factor | Favors Build | Favors Buy |
|--------|--------------|------------|
| **Competitive advantage** | Core differentiator | Commodity capability |
| **Data sensitivity** | Can't share externally | Acceptable vendor access |
| **Internal capability** | Have ML/engineering talent | Lack expertise |
| **Time to value** | Can invest in development | Need immediate solution |
| **Long-term cost** | Lower TCO at scale | Higher TCO but faster start |

**Then introduce Buy + Build Vertical:** Binary thinking creates deadlock. The hybrid strategy resolves this.

---

### Section 5: Buy + Build Vertical (NEW—key framework)

**Goal:** Present the hybrid strategy that resolves build vs. buy deadlock.

**Structure:** Prose explanation, then 3-row table showing the split, then accountability insight.

**Content from source:**

**Buy the Rails:** Purchase commodity AI infrastructure (the LLM, RAG pipeline, cloud hosting). Don't waste 12+ months building what already exists.

**Build the Moat:** Develop the vertical domain layer—proprietary methodology, expert knowledge, and specialized workflows that no generic vendor can provide.

| Layer | Strategy | Ownership |
|-------|----------|-----------|
| **Infrastructure** (LLM, hosting, RAG) | Buy | Vendor provides, you configure |
| **Domain/Expertise** (methodology, knowledge) | Build | You own completely |
| **Outputs** (customer-facing results) | Yours | Full accountability regardless of vendor |

**Critical insight (from source):** "You can outsource infrastructure, but you cannot outsource accountability. The vendor provides the rails; you own the quality and trustworthiness of what it produces."

This satisfies NIST Govern 6.2 (Third-party risk).

**Writing notes:**
- This is a major differentiator from typical consulting approaches
- Resolves the common deadlock that stalls projects
- The accountability point is crucial for governance credibility

---

### Section 6: Vendor Evaluation (If Buying)

**Goal:** Cover vendor evaluation for the "buy" path.

**Structure:** Brief—this is detailed work, not conceptual. List key considerations.

**Content direction:**

The Vendor Evaluation Scorecard covers:
- Technical capability fit
- Security and compliance posture
- Integration complexity
- Pricing model and TCO
- Support and SLA quality

**GAI-specific questions (from source):**
- What's the vendor's policy on training on your user data?
- How do they handle confabulation/hallucination?
- What's their content provenance approach?

Keep this section shorter—the tool does the heavy lifting.

---

### Section 7: Use Case Intake & Risk Classification

**Goal:** Cover the governance checkpoint that classifies risk level.

**Structure:** Brief intro, list of 12 key questions (summarized), then risk classification table.

**Content from source:**

The Use Case Intake Form covers 12 areas:
- Data rights and sources
- Bias testing approach
- Explainability requirements
- Human oversight design
- Compliance requirements
- Monitoring plan

**Risk Classification (from source):**

| Risk Level | Approval Routing |
|------------|------------------|
| **Low** | Gatekeeper approval |
| **Medium** | Department + SME review |
| **High** | Full governance committee |
| **Prohibited** | Rejected |

**Writing notes:**
- This positions governance as enabling, not blocking
- Risk classification determines governance intensity in Phase 4
- The routing shows organizational maturity

---

### Section 8: GAI-Specific Concerns (NEW)

**Goal:** Address Generative AI-specific risks from NIST AI 600-1.

**Structure:** 4-row table with concern, question, and why it matters.

**Content from source:**

| Concern | Question to Answer | Why It Matters |
|---------|-------------------|----------------|
| **Confabulation Management** | How will the system signal uncertainty? | Prevents blind trust in hallucinated outputs |
| **Information Integrity** | What's the vendor's policy on training data? | Protects IP and prevents data leakage |
| **Human-AI Configuration** | Is the interface designed to prevent automation bias? | Maintains appropriate human oversight |
| **Content Provenance** | How will users know output was AI-generated? | Enables accountability and transparency |

**Writing notes:**
- These concerns are specific to GAI, not general AI/ML
- This shows current thinking (NIST AI 600-1 is recent)
- Differentiates from older AI governance frameworks

---

### Section 9: Quick Wins First (from v1)

**Goal:** Preserve the strategic advice about starting contained.

**Structure:** Prose with numbered characteristics of a good quick win.

**Content from v1 (adapt):**

Don't start with the enterprise-wide AI platform. Start with a contained problem that proves value.

A good quick win has four characteristics:
1. **Clear boundaries** — You know where it starts and ends
2. **Measurable outcome** — You can tell if it worked
3. **Limited blast radius** — If it fails, the damage is contained
4. **Path to scale** — Success creates options, not dead ends

**Great v1 example to keep:** "One contract review assistant handling a specific clause type beats a general-purpose legal AI that handles nothing well. I watched a financial services firm spend 18 months building a 'unified AI platform' that never launched. Meanwhile, a competitor shipped six focused solutions and learned more in month one than the platform team learned in the entire project."

---

### Section 10: NIST AI RMF Mapping

**Goal:** Connect activities to specific NIST subcategories.

**Structure:** 4-row table with Activity | NIST Mapping | Consulting Level-Up

**Content from source:**

| Activity | NIST Mapping | Consulting Level-Up |
|----------|--------------|---------------------|
| **Build vs. Buy Matrix** | Govern 6.1-6.2 | Evaluate GAI providers on training data transparency and PII safeguards |
| **Solution Architecture** | Measure 1.1, 1.3 | Design instrumentation to track confabulation rates from Day 1 |
| **Use Case Intake** | Map 1.1, 1.5, 5.1 | Satisfy "Context" and "Impact" mapping requirements |
| **Risk Classification** | Manage 1.1 | Ensure "High Risk" triggers specific NIST Manage actions |

---

### Section 11: Phase Output

**Goal:** Make the deliverable concrete.

**Structure:** Opening statement, then example stakeholder quote.

**Content from source:**

By the end of Phase 3, your Gap Analysis shifts from organization-level gaps to system-level gaps.

**Example delivery quote (from source):**
> "While our general governance is maturing, this specific GAI solution has a gap in Measure 2.11 (confabulation management). We must include a confidence-signaling layer in our architecture before moving to the Govern phase."

The output is a documented design decision:
- Intent classification (Cost Center or Revenue Center)
- Build/Buy/Hybrid decision with rationale
- Vendor selection (if buying) with contract terms
- Risk classification with required governance controls
- TCO estimate with assumptions

---

### Section 12: Exit Criteria

**Goal:** Clear checklist for when this phase is complete.

**Structure:** Checklist with 7-8 items.

**Content from source:**

Before moving to **Govern**:
- [ ] Intent Filter applied (Cost Center vs. Revenue Center)
- [ ] Build vs. buy decision made and documented
- [ ] Time to value validated against stakeholder patience threshold
- [ ] Vendor selected (if buying) with data policies documented
- [ ] Solution architecture defined (if building)
- [ ] Use Case Intake Form completed with GAI concerns addressed
- [ ] Risk classification assigned
- [ ] TCO estimated with assumptions documented

---

### Section 13: Common Mistakes

**Goal:** Show expertise through knowing what goes wrong.

**Structure:** Bold paragraphs (varies structure from tables earlier).

**Content from source + v1:**

**Binary build-or-buy thinking.** Teams get stuck debating for months. Consider Buy + Build Vertical—most solutions are hybrid. Buy the infrastructure, build the expertise, own the outputs.

**Building when you should buy.** Custom solutions feel like control. They're also maintenance burden, hiring dependency, and technical debt. Unless differentiation requires custom, buy the rails.

**Buying without governance.** "It's just SaaS" doesn't excuse you from responsibility. You own the outputs regardless of who provides the infrastructure. Document vendor data policies. Verify compliance posture.

**Same governance for all use cases.** A customer-facing revenue agent needs different controls than an internal efficiency tool. The Intent Filter exists for a reason. Scale governance to risk.

**From v1 (if space):**
**Big bang implementation.** I've never seen a company successfully deploy a "unified AI platform" as their first AI project. Quick wins build credibility. Boil-the-ocean architectures destroy it.

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

- Tables: 3-4 rows max
- Bullet lists: 5 items max
- Start sections with prose, not lists
- End sections with punchy sentences
- Vary structure across adjacent subsections
- Include specific numbers throughout
- At least one story/example per major section

---

## Reusable Elements from v1

**Good hooks:**
- "Most AI projects focus on the model and treat everything else as an afterthought."

**Good specific examples:**
- "Team spent four months building a sophisticated recommendation model, only to discover they had no way to get product catalog updates into the system faster than once per week."
- "Financial services firm spent 18 months building a 'unified AI platform' that never launched."
- "One team's model ran fine on sample data but took 47 seconds per inference at full scale."

**Good methodological points:**
- Quick wins approach (four characteristics)
- "The model is a component, not the system"

**What to move to Phase 4: Govern:**
- Model Gate checkpoint (5 validation areas)
- Detailed bias testing
- Red team review
- Failure mode analysis template

---

## New Elements to Incorporate

From the source README that weren't in v1:

1. **Intent Filter** — Cost Center vs. Revenue Center (anchor concept)
2. **Buy + Build Vertical** — Hybrid strategy that resolves deadlock
3. **Use Case Intake Form** — 12-question governance checkpoint
4. **GAI-specific concerns** — Confabulation, information integrity, human-AI config, provenance
5. **Risk classification routing** — Low/Medium/High/Prohibited
6. **NIST mapping table** — Governance credibility
7. **System-level gap analysis** — Phase output framing

---

## Estimated Sections and Word Counts

| Section | Estimated Words | Primary Format |
|---------|-----------------|----------------|
| Opening Hook | 100-120 | Prose |
| Framework Connections | 80-100 | Table + prose |
| Intent Filter | 150-180 | Table + insight |
| Build vs. Buy Framework | 120-150 | Table + intro |
| Buy + Build Vertical | 180-220 | Table + accountability insight |
| Vendor Evaluation | 80-100 | Brief list |
| Use Case Intake & Risk | 120-150 | Summary + table |
| GAI-Specific Concerns | 120-150 | 4-row table |
| Quick Wins First | 150-180 | Numbered list + story |
| NIST Mapping | 80-100 | Table + closer |
| Phase Output | 100-120 | Quote + list |
| Exit Criteria | 80-100 | Checklist |
| Common Mistakes | 150-180 | Bold paragraphs |

**Total:** ~1,500-1,750 words

Similar length to Phase 1 and 2. The Intent Filter and Buy + Build Vertical sections are meaty because they're key differentiators.

---

## Next Steps

1. Review this brief and approve direction
2. Draft content following section structure
3. Apply anti-AI writing check
4. Review against content-format-spec checklist
5. Finalize frontmatter if any changes needed
