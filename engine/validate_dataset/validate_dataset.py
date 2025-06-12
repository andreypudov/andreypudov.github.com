"""Validate dataset"""

from argparse import ArgumentParser, Namespace
from os import path as os_path
from pathlib import Path
from providers.dataset_reader import read_dataset


def __parse_arguments() -> Namespace:
    """
    Parses command-line arguments for the validation script.

    Returns:
        arguments: An object containing the parsed command line-arguments.
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


def __check_arguments(args: Namespace) -> None:
    """
    Check the validity of input and output subtitle files.

    This function checks if the provided dataset directory and schema file
    exist. If they do not exist, it exits the program with an error message.
    """
    if not os_path.isdir(args.data_set):
        exit(f"Directory {args.data_set} does not exist")

    if not os_path.isfile(args.schema):
        exit(f"File {args.schema} does not exist")


def main() -> None:
    """
    Main function for translating subtitles.

    This function parses command line arguments, checks the arguments,
    and performs the translation process.
    """

    args = __parse_arguments()
    __check_arguments(args)

    try:
        data = read_dataset(
            Path(args.data_set),
            Path(args.schema),
            validate_data=True,
        )
        print(f"Data validation completed. Found {len(data)} albums.")
    except Exception as e:
        print(f"Data validation failed: {e}")


if __name__ == "__main__":
    main()
