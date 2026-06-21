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

```md
## Replay Validation

```bash
npx ega-v8 replay examples/normal_workflow.json
Provenance Reconstruction
npx ega-v8 provenance examples/normal_workflow.json
Containment Validation
npx ega-v8 contain examples/mythos_like_attack.json

---
