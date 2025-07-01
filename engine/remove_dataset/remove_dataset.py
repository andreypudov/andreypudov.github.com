"""Process template"""

from argparse import ArgumentParser, Namespace
from os import path as os_path
from pathlib import Path
from remove_dataset.render_template import remove_dataset
import sys


def parse_arguments() -> Namespace:
    """
    Parses command-line arguments for the remove dataset script.

    Returns:
        Namespace: The parsed command-line arguments.
    """

    parser = ArgumentParser(
        prog="remove_dataset",
        description="Remove dataset",
    )

    parser.add_argument(
        "--template",
        help="the location of the template file",
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

    Checks whether the provided template file, and output file exist.
    Exits with an error if they are missing.
    """
    if not os_path.isfile(args.template):
        sys.exit(f"File {args.template} does not exist")

    if not os_path.isfile(args.output):
        sys.exit(f"File {args.output} does not exist")


def main() -> None:
    """
    Main function for dataset removing.

    Parses command-line arguments, checks them, and removes the dataset.
    """

    args = parse_arguments()
    check_arguments(args)

    try:
        remove_dataset(Path(args.template), Path(args.output))
        print("Dataset removing completed.")
    except Exception as e:
        print(f"Dataset removing failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
