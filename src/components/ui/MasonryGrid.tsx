import LazyImage from './LazyImage';
import type { Photograph } from '@/lib/photographs';

interface MasonryGridProps {
  photographs: Photograph[];
  /** Section name used to build tile and lightbox anchors (e.g. "travel"). */
  section: string;
  /** Set when the grid holds the first image of the page (see LazyImage). */
  priority?: boolean;
}

/** A CSS-only masonry layout of photographs linked to a section lightbox. */
export default function MasonryGrid({ photographs, section, priority = false }: MasonryGridProps) {
  return (
    <div className="masonry-grid">
      {photographs.map((photograph, index) => (
        <figure key={photograph.src}>
          <a id={`${section}-grid-${index + 1}`} href={`#lightbox-${section}-${index + 1}`}>
            <LazyImage image={photograph} priority={priority && index === 0} />
          </a>
        </figure>
      ))}
    </div>
  );
}
