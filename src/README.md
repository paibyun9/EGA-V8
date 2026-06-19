# Source Code

Minimal reproducibility source code accompanying the EGA V8 artifact package.

---

## Overview

This directory contains lightweight reference implementations demonstrating the three core governance mechanisms presented in the paper:

- Deterministic Replay
- Provenance Reconstruction
- Governance-Aware Containment

---

## File Structure

```text
src/
├── replay_root.js
├── provenance_graph.js
└── containment_guard.js

Source Code

Minimal reproducibility source code accompanying the EGA V8 artifact package.

Overview

This directory contains lightweight reference implementations demonstrating the three core governance mechanisms presented in the paper.

Core mechanisms:

- Deterministic Replay
- Provenance Reconstruction
- Governance-Aware Containment

File Structure

src/
  replay_root.js
  provenance_graph.js
  containment_guard.js

Components

replay_root.js

Generates a deterministic replay root from a workflow definition.

Purpose:

- Replay validation
- Workflow consistency verification
- Replay-root generation

Usage:

node src/replay_root.js examples/normal_workflow.json

Expected output:

Replay Root: <sha256 hash>


provenance_graph.js

Constructs a simplified provenance graph representing workflow execution dependencies.

Purpose:

- Provenance reconstruction
- Execution trace analysis
- Dependency inspection

Usage:

node src/provenance_graph.js examples/normal_workflow.json

Expected output:

{
  "nodes": [...],
  "edges": [...]
}


containment_guard.js

Evaluates workflow execution outcomes and activates containment when unsafe behavior is detected.

Purpose:

- Attack detection
- Policy enforcement
- Governance-aware containment

Usage:

node src/containment_guard.js examples/mythos_like_attack.json

Expected output:

{
  "workflow_id": "ATTACK-001",
  "decision": "BLOCK",
  "trust_state": "T4",
  "containment": true,
  "execution_allowed": false
}

Reproducibility Scope

The source code demonstrates the minimum governance primitives required to reproduce the key concepts evaluated throughout the EGA V8 paper.

This implementation is intended for artifact inspection and reproducibility validation.

It is not intended to represent the complete production implementation.
