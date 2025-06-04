from models.item import Item
from pathlib import Path
from urllib.parse import urlparse

MEDIA_DIRECTORY = Path("../media/").resolve()


def __is_url(path: str) -> bool:
    parsed = urlparse(path)
    return parsed.scheme in ("http", "https") and bool(parsed.netloc)


def validate_media_existence(item: Item) -> bool:
    if __is_url(item.path):
        print(f"Skipping URL validation for {item.path}")
        return True

    item_path = Path(item.path)
    if item_path.is_absolute():
        item_path = item_path.relative_to(item_path.anchor)

    path = (MEDIA_DIRECTORY / item_path).resolve()

    if not path.is_file():
        print(f"Media file not found: {path}")
        return False

    return True
