from urllib.parse import urlparse
from pathlib import Path

MEDIA_DIRECTORY = Path("../media/").resolve()


def is_url(path: str) -> bool:
    parsed = urlparse(path)
    return parsed.scheme in ("http", "https") and bool(parsed.netloc)


def get_media_path(item_path: str) -> Path:
    item_path = Path(item_path)

    if item_path.is_absolute():
        item_path = item_path.relative_to(item_path.anchor)

    return (MEDIA_DIRECTORY / item_path).resolve()
