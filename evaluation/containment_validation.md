# Containment Validation

## Objective

Evaluate whether EGA V8 activates containment when unsafe workflow propagation is detected.

## Inputs

- 10,000 workflow executions
- Mutated workflow instances
- Adversarial workflow instances
- Trust escalation enabled

## Procedure

1. Execute workflow set.
2. Inject unsafe mutations.
3. Trigger trust escalation.
4. Verify containment activation.
5. Measure containment success rate.

## Expected Results

- Unsafe workflows are identified.
- Containment is activated automatically.
- Fail-closed policy is enforced.
- Unsafe propagation is minimized.

## Related Outputs

- `results/logs/containment_validation.log`
- `results/tables/table5_hard_case_detection.csv`
