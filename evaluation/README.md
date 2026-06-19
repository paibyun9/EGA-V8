Evaluation Scenarios

This directory contains the evaluation protocols used to validate the EGA V8 framework.

The evaluation suite covers replayability, provenance reconstruction, containment activation, detection quality, large-scale workflow analysis, and live LLM workflow governance.

Files
replay_validation.md

Evaluates deterministic workflow replay behavior.

Key metrics:

Replay Consistency Rate
Replay Root Match Rate
Workflow Fingerprint Stability

Related outputs:

results/logs/replay_validation.log
results/tables/table2_replay_validation.csv
provenance_validation.md

Evaluates provenance reconstruction and execution trace integrity.

Key metrics:

Provenance Reconstruction Success Rate
Trace Integrity
Replay Root Consistency

Related outputs:

results/logs/provenance_validation.log
containment_validation.md

Evaluates automatic containment activation under unsafe workflow propagation.

Key metrics:

Detection Rate
Containment Success Rate
Unsafe Propagation Rate

Related outputs:

results/logs/containment_validation.log
results/tables/table5_hard_case_detection.csv
detection_quality.md

Evaluates workflow-divergence and governance-violation detection performance.

Key metrics:

Detection Accuracy
False Positive Rate
False Negative Rate

Related outputs:

results/raw_json/table3_detection_quality.json
results/tables/table3_detection_quality.csv
large_scale_detection.md

Evaluates governance performance under large-scale workflow execution.

Key metrics:

Detection Rate
Scalability
Governance Stability

Related outputs:

results/raw_json/table4_large_scale_detection.json
results/tables/table4_large_scale_detection.csv
hard_case_detection.md

Evaluates difficult governance scenarios involving policy mutation and containment enforcement.

Key metrics:

Threat Detection Rate
Containment Success Rate
Fail-Closed Activation

Related outputs:

examples/hard_case_workflow.json
results/raw_json/table5_hard_case_detection.json
results/tables/table5_hard_case_detection.csv
live_llm_evaluation.md

Evaluates governance behavior during live LLM-driven workflow execution.

Key metrics:

Replayability
Provenance Integrity
Governance Compliance
Purpose

These evaluation documents provide human-readable descriptions of the experimental protocols reported in the EGA V8 paper and support independent review of the reported results.
