#!/bin/bash

echo "Generating Table 2..."
python scripts/generate_table2.py

echo "Generating Table 3..."
python scripts/generate_table3.py

echo "Generating Table 4..."
python scripts/generate_table4.py

echo "Generating Table 5..."
python scripts/generate_table5.py

echo ""
echo "All evaluation tables reproduced successfully."
