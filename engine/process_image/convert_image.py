from pathlib import Path
from PIL import Image


def convert_image(
    image_path: Path,
    thumbnail_path: Path,
    thumbnail_max_size: tuple[int, int] = (200, 200),
) -> None:
    if not image_path.is_file():
        raise FileNotFoundError(f"Image not found at: {image_path}")

    thumbnail_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        with Image.open(image_path) as img:
            img.thumbnail(thumbnail_max_size)
            img.save(thumbnail_path)

    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        raise
