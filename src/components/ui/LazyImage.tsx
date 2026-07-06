import type { Photograph } from '@/lib/photographs';

interface LazyImageProps {
  image: Photograph;
  /**
   * Marks the primary image of a page: it is loaded eagerly with high
   * priority instead of lazily, to improve the largest contentful paint.
   */
  priority?: boolean;
}

/**
 * A progressively loaded image: a tiny thumbnail is rendered first and the
 * full-resolution photograph replaces it once downloaded (see lazy-image.css).
 */
export default function LazyImage({ image, priority = false }: LazyImageProps) {
  return (
    <div className="lazy-image">
      <img
        src={image.thumbnailSrc}
        className="low"
        loading="lazy"
        width={image.thumbnailWidth}
        height={image.thumbnailHeight}
        alt={image.description}
      />
      <img
        src={image.src}
        className="high"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        width={image.width}
        height={image.height}
        alt={image.description}
      />
    </div>
  );
}
