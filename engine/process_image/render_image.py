from pathlib import Path
from typing import Tuple
import re

from bs4 import BeautifulSoup

from process_image.convert_image import convert_image


def parse_image_attributes(opening_tag: str) -> Tuple[str, str, str, str]:
    soup = BeautifulSoup(opening_tag, "html.parser")
    image_tag = soup.find("image")

    if not image_tag:
        raise ValueError("No <image> tag found in opening tag")

    src = image_tag.get("src", "").strip()
    alt = image_tag.get("alt", "").strip()
    loading = image_tag.get("loading", "lazy").strip()
    fetchpriority = image_tag.get("fetchpriority", "auto").strip()

    return src, alt, loading, fetchpriority


def render_sourced_image(
    src: str, alt: str, loading: str, fetchpriority: str
) -> str:
    thumbnail_src = src.replace("media/photographs", "media/thumbnails")
    thumbnail_480 = thumbnail_src.replace(".webp", "_480.webp")
    thumbnail_980 = thumbnail_src.replace(".webp", "_980.webp")
    thumbnail_1280 = thumbnail_src.replace(".webp", "_1280.webp")

    convert_image(Path(f"../{src}"), Path(f"../{thumbnail_480}"), (480, 480))
    convert_image(Path(f"../{src}"), Path(f"../{thumbnail_980}"), (980, 980))
    convert_image(Path(f"../{src}"), Path(f"../{thumbnail_1280}"), (1280, 1280))

    srcset = (
        f"{thumbnail_480} 480w, "
        f"{thumbnail_980} 980w, "
        f"{thumbnail_1280} 1280w, "
        f"{src} 2048w"
    )

    sizes = (
        "(max-width: 480px) 100vw, "
        "(max-width: 980px) 90vw, "
        "(max-width: 1280px) 80vw, "
        "100vw"
    )

    new_content = (
        f'<img src="{thumbnail_src}" '
        f'alt="{alt}" '
        f'loading="{loading}" '
        f'fetchpriority="{fetchpriority}" '
        f'srcset="{srcset}" '
        f'sizes="{sizes}" '
        'decoding="async" />'
    )

    return new_content


def process_image_tag(template_file_content: str) -> str:
    pattern = re.compile(r"(\s*)(<image[^>]*?/>)", re.DOTALL)

    def replacer(match):
        indent = match.group(1)
        tag_value = match.group(2)

        src, alt, loading, fetchpriority = parse_image_attributes(tag_value)
        new_content = render_sourced_image(src, alt, loading, fetchpriority)

        return f"{indent}{new_content}"

    return pattern.sub(replacer, template_file_content)


def render_image(
    template_path: Path,
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = process_image_tag(template_file_content)
    file_path.write_text(processed_content)
