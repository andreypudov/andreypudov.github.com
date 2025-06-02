from dataclasses import dataclass
from datetime import date


@dataclass
class Item:
    name: str
    description: str
    path: str
    orientation: str
    date: date
    hidden: bool
