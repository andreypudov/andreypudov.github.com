from PIL import Image
from models.item import Item
from models.orientation import Orientation
from utils.is_url import is_url
from utils.media_path import get_media_path


def __get_orientation(height: int, width: int) -> Orientation:
    if height > width:
        return Orientation.PORTRAIT
    else:
        return Orientation.LANDSCAPE


def validate_media_orientation(item: Item) -> bool:
    if is_url(item.path):
        print(f"Skipping URL validation for {item.path}")
        return True

    path = get_media_path(item.path)

    try:
        with Image.open(path) as img:
            width, height = img.size

        expected = item.orientation
        actual = __get_orientation(height, width)

        if actual != expected:
            print(
                "Orientation mismatch: expected "
                f"{expected.value}, got {actual.value} for {path}"
            )
            return False

        return True
    except Exception as e:
        print(f"Failed to validate orientation for {path}: {e}")
        return False
