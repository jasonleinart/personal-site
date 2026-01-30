# Content Brief: Phase 5 — Adopt

**Page:** `/playbook/phase-5-adopt`
**Source:** `/ai-transformation-playbook/phases/05-adopt/README.md`
**Reference:** `/src/reference/playbook-v1/phase-4-change-management.mdx` (old Phase 4 becomes new Phase 5)

---

## Page Purpose

Demonstrate methodology for driving organizational adoption through champion networks, resistance management, training, and psychological safety. This phase is where focused change management work happens—earlier phases planted seeds, now we harvest.

**Phase question:** How do we get people to actually use this?

---

## Content Architecture

### Key Structural Note

The old Phase 4 (Change Management) and new Phase 5 (Adopt) cover similar ground, but the new source adds critical concepts:

**Keep from v1:**
- Stakeholder influence/disposition matrix
- Resistance diagnosis framework (job security, skill gap, workflow, trust)
- Champion network characteristics (credibility, willingness, access)
- 30/60/90 training structure
- Communication sequencing (Awareness → Understanding → Adoption)
- Good specific examples ($2M contract platform unused, 62-year-old paralegal, manufacturing team)

**Add from source README:**
- Key insight: "Change management isn't Phase 5—it's the throughline"
- Adoption by Intent (scales based on Cost Center vs Revenue Center)
- Human Governance vs Technical Governance distinction
- The Over-Reliance Paradox (automation bias, healthy override rates 10-30%)
- Planted hallucination tests
- Adoption Scorecard as phase output
- Override Readiness metric

---

### Section 1: Opening Hook

**Goal:** Establish that technology works but adoption fails, preview the phase question.

**Structure:**
- Punchy opening about adoption being where AI projects die
- Context on what this phase does
- State the phase question explicitly

**Content direction:**

The v1 had excellent framing: "$2M contract analysis platform sat unused for 14 months because the attorneys didn't trust it and nobody addressed their concerns."

Source README insight: "Change management isn't Phase 5—it's the throughline. But this phase is where focused adoption work happens."

**Draft elements:**
- Hook: Technology that nobody uses is expensive furniture. A $2M contract analysis platform sat unused for 14 months because attorneys didn't trust it—and nobody addressed their concerns. The technology worked. The adoption didn't.
- Context: Earlier phases planted change management seeds. This phase harvests them through focused training, communication, and resistance response.
- Question callout: **"How do we get people to actually use this?"**

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
| **BSPF** | (Implicit—BSPF focuses on technical delivery) |
| **Governance** | Human-in-the-loop protocols, training on limitations (NIST Govern 3.2, 4.1-4.2, 5.1) |
| **Change Management** | Full deployment: champions, training, resistance, communication |

**Closer:** This phase establishes human governance—ensuring users know not just how to use the AI, but when to trust it and when to override it.

---

### Section 3: Key Insight — The Throughline

**Goal:** Position change management as continuous, not a single phase.

**Structure:** Brief prose section establishing the concept.

**Content from source:**

Change management isn't Phase 5—it's the throughline. Earlier phases laid groundwork:
- Phase 1: Stakeholder mapping
- Phase 2: Pain point documentation
- Phase 3: Co-design with users
- Phase 4: Accountability clarity

Now we harvest: training, communication, resistance response, champion activation.

---

### Section 4: Adoption by Intent

**Goal:** Show how adoption strategy varies based on Intent Filter from Phase 3.

**Structure:** Brief intro referencing Phase 3, then comparison table with nuance.

**Content from source:**

| Intent | Adoption Focus | Key Challenge |
|--------|---------------|---------------|
| **Cost Center** (Internal Efficiency) | Overcoming workflow disruption; proving the tool reduces toil | Users see it as extra work before they see the benefit |
| **Revenue Center** (External Growth) | Maintaining expertise; ensuring domain experts feel empowered, not replaced | Experts may resist what feels like "commoditizing" their knowledge |

**Critical nuance (from source):** Revenue Center domain experts built the Expertise Layer. If they feel the agent diminishes their value, they'll undermine adoption. Position the agent as amplifying their reach, not replacing their judgment.

---

### Section 5: Key Activities

**Goal:** Walk through what actually happens in this phase.

**Structure:** Mix of subsections with varied formats.

#### 5a. Stakeholder Mapping

**Content from v1 (good):**

Map stakeholders across two dimensions: **influence** (can they block or accelerate?) and **disposition** (for, against, undecided).

| Disposition | High Influence | Low Influence |
|-------------|----------------|---------------|
| **Champion** | Executive sponsor, visible early adopter | Enthusiastic user, informal advocate |
| **Fence-sitter** | Key decision-maker watching outcomes | Majority of users waiting to see |
| **Blocker** | Vocal opponent with organizational power | Skeptic who can poison team sentiment |

