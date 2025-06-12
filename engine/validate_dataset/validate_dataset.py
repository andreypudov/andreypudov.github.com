"""Validate dataset"""

from argparse import ArgumentParser, Namespace
from os import path as os_path
from pathlib import Path
from providers.dataset_reader import read_dataset
import sys


def parse_arguments() -> Namespace:
    """
    Parses command-line arguments for the dataset validation script.

    Returns:
        Namespace: The parsed command-line arguments.
    """

    parser = ArgumentParser(
        prog="validate_dataset",
        description="Validate dataset",
    )

    parser.add_argument(
        "--data-set",
        help="the location of the dataset to validate",
        required=True,
    )

    parser.add_argument(
        "--schema",
        help="the location of the schema to validate against",
        required=True,
    )

    return parser.parse_args()


def check_arguments(args: Namespace) -> None:
    """
    Validates input paths.

    Checks whether the provided dataset directory and schema file exist.
    Exits with an error if they are missing.
    """
    if not os_path.isdir(args.data_set):
        sys.exit(f"Directory {args.data_set} does not exist")

    if not os_path.isfile(args.schema):
        sys.exit(f"File {args.schema} does not exist")


def main() -> None:
    """
    Main function for dataset validation.

    Parses command-line arguments, checks them, and validates the dataset.
    """

    args = parse_arguments()
    check_arguments(args)

    try:
        data = read_dataset(
            Path(args.data_set),
            Path(args.schema),
            validate_data=True,
        )
        print(f"Data validation completed. Found {len(data)} albums.")
    except Exception as e:
        print(f"Data validation failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
