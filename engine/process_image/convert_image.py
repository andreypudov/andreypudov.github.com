from pathlib import Path
from PIL import Image


def get_thumbnail_path(image_path: Path) -> Path:
    path_str = str(image_path)
    if "media/photographs" not in path_str:
        raise ValueError(
            f"Image path '{image_path}' does not contain 'media/photographs'."
        )

    thumbnail_path_str = path_str.replace(
        "media/photographs", "media/thumbnails"
    )
    thumbnail_path = Path(thumbnail_path_str)
    thumbnail_path.parent.mkdir(parents=True, exist_ok=True)

    return thumbnail_path


def convert_image(
    image_path: Path, thumbnail_max_size: tuple[int, int] = (300, 300)
) -> None:
    if not image_path.is_file():
        raise FileNotFoundError(f"Image not found at: {image_path}")

    thumbnail_path = get_thumbnail_path(image_path)

    try:
        with Image.open(image_path) as img:
            img.thumbnail(thumbnail_max_size)
            img.save(thumbnail_path)

    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        raise
