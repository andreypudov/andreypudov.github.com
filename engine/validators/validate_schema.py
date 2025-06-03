from functools import lru_cache
from jsonschema import validate, ValidationError
import json

SCHEMA_FILE = "../data/schemas/album.schema.json"


@lru_cache(maxsize=None)
def __load_schema(schema_path: str) -> dict:
    with open(schema_path, "r", encoding="utf-8") as file:
        return json.load(file)


def validate_schema(album_data: dict) -> None:
    try:
        print(f"Validating {album_data['name']} against schema...")
        schema = __load_schema(SCHEMA_FILE)
        validate(instance=album_data, schema=schema)
    except ValidationError as e:
        print(f"Validation error: {e.message}")
    except Exception as e:
        print(f"Error: {str(e)}")
