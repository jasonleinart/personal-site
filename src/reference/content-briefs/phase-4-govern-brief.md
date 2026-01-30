# Content Brief: Phase 4 — Govern

**Page:** `/playbook/phase-4-govern`
**Source:** `/ai-transformation-playbook/phases/04-govern/README.md`
**Reference:** `/src/reference/playbook-v1/phase-3-architecture.mdx` (Model Gate content moves here)

---

## Page Purpose

Demonstrate methodology for implementing oversight and controls before deployment. This phase converts governance plans into implemented controls with sign-off. It's the phase that builds trust required for successful adoption.

**Phase question:** How do we do this responsibly?

---

## Content Architecture

### Key Structural Note

This phase is **almost entirely new**. The old 5-phase model had no dedicated Govern phase—governance was scattered across Architecture and mentioned as an afterthought.

**Pull from old Phase 3 (Architecture):**
- Model Gate checkpoint (5 validation areas)
- Technical validation
- Bias testing
- Explainability review
- Failure mode sign-off
- Red team review
- Good examples (hiring model bias, customer service bot red team)

**New from source README:**
- Governance by Intent (scales controls based on Cost Center vs Revenue Center)
- Split Accountability for Buy + Build Vertical
- BSPF Gate Integration (Data Gate + Model Gate together)
- Shadow AI Policy approaches
- Incident Severity Framework
- NIST mapping with implementation focus
- Governance Attestation (not just planning—implemented)

---

### Section 1: Opening Hook

**Goal:** Establish why a dedicated Govern phase matters, preview the question.

**Structure:**
- Punchy opening about governance as trust-builder
- Context on what this phase does
- State the phase question explicitly

**Content direction:**

Source README insight: "Governance isn't a checkbox—it's how you build the trust required for successful adoption."

The old v1 had governance scattered. This phase makes it explicit and mandatory.

**Draft elements:**
- Hook: Abstract policies about "responsible AI" mean nothing until they become specific controls. What bias testing did you perform? What happens when the model fails? Who can explain why it made a decision?
- Context: This phase converts requirements into implemented controls with sign-off.
- Question callout: **"How do we do this responsibly?"**

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
| **BSPF** | Gates (Data Gate, Model Gate) enforce quality checkpoints |
| **Governance** | Full implementation: failure modes, red teaming, RACI, KRIs (NIST Measure 2.1-2.13, Govern 2.1-2.2) |
| **Change Management** | Clarify accountability; build trust through transparency |

**Closer:** Something about how this phase is where governance goes from planning to attestation.

---

### Section 3: Governance by Intent (scales from Phase 3)

**Goal:** Show how governance intensity varies based on the Intent Filter.

**Structure:** Brief intro referencing Phase 3, then two comparison sections (Cost Center vs Revenue Center).

**Content from source:**

### Cost Center (Internal Efficiency)

| Focus | Key Controls | Quality Gate Focus |
|-------|--------------|-------------------|
| Productivity gains, operational risk | Automation bias monitoring, internal data privacy | **Data Gate**: Authorized use of internal corporate knowledge |

### Revenue Center (External Growth)

| Focus | Key Controls | Quality Gate Focus |
|-------|--------------|-------------------|
| Public safety, brand reputation | Rigorous red-teaming, output provenance | **Model Gate**: External bias testing, legal review of expertise layer |

**Key insight:** One-size-fits-all governance fails. Internal tools need different controls than customer-facing agents.

---

### Section 4: Split Accountability (Buy + Build Vertical)

**Goal:** Address governance when using hybrid strategy from Phase 3.

**Structure:** Brief prose intro, then 2-row table showing the split.

**Content from source:**

If you chose Buy + Build Vertical in Phase 3, governance splits across two layers:

| Layer | Governance Focus | NIST Alignment |
|-------|------------------|----------------|
| **"Buy" Layer** (Infrastructure) | Vendor oversight—verify platform meets security/reliability standards | Govern 6.1-6.2 (Third-party risk) |
| **"Build" Layer** (Expertise) | Full organizational accountability—failure modes focus on your encoded expertise | Measure 2.1-2.13 (Failure modes) |

**Critical insight (from source):** "You can outsource infrastructure, but you cannot outsource accountability. The vendor provides the rails; you own the quality and trustworthiness of what it produces."

---

### Section 5: Key Activities

**Goal:** Walk through what actually happens in this phase.

**Structure:** Mix of subsections with varied formats.

#### 5a. Failure Mode Assessment

**Content from source + v1:**

Identify applicable failure modes:
- Hallucination/confabulation
- Bias and fairness issues
- Model drift
- Data quality degradation
- Integration brittleness
- Single points of failure

