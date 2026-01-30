# Content Brief: Phase 6 — Prove

**Page:** `/playbook/phase-6-prove`
**Source:** `/ai-transformation-playbook/phases/06-prove/README.md`
**Reference:** `/src/reference/playbook-v1/phase-5-measurement.mdx` (old Phase 5 becomes new Phase 6)

---

## Page Purpose

Demonstrate methodology for closing the loop with measurement, validating ROI against Phase 2 baselines, and building credibility for future initiatives. This phase delivers Proof of Value—the quantified business impact that justifies continued investment.

**Phase question:** Did it actually work?

---

## Content Architecture

### Key Structural Note

The old Phase 5 (Measurement) and new Phase 6 (Prove) cover similar ground, but the new source adds critical concepts:

**Keep from v1:**
- Good specific examples ($1.2M investment nobody proved, 12% adoption flatline, manufacturing model drift, financial services no rollback)
- ROI validation table with variance column
- Adoption metrics (usage, sentiment, productivity)
- Deployment Gate concept (decision authority, operational integration, monitoring, rollback, accountability)
- Continuous monitoring principles

**Add from source README:**
- Outcome Validation Strategy (dual-track: Business Value + Trustworthiness Attestation)
- Expertise Layer Validation for Buy + Build Vertical
- Variance Diagnosis table (Data/Architecture/User Input/Drift)
- 90-Day ROI Validation as the definitive phase output
- Scale/Retool/Retire decision framework
- Structured measurement framework (Financial, Operational, Adoption metrics)
- Continuous Monitoring cadences (daily → annually)
- "This phase doesn't really exit—it becomes ongoing operations"

---

### Section 1: Opening Hook

**Goal:** Establish that measurement closes the loop, preview the phase question.

**Structure:**
- Punchy opening about proving value, not just deploying
- Context on what this phase does
- State the phase question explicitly

**Content direction:**

The v1 had excellent framing: "I've watched organizations declare AI initiatives successful based on deployment dates, not business outcomes. Eighteen months later, nobody could say whether the $1.2M investment had paid back."

Source README insight: "This phase delivers Proof of Value, not just Proof of Concept. The quantification from Phase 2 becomes the baseline; Phase 6 validates whether you achieved the projected impact."

**Draft elements:**
- Hook: Deployment isn't success. An AI initiative that launched but never proved value is an initiative that failed quietly—nobody noticed because nobody measured.
- Context: This phase closes the loop between projections and reality. The baseline from Phase 2 finally gets validated.
- Question callout: **"Did it actually work?"**

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
| **BSPF** | Steps 6-7: Measure results, report financial impact |
| **Governance** | KRI tracking, continuous monitoring, attestation (NIST Measure 1.1-1.2, 3.1-3.2, 4.2-4.3) |
| **Change Management** | Adoption metrics, user satisfaction, organizational learning |

**Closer:** This phase fulfills the Measure and Manage functions of the NIST RMF—continuous monitoring and organizational learning.

---

### Section 3: Outcome Validation Strategy (NEW)

**Goal:** Establish the dual-track measurement approach.

**Structure:** Brief intro, then 2-row table showing the tracks.

**Content from source:**

This phase validates "Driver Hypotheses" from Phase 1 against real-world data using dual-track measurement:

| Track | What You Measure | Tools |
|-------|------------------|-------|
| **Business Value** | Actual financial/operational gains vs. Phase 2 baselines | ROI Calculator, Post-Implementation Tracker |
| **Trustworthiness Attestation** | System operating within safety/fairness thresholds from Phase 4 | KRI Dashboard, Incident Log |

**Key insight:** For Revenue Center agents, trustworthiness attestation is critical for maintaining brand trust. You're not just proving ROI—you're proving the system is safe to keep running.

---

### Section 4: The Measurement Framework

**Goal:** Provide the structured metric categories.

**Structure:** Three subsections with tables (Financial, Operational, Adoption).

**Content from source:**

#### Financial Metrics

| Metric | How to Measure | Target |
|--------|----------------|--------|
| **Hard savings** | Direct cost reduction (labor, errors) | Per business case |
| **Soft savings** | Time redeployed to higher-value work | Estimate + validate |
| **Revenue impact** | New revenue enabled, revenue protected | Per business case |
| **Payback period** | Time to recoup investment | Per risk tolerance |

#### Operational Metrics

| Metric | How to Measure | Target |
|--------|----------------|--------|
| **Process efficiency** | Time per transaction, error rate | Baseline + improvement |
| **System reliability** | Uptime, response time | Per SLA |
| **Model performance** | Accuracy, precision, recall | Per Model Gate targets |

#### Adoption Metrics

| Metric | How to Measure | Target |
|--------|----------------|--------|
| **Usage rate** | Active users / eligible users | >80% |
| **Satisfaction** | Survey scores, NPS | >4.0/5.0 |
| **Override rate** | Human corrections / AI outputs | 10-30% (healthy range) |

**Writing note:** Consider condensing to 2 subsections (Business + Operations/Adoption combined) to stay within table guidelines.

