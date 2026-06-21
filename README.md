EGA-V8

Execution Governance AI V8

A Five-Layer Execution Governance Architecture for Provable Autonomous AI Execution

Overview

EGA V8 demonstrates three core governance capabilities required for autonomous AI workflows:

Deterministic Replay
Provenance Reconstruction
Governance-Aware Containment

The artifact package accompanies the EGA V8 paper and allows independent verification of the framework's core mechanisms.

Installation

Install directly from npm:

npm install ega-v8

Or execute without installation:

npx ega-v8 demo
Quick Demo

Run the demonstration scenario:

npx ega-v8 demo
Expected Output
[WITHOUT EGA]
Tool Response Modified
Execution Continues
Result: UNSAFE PROPAGATION

[WITH EGA]
Replay Mismatch Detected
Containment Activated
Execution Blocked
Result: SAFE
What This Demonstrates
Replay mismatch detection
Governance activation
Trust escalation
Unsafe workflow containment
Core Governance Demonstrations

The following commands reproduce the three governance capabilities evaluated in the EGA V8 paper.

Replay Validation

Verify deterministic replay consistency.

The same workflow should always generate the same replay root.

Run
npx ega-v8 replay examples/normal_workflow.json
Expected Output
{
  "replay_root": "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894"
}
What This Demonstrates
Deterministic execution
Replay consistency
Workflow fingerprint stability
Provenance Reconstruction

Reconstruct workflow lineage and execution dependencies.

Run
npx ega-v8 provenance examples/normal_workflow.json
Expected Output
{
  "nodes": [
    {
      "id": "workflow",
      "type": "workflow",
      "label": "WF-001"
    }
  ],
  "edges": [
    {
      "from": "workflow",
      "to": "input"
    }
  ]
}
What This Demonstrates
Execution traceability
Dependency reconstruction
Governance visibility
Provenance graph generation
Containment Validation

Detect workflow mutation and activate containment.

Run
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
Verbose Audit Demonstration

Display governance evidence and audit metadata.

Run
npx ega-v8 demo --verbose
Expected Output
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
What This Demonstrates
Replay mismatch evidence
Provenance verification
Trust-state escalation
Audit trace generation
Governance-aware containment
Experimental Results

The repository includes all evaluation artifacts reported in the paper.

Tables
Table	Description
Table 2	Replay Validation Results
Table 3	Detection Quality Results
Table 4	Large-Scale Detection Results
Table 5	Hard-Case Detection Results
Result Files
results/
└── tables/
    ├── table2_replay_validation.csv
    ├── table3_detection_quality.csv
    ├── table4_large_scale_detection.csv
    └── table5_hard_case_detection.csv
Repository Structure
EGA-V8/
├── evaluation/
├── examples/
├── figures/
├── paper/
├── reproducibility/
├── results/
├── scripts/
├── src/
├── README.md
├── LICENSE
└── CITATION.cff
Citation

If you use EGA V8 in research, please cite the accompanying paper.

License

MIT License
