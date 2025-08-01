from pathlib import Path
from typing import Tuple
from PIL import Image


def image_size(image_path: Path) -> Tuple[int, int]:
    with Image.open(image_path) as img:
        return img.size
