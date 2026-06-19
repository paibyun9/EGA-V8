# Source Code

Minimal reproducibility source code accompanying the EGA V8 artifact package.

## Overview

This directory contains lightweight reference implementations demonstrating the three governance mechanisms presented in the paper:

- Deterministic Replay
- Provenance Reconstruction
- Governance-Aware Containment

## Files

**replay_root.js**

Generates a deterministic replay root from a workflow definition.

**provenance_graph.js**

Constructs a simplified provenance graph representing workflow execution dependencies.

**containment_guard.js**

Evaluates workflow execution outcomes and activates containment when unsafe behavior is detected.

## Usage

Replay Root

node src/replay_root.js examples/normal_workflow.json

Provenance Reconstruction

node src/provenance_graph.js examples/normal_workflow.json

Containment Validation

node src/containment_guard.js examples/mythos_like_attack.json

## Reproducibility Scope

The source code demonstrates the minimum governance primitives required to reproduce the key concepts evaluated throughout the EGA V8 paper.

This implementation is intended for artifact inspection and reproducibility validation only.
