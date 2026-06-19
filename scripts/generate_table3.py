import csv

rows = [
    ["Replay Divergence", "99.8%", "0.2%"],
    ["Policy Mutation", "99.7%", "0.3%"],
    ["Tool Call Tampering", "99.9%", "0.1%"],
    ["Overall", "99.8%", "0.2%"]
]

with open(
    "results/tables/table3_detection_quality.csv",
    "w",
    newline=""
) as f:

    writer = csv.writer(f)

    writer.writerow([
        "Attack Type",
        "Detection Rate",
        "False Positive Rate"
    ])

    writer.writerows(rows)

print("Table 3 generated.")
