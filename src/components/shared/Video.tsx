import Album from './../../models/core/photographyAlbum';

type VideoProps = {
  album: Album;
  index: number;
  title: boolean;
  description: boolean;
};

function Video(props: VideoProps) {
  const video = props.album.getMedia()[props.index];
  const url = props.title ? video.src : `${video.src}?title=0&byline=0`;

  return (
    <figure>
      <div className = 'ratio ratio-16x9 gallery-video'>
        <iframe src = { url } title = { props.album.getTitle() } allowFullScreen />
      </div>
      {
        props.description && video.description.length !== 0 &&
          <figcaption className = 'video-caption'>
            { video.description }
          </figcaption>
      }
    </figure>
  );
}

export default Video;