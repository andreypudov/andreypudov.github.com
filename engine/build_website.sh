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

process_image() {
  template="$1"
  output="$2"

  python3 -m process_image.process_image \
  --template "$template" \
  --output "$output"> /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Image processing failed."
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
validate_dataset "../data/photographs"

echo "Processing datasets..."
process_dataset "../templates/home.html" "../data/photographs" "../index.html"
process_dataset "../templates/about.html" "../data/photographs" "../about/index.html"
process_dataset "../templates/contact.html" "../data/photographs" "../contact/index.html"
process_dataset "../templates/portfolio.html" "../data/photographs" "../portfolio/index.html"
process_dataset "../templates/404.html" "../data/photographs" "../404.html"

echo "Processing repeats..."
process_repeat "../index.html" "../index.html"
process_repeat "../about/index.html" "../about/index.html"
process_repeat "../contact/index.html" "../contact/index.html"
process_repeat "../portfolio/index.html" "../portfolio/index.html"
process_repeat "../404.html" "../404.html"

# echo "Processing images..."
# process_image "../index.html" "../index.html"
# process_image "../about/index.html" "../about/index.html"
# process_image "../contact/index.html" "../contact/index.html"
# process_image "../portfolio/index.html" "../portfolio/index.html"
# process_image "../404.html" "../404.html"

echo "Removing dataset tags..."
remove_dataset "../index.html" "../index.html"
remove_dataset "../about/index.html" "../about/index.html"
remove_dataset "../contact/index.html" "../contact/index.html"
remove_dataset "../portfolio/index.html" "../portfolio/index.html"
remove_dataset "../404.html" "../404.html"

echo "Website build completed successfully."
