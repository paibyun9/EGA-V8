# Detection Quality Evaluation

## Objective

Measure the ability of EGA V8 to detect workflow divergence, replay mismatches, and governance violations.

## Inputs

- Normal workflow executions
- Mutated workflow executions
- Adversarial workflow executions
- Provenance validation enabled

## Procedure

1. Execute baseline workflows.
2. Inject workflow mutations.
3. Compare replay roots and workflow fingerprints.
4. Detect divergence events.
5. Record detection outcomes.

## Expected Results

- High workflow-divergence detection accuracy.
- Minimal false positives.
- Minimal false negatives.
- Reliable governance-event identification.

## Related Outputs

- `results/raw_json/table3_detection_quality.json`
- `results/tables/table3_detection_quality.csv`
