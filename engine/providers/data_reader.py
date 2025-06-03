import os
from typing import List

from models.album import Album
from providers.album_reader import read_album

category_list = ["../data/photographs"]


def read_data(validate_data: bool = False) -> List[Album]:
    albums = []
    for category in category_list:
        if not os.path.isdir(category):
            print(f"Category {category} does not exist.")
            os.exit(1)

        for filename in os.listdir(category):
            file_path = os.path.join(category, filename)
            album = read_album(file_path, validate_data=validate_data)

            if not album:
                print(f"Album file {file_path} is empty or invalid.")
                os.exit(1)

            albums.append(album)

    return albums
