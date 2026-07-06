export interface Video {
  title: string;
  description: string;
  /** Vimeo player video identifier. */
  vimeoId: string;
  /** Variant class of the video wrapper (see lightbox.css). */
  wrapperClass: string;
}

interface VideoLightboxProps {
  videos: Video[];
  /** Anchor prefix of the lightbox entries (e.g. "lightbox-timelapse"). */
  entryPrefix: string;
  /** Anchor prefix of the grid tiles the close button returns to. */
  tilePrefix: string;
}

/** CSS-only fullscreen gallery of embedded Vimeo players. */
export default function VideoLightbox({ videos, entryPrefix, tilePrefix }: VideoLightboxProps) {
  const length = videos.length;

  return (
    <div className="lightbox">
      {videos.map((video, index) => {
        const previous = index === 0 ? length : index;
        const next = index === length - 1 ? 1 : index + 2;

        return (
          <div className="lightbox-entry" id={`${entryPrefix}-${index + 1}`} key={video.vimeoId}>
            <div className="header">
              <span className="counter">{index + 1} / {length}</span>
              <a href={`#${tilePrefix}-${index + 1}`} className="close">&times;</a>
            </div>
            <div className="content">
              <a href={`#${entryPrefix}-${previous}`} className="nav prev">&#10094;</a>
              <figure>
                <div className={`video-wrapper ${video.wrapperClass}`}>
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    title={video.title}
                  >
                  </iframe>
                </div>
                <figcaption>
                  {video.title}
                  <small>{video.description}</small>
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
