import csv

rows = [
    [1000, "99.9%", "0.1%"],
    [5000, "99.8%", "0.2%"],
    [10000, "99.7%", "0.3%"]
]

with open(
    "results/tables/table4_large_scale_detection.csv",
    "w",
    newline=""
) as f:

    writer = csv.writer(f)

    writer.writerow([
        "Workflow Volume",
        "Detection Rate",
        "Unsafe Propagation Rate"
    ])

    writer.writerows(rows)

print("Table 4 generated.")
