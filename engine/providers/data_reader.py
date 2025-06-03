from pathlib import Path
from typing import List

from models.album import Album
from providers.album_reader import read_album

category_list = [Path("../data/photographs")]


def read_data(validate_data: bool = False) -> List[Album]:
    albums = []
    for category in category_list:
        if not category.is_dir():
            print(f"Category {category} does not exist.")
            exit(1)

        for filepath in category.iterdir():
            if not filepath.is_file():
                continue

            album = read_album(str(filepath), validate_data=validate_data)
            if not album:
                print(f"Album file {filepath} is empty or invalid.")
                exit(1)

            albums.append(album)

    return albums
