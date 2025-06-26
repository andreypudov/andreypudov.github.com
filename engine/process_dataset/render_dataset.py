from pathlib import Path
from typing import List
import re

from bs4 import BeautifulSoup

from models.album import Album
from providers.query_dataset import query_album_item


def parse_dataset_attributes(opening_tag: str) -> str:
    soup = BeautifulSoup(opening_tag, "html.parser")
    dataset_tag = soup.find("dataset")

    if not dataset_tag:
        raise ValueError("No <dataset> tag found in opening tag")

    return dataset_tag.get("data-fields", "").strip()


def replace_var_tag(line: str, dataset_fields: str, data: List[Album]) -> str:
    var_match = re.search(r"<var[^>]*>(.*?)</var>", line)
    if not var_match:
        return line

    filename = var_match.group(1).strip()
    album_item = query_album_item(data, filename)

    if not album_item:
        return line

    field_names = [field.strip() for field in dataset_fields.split(",")]
    attributes: List[str] = []

    for field_name in field_names:
        field_value = getattr(album_item, field_name, "")
        attributes.append(f'{field_name}="{str(field_value)}"')

    attr_string = " ".join(attributes)
    new_var_tag = f"<var {attr_string}>{filename}</var>"

    return re.sub(r"<var[^>]*>.*?</var>", new_var_tag, line)


def process_dataset_content(
    content: str, dataset_fields: str, data: List[Album]
) -> str:
    lines = content.split("\n")
    processed_lines = []

    for line in lines:
        processed_line = replace_var_tag(line, dataset_fields, data)
        processed_lines.append(processed_line)

    return "\n".join(processed_lines)


def process_dataset_tag(
    template_file_content: str,
    data: List[Album],
) -> str:
    def replacer(match):
        opening_tag = match.group(1)
        content = match.group(2)
        closing_tag = match.group(3)

        dataset_fields = parse_dataset_attributes(opening_tag)
        new_content = process_dataset_content(content, dataset_fields, data)

        return opening_tag + new_content + closing_tag

    pattern = re.compile(r"(\s*<dataset[^>]*?>)(.*?)(</dataset>)", re.DOTALL)

    return pattern.sub(replacer, template_file_content)


def render_dataset(
    template_path: Path,
    data: List[Album],
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = process_dataset_tag(template_file_content, data)
    file_path.write_text(processed_content)
