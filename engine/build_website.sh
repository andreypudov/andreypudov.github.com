#!/usr/bin/env sh

cd "$(dirname -- "$(which -- "$0" 2>/dev/null || realpath -- "$0")")" || exit 1

echo "Validating dataset..."
python3 -m validate_dataset.validate_dataset \
    --data-set ../data/photographs \
    --schema ../data/schemas/album.schema.json > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Dataset validation failed."
    exit 1
fi

echo "Processing templates..."
python3 -m process_template.process_template \
    --template ../templates/index.html \
    --output ../index.html > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Template processing failed."
    exit 1
fi
