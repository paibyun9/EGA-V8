# Hard-Case Detection Evaluation

## Objective

Evaluate EGA V8 under difficult governance scenarios involving policy mutation, replay inconsistency, and containment activation.

## Inputs

- Policy override attempts
- Replay-root manipulation attempts
- Tool-call mutation scenarios
- Containment bypass attempts

## Procedure

1. Execute hard-case workflows.
2. Inject adversarial mutations.
3. Validate replay consistency.
4. Trigger governance evaluation.
5. Measure containment response.

## Expected Results

- Threats are detected successfully.
- Containment is activated automatically.
- Fail-closed behavior is preserved.
- Unsafe workflow propagation is prevented.

## Related Outputs

- `examples/hard_case_workflow.json`
- `results/raw_json/table5_hard_case_detection.json`
- `results/tables/table5_hard_case_detection.csv`
