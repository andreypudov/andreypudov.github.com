from typing import List

CAROUSEL_BODY = """
    <div class="carousel">
      <div class="overlay">
        <div class="corners">
          <div class="left-top"></div>
          <div class="right-top"></div>
          <div class="left-bottom"></div>
          <div class="right-bottom"></div>
        </div>
      </div>

      <div class="inner">
        <input class="open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="item">
          <span>
            Arganzuela Footbridge
            <small>A striking modern footbridge of steel and wood, gracefully spanning Madrid’s Manzanares River.</small>
          </span>
          <img src="media/photographs/2023-10-06_08/2023-10-06_08_004.webp" alt="A striking modern footbridge of steel and wood, gracefully spanning Madrid’s Manzanares River." loading="eager" />
        </div>

        <input class="open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="item">
          <span>
            Mir Station
            <small>A high-altitude ski station on Mount Elbrus, offering panoramic views of the Caucasus peaks.</small>
          </span>
          <img src="media/photographs/2021-07-24_08-02/2021-07-24_08-02_089.webp" alt="A high-altitude ski station on Mount Elbrus, offering panoramic views of the Caucasus peaks." loading="lazy" />
        </div>

        <input class="open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="item">
          <span>
            A Stroll Through Rekshino
            <small>A quiet walk through the village of Rekshino, where time slows and nature sets the rhythm of life.</small>
          </span>
          <img src="media/photographs/2019-10-26/2019-10-26_007.webp" alt="A quiet walk through the village of Rekshino, where time slows and nature sets the rhythm of life." loading="lazy" />
        </div>

        <input class="open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
        <div class="item">
          <span>
            National Mall
            <small>The symbolic heart of Washington, D.C., framed by monuments, museums, and open space.</small>
          </span>
          <img src="media/photographs/2016-10-15_11-05/2016-10-15_11-05_019_large.webp" alt="The symbolic heart of Washington, D.C., framed by monuments, museums, and open space." loading="lazy" />
        </div>

        <input class="open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden="">
        <div class="item">
          <span>
            Lake Baikal
            <small>The sun dips below the horizon, casting golden light over the vast, clear waters of Siberia’s Lake Baikal.</small>
          </span>
          <img src="media/photographs/2015-07-27_08-08/2015-07-27_08-08_022_large.webp" alt="The sun dips below the horizon, casting golden light over the vast, clear waters of Siberia’s Lake Baikal." loading="lazy" />
        </div>

        <ol class="indicators">
          <li>
            <label for="carousel-1" class="bullet">01</label>
          </li>
          <li>
            <label for="carousel-2" class="bullet">02</label>
          </li>
          <li>
            <label for="carousel-3" class="bullet">03</label>
          </li>
          <li>
            <label for="carousel-4" class="bullet">04</label>
          </li>
          <li>
            <label for="carousel-5" class="bullet">05</label>
          </li>
        </ol>
      </div>
    </div>
    """


def __render_carousel(items: List[str]) -> str:
    return CAROUSEL_BODY.strip()
