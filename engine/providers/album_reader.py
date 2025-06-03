import json
from pathlib import Path
from datetime import datetime
from models.album import Album
from models.item import Item
from validators.validate_album_schema import validate_album_schema

DATE_FORMAT = "%Y-%m-%d"


def __parse_item(data: dict) -> Item:
    try:
        return Item(
            name=data["name"],
            description=data["description"],
            path=data["path"],
            orientation=data["orientation"],
            date=datetime.strptime(data["date"], DATE_FORMAT).date(),
            hidden=data["hidden"],
        )
    except (KeyError, ValueError) as e:
        raise ValueError(f"Invalid item data: {e}")


def __parse_album(data: dict) -> Album:
    try:
        return Album(
            schema=data.get("$schema", ""),
            name=data["name"],
            description=data["description"],
            genre=data["genre"],
            cover=data["cover"],
            items=[__parse_item(item) for item in data["items"]],
        )
    except (KeyError, ValueError) as e:
        raise ValueError(f"Invalid album data: {e}")


def read_album(filepath: str | Path, validate_data: bool = False) -> Album:
    try:
        path = Path(filepath)
        with path.open("r", encoding="utf-8") as file:
            data = json.load(file)

            if validate_data:
                validate_album_schema(data)
            return __parse_album(data)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON format: {e}")
    except FileNotFoundError:
        raise FileNotFoundError(f"Album file not found: {filepath}")
