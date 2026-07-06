import type { Photograph } from '@/lib/photographs';

interface LightboxProps {
  photographs: Photograph[];
  /** Anchor prefix of the lightbox entries (e.g. "lightbox-travel"). */
  entryPrefix: string;
  /** Anchor prefix of the grid tiles the close button returns to. */
  tilePrefix: string;
  /** Optional variant class appended to the lightbox container. */
  variant?: string;
}

/**
 * CSS-only fullscreen gallery. Entries are plain page anchors: opening,
 * closing and navigation work through fragment links (see lightbox.css).
 */
export default function Lightbox({ photographs, entryPrefix, tilePrefix, variant }: LightboxProps) {
  const length = photographs.length;

  return (
    <div className={variant ? `lightbox ${variant}` : 'lightbox'}>
      {photographs.map((photograph, index) => {
        const previous = index === 0 ? length : index;
        const next = index === length - 1 ? 1 : index + 2;

        return (
          <div className="lightbox-entry" id={`${entryPrefix}-${index + 1}`} key={photograph.src}>
            <div className="header">
              <span className="counter">{index + 1} / {length}</span>
              <a href={`#${tilePrefix}-${index + 1}`} className="close">&times;</a>
            </div>
            <div className="content">
              <a href={`#${entryPrefix}-${previous}`} className="nav prev">&#10094;</a>
              <figure>
                <div className="image-wrapper">
                  <img src={photograph.src} alt={photograph.description} loading="lazy" />
                </div>
                <figcaption>
                  {photograph.name}
                  <small>{photograph.description}</small>
                </figcaption>
              </figure>
              <a href={`#${entryPrefix}-${next}`} className="nav next">&#10095;</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
