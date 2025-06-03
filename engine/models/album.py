from dataclasses import dataclass
from typing import List
from models.item import Item


@dataclass
class Album:
    schema: str
    name: str
    description: str
    genre: str
    cover: str
    items: List[Item]
