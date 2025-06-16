from pathlib import Path
from typing import List
from models.album import Album
from providers.album_reader import read_album


def read_dataset(
    dataset: Path, schemas: Path = None, validate_data: bool = False
) -> List[Album]:
    albums = []

    if not dataset.is_dir():
        raise FileNotFoundError(f"Dataset {dataset} does not exist.")

    for album_path in dataset.iterdir():
        if not album_path.is_file():
            continue

        album = read_album(album_path, schemas, validate_data)
        if not album:
            raise FileNotFoundError(
                "Album file " f"{album_path} is empty or invalid.",
            )

        albums.append(album)

    return albums
