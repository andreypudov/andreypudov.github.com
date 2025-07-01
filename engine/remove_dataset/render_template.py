from pathlib import Path
import re


def remove_repeat_tag(template_file_content: str) -> str:
    dataset_pattern = r"^[ \t]*<dataset\b[^>]*>.*?</dataset>[ \t]*\r?\n?"
    return re.sub(
        dataset_pattern,
        "",
        template_file_content,
        flags=re.DOTALL | re.MULTILINE,
    )


def remove_dataset(
    template_path: Path,
    file_path: Path,
) -> None:
    template_file_content = template_path.read_text()
    processed_content = remove_repeat_tag(template_file_content)
    file_path.write_text(processed_content)
