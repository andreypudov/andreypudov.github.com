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

process_repeat() {
  template="$1"
  output="$2"

  python3 -m process_repeat.process_repeat \
  --template "$template" \
  --output "$output" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Repeat processing failed."
    exit 1
  fi
}

remove_dataset() {
  template="$1"
  output="$2"

  python3 -m remove_dataset.remove_dataset \
  --template "$template" \
  --output "$output" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Dataset removing failed."
    exit 1
  fi
}


echo "Validating dataset..."
# validate_dataset "../data/photographs"

echo "Processing datasets..."
process_dataset "../templates/index.html" "../data/photographs" "../index.html"

echo "Processing repeats..."
process_repeat "../index.html" "../index.html"

echo "Removing dataset tags..."
remove_dataset "../index.html" "../index.html"

echo "Website build completed successfully."
