Containment Validation
Objective

Evaluate whether EGA V8 successfully activates containment when unsafe workflow propagation is detected.

Input
10,000 workflow executions
Includes mutated and adversarial workflow instances
Trust escalation enabled
Procedure
Execute workflow set.
Inject unsafe mutations.
Trigger trust escalation.
Verify containment activation.
Measure containment success rate.
Expected Result
Unsafe workflows identified
Containment activated automatically
Fail-closed policy enforced
Unsafe propagation minimized
Related Outputs
results/logs/containment_validation.log
results/tables/table5_hard_case_detection.csv