For each: Rate likelihood, rate impact, define mitigations, define monitoring.

**From v1 Phase 3 (good content):**
- "Every system fails. The question is whether you designed for it."
- Insurance company claims AI with no fallback during hurricane example

#### 5b. Red Team Testing

**Content from v1 Phase 3:**

**Has someone tried to break it?**

Red teaming isn't QA—it's creative destruction. Find vulnerabilities before users do.

**Great v1 example:** "One red team session found a customer service bot would cheerfully provide refund instructions for products the company didn't sell. Nobody had tested what happened when users lied about their purchases."

Go/no-go decision based on findings. Document vulnerabilities and remediations.

#### 5c. Accountability Setup (RACI)

**Content from source:**

- RACI matrix for all governance activities
- Three Lines of Defence roles assigned
- Escalation paths defined
- **Named individuals, not teams** — diffuse accountability is no accountability

#### 5d. Monitoring Configuration (KRIs)

**Content from source:**

- KRI thresholds defined
- Dashboards configured
- Alert protocols established

Connect to Incident Severity Framework (covered later).

#### 5e. Shadow AI Policy (NEW)

**Content from source:**

Shadow AI—employees using ChatGPT, Claude, Gemini without approval—creates governance risk. But prohibition alone rarely works.

**Two strategic approaches:**

| Approach | When to Use | Implementation |
|----------|-------------|----------------|
| **Prohibition** | Highly regulated environments; severe data sensitivity | Clear policy, enforcement, acceptable use training |
| **Pave the Desire Paths** | Most organizations | Provide sanctioned enterprise alternatives that are *better* than consumer options |

**JPMorgan example from source:** Their LLM Suite brought AI usage "back into the light" by making the secure option objectively better than public alternatives.

---

### Section 6: BSPF Gate Integration

**Goal:** Explain the two quality gates that enforce checkpoints.

**Structure:** Two subsections with checkpoint tables.

#### Data Gate (validates before modeling)

**Content from source:**

| Checkpoint | Question |
|------------|----------|
| Data Ownership | Who owns this data? Is use authorized? |
| Data Quality | Accurate, complete, timely? |
| Privacy/Compliance | PII, GDPR, regulatory concerns? |
| Representativeness | Reflects current business reality? |

#### Model Gate (validates before deployment)

**Content from source + v1:**

| Checkpoint | Question |
|------------|----------|
| Technical Validation | Performs at production scale? |
| Business Validation | Makes sense to domain experts? |
| Bias/Fairness | Treats segments equitably? |
| Explainability | Can explain to stakeholders? |
| Failure Modes | Assessed and mitigated? |
| Red Teaming | Adversarially tested? |

**From v1 Phase 3 (good examples):**

**Technical validation:** "One team's model ran fine on sample data but took 47 seconds per inference at full scale. They found out in production."

**Bias testing:** "A hiring model that worked great in aggregate turned out to systematically underrate candidates from certain universities—not from explicit bias, but because training data reflected a decade of biased human decisions."

**Explainability:** "High-stakes decisions like lending or hiring require full explainability. Recommendations need enough for user trust. Internal automation might only need explainability for debugging."

---

### Section 7: Incident Severity Framework

**Goal:** Define response protocols when issues occur.

**Structure:** 4-row table with escalating severity.

**Content from source:**

| Level | Trigger | Response |
|-------|---------|----------|
| **1 - Low** | Minor deviations, within thresholds | Routine monitoring |
| **2 - Medium** | Below target thresholds, no exposure | 24-hour corrective action |
| **3 - High** | Significant issues, potential exposure | System restriction, emergency team |
| **4 - Critical** | Confirmed harm or breach | Complete shutdown, external notification |

---

### Section 8: NIST AI RMF Mapping

**Goal:** Connect activities to specific NIST subcategories.

**Structure:** 4-row table with Activity | NIST Mapping | Integration Point

**Content from source:**

| Activity | NIST Mapping | Integration Point |
|----------|--------------|-------------------|
| **Failure Mode Assessment** | Measure 2.1-2.13 | Rate GAI-specific risks like confabulation and NCII |
| **Accountability (RACI)** | Govern 2.1-2.2 | Define who owns risk of agent outputs—especially Revenue Center |
| **Monitoring (KRIs)** | Measure 4.1-4.3 | Define thresholds that trigger Incident Severity Framework |
| **Red Teaming** | Measure 2.7 | Stress-test expertise layer against adversarial prompts |

---

### Section 9: Phase Output

**Goal:** Make the deliverable concrete—attestation, not just plans.

**Structure:** Opening statement emphasizing attestation, then example quote.

**Content from source:**

At this stage, your Gap Analysis is no longer a "plan"—it is an **Attestation**.

