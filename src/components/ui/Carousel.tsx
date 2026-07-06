import { Fragment } from 'react';

import LazyImage from './LazyImage';
import type { Photograph } from '@/lib/photographs';

/** Number of slide indicators shown, matching the original design. */
const INDICATOR_COUNT = 5;

/**
 * Full-screen, CSS-only slideshow. Slides are switched through hidden radio
 * inputs whose labels act as indicators (see carousel.css).
 */
export default function Carousel({ photographs }: { photographs: Photograph[] }) {
  return (
    <div className="carousel">
      <div className="overlay">
        <div className="corners">
          <div className="left-top"></div>
          <div className="right-top"></div>
          <div className="left-bottom"></div>
          <div className="right-bottom"></div>
        </div>
      </div>

      <div className="inner">
        {photographs.map((photograph, index) => (
          <Fragment key={photograph.src}>
            <input
              className="open"
              type="radio"
              id={`carousel-${index + 1}`}
              name="carousel"
              aria-hidden="true"
              hidden
              defaultChecked={index === 0 || undefined}
            />
            <div className="item">
              <span>
                {photograph.name}
                <small>{photograph.description}</small>
              </span>
              <LazyImage image={photograph} priority={index === 0} />
            </div>
          </Fragment>
        ))}

        <ol className="indicators">
          {Array.from({ length: INDICATOR_COUNT }, (_, index) => (
            <li key={index}>
              <label htmlFor={`carousel-${index + 1}`} className="bullet">
                {String(index + 1).padStart(2, '0')}
              </label>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
