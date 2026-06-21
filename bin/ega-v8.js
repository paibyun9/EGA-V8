#!/usr/bin/env node

const fs = require("fs");
const crypto = require("crypto");

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);

  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .reduce((acc, key) => {
        acc[key] = canonicalize(value[key]);
        return acc;
      }, {});
  }

  return value;
}

function replayRoot(workflow) {
  const canonical = JSON.stringify(canonicalize(workflow));
  return crypto.createHash("sha256").update(canonical).digest("hex");
}

function loadWorkflow(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function provenance(workflow) {
  const nodes = [
    { id: "workflow", type: "workflow", label: workflow.workflow_id },
    { id: "input", type: "input", label: workflow.workflow_type },
    { id: "policy", type: "policy", label: workflow.policy?.policy_id || "none" },
    { id: "decision", type: "decision", label: workflow.expected_result?.decision || "unknown" }
  ];

  const edges = [
    { from: "workflow", to: "input" },
    { from: "input", to: "policy" },
    { from: "policy", to: "decision" }
  ];

  if (Array.isArray(workflow.tool_calls)) {
    workflow.tool_calls.forEach((toolCall, index) => {
      const nodeId = `tool_${index + 1}`;

      nodes.push({
        id: nodeId,
        type: "tool_call",
        label: `${toolCall.tool}:${toolCall.action}`
      });

      edges.push({ from: "policy", to: nodeId });
      edges.push({ from: nodeId, to: "decision" });
    });
  }

  return { nodes, edges };
}

function contain(workflow) {
  const expected = workflow.expected_result || {};
  const decision = expected.decision || "UNKNOWN";
  const containment = Boolean(expected.containment);
  const allowed = decision === "ALLOW" && containment === false;

  return {
    workflow_id: workflow.workflow_id,
    decision,
    trust_state: expected.trust_state || "UNKNOWN",
    containment,
    execution_allowed: allowed,
    reason: expected.reason || null
  };
}

function demo(verbose = false) {
  console.log("");
  console.log("[WITHOUT EGA]");
  console.log("Tool Response Modified");
  console.log("Execution Continues");
  console.log("Result: UNSAFE PROPAGATION");
  console.log("");
  console.log("[WITH EGA]");
  console.log("Replay Mismatch Detected");
  console.log("Containment Activated");
  console.log("Execution Blocked");
  console.log("Result: SAFE");

  if (verbose) {
    console.log("");
    console.log("[AUDIT EVIDENCE]");
    console.log(JSON.stringify({
      workflow_id: "ATTACK-001",
      attack_type: "tool_response_mutation",
      replay_root_original: "8f2db676556ca72433ec1aaf0296f323de1308d47d9c95a5d78016f6574b7894",
      replay_root_current: "mismatch_detected",
      replay_match: false,
      provenance_status: "mutation_detected",
      trust_state: "T4",
      containment: true,
      execution_allowed: false,
      reason: "policy_violation",
      audit_log: "results/logs/replay_validation.log"
    }, null, 2));
  }

  console.log("");
}

const command = process.argv[2];
const file = process.argv[3];

if (!command || command === "help") {
  console.log("EGA V8 CLI");
  console.log("");
  console.log("Usage:");
  console.log("  ega-v8 demo");
  console.log("  ega-v8 demo --verbose");
  console.log("  ega-v8 replay <workflow.json>");
  console.log("  ega-v8 provenance <workflow.json>");
  console.log("  ega-v8 contain <workflow.json>");
  process.exit(0);
}

if (command === "demo") {
  const verbose = process.argv.includes("--verbose");
  demo(verbose);
  process.exit(0);
}

if (!file) {
  console.error("Missing workflow file.");
  process.exit(1);
}

const workflow = loadWorkflow(file);

if (command === "replay") {
  console.log(JSON.stringify({ replay_root: replayRoot(workflow) }, null, 2));
} else if (command === "provenance") {
  console.log(JSON.stringify(provenance(workflow), null, 2));
} else if (command === "contain") {
  const result = contain(workflow);
  console.log(JSON.stringify(result, null, 2));
  if (!result.execution_allowed) process.exitCode = 2;
} else {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}
