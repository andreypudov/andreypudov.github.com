import Album from './../../models/core/photographyAlbum';

type VideoProps = {
  album: Album;
  index: number;
  title: boolean;
  description: boolean;
};

const Video = (props: VideoProps) => {
  const video = props.album.getMedia()[props.index];
  const url = props.title ? video.src : `${video.src}?title=0&byline=0`;
  const title = props.album.getTitle();
  const description = video.description?.getTranslation();

  return (
    <figure>
      <div className = 'ratio ratio-16x9 gallery-video'>
        <iframe src = { url } title = { title.getTranslation() } allowFullScreen />
      </div>
      {
        props.description && description &&
          <figcaption className = 'video-caption'>
            { description }
          </figcaption>
      }
    </figure>
  );
}

export default Video;