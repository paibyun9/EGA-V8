Source Code

Minimal reproducibility source code accompanying the EGA V8 artifact package.

Overview

This directory contains lightweight reference implementations demonstrating the three core governance mechanisms presented in the paper:

Deterministic Replay
Provenance Reconstruction
Governance-Aware Containment

These scripts are intended for artifact inspection and reproducibility validation.

File Structure
src/
├── replay_root.js
├── provenance_graph.js
└── containment_guard.js
Components
replay_root.js

Generates a deterministic replay root from a workflow definition.

Purpose

Replay validation
Workflow consistency verification
Replay-root generation
provenance_graph.js

Constructs a simplified provenance graph representing workflow execution dependencies.

Purpose

Provenance reconstruction
Execution trace analysis
Dependency inspection
containment_guard.js

Evaluates workflow execution outcomes and activates containment when unsafe behavior is detected.

Purpose

Attack detection
Policy enforcement
Governance-aware containment
Usage
Replay Root Generation
node src/replay_root.js examples/normal_workflow.json
Provenance Reconstruction
node src/provenance_graph.js examples/normal_workflow.json
Containment Validation
node src/containment_guard.js examples/mythos_like_attack.json
Expected Outputs
Script	Output
replay_root.js	Deterministic replay root
provenance_graph.js	Workflow provenance graph
containment_guard.js	Trust state and containment decision
Reproducibility Scope

The source code demonstrates the minimum governance primitives required to reproduce the key concepts evaluated throughout the EGA V8 paper.

It is not intended to represent the complete production implementation.
