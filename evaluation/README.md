# Evaluation Scenarios

This directory contains the evaluation protocols used to validate the EGA V8 framework.

The evaluation suite covers replayability, provenance reconstruction, containment activation, detection quality, large-scale workflow analysis, and live LLM workflow governance.

---

## Available Evaluations

### Replay Validation

Evaluates deterministic workflow replay behavior.

**Key Metrics**

- Replay Consistency Rate
- Replay Root Match Rate
- Workflow Fingerprint Stability

**Related Outputs**

- `results/logs/replay_validation.log`
- `results/tables/table2_replay_validation.csv`

---

### Provenance Validation

Evaluates provenance reconstruction and execution trace integrity.

**Key Metrics**

- Provenance Reconstruction Success Rate
- Trace Integrity
- Replay Root Consistency

**Related Outputs**

- `results/logs/provenance_validation.log`

---

### Containment Validation

Evaluates automatic containment activation under unsafe workflow propagation.

**Key Metrics**

- Detection Rate
- Containment Success Rate
- Unsafe Propagation Rate

**Related Outputs**

- `results/logs/containment_validation.log`
- `results/tables/table5_hard_case_detection.csv`

---

### Detection Quality Evaluation

Evaluates workflow-divergence and governance-violation detection performance.

**Key Metrics**

- Detection Accuracy
- False Positive Rate
- False Negative Rate

**Related Outputs**

- `results/raw_json/table3_detection_quality.json`
- `results/tables/table3_detection_quality.csv`

---

### Large-Scale Detection Evaluation

Evaluates governance performance under large-scale workflow execution.

**Key Metrics**

- Detection Rate
- Scalability
- Governance Stability

**Related Outputs**

- `results/raw_json/table4_large_scale_detection.json`
- `results/tables/table4_large_scale_detection.csv`

---

### Hard-Case Detection Evaluation

Evaluates difficult governance scenarios involving policy mutation and containment enforcement.

**Key Metrics**

- Threat Detection Rate
- Containment Success Rate
- Fail-Closed Activation

**Related Outputs**

- `examples/hard_case_workflow.json`
- `results/raw_json/table5_hard_case_detection.json`
- `results/tables/table5_hard_case_detection.csv`

---

### Live LLM Evaluation

Evaluates governance behavior during live LLM-driven workflow execution.

**Key Metrics**

- Replayability
- Provenance Integrity
- Governance Compliance

---

## Purpose

These evaluation documents provide human-readable descriptions of the experimental protocols reported in the EGA V8 paper and support independent review of the reported results.
