from models.item import Item
from utils.is_url import is_url
from utils.media_path import get_media_path


def validate_media_existence(item: Item) -> bool:
    if is_url(item.path):
        print(f"Skipping URL validation for {item.path}")
        return True

    path = get_media_path(item.path)

    if not path.is_file():
        print(f"Media file not found: {path}")
        return False

    return True
