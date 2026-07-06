import LazyImage from './LazyImage';
import type { Photograph } from '@/lib/photographs';

interface ImageGridProps {
  images: Photograph[];
  /** Anchor prefix of the grid tiles (e.g. "timelapse-grid"). */
  tilePrefix: string;
  /** Anchor prefix of the lightbox entries the tiles open. */
  entryPrefix: string;
}

/** A uniform grid of cover images, each opening a lightbox entry. */
export default function ImageGrid({ images, tilePrefix, entryPrefix }: ImageGridProps) {
  return (
    <div className="image-grid container">
      {images.map((image, index) => (
        <a id={`${tilePrefix}-${index + 1}`} href={`#${entryPrefix}-${index + 1}`} key={image.src}>
          <LazyImage image={image} />
        </a>
      ))}
    </div>
  );
}
