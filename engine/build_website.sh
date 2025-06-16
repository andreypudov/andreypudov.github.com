#!/usr/bin/env sh

cd "$(dirname -- "$(which -- "$0" 2>/dev/null || realpath -- "$0")")" || exit 1

validate_dataset() {
  dataset="$1"

  python3 -m validate_dataset.validate_dataset \
  --dataset "$dataset" \
  --schema ../data/schemas/album.schema.json > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Dataset validation failed."
    exit 1
  fi
}

process_dataset() {
  template="$1"
  dataset="$2"
  output="$3"

  python3 -m process_dataset.process_dataset \
  --template "$template" \
  --dataset "$dataset" \
  --output "$output" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Dataset processing failed."
    exit 1
  fi
}

process_template() {
  template="$1"
  output="$2"

  python3 -m process_template.process_template \
  --template "$template" \
  --output "$output" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Template processing failed."
    exit 1
  fi
}

echo "Validating dataset..."
# validate_dataset "../data/photographs"

echo "Processing datasets..."
process_dataset "../templates/index.html" "../data/photographs" "../index.html"

echo "Processing templates..."
# process_template "../index.html" "../index.html"

echo "Website build completed successfully."
