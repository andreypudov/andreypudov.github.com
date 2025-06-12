from pathlib import Path
from typing import List
from bs4 import BeautifulSoup
from typing import Tuple
import re

from models.album import Album
from providers.data_reader import read_data
from renders.render_carousel import __render_carousel

INDEX_FILE = Path("../index.html")
INDEX_TEMPLATE = Path("../templates/index.html")


def __render_template(
    template_type: str,
    items: List[str],
    data: List[Album],
) -> str:
    if template_type == "carousel":
        return __render_carousel(items, data)
    else:
        raise ValueError(f"Unknown template type: {template_type}")


def __parse_template(template_str: str) -> Tuple[str, List[str]]:
    soup = BeautifulSoup(template_str, "html.parser")
    template_tag = soup.find("template")

    if not template_tag:
        raise ValueError("No <template> tag found in input")

    template_type = template_tag.get("type", "").strip()
    inner_soup = BeautifulSoup(template_tag.decode_contents(), "html.parser")
    items = [li.get_text(strip=True) for li in inner_soup.find_all("li")]

    return template_type, items


def __process_template(
    template_file_content: str,
    data: List[Album],
) -> str:
    def replacer(match):
        template_str = match.group(0)
        template_type, items = __parse_template(template_str)
        return __render_template(template_type, items, data)

    pattern = re.compile(r"<template[^>]*?>.*?</template>", re.DOTALL)

    return pattern.sub(replacer, template_file_content)


def __update_file(
    file_path: str,
    template_path: str,
    data: List[Album],
) -> None:
    with open(template_path, "r") as template_file:
        template_file_content = template_file.read()

    processed_content = __process_template(template_file_content, data)

    with open(file_path, "w") as output_file:
        output_file.write(processed_content)


try:
    data = read_data()

    __update_file(INDEX_FILE, INDEX_TEMPLATE, data)
except Exception as e:
    print(f"Failed to update website: {e}")
