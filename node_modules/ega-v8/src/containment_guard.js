const fs = require("fs");

const file = process.argv[2];

if (!file) {
  console.error("Usage: node src/containment_guard.js examples/mythos_like_attack.json");
  process.exit(1);
}

const workflow = JSON.parse(fs.readFileSync(file, "utf8"));
const expected = workflow.expected_result || {};

const decision = expected.decision || "UNKNOWN";
const trustState = expected.trust_state || "UNKNOWN";
const containment = Boolean(expected.containment);

const allowed = decision === "ALLOW" && containment === false;

const result = {
  workflow_id: workflow.workflow_id,
  decision,
  trust_state: trustState,
  containment,
  execution_allowed: allowed
};

console.log(JSON.stringify(result, null, 2));

if (!allowed) {
  process.exitCode = 2;
}
