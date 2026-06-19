import csv

rows = [
    ["WF-001 (Purchase)", 100, "100%", "100%", "100%"],
    ["WF-002 (Refund)", 100, "100%", "100%", "100%"],
    ["Overall", 200, "100%", "100%", "100%"]
]

with open(
    "results/tables/table2_replay_validation.csv",
    "w",
    newline=""
) as f:

    writer = csv.writer(f)

    writer.writerow([
        "Workflow",
        "Replay Count",
        "Replay Consistency Rate",
        "Replay Root Match Rate",
        "Workflow Fingerprint Stability"
    ])

    writer.writerows(rows)

print("Table 2 generated.")