**Key insight (v1):** Energy spent trying to convert a committed blocker is usually wasted. Focus on fence-sitters. Move enough of them and blockers become isolated.

#### 5b. Champion Networks

**Content from v1 + source:**

Champions sell adoption better than any training program. A good champion has three characteristics:

1. **Credibility** — Peers respect their judgment
2. **Willingness** — They'll actually advocate, not just agree
3. **Access** — They interact with the people you're trying to reach

**Target:** One champion per 10-15 users.

**From source:** Recruit "Skeptic Champions"—respected experts who rigorously test the AI. Their endorsement carries more weight than enthusiastic early adopters.

#### 5c. Resistance Management

**Content from v1 + source:**

Not all resistance is the same. The Resistance Response Framework matches intervention to root cause:

| Resistance Type | Root Cause | Intervention |
|-----------------|------------|--------------|
| **Job security fear** | "AI will replace me" | Reframe as augmentation; show new role value |
| **Skill gap anxiety** | "I can't learn this" | Graduated training; peer support; quick wins |
| **Workflow disruption** | "This slows me down" | Acknowledge transition cost; show long-term benefit |
| **Trust deficit** | "I don't trust AI" | Transparency about limitations; human oversight |
| **Loss of expertise** | "My judgment doesn't matter" | Position AI as tool for experts, not replacement |

**Great v1 examples to keep:**
- Legal ops team resistance evaporated when they realized AI handled tedious clause extraction, freeing them for negotiation work they enjoyed
- 62-year-old paralegal became biggest advocate after patient 30-minute session
- Manufacturing team didn't believe predictive maintenance model until respected senior operator endorsed it

#### 5d. Training for Retention

**Content from v1 + source:**

Most corporate training fails—90% forgetting within a week for one-time sessions. The 30/60/90 plan designs for retention:

**First 30 days** — Basic competency. Can they perform the core workflow?

**Days 30-60** — Fluency. Can they handle variations and exceptions?

**Days 60-90** — Mastery. Can they troubleshoot and help others?

**From source (NEW):** Train on limitations, not just capabilities. Users need to know what AI gets wrong, not just what it gets right. This satisfies NIST Measure 2.11.

#### 5e. Communication Sequencing

**Content from v1:**

The Communication Calendar sequences messaging across three phases:

**Awareness** (weeks before) — What's coming and why. Address "why should I care" before "how does it work."

**Understanding** (days before) — How it works and what changes. Reduce anxiety without overwhelming.

**Adoption** (launch and after) — Reinforcement and troubleshooting. Celebrate wins. Address problems before they become narratives.

**Key insight (v1):** The biggest communication mistake is going dark after launch. Silence tells everyone the project is abandoned.

---

### Section 6: The Over-Reliance Paradox (NEW)

**Goal:** Address automation bias—users trusting AI too much.

**Structure:** Problem statement, warning signs, mitigations, target metric.

**Content from source:**

A unique challenge: users may trust AI *too much*, leading to automation bias. This violates NIST Govern 2.1 human-in-the-loop requirements.

**Signs of over-reliance:**
- Accepting AI outputs without verification
- Override rate near 0%
- Junior staff deferring completely to AI
- No questions asked about limitations

**Mitigations:**
- Training on AI limitations (what it gets wrong)
- Mandatory verification for high-stakes outputs
- Random audits of AI-assisted work
- **Planted hallucination tests:** During training, include scenarios where AI gives wrong answers. Users who catch them demonstrate override readiness.
- Celebrate catches publicly—catching AI errors is high-value expert contribution

**The baseline:** If override rate is 0%, users aren't exercising judgment. If it's 50%+, the tool isn't providing value. Target 10-30%.

---

### Section 7: Psychological Safety

**Goal:** Address the environment required for healthy AI adoption.

**Structure:** Brief prose with key principles.

**Content from source + v1:**

Low psychological safety kills adoption regardless of training quality. Users need to feel safe:
- Asking questions about AI limitations
- Flagging when AI outputs seem wrong
- Making mistakes during the learning curve

**From source:** Create an "AI Safety Culture" where flagging a model failure is rewarded, not penalized. Celebrate appropriate skepticism—blind trust is the failure mode.

---

### Section 8: Phase Output — Adoption Scorecard

**Goal:** Make the deliverable concrete with measurable metrics.

**Structure:** Table with metrics and targets, then example quote.

**Content from source:**

| Metric | What It Measures | Target |
|--------|------------------|--------|
| **Training Completion** | % of users validated on AI safety and limitations | 100% of eligible users |
| **Sentiment Score** | Pre- vs. post-training disposition toward the tool | Positive shift |
| **Override Readiness** | Users demonstrated ability to catch planted hallucination | Pass/Fail per user |
| **Champion Activation** | Active champions providing feedback and peer support | 1 per department/team |
| **Resistance Resolution** | Documented responses to identified resistance sources | All sources addressed |

