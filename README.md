# EGA-V8

**Execution Governance AI V8**  
*A Five-Layer Execution Governance Architecture for Provable Autonomous AI Execution*

---

## Overview

EGA V8 (Execution Governance AI) is a governance architecture designed to make autonomous AI workflows:

- **Replayable**
- **Traceable**
- **Auditable**
- **Containable**

The framework introduces three core governance capabilities:

1. **Deterministic Replay**
2. **Provenance Reconstruction**
3. **Governance-Aware Containment**

EGA V8 accompanies the paper:  
**EGA V8: A Five-Layer Execution Governance Architecture for Provable Autonomous AI Execution**

---

## Quick Start

### Install

```bash
npm install ega-v8
Run Demo Directly
Bashnpx ega-v8 demo

Demonstration
Basic Governance Demo
Bashnpx ega-v8 demo
Expected Output:
text[WITHOUT EGA]
Tool Response Modified
Execution Continues
Result: UNSAFE PROPAGATION

[WITH EGA]
Replay Mismatch Detected
Containment Activated
Execution Blocked
Result: SAFE
Verbose Audit Demonstration
Bashnpx ega-v8 demo --verbose
Displays:

Replay mismatch evidence
Trust state transition
Containment activation
Audit metadata
Governance decision outcome


Reproducibility
Replay Validation
Generate a deterministic replay root:
Bashnpx ega-v8 replay examples/normal_workflow.json
Example Output:
JSON{
  "replay_root": "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894"
}
Provenance Reconstruction
Bashnpx ega-v8 provenance examples/normal_workflow.json
Outputs workflow nodes, policy nodes, tool-call nodes, and execution dependencies.
Containment Validation
Bashnpx ega-v8 contain examples/mythos_like_attack.json
Example Output:
JSON{
  "workflow_id": "ATTACK-001",
  "decision": "BLOCK",
  "trust_state": "T4",
  "containment": true,
  "execution_allowed": false,
  "reason": "policy_violation"
}

Evaluation Results
Experimental artifacts are provided under results/tables/.
Included Datasets:

























TableDescriptionTable 2Replay Validation ResultsTable 3Detection Quality ResultsTable 4Large-Scale Detection ResultsTable 5Hard-Case Detection Results
See reproducibility/RUN_ALL_EVALUATIONS.md for full evaluation reproduction instructions.

Repository Structure
textpaper/
├── EGA_V8.pdf

figures/
├── Figure1_Architecture
├── Figure2_Evaluation
├── Figure3_Provenance
├── Figure4_Containment
├── Figure5_Live_LLM
├── Figure6_Runtime_Comparison

evaluation/
├── replay_validation.md
├── provenance_validation.md
├── containment_validation.md
├── detection_quality.md
├── large_scale_detection.md
├── hard_case_detection.md
├── live_llm_evaluation.md

results/
├── tables/
├── raw/
├── logs/

reproducibility/
├── RUN_ALL_EVALUATIONS.md

examples/
├── normal_workflow.json
├── mythos_like_attack.json
├── hard_case_workflow.json

src/
├── replay_root.js
├── provenance_graph.js
├── containment_guard.js

bin/
└── ega-v8.js

Figures

































FigureDescriptionFigure 1Overall EGA V8 ArchitectureFigure 2Deterministic Governance Evaluation PipelineFigure 3Provenance DAG ReconstructionFigure 4Trust Escalation and Containment LifecycleFigure 5Live LLM Workflow GovernanceFigure 6Runtime Comparison

License
MIT License

Citation
If you use EGA V8 in your research, please cite:
bibtex@software{ega_v8,
  title={EGA V8: Execution Governance AI},
  author={Byun, DaeJung},
  year={2026}
}
