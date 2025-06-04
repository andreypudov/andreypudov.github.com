from dataclasses import dataclass
from datetime import date
from models.orientation import Orientation


@dataclass
class Item:
    name: str
    description: str
    path: str
    orientation: Orientation
    date: date
    hidden: bool
