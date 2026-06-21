## Quick Demo

Run the demonstration scenario.

```bash
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

---

# Replay Validation

```markdown
## Replay Validation

Verify deterministic replay consistency.

### Run

```bash
npx ega-v8 replay examples/normal_workflow.json
Expected Output
{
  "replay_root": "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894"
}
Demonstrates
Deterministic execution
Replay consistency
Workflow fingerprint stability

---

# Provenance Reconstruction

```markdown
## Provenance Reconstruction

### Run

```bash
npx ega-v8 provenance examples/normal_workflow.json
Demonstrates
Execution traceability
Dependency reconstruction
Governance visibility

---

# Containment Validation

```markdown
## Containment Validation

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
Demonstrates
Replay mismatch detection
Trust escalation
Governance-aware containment

---

# Verbose Audit Demo

```markdown
## Verbose Audit Demo

### Run

```bash
npx ega-v8 demo --verbose
Demonstrates
Audit evidence generation
Provenance verification
Trust-state escalation
Governance containment

---

# Experimental Results

```markdown
## Experimental Results

| Table | Description |
|---------|---------|
| Table 2 | Replay Validation |
| Table 3 | Detection Quality |
| Table 4 | Large-Scale Detection |
| Table 5 | Hard-Case Detection |
