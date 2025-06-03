from models.item import Item
from pathlib import Path


def validate_media_existence(item: Item) -> None:
    path = Path(item.path)

    if not path.is_file():
        raise FileNotFoundError(f"Media file not found: {path}")
