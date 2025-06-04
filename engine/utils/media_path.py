from pathlib import Path

MEDIA_DIRECTORY = Path("../media/").resolve()


def get_media_path(item_path: str) -> Path:
    item_path = Path(item_path)

    if item_path.is_absolute():
        item_path = item_path.relative_to(item_path.anchor)

    return (MEDIA_DIRECTORY / item_path).resolve()
