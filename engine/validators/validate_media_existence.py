from models.item import Item
from pathlib import Path

MEDIA_DIRECTORY = Path("../media/")


def validate_media_existence(item: Item) -> bool:
    # path = Path(MEDIA_DIRECTORY, item.path).resolve()

    # if not path.is_file():
    #     raise FileNotFoundError(f"Media file not found: {path}")

    return True
