"""Process dataset"""

from argparse import ArgumentParser, Namespace
from os import path as os_path
from pathlib import Path
from providers.dataset_reader import read_dataset
from process_dataset.render_dataset import render_dataset
import sys


def parse_arguments() -> Namespace:
    """
    Parses command-line arguments for the dataset script.

    Returns:
        Namespace: The parsed command-line arguments.
    """

    parser = ArgumentParser(
        prog="process_dataset",
        description="Process dataset",
    )

    parser.add_argument(
        "--template",
        help="the location of the template file",
        required=True,
    )

    parser.add_argument(
        "--dataset",
        help="the location of the dataset to validate",
        required=True,
    )

    parser.add_argument(
        "--output",
        help="the location of the output file",
        required=True,
    )

    return parser.parse_args()


def check_arguments(args: Namespace) -> None:
    """
    Validates input paths.

    Checks whether the provided template file, dataset directory,
    and output file exist. Exits with an error if they are missing.
    """
    if not os_path.isfile(args.template):
        sys.exit(f"File {args.template} does not exist")

    if not os_path.isdir(args.dataset):
        sys.exit(f"Directory {args.dataset} does not exist")

    if not os_path.isfile(args.output):
        sys.exit(f"File {args.output} does not exist")


def main() -> None:
    """
    Main function for dataset processing.

    Parses command-line arguments, checks them, and processes the dataset.
    """

    args = parse_arguments()
    check_arguments(args)

    try:
        dataset = read_dataset(Path(args.dataset))
        render_dataset(Path(args.template), dataset, Path(args.output))
        print("Dataset processing completed.")
    except Exception as e:
        print(f"Dataset processing failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