---

### Section 5: ROI Validation

**Goal:** Show how to compare actual vs. projected.

**Structure:** Prose intro, then example table with variance.

**Content from v1 + source:**

The Post-Implementation Tracker compares actual results to Phase 2 projections. This isn't about blame—it's about learning.

| Metric | Projected | Actual | Variance | Explanation |
|--------|-----------|--------|----------|-------------|
| Time saved per task | 45 min | 38 min | -16% | Edge cases take longer than modeled |
| Error reduction | 60% | 71% | +18% | Model catches errors humans normalized |
| Adoption rate (90 days) | 75% | 52% | -31% | Training gaps in regional offices |

**Key insight (v1):** Variance analysis matters more than hitting targets. A projection 30% optimistic on adoption but 20% pessimistic on time savings tells you about your modeling assumptions. Capture the learning or repeat the errors.

**From v1:** "Leadership doesn't care about minutes. They care about dollars." Translate metrics to business language.

---

### Section 6: Variance Diagnosis (NEW)

**Goal:** Provide troubleshooting framework when actual ≠ projected.

**Structure:** 3-row variance type table, then 4-row diagnosis table for Buy + Build Vertical.

**Content from source:**

| Variance Type | Questions to Ask | Actions |
|---------------|------------------|---------|
| **Positive variance** | What drove over-performance? Replicable? | Document, share, apply to next initiative |
| **Negative variance** | Adoption issue? Model issue? Assumption wrong? | Diagnose root cause; remediate or recalibrate |
| **Timing variance** | Faster or slower than expected? Why? | Adjust future projections |

**For Buy + Build Vertical (Expertise Layer validation):**

| Variance Source | Diagnostic Question | Remediation |
|-----------------|---------------------|-------------|
| **Data (Map)** | Is the knowledge base complete and current? | Update RAG corpus |
| **Architecture (Design)** | Are prompts correctly surfacing expertise? | Refine prompt engineering |
| **User Input (Adopt)** | Are users asking the right questions? | Additional prompting training |
| **Drift** | Has the base model changed behavior? | Re-evaluate vendor, adjust guardrails |

---

### Section 7: Continuous Monitoring

**Goal:** Establish that measurement is ongoing, not one-time.

**Structure:** Prose intro, then cadence table.

**Content from source + v1:**

Post-deployment monitoring never stops. Set thresholds that trigger alerts—don't wait for quarterly reviews to discover problems compounding for months.

| Cadence | What to Review | Owner |
|---------|----------------|-------|
| **Daily** | System health, critical KRIs | System Owner |
| **Weekly** | Usage trends, user feedback | Practice Lead |
| **Monthly** | All KRIs, adoption metrics | Governance Review |
| **Quarterly** | ROI progress, strategic alignment | Executive Review |

**Great v1 example:** One manufacturing client caught model drift within two weeks through continuous monitoring. The predictive maintenance system started recommending unnecessary service calls as equipment age distributions shifted. Without monitoring, they'd have burned through maintenance budget for months.

---

### Section 8: Phase Output — 90-Day ROI Validation (NEW)

**Goal:** Make the deliverable concrete with decision framework.

**Structure:** Prose intro, then decision table, then example quote.

**Content from source:**

The 90-Day ROI Validation Document provides evidence for leadership to make the Scale/Retool/Retire decision:

| Decision | Criteria | Next Action |
|----------|----------|-------------|
| **Scale** | Positive NPV, trustworthiness thresholds met | Apply pattern to next vertical |
| **Retool** | Business value present but high override rates or process issues | Return to Phase 2 for standardization |
| **Retire** | Exceeded risk tolerances or failed to deliver positive NPV | Sunset deployment; document lessons |

**Example delivery quote (from source):**
> "The 90-day validation shows a 23% improvement in task completion time and $180K in recaptured focus-hours against a projected $150K. Override rates are at 18%, within the healthy range. Trustworthiness KRIs are green. Recommendation: Scale to the next department."

---

### Section 9: Building Credibility

**Goal:** Position measurement as earning the right to do more.

**Structure:** Brief prose with bullet points.

**Content from source:**

This phase is how you earn the right to do the next initiative:

- **Transparent measurement** → Trust from leadership
- **Honest variance analysis** → Credibility for future projections
- **Documented lessons** → Faster, better next time
- **Adoption success** → Organizational belief in AI value

The organizations that measure rigorously are the ones that scale AI successfully.

---

### Section 10: Exit Criteria

**Goal:** Clear checklist, with note that this phase becomes ongoing operations.

**Structure:** Brief intro acknowledging ongoing nature, then checklist.

**Content from source:**

This phase doesn't really "exit"—it becomes ongoing operations. But key milestones:

- [ ] 30-day post-implementation review completed
- [ ] 90-day ROI validation documented with actual vs. projected
- [ ] Trustworthiness attestation confirmed (KRIs within thresholds)
- [ ] Override rates validated (10-30% healthy range)
- [ ] Expertise Layer fidelity validated (for Buy + Build Vertical)
- [ ] Lessons learned captured and formalized
- [ ] Ongoing monitoring transitioned to operations
- [ ] Scale/Retool/Retire decision made and documented

