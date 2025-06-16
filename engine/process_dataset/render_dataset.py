from pathlib import Path
from typing import List
from bs4 import BeautifulSoup
from typing import Tuple
import re

from models.album import Album
from providers.query_dataset import query_album_item


def render_dataset_values(
    dataset_fields: str,
    items: List[str],
    data: List[Album],
    indentation: str = "",
) -> str:
    rendered_lines: List[str] = []
    field_names = [field.strip() for field in dataset_fields.split(",")]

    for filename in items:
        album_item = query_album_item(data, filename)

        if album_item:
            attributes: List[str] = []
            for field_name in field_names:
                field_value = getattr(album_item, field_name, "")
                attributes.append(f'{field_name}="{str(field_value)}"')

            attr_string = " ".join(attributes)

            rendered_line = f"{indentation}<var {attr_string}>{filename}</var>"
            rendered_lines.append(rendered_line)

    return "".join(rendered_lines)


def parse_dataset_tag(dataset_str: str) -> Tuple[str, List[str]]:
    soup = BeautifulSoup(dataset_str, "html.parser")
    dataset_tag = soup.find("dataset")

    if not dataset_tag:
        raise ValueError("No <dataset> tag found in input")

    dataset_fields = dataset_tag.get("data-fields", "").strip()
    inner_soup = BeautifulSoup(dataset_tag.decode_contents(), "html.parser")
    items = [var.get_text(strip=True) for var in inner_soup.find_all("var")]

    return dataset_fields, items


def process_dataset_tag(
    template_file_content: str,
    data: List[Album],
) -> str:
    def replacer(match):
        full_match = match.group(0)
        indentation_match = re.match(r"(\s*)<dataset", full_match)
        indentation = indentation_match.group(1) if indentation_match else ""

        dataset_str = full_match
        dataset_fields, items = parse_dataset_tag(dataset_str)
        return render_dataset_values(dataset_fields, items, data, indentation)

    pattern = re.compile(r"(\s*)<dataset[^>]*?>.*?</dataset>", re.DOTALL)

    return pattern.sub(replacer, template_file_content)


def render_dataset(
    template_path: Path,
    data: List[Album],
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = process_dataset_tag(template_file_content, data)
    file_path.write_text(processed_content)
