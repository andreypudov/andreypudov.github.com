from pathlib import Path
from typing import Tuple
import re

from bs4 import BeautifulSoup

from process_image.image_size import image_size
from process_image.convert_image import convert_image


def parse_image_attributes(opening_tag: str) -> Tuple[str, str, str, str]:
    soup = BeautifulSoup(opening_tag, "html.parser")
    image_tag = soup.find("image")

    if not image_tag:
        raise ValueError("No <image> tag found in opening tag")

    src = image_tag.get("src", "").strip()
    alt = image_tag.get("alt", "").strip()

    return src, alt


def normalize_path(path: str) -> str:
    normalized = re.sub(r"^(\.\./)+", "", path)
    return normalized


def render_sourced_image(src: str, alt: str, indent: str) -> str:
    thumbnail_src = src.replace("media/photographs", "media/thumbnails")
    thumbnail_300 = thumbnail_src.replace(".webp", "_300.webp")

    actual_src = Path(f"../{normalize_path(src)}")
    actual_thumbnail_src = Path(f"../{normalize_path(thumbnail_300)}")

    convert_image(actual_src, actual_thumbnail_src, (300, 300))
    low_size = image_size(actual_thumbnail_src)
    high_size = image_size(actual_src)

    low_res_img = (
        f'<img src="{thumbnail_300}" '
        f'class="low" '
        f'loading="lazy" '
        f'width="{low_size[0]}" '
        f'height="{low_size[1]}" '
        f'alt="{alt}" />'
    )
    high_res_img = (
        f'<img src="{src}" '
        f'class="high" '
        f'loading="lazy" '
        f'width="{high_size[0]}" '
        f'height="{high_size[1]}" '
        f'alt="{alt}" />'
    )

    new_content = (
        f'<div class="lazy-image">'
        f"{indent}  {low_res_img}"
        f"{indent}  {high_res_img}"
        f"{indent}</div>"
    )

    return new_content


def process_image_tag(template_file_content: str) -> str:
    pattern = re.compile(r"(\s*)(<image[^>]*?/>)", re.DOTALL)

    def replacer(match):
        indent = match.group(1)
        tag_value = match.group(2)

        src, alt = parse_image_attributes(tag_value)
        new_content = render_sourced_image(src, alt, indent)

        return f"{indent}{new_content}"

    return pattern.sub(replacer, template_file_content)


def render_image(
    template_path: Path,
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = process_image_tag(template_file_content)
    file_path.write_text(processed_content)
