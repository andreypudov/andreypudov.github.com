from typing import List
from dominate.tags import ol, li, label, div, input_, span, img, small
from models.item import Item
from models.album import Album
from utils.string_utils import indent_string
from utils.path_utils import get_item_by_file_name

CAROUSEL_OVERLAY = """
      <div class="overlay">
        <div class="corners">
          <div class="left-top"></div>
          <div class="right-top"></div>
          <div class="left-bottom"></div>
          <div class="right-bottom"></div>
        </div>
      </div>
      """.strip()

CAROUSEL_BODY = """
    <div class="carousel">
      {OVERLAY}

      <div class="inner">
        {ITEMS}

        {INDICATORS}
      </div>
    </div>
    """.strip()


def __generate_item(item: Item, index: int) -> str:
    input_tag = input_(
        type="radio",
        id=f"carousel-{index}",
        name="carousel",
        aria_hidden="true",
        hidden=True,
        cls="open",
    )

    item_div = div(cls="item")
    label_span = span()
    label_span.add(item.name)
    label_span.add(small(item.description))
    image = img(src=item.path, alt=item.description, loading="lazy")

    item_div.add(label_span, image)

    return f"{input_tag}\n{item_div}"


def __generate_item_list(data: List[Item]) -> str:
    return "".join(
        __generate_item(item, index) for index, item in enumerate(data, start=1)
    )


def __generate_indicators(n: int) -> str:
    indicator_list = ol(_class="indicators")

    for i in range(1, n + 1):
        label_tag = label(f"{i:02}", _for=f"carousel-{i}", _class="indicator")
        li_tag = li()
        li_tag.add(label_tag)
        indicator_list.add(li_tag)

    return str(indicator_list)


def __render_carousel(template_values: List[str], data: List[Album]) -> str:
    items = [get_item_by_file_name(item, data) for item in template_values]
    if not all(items):
        raise ValueError("Some items could not be found in the provided data.")

    items = indent_string(__generate_item_list(items), 4)
    indicators = indent_string(__generate_indicators(len(template_values)), 4)

    return CAROUSEL_BODY.format(
        OVERLAY=CAROUSEL_OVERLAY, ITEMS=items.strip(), INDICATORS=indicators
    )
