# EGA-V8 (Execution Governance AI V8)
> **A Five-Layer Execution Governance Architecture for Provable Autonomous AI Execution**

[![npm version](https://img.shields.io/npm/v/ega-v8.svg?style=flat-square)](https://www.npmjs.com/package/ega-v8)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Architecture](https://img.shields.io/badge/Architecture-Five--Layer-orange.svg?style=flat-square)]()

---

## 📌 Overview

**EGA V8** demonstrates the three core governance capabilities required to maintain workflow integrity in autonomous AI systems. As AI agents evolve beyond passive text generation into autonomous execution environments, EGA v8 introduces a deterministic alternative to traditional, probabilistic token-level safety controls.

### Core Governance Capabilities
1. **Deterministic Replay** — Eliminates probabilistic estimation by enforcing runtime re-execution checks.
2. **Provenance Reconstruction** — Constructs explicit Directed Acyclic Graphs (DAGs) to track execution causality.
3. **Governance-Aware Containment** — Isolates anomalous execution paths via fail-closed mechanisms before unsafe propagation occurs.

This artifact package accompanies the EGA V8 paper and enables independent verification of the framework's core mechanisms.

---

## 🛠️ Installation & Quick Start

### Installation
Install directly from **npm** to integrate into your environment:
```bash
npm install ega-v8
Run Without Installation
You can spin up the interactive demonstration instantly using npx:
Bash
npx ega-v8 demo

🚀 Quick Demo
Experience the core difference between a standard un-governed runtime and the EGA v8 protected framework.
Bash
npx ega-v8 demo
Expected Output
Diff
[WITHOUT EGA]
  Tool Response Modified
  Execution Continues
! Result: UNSAFE PROPAGATION

[WITH EGA]
  Replay Mismatch Detected
  Containment Activated
  Execution Blocked
+ Result: SAFE

What This Demonstrates:
Seamless replay mismatch detection during live execution.
Automatic governance activation and risk-adaptive trust escalation.
Real-time unsafe workflow containment preventing irreversible external actions.

🔬 Core Governance Demonstrations
The following commands allow you to independently reproduce and verify the three baseline governance capabilities evaluated in the EGA V8 research paper.
1. Replay Validation
Verify deterministic replay consistency. The framework guarantees that an unmutated workflow will always generate an identical cryptographic replay root.

Bash
npx ega-v8 replay examples/normal_workflow.json
Expected Output:

JSON
{
  "replay_root": "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894"
}
What This Demonstrates: Deterministic execution stability and workflow fingerprint reproducibility.
2. Provenance Reconstruction
Reconstruct runtime workflow lineage and tool-call dependencies into a structured, auditable causal graph.
Bash
npx ega-v8 provenance examples/normal_workflow.json
Expected Output:
JSON
{
  "nodes": [
    { "id": "workflow", "type": "workflow", "label": "WF-001" },
    { "id": "input", "type": "artifact", "label": "Parameters" }
  ],
  "edges": [
    { "from": "workflow", "to": "input" }
  ]
}

What This Demonstrates: Execution traceability, causal dependency reconstruction, and explicit governance visibility.
3. Containment Validation
Simulate an adversarial workflow mutation (e.g., Mythos-like execution-mutation attack) to verify runtime block performance.

Bash
npx ega-v8 contain examples/mythos_like_attack.json
Expected Output:

JSON
{
  "workflow_id": "ATTACK-001",
  "decision": "BLOCK",
  "trust_state": "T4",
  "containment": true,
  "execution_allowed": false
}
What This Demonstrates: Active execution-divergence detection, immediate escalation to State T 
4
​	
 , and fail-closed containment enforcement.
🔍 Verbose Audit Demonstration
To inspect full cryptographic evidence, runtime state transitions, and evaluation metadata, execute the benchmark with the --verbose flag:
Bash
npx ega-v8 demo --verbose
Expected Output
JSON
{
  "workflow_id": "ATTACK-001",
  "attack_type": "tool_response_mutation",
  "replay_root_original": "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894",
  "replay_root_current": "mismatch_detected",
  "replay_match": false,
  "provenance_status": "mutation_detected",
  "trust_state": "T4",
  "containment": true,
  "execution_allowed": false,
  "reason": "policy_violation",
  "audit_log": "results/logs/replay_validation.log"
}

What This Demonstrates: Complete cryptographic replay mismatch profiling, provenance failure mapping, and granular audit trace generation.

📊 Experimental Results & Benchmarks
This repository includes the complete raw dataset and verification scripts used to generate the evaluation metrics presented in the main paper.
Benchmark Data Index
Source Table	Dataset Description	Core Performance Metrics
Table 2	Replay Validation Results	100% Consistency
Table 3	Detection Quality Results	100% Precision / Recall
Table 4	Large-Scale Detection Results	Flawless up to 10 
4
  Workflows
Table 5	Hard-Case Detection Results	0% False Positives / Negatives
Result Files Directory
Plaintext
results/
└── tables/
    ├── table2_replay_validation.csv
    ├── table3_detection_quality.csv
    ├── table4_large_scale_detection.csv
    └── table5_hard_case_detection.csv

📂 Repository Structure
Plaintext
EGA-V8/
├── evaluation/          # Automated evaluation campaign suites
├── examples/            # Sample JSON workflow execution manifests
├── figures/             # Evaluation pipeline diagrams and asset files
├── paper/               # Pre-print version of the EGA V8 paper
├── reproducibility/     # Resource-isolated container configs (Docker)
├── results/             # CSV Tables and raw telemetry logs
├── scripts/             # Data aggregation and analysis utilities
├── src/                 # Core TypeScript/JavaScript runtime engine
├── README.md            # Repository documentation
├── LICENSE              # Open-source license file
└── CITATION.cff         # Academic citation metadata

📜 Citation
If you utilize EGA V8 or its underlying architectural specifications in your academic research or system benchmarks, please cite our research paper:

@article{byun2026ega,
  title={Can Autonomous AI Execution Become Provable? EGA V8: A Five-Layer Execution Governance Architecture},
  author={Byun, Dae Jung},
  journal={arXiv pre-print},
  year={2026}
}
📄 License
This project is licensed under the MIT License - see the LICENSE file for details. Developed independently by Dae Jung Byun.
