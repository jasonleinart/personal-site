# Personal Site Playbook Migration Plan

**From:** 5-Phase Process (Discovery → Opportunity Assessment → Architecture → Change Management → Measurement)

**To:** 6-Phase NIST-Aligned Playbook (Understand → Assess → Design → Govern → Adopt → Prove)

---

## Current State

### Existing URLs (to preserve)
```
/playbook                              # Index page
/playbook/phase-1-discovery
/playbook/phase-2-opportunity-assessment
/playbook/phase-3-architecture
/playbook/phase-4-change-management
/playbook/phase-5-measurement
```

### Source Files
```
/personal-site/src/content/playbook/
├── phase-1-discovery.mdx
├── phase-2-opportunity-assessment.mdx
├── phase-3-architecture.mdx
├── phase-4-change-management.mdx
└── phase-5-measurement.mdx
```

---

## Target State

### New URLs
```
/playbook                              # Updated index page
/playbook/phase-1-understand
/playbook/phase-2-assess
/playbook/phase-3-design
/playbook/phase-4-govern               # NEW
/playbook/phase-5-adopt
/playbook/phase-6-prove
```

### New Files
```
/personal-site/src/content/playbook/
├── phase-1-understand.mdx             # Rewritten
├── phase-2-assess.mdx                 # Rewritten
├── phase-3-design.mdx                 # Rewritten
├── phase-4-govern.mdx                 # NEW
├── phase-5-adopt.mdx                  # Rewritten
└── phase-6-prove.mdx                  # Rewritten
```

---

## Phase Mapping: Content Migration

| Old Phase | New Phase | Content Migration |
|-----------|-----------|-------------------|
| Phase 1: Discovery | Phase 1: Understand | Keep stakeholder mapping; add driver hypotheses, NIST Map 1.1/1.5, regulatory context |
| Phase 1: Discovery | Phase 2: Assess | Move SIPOC, process observation, Mess-O-Meter here |
| Phase 2: Opportunity Assessment | Phase 2: Assess | Keep cost quantification, automation scorecard |
| Phase 2: Opportunity Assessment | Phase 3: Design | Move Build vs. Buy content |
| Phase 3: Architecture | Phase 3: Design | Keep solution architecture; add Intent Filter, Buy + Build Vertical, GAI concerns |
| *None* | Phase 4: Govern | **NEW**: Failure modes, red teaming, RACI, KRIs, governance attestation |
| Phase 4: Change Management | Phase 5: Adopt | Keep resistance framework, champions, training; add Adoption Scorecard, override readiness |
| Phase 5: Measurement | Phase 6: Prove | Keep ROI validation; add 90-Day ROI Validation, Scale/Retool/Retire decision |

---

## Required Redirects

Add to `/personal-site/astro.config.mjs`:

```javascript
export default defineConfig({
  redirects: {
    '/playbook/phase-1-discovery': '/playbook/phase-1-understand',
    '/playbook/phase-2-opportunity-assessment': '/playbook/phase-2-assess',
    '/playbook/phase-3-architecture': '/playbook/phase-3-design',
    '/playbook/phase-4-change-management': '/playbook/phase-5-adopt',
    '/playbook/phase-5-measurement': '/playbook/phase-6-prove',
  },
  // ... rest of config
});
```

---

## File Changes Required

### 1. Index Page (`/src/pages/playbook/index.astro`)

**Line 28:** Update heading
```diff
- <h2>5-Phase Methodology</h2>
+ <h2>6-Phase Methodology</h2>
```

**Lines 127-182:** Replace hardcoded 5-phase sections with 6-phase loop or update to:
```
Phase 1: Understand — What's the actual problem?
Phase 2: Assess — Where are we now?
Phase 3: Design — What do we build?
Phase 4: Govern — How do we do it right?
Phase 5: Adopt — How do we get buy-in?
Phase 6: Prove — Did it work?
```

**Consider:** Replace hardcoded sections with dynamic rendering from `sortedPhases` array.

### 2. Content Schema (`/src/content.config.ts`)

No breaking changes required. Current schema accepts `phase: z.number()` which works for 1-6.

Optional enhancement for validation:
```typescript
phase: z.number().min(1).max(6),
```

### 3. Content Files (6 files)

Each new MDX file needs:
- Updated frontmatter (title, description, phase number, summary)
- NIST mapping section
- Phase Output section
- Updated tools array
- TL;DR with key points

---

## New Content Requirements

### Phase 4: Govern (entirely new)

Create `/src/content/playbook/phase-4-govern.mdx` with:

**Frontmatter:**
```yaml
---
title: "Phase 4: Govern"
description: "Implement oversight and controls for responsible AI deployment"
phase: 4
summary: "How do we do this responsibly?"
tools:
  - name: "Failure Mode Checklist"
    description: "Assess 8 AI failure modes with mitigations"
    type: "checklist"
  - name: "Red Team Protocol"
    description: "Adversarial testing procedures"
    type: "framework"
  - name: "Three Lines RACI"
    description: "Accountability matrix with attestation"
    type: "template"
  - name: "KRI Template"
    description: "Key risk indicators with thresholds"
    type: "template"
tldr:
  summary: "Governance isn't a checkbox—it's how you build trust."
  points:
    - "Assess failure modes before deployment"
    - "Red team test adversarially"
    - "Establish clear accountability (RACI)"
    - "Configure monitoring and KRIs"
    - "Governance attestation, not just planning"
---
```

**Content sections:**
- Governance by Intent (Cost Center vs Revenue Center)
- Split Accountability (Buy + Build Vertical)
- BSPF Gate Integration (Data Gate, Model Gate)
- NIST AI RMF Mapping table
- Incident Severity Framework
- Phase Output: Governance Attestation
- Exit Criteria
- Common Mistakes

---

## Key Enhancements for All Phases

Each phase page should include:

1. **NIST AI RMF Mapping Table**
   - Activity | NIST Mapping | Consulting Level-Up

2. **Phase Output Section**
   - Example stakeholder delivery quote
   - Clear deliverable name

3. **Intent Filter Considerations**
   - How governance differs for Cost Center vs Revenue Center

4. **Exit Criteria**
   - Checkbox list of requirements to advance

5. **Updated Tools**
   - Map to actual tools in `/ai-transformation-playbook/phases/XX-phase/tools/`

---

## Implementation Order

### Phase 1: Setup (No content changes)
- [ ] Add redirects to `astro.config.mjs`
- [ ] Update index page heading and phase count
- [ ] Test that old URLs redirect properly

### Phase 2: Create New Structure
- [ ] Create `phase-4-govern.mdx` (entirely new)
- [ ] Rename existing files to new slugs
- [ ] Update `phase` numbers in frontmatter

### Phase 3: Content Migration
- [ ] Rewrite Phase 1: Understand (from Discovery + new NIST content)
- [ ] Rewrite Phase 2: Assess (from Discovery + Opportunity Assessment)
- [ ] Rewrite Phase 3: Design (from Architecture + new Intent Filter/GAI content)
- [ ] Write Phase 4: Govern (new from `04-govern/README.md`)
- [ ] Rewrite Phase 5: Adopt (from Change Management + new Adoption Scorecard)
- [ ] Rewrite Phase 6: Prove (from Measurement + new 90-Day ROI content)

### Phase 4: Index Page Update
- [ ] Update phase descriptions
- [ ] Add Strategic Decisions section (Intent Filter, Buy + Build Vertical)
- [ ] Update journey diagram if present

### Phase 5: Validation
- [ ] Test all redirects
- [ ] Verify no broken internal links
- [ ] Check tool links point to correct phases
- [ ] Validate schema with all 6 phases

---

## Content Sources

For each phase rewrite, reference:

| New Phase | Source Material |
|-----------|-----------------|
| Phase 1: Understand | `/ai-transformation-playbook/phases/01-understand/README.md` |
| Phase 2: Assess | `/ai-transformation-playbook/phases/02-assess/README.md` |
| Phase 3: Design | `/ai-transformation-playbook/phases/03-design/README.md` |
| Phase 4: Govern | `/ai-transformation-playbook/phases/04-govern/README.md` |
| Phase 5: Adopt | `/ai-transformation-playbook/phases/05-adopt/README.md` |
| Phase 6: Prove | `/ai-transformation-playbook/phases/06-prove/README.md` |

Also reference:
- `/ai-transformation-playbook/README.md` — Strategic Decisions, Key Metrics
- `/ai-transformation-playbook/frameworks/TRANSFORMATION-NARRATIVE.md` — Framework integration

---

## Risk Considerations

| Risk | Mitigation |
|------|------------|
| SEO impact from URL changes | Redirects preserve link equity |
| Broken external links | 301 redirects handle gracefully |
| Content drift between playbook and site | Site content should match source playbook |
| Missing tool files | Audit tool references against actual files |

---

## Success Criteria

- [ ] All 6 phases published and accessible
- [ ] All old URLs redirect to appropriate new pages (301)
- [ ] No broken internal links
- [ ] NIST mapping visible in each phase
- [ ] Phase outputs clearly documented
- [ ] Index page reflects 6-phase journey
- [ ] Tools section accurate for each phase

---

*This plan should be executed in order. Setup redirects first to prevent any downtime or 404s during migration.*