**Example delivery quote (from source):**
> "For this Revenue Center agent, we have closed the gap in Manage 4.3 by implementing a real-time safety layer that filters all external outputs. All Phase 4 Exit Criteria have been met, and the system is cleared for the Adopt phase."

The Govern phase converts governance requirements into implemented controls with sign-off. This builds the trust required for successful adoption.

---

### Section 10: Exit Criteria

**Goal:** Clear checklist for when this phase is complete.

**Structure:** Checklist with 8-9 items.

**Content from source:**

Before moving to **Adopt**:

- [ ] Failure modes assessed with mitigations documented (including GAI-specific)
- [ ] Red team testing completed with findings addressed
- [ ] RACI matrix approved by all accountable parties
- [ ] KRI thresholds defined and monitoring configured
- [ ] Data Gate passed (if applicable)
- [ ] Model Gate passed (if applicable)
- [ ] Deployment approval obtained per risk classification
- [ ] Governance attestation signed (not just planned—implemented)
- [ ] For Revenue Center: Legal review of expertise layer completed

---

### Section 11: Common Mistakes

**Goal:** Show expertise through knowing what goes wrong.

**Structure:** Bold paragraphs.

**Content from source + v1:**

**Governance as checkbox.** Teams rush through to ship. But governance builds trust. If stakeholders don't trust the Govern phase, they'll resist adoption. Take it seriously or watch adoption fail.

**Skipping red team.** "It's low risk" isn't an excuse. Even internal agents can leak PII or produce discriminatory content if not tested adversarially. The customer service bot that gives refund instructions for products you don't sell? That's a red team finding.

**Unclear accountability.** Everyone assumes someone else owns the risk. Named individuals in RACI, with sign-off. Diffuse accountability is no accountability.

**KRIs without monitoring.** Defining thresholds means nothing if dashboards aren't configured. Set up monitoring before go-live, not after the first incident.

**Same controls for all intents.** Cost Centers need different governance than Revenue Centers. Scale controls to actual risk. Over-governing low-risk tools creates friction. Under-governing high-risk agents creates liability.

**From v1 Phase 3:**
**Treating gates as formality.** Problems caught here cost 10x less than problems in production, 100x less than problems that make the news.

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

- Tables: 3-4 rows max (Incident Severity is 4 rows—acceptable)
- Bullet lists: 5 items max
- Start sections with prose, not lists
- End sections with punchy sentences
- Vary structure across adjacent subsections
- Include specific numbers throughout
- At least one story/example per major section

---

## Reusable Elements from v1 Phase 3

**Good hooks:**
- "Architecture is where governance gets concrete."
- "Every system fails. The question is whether you designed for it."

**Good specific examples:**
- Customer service bot refund instructions for non-existent products
- Hiring model bias from university data
- 47 seconds per inference at scale
- Insurance company claims AI with no fallback during hurricane

**Good methodological points:**
- Model Gate 5 validation areas
- "Problems caught here cost 10x less than problems in production"
- "Red teaming isn't QA—it's creative destruction"

---

## New Elements to Incorporate

From the source README:

1. **Governance by Intent** — Scales controls based on Cost Center vs Revenue Center
2. **Split Accountability** — For Buy + Build Vertical governance
3. **BSPF Gate Integration** — Data Gate + Model Gate together
4. **Shadow AI Policy** — Prohibition vs. pave the desire paths
5. **Incident Severity Framework** — 4-level response protocol
6. **Governance Attestation** — Not plans, implemented controls with sign-off
7. **NIST mapping** — Implementation-focused

---

## Estimated Sections and Word Counts

| Section | Estimated Words | Primary Format |
|---------|-----------------|----------------|
| Opening Hook | 100-120 | Prose |
| Framework Connections | 80-100 | Table + prose |
| Governance by Intent | 150-180 | Two comparison tables |
| Split Accountability | 100-120 | Table + insight |
| Key Activities (5 subsections) | 450-550 | Mixed |
| BSPF Gate Integration | 200-250 | Two checkpoint tables + examples |
| Incident Severity Framework | 100-120 | 4-row table |
| NIST Mapping | 80-100 | Table + closer |
| Phase Output | 100-120 | Attestation emphasis + quote |
| Exit Criteria | 80-100 | Checklist |
| Common Mistakes | 180-220 | Bold paragraphs |

**Total:** ~1,600-1,900 words

Slightly longer because this phase is dense with new concepts (Shadow AI, Split Accountability, two gates, Incident Severity).

---

## Next Steps

1. Review this brief and approve direction
2. Draft content following section structure
3. Apply anti-AI writing check
4. Review against content-format-spec checklist
5. Finalize frontmatter if any changes needed
