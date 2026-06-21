# EGA-V8

Execution Governance AI V8

A Five-Layer Execution Governance Architecture
for Provable Autonomous AI Execution

---

## What EGA Demonstrates

EGA V8 demonstrates three core governance capabilities:

- Deterministic Replay
- Provenance Reconstruction
- Governance-Aware Containment

---

## Install

```bash
npm install ega-v8

or

npx ega-v8 demo
Quick Demo
npx ega-v8 demo

Expected output:

[WITHOUT EGA]
Tool Response Modified
Execution Continues
Result: UNSAFE PROPAGATION

[WITH EGA]
Replay Mismatch Detected
Containment Activated
Execution Blocked
Result: SAFE

## Replay Validation

Verify deterministic replay consistency.

The same workflow should always generate the same replay root.

### Run

```bash
npx ega-v8 replay examples/normal_workflow.json
Expected Output
{
  "replay_root": "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894"
}
What This Demonstrates
Deterministic execution
Replay consistency
Workflow fingerprint stability

---

# Provenance Reconstruction

```markdown
## Provenance Reconstruction

Reconstruct workflow lineage and execution dependencies.

### Run

```bash
npx ega-v8 provenance examples/normal_workflow.json
Expected Output
{
  "nodes": [...],
  "edges": [...]
}
What This Demonstrates
Execution traceability
Dependency reconstruction
Governance visibility

---

# Containment Validation

```markdown
## Containment Validation

Detect workflow mutation and activate containment.

### Run

```bash
npx ega-v8 contain examples/mythos_like_attack.json
Expected Output
{
  "workflow_id": "ATTACK-001",
  "decision": "BLOCK",
  "trust_state": "T4",
  "containment": true,
  "execution_allowed": false
}
What This Demonstrates
Replay mismatch detection
Trust escalation
Governance-aware containment
Unsafe propagation prevention
