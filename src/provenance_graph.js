const fs = require("fs");

const file = process.argv[2];

if (!file) {
  console.error("Usage: node src/provenance_graph.js examples/normal_workflow.json");
  process.exit(1);
}

const workflow = JSON.parse(fs.readFileSync(file, "utf8"));

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

console.log(JSON.stringify({ nodes, edges }, null, 2));
