"""Process template"""

from argparse import ArgumentParser, Namespace
from os import path as os_path
from pathlib import Path
from process_image.render_image import render_image
import sys


def parse_arguments() -> Namespace:
    """
    Parses command-line arguments for the image script.

    Returns:
        Namespace: The parsed command-line arguments.
    """

    parser = ArgumentParser(
        prog="process_image",
        description="Process image",
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
    Main function for image processing.

    Parses command-line arguments, checks them, and processes the image.
    """

    args = parse_arguments()
    check_arguments(args)

    try:
        render_image(Path(args.template), Path(args.output))
    except Exception as e:
        print(f"Image processing failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
