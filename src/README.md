Source Code

This directory contains the minimal reproduction source code used to demonstrate the core governance mechanisms of EGA V8.

Files
replay_root.js

Generates a deterministic replay root from a workflow definition.

provenance_graph.js

Constructs a simplified provenance graph representing workflow execution dependencies.

containment_guard.js

Evaluates workflow execution outcomes and activates containment when unsafe behavior is detected.

Usage

Replay Root Generation

node src/replay_root.js examples/normal_workflow.json

Provenance Graph Reconstruction

node src/provenance_graph.js examples/normal_workflow.json

Containment Validation

node src/containment_guard.js examples/mythos_like_attack.json
Purpose

These scripts provide a minimal implementation of the three governance capabilities evaluated in the EGA V8 paper:

Deterministic Replay Validation
Provenance Reconstruction
Governance-Aware Containment

The code is intended as a lightweight reproducibility artifact accompanying the experimental results reported in the paper.
