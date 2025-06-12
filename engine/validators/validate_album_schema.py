import json
from functools import lru_cache
import fastjsonschema
from fastjsonschema.exceptions import JsonSchemaException
from pathlib import Path


@lru_cache(maxsize=None)
def __compile_validator(schema_path: str):
    with open(schema_path, "r", encoding="utf-8") as file:
        schema = json.load(file)
    return fastjsonschema.compile(schema)


def validate_album_schema(album_data: dict, schema_path: Path) -> bool:
    name = album_data.get("name", "<unknown>")
    print(f"Validating {name} against schema...")

    try:
        validate_func = __compile_validator(schema_path)
        validate_func(album_data)
    except JsonSchemaException as e:
        print(f"Validation error: {e.message}")
        return False
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

    return True
