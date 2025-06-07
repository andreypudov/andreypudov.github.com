from models.album import Album
from models.item import Item
from typing import List
from utils.is_url import is_url


def get_item_by_file_name(file_name: str, data: List[Album]) -> Item | None:
    if not file_name:
        return None

    for album in data:
        for item in album.items:
            if not is_url(item.path) and item.path.endswith(file_name):
                return item

    return None
