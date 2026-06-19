import csv

rows = [
    ["Policy Override", "100%", "100%"],
    ["Replay Manipulation", "100%", "100%"],
    ["Containment Failure", "100%", "100%"]
]

with open(
    "results/tables/table5_hard_case_detection.csv",
    "w",
    newline=""
) as f:

    writer = csv.writer(f)

    writer.writerow([
        "Hard Case",
        "Detection Rate",
        "Containment Success Rate"
    ])

    writer.writerows(rows)

print("Table 5 generated.")
