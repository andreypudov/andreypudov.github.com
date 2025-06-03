import json
from functools import lru_cache
import fastjsonschema
from fastjsonschema.exceptions import JsonSchemaException

SCHEMA_FILE = "../data/schemas/album.schema.json"


@lru_cache(maxsize=None)
def __compile_validator(schema_path: str):
    with open(schema_path, "r", encoding="utf-8") as file:
        schema = json.load(file)
    return fastjsonschema.compile(schema)


def validate_album_schema(album_data: dict) -> None:
    try:
        name = album_data.get("name", "<unknown>")
        print(f"Validating {name} against schema...")
        validate_func = __compile_validator(SCHEMA_FILE)
        validate_func(album_data)
    except JsonSchemaException as e:
        print(f"Validation error: {e.message}")
    except Exception as e:
        print(f"Error: {str(e)}")
