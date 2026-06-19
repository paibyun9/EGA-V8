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

## Overview

This directory contains all experimental outputs reported in the EGA V8 paper.

Artifacts are provided in three formats:

- Human-readable logs
- Machine-readable JSON files
- CSV tables corresponding to the manuscript

Large-scale detection experiment results.

table5_hard_case_detection.csv

Hard-case and adversarial workflow evaluation results.
