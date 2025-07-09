from pathlib import Path
from typing import Tuple
import re

from bs4 import BeautifulSoup

from process_image.convert_image import convert_image


def parse_image_attributes(opening_tag: str) -> Tuple[str, str, str, str, str]:
    soup = BeautifulSoup(opening_tag, "html.parser")
    image_tag = soup.find("image")

    if not image_tag:
        raise ValueError("No <image> tag found in opening tag")

    src = image_tag.get("src", "").strip()
    alt = image_tag.get("alt", "").strip()

    return src, alt


def render_lazy_image(src: str, alt: str, indent: str) -> str:
    inner_indent = indent + "  "

    convert_image(Path(f"../{src}"))

    return (
        f'<div class="lazy-image">\n'
        f'{inner_indent}<img class="low-res" src="{src}" />\n'
        f'{inner_indent}<img class="high-res" src="{src}'
        f' alt="{alt}" loading="lazy" />\n'
        f"{indent}</div>"
    )


def process_image_tag(template_file_content: str) -> str:
    pattern = re.compile(r"(\s*)(<image[^>]*?/>)", re.DOTALL)

    def replacer(match):
        indent = match.group(1)
        tag_value = match.group(2)

        src, alt = parse_image_attributes(tag_value)
        new_content = render_lazy_image(src, alt, indent.lstrip("\n"))

        return f"{indent}{new_content}"

    return pattern.sub(replacer, template_file_content)


def render_image(
    template_path: Path,
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = process_image_tag(template_file_content)
    file_path.write_text(processed_content)
