from pathlib import Path
from typing import List

from models.album import Album
from providers.album_reader import read_album

category_list = [Path("../data/photographs")]


def read_data(validate_data: bool = False) -> List[Album]:
    albums = []
    for category in category_list:
        if not category.is_dir():
            raise FileNotFoundError(f"Category {category} does not exist.")

        for filepath in category.iterdir():
            if not filepath.is_file():
                continue

            album = read_album(str(filepath), validate_data=validate_data)
            if not album:
                raise FileNotFoundError(
                    "Album file " f"{filepath} is empty or invalid."
                )

            albums.append(album)

    return albums