**Example delivery quote (from source):**
> "Training completion is at 94%, with a positive sentiment shift of +22 points. Override readiness testing shows 87% of users successfully caught planted hallucinations. We are ready to move to the Prove phase with confidence in human governance."

---

### Section 9: Exit Criteria

**Goal:** Clear checklist for when this phase is complete.

**Structure:** Checklist with 8 items.

**Content from source:**

Before moving to **Prove**:

- [ ] Champions identified, trained, and actively providing feedback
- [ ] Resistance sources addressed with documented responses
- [ ] Training completed for all user groups (including AI limitations)
- [ ] Override readiness validated (planted hallucination test passed)
- [ ] Communication campaign executed
- [ ] Psychological safety assessed and addressed
- [ ] Usage baseline established for measurement
- [ ] Adoption Scorecard documented with baseline metrics

---

### Section 10: Common Mistakes

**Goal:** Show expertise through knowing what goes wrong.

**Structure:** Bold paragraphs (varies from tables earlier).

**Content from source + v1:**

**Training without change.** Focus on "how to use" without addressing "why to use." Address motivation before mechanics. Training on features doesn't overcome resistance to adoption.

**Ignoring middle management.** Focus goes to executives and end users. Middle managers can block adoption if they feel it threatens their team's value. They need different messaging than either group.

**One-and-done training.** A single session feels efficient. It's actually waste. GAI is too dynamic for one session—users encounter edge cases over time. 30/60/90 reinforcement as they gain experience.

**Dismissing resistance.** "They'll get used to it" isn't a strategy. Resistance is data. Diagnose root causes and respond specifically. Ignored resistance goes underground and poisons adoption.

**Celebrating only AI wins.** Want to show value, so highlight AI successes. Also celebrate human catches—override readiness builds trust. Catching AI errors should be positioned as high-value expert contribution.

**From v1:**
**Declaring victory at launch.** Deployment is not adoption. The work continues until usage metrics show the tool is embedded in workflows, not just available.

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

- Tables: 3-4 rows max (Resistance Response is 5 rows—consider splitting or trimming)
- Bullet lists: 5 items max
- Start sections with prose, not lists
- End sections with punchy sentences
- Vary structure across adjacent subsections
- Include specific numbers throughout
- At least one story/example per major section

---

## Reusable Elements from v1 Phase 4

**Good hooks:**
- "Technology that nobody uses is expensive furniture."
- "$2M contract analysis platform sat unused for 14 months"

**Good specific examples:**
- 62-year-old paralegal who became biggest advocate
- Legal ops team clause extraction freeing them for negotiation
- Manufacturing team trusting predictive maintenance after senior operator endorsed
- 90% forgetting rate within a week for one-time training

**Good methodological points:**
- Stakeholder influence/disposition matrix
- One champion per 10-15 users
- Communication sequencing (Awareness → Understanding → Adoption)
- "Going dark after launch" mistake

---

## New Elements to Incorporate

From the source README that weren't in v1:

1. **Key Insight** — Change management as throughline, not just Phase 5
2. **Adoption by Intent** — Scales strategy based on Cost Center vs Revenue Center
3. **Human Governance** — Distinct from technical governance in Phase 4
4. **Over-Reliance Paradox** — Automation bias, healthy override rates (10-30%)
5. **Planted Hallucination Tests** — Override readiness validation
6. **Adoption Scorecard** — Quantified phase output with specific metrics
7. **Skeptic Champions** — Recruiting respected experts who rigorously test

---

## Estimated Sections and Word Counts

| Section | Estimated Words | Primary Format |
|---------|-----------------|----------------|
| Opening Hook | 100-120 | Prose |
| Framework Connections | 80-100 | Table + prose |
| Key Insight (Throughline) | 80-100 | Prose |
| Adoption by Intent | 120-150 | Table + nuance |
| Key Activities (5 subsections) | 500-600 | Mixed |
| Over-Reliance Paradox | 180-220 | Problem/solution + metric |
| Psychological Safety | 80-100 | Prose |
| Phase Output (Adoption Scorecard) | 120-150 | Table + quote |
| Exit Criteria | 80-100 | Checklist |
| Common Mistakes | 180-220 | Bold paragraphs |

**Total:** ~1,500-1,850 words

Similar length to Phase 4. The Over-Reliance Paradox is a significant new concept that deserves space.

---

## Next Steps

1. Review this brief and approve direction
2. Draft content following section structure
3. Apply anti-AI writing check
4. Review against content-format-spec checklist
5. Finalize frontmatter if any changes needed
