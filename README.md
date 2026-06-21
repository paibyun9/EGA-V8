# EGA-V8

**EGA V8: A Five-Layer Execution Governance Architecture for Provable Autonomous AI Execution**

This repository contains the paper, figures, evaluation scripts, reproducibility materials, and results for EGA V8.

## Structure

- `paper/` — paper PDF and citation files
- `figures/` — figures used in the paper
- `evaluation/` — evaluation scripts
- `results/` — tables, raw JSON, and logs
- `reproducibility/` — environment and reproduction guide
- `scripts/` — one-command reproduction scripts
- `examples/` — sample workflows
- `src/` — minimal source code required for reproduction

# Figures

This directory contains all figures used in the EGA V8 paper.

| Figure | Description |
|----------|-------------|
| Figure 1 | Overall EGA V8 Architecture |
| Figure 2 | Deterministic Governance Evaluation Pipeline |
| Figure 3 | Provenance DAG Reconstruction Example |
| Figure 4 | Trust Escalation and Containment Lifecycle |
| Figure 5 | Live LLM Adversarial Evaluation Results |
| Figure 6 | Comparative Runtime Governance Outcomes |

These figures correspond directly to those presented in the paper.

# Results Directory

This directory contains all evaluation outputs, logs, and machine-readable artifacts used in the EGA V8 experimental validation.

---

## Structure

```text
results/
├── logs/
│   ├── replay_validation.log
│   ├── provenance_validation.log
│   └── containment_validation.log
│
├── raw_json/
│   ├── table2_replay_validation.json
│   ├── table3_detection_quality.json
│   ├── table4_large_scale_detection.json
│   └── table5_hard_case_detection.json
│
└── tables/
    ├── table2_replay_validation.csv
    ├── table3_detection_quality.csv
    ├── table4_large_scale_detection.csv
    └── table5_hard_case_detection.csv


Quick Start
Install
npm install ega-v8

Or run directly:

npx ega-v8 demo
Demonstration
Basic Demo
npx ega-v8 demo

Expected Output:

[WITHOUT EGA]
Tool Response Modified
Execution Continues
Result: UNSAFE PROPAGATION

[WITH EGA]
Replay Mismatch Detected
Containment Activated
Execution Blocked
Result: SAFE
Verbose Audit Demo
npx ega-v8 demo --verbose

Displays replay mismatch evidence, containment status, trust state, and audit metadata.

Replay Validation
npx ega-v8 replay examples/normal_workflow.json

Generates a deterministic replay root for workflow validation.

Provenance Reconstruction
npx ega-v8 provenance examples/normal_workflow.json

Reconstructs workflow provenance graphs and execution traces.

Containment Validation
npx ega-v8 contain examples/mythos_like_attack.json

Evaluates containment activation under replay mismatch conditions.

Expected Output:

{
  "workflow_id": "ATTACK-001",
  "decision": "BLOCK",
  "trust_state": "T4",
  "containment": true,
  "execution_allowed": false,
  "reason": "policy_violation"
}
Evaluation Results

Evaluation artifacts are available in:

results/tables/

Included datasets:

Table 2 — Replay Validation Results
Table 3 — Detection Quality Results
Table 4 — Large-Scale Detection Results
Table 5 — Hard-Case Detection Results
Reproducibility

See:

reproducibility/RUN_ALL_EVALUATIONS.md

for evaluation and artifact reproduction instructions.

## Overview

This directory contains all experimental outputs reported in the EGA V8 paper.

Artifacts are provided in three formats:

- Human-readable logs
- Machine-readable JSON files
- CSV tables corresponding to the manuscript

Large-scale detection experiment results.

table5_hard_case_detection.csv

Hard-case and adversarial workflow evaluation results.
