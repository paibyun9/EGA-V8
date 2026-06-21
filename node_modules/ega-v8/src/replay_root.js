const fs = require("fs");
const crypto = require("crypto");

function canonicalize(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }

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

const file = process.argv[2];

if (!file) {
  console.error("Usage: node src/replay_root.js examples/normal_workflow.json");
  process.exit(1);
}

const workflow = JSON.parse(fs.readFileSync(file, "utf8"));
const root = replayRoot(workflow);

console.log("Replay Root:", root);
