from pathlib import Path
from typing import List, Tuple
import re

from bs4 import BeautifulSoup

from process_repeat.render_repeat_item import render_repeat_item


def parse_repeat_attributes(opening_tag: str) -> Tuple[str, str]:
    soup = BeautifulSoup(opening_tag, "html.parser")
    repeat_tag = soup.find("repeat")

    if not repeat_tag:
        raise ValueError("No <repeat> tag found in opening tag")

    dataset = repeat_tag.get("data-set", "").strip()
    index = repeat_tag.get("data-index", "").strip()
    start = repeat_tag.get("data-start", "").strip()
    end = repeat_tag.get("data-end", "").strip()

    return dataset, index, start, end


def get_dataset(template_content: str, dataset_name: str) -> List:
    soup = BeautifulSoup(template_content, "html.parser")
    dataset_tag = soup.find("dataset", {"data-name": dataset_name})

    if not dataset_tag:
        return []

    var_tags = dataset_tag.find_all("var")

    result = []
    for var_tag in var_tags:
        var_dict = {}

        for attr_name, attr_value in var_tag.attrs.items():
            var_dict[attr_name] = attr_value

        result.append(var_dict)

    return result


def characters_to_remove(content: str, indent: str) -> int:
    for line in content.splitlines():
        if line.strip():
            current_indent = len(line) - len(line.lstrip())
            return max(current_indent - len(indent), 0)
    return 0


def correct_indentation(content: str, indent: str) -> str:
    to_remove = characters_to_remove(content, indent)
    return "\n".join(line[to_remove:] for line in content.splitlines())


def process_repeat_content(
    template_content: str,
    repeat_content: str,
    dataset_name: str,
    index_name: str,
    start_index: str,
    end_index: str,
    indent: str = "",
) -> str:
    dataset_items = get_dataset(template_content, dataset_name)
    if not dataset_items:
        raise ValueError(f"No dataset found with name '{dataset_name}'")

    if not start_index:
        start_index = 0
    start_index = int(start_index) if start_index else 0

    if not end_index:
        end_index = len(dataset_items)
    end_index = min(int(end_index) + 1, len(dataset_items))

    repeated_items = []
    enumerator = enumerate(
        dataset_items[start_index:end_index], start=start_index
    )
    for index, item in enumerator:
        item_variables = dict(item)
        if index_name:
            item_variables[index_name] = index

        repeat_content = correct_indentation(repeat_content, indent)
        processed_item = render_repeat_item(repeat_content, item_variables)
        repeated_items.append(processed_item)

    return "\n\n".join(repeated_items)


def process_repeat_tag(template_file_content: str) -> str:
    pattern = re.compile(
        r"(^[ \t]*)<repeat[^>]*?>(.*?)(</repeat>)", re.DOTALL | re.MULTILINE
    )

    def replacer(match):
        indent = match.group(1)
        opening_tag = match.group(0).lstrip()
        content = match.group(2).rstrip()

        if content.startswith("\n"):
            content = content[1:]

        dataset, index, start, end = parse_repeat_attributes(opening_tag)

        return process_repeat_content(
            template_file_content, content, dataset, index, start, end, indent
        )

    return pattern.sub(replacer, template_file_content)


def render_repeat(
    template_path: Path,
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = process_repeat_tag(template_file_content)
    file_path.write_text(processed_content)