---

### Section 11: Common Mistakes

**Goal:** Show expertise through knowing what goes wrong.

**Structure:** Bold paragraphs.

**Content from source + v1:**

**Declaring victory early.** The temptation to move on is strong. But GAI systems can drift or reveal biases weeks after deployment. Commit to 90-day validation minimum. Measurement that stops at 30 days misses the adoption curves and operational issues that only emerge over time.

**Measuring activity, not outcomes.** "We processed 10,000 documents" isn't success. "We reduced contract review time by 40%" is. Activity feels productive. Outcomes prove value. "Logins" is a vanity metric—focus on task completion time and recaptured hours.

**Ignoring negative results.** Political pressure to declare success. Honest measurement builds credibility for future initiatives. A projection that was wrong is a learning opportunity, not a failure—unless you hide it.

**No learning loop.** Project ends, team disperses, lessons evaporate. Document what worked and what didn't before disbanding. Formalize into your governance profile so the organization learns.

**Treating 0% override as success.** Seems like the AI is perfect. It's a red flag for automation bias—users aren't exercising judgment. The healthy range is 10-30%.

**From v1:**
**One-time measurement.** A single ROI calculation at launch captures a snapshot that immediately becomes stale. Build continuous measurement or watch value erode undetected.

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

- Tables: 3-4 rows max (several tables in this phase push limits—consider condensing)
- Bullet lists: 5 items max
- Start sections with prose, not lists
- End sections with punchy sentences
- Vary structure across adjacent subsections
- Include specific numbers throughout
- At least one story/example per major section

---

## Reusable Elements from v1 Phase 5

**Good hooks:**
- "Deployment isn't success."
- "$1.2M investment and eighteen months later, nobody could say whether it paid back"

**Good specific examples:**
- Client whose adoption flatlined at 12% after initial training push—nobody noticed for five months
- Manufacturing client caught model drift within two weeks through continuous monitoring
- Financial services client with no rollback plan—four days of manual pricing
- ROI variance table with specific numbers (45 min projected, 38 min actual)

**Good methodological points:**
- Deployment Gate concept (decision authority, operational integration, monitoring, rollback, accountability)
- "Variance analysis matters more than hitting targets"
- "Leadership doesn't care about minutes. They care about dollars."
- Continuous monitoring with alert thresholds

---

## New Elements to Incorporate

From the source README that weren't in v1:

1. **Outcome Validation Strategy** — Dual-track (Business Value + Trustworthiness Attestation)
2. **Expertise Layer Validation** — For Buy + Build Vertical, validate domain fidelity
3. **Variance Diagnosis** — Troubleshooting framework (Data/Architecture/User/Drift)
4. **90-Day ROI Validation** — Definitive phase output document
5. **Scale/Retool/Retire** — Decision framework with clear criteria
6. **Structured Metric Framework** — Financial, Operational, Adoption categories
7. **Monitoring Cadences** — Daily through annually with owners
8. **"Doesn't exit"** — Becomes ongoing operations

---

## Estimated Sections and Word Counts

| Section | Estimated Words | Primary Format |
|---------|-----------------|----------------|
| Opening Hook | 100-120 | Prose |
| Framework Connections | 80-100 | Table + prose |
| Outcome Validation Strategy | 120-150 | Table + insight |
| Measurement Framework | 200-250 | 2-3 metric tables |
| ROI Validation | 150-180 | Table + variance analysis |
| Variance Diagnosis | 150-180 | Two tables |
| Continuous Monitoring | 120-150 | Cadence table + example |
| Phase Output (90-Day Validation) | 150-180 | Decision table + quote |
| Building Credibility | 80-100 | Prose + bullets |
| Exit Criteria | 80-100 | Checklist |
| Common Mistakes | 180-220 | Bold paragraphs |

**Total:** ~1,400-1,700 words

Slightly shorter than Phase 5 because some content is structural (tables with metrics) rather than prose-heavy. The key differentiators are the 90-Day ROI Validation output and the Scale/Retool/Retire decision framework.

---

## Structural Decision

**Deployment Gate (v1) vs. 90-Day ROI Validation (new source):**

The v1 had "Deployment Gate" as a key concept. The new source emphasizes "90-Day ROI Validation" instead. Options:

1. **Keep both:** Position Deployment Gate as the "before ongoing operations" checkpoint, 90-Day Validation as the "did it work" proof point
2. **Merge:** Incorporate Deployment Gate elements into exit criteria
3. **Replace:** Use 90-Day Validation as the anchor, drop Deployment Gate

**Recommendation:** Option 2—merge Deployment Gate into exit criteria. The 90-Day ROI Validation is the more distinctive output and better connects to the POV vs POC theme from Phase 2.

---

## Next Steps

1. Review this brief and approve direction
2. Draft content following section structure
3. Apply anti-AI writing check
4. Review against content-format-spec checklist
5. Finalize frontmatter if any changes needed
