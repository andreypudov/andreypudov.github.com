import json
from pathlib import Path
from datetime import datetime
from models.album import Album
from models.item import Item
from models.orientation import Orientation
from validators.validate_album_cover import validate_album_cover
from validators.validate_album_schema import validate_album_schema
from validators.validate_media_date import validate_media_date
from validators.validate_media_existence import validate_media_existence
from validators.validate_media_orientation import validate_media_orientation

DATE_FORMAT = "%Y-%m-%d"


def parse_item(data: dict, validate_data: bool = False) -> Item:
    try:
        item = Item(
            name=data["name"],
            description=data["description"],
            path=data["path"],
            orientation=Orientation(data["orientation"]),
            date=datetime.strptime(data["date"], DATE_FORMAT).date(),
        )

        if validate_data:
            if validate_media_date(item) is False:
                raise ValueError(f"Invalid date for item: {item.name}")
            if validate_media_existence(item) is False:
                raise FileNotFoundError(
                    "Media file not found for " f"item: {item.name}"
                )
            if validate_media_orientation(item) is False:
                raise ValueError(f"Invalid orientation for item: {item.name}")

        return item
    except (KeyError, ValueError) as e:
        raise ValueError(f"Invalid item data: {e}")


def parse_album(data: dict, validate_data: bool = False) -> Album:
    try:
        album = Album(
            schema=data.get("$schema", ""),
            name=data["name"],
            description=data["description"],
            genre=data["genre"],
            cover=data["cover"],
            items=[
                parse_item(
                    item,
                    validate_data=validate_data,
                )
                for item in data["items"]
            ],
        )

        if validate_data:
            if validate_album_cover(album) is False:
                raise ValueError(f"Invalid cover for album: {album.name}")

        return album
    except (KeyError, ValueError) as e:
        raise ValueError(f"Invalid album data: {e}")


def read_album(
    album_path: Path, schema_path: Path, validate_data: bool = False
) -> Album:
    try:
        with album_path.open("r", encoding="utf-8") as file:
            data = json.load(file)

            if validate_data:
                if validate_album_schema(data, schema_path) is False:
                    raise ValueError("Album data does not conform to schema.")
            return parse_album(data, validate_data=validate_data)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON format: {e}")
    except FileNotFoundError:
        raise FileNotFoundError(f"Album file not found: {album_path}")
