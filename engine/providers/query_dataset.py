from models.album import Album
from models.item import Item
from typing import List
from utils.path_utils import is_url


def query_album_item(dataset: List[Album], filename: str) -> Item:
    if not filename:
        return None

    for album in dataset:
        for item in album.items:
            if not is_url(item.path) and item.path.endswith(filename):
                return item

    return None
