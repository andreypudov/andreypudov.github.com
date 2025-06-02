import json
from pathlib import Path
from datetime import datetime
from models.album import Album
from models.item import Item


class AlbumReader:
    DATE_FORMAT = "%Y-%m-%d"

    @classmethod
    def parse_item(cls, data: dict) -> Item:
        try:
            return Item(
                name=data["name"],
                description=data["description"],
                path=data["path"],
                orientation=data["orientation"],
                date=datetime.strptime(data["date"], cls.DATE_FORMAT).date(),
                hidden=data["hidden"],
            )
        except (KeyError, ValueError) as e:
            raise ValueError(f"Invalid item data: {e}")

    @classmethod
    def parse_album(cls, data: dict) -> Album:
        try:
            return Album(
                schema=data.get("$schema", ""),  # Optional: validate if needed
                name=data["name"],
                description=data["description"],
                genre=data["genre"],
                cover=data["cover"],
                items=[cls.parse_item(item) for item in data["items"]],
            )
        except (KeyError, ValueError) as e:
            raise ValueError(f"Invalid album data: {e}")

    @classmethod
    def read(cls, filepath: str | Path) -> Album:
        try:
            path = Path(filepath)
            with path.open("r", encoding="utf-8") as file:
                data = json.load(file)
                return cls.parse_album(data)
        except json.JSONDecodeError as e:
            raise ValueError(f"Invalid JSON format: {e}")
        except FileNotFoundError:
            raise FileNotFoundError(f"Album file not found: {filepath}")
