def indent_string(text: str, indent: int) -> str:
    lines = text.splitlines()
    if not lines:
        return text  # Return as-is if text is empty or has no lines

    indent_str = " " * indent * 2
    indented_lines = [lines[0]] + [f"{indent_str}{line}" for line in lines[1:]]

    return "\n".join(indented_lines)
