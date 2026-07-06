import LazyImage from './LazyImage';
import type { Photograph } from '@/lib/photographs';

interface FeatureGridProps {
  /** The complete photograph collection shared by all feature grids and the lightbox. */
  photographs: Photograph[];
  /** Inclusive index ranges of `photographs` rendered as columns. */
  columns: Array<[number, number]>;
}

/**
 * A three-column grid of photographs. Tile identifiers are derived from the
 * global collection index so that every tile links to its lightbox entry.
 */
export default function FeatureGrid({ photographs, columns }: FeatureGridProps) {
  return (
    <div className="feature-grid container">
      {columns.map(([start, end]) => (
        <div className="column" key={start}>
          {photographs.slice(start, end + 1).map((photograph, offset) => {
            const id = start + offset + 1;
            return (
              <figure key={id}>
                <a id={`feature-grid-${id}`} href={`#lightbox-${id}`}>
                  <LazyImage image={photograph} />
                </a>
              </figure>
            );
          })}
        </div>
      ))}
    </div>
  );
}
