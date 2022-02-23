import Album from './../../models/core/album';

type VideoProps = {
  album: Album;
  index: number;
  title: boolean;
};

function Video(props: VideoProps) {
  const video = props.album.getMedia()[props.index];
  const url = props.title ? video.src : `${video.src}?title=0&byline=0`;

  return (
    <>
      <div className = 'ratio ratio-16x9 gallery-video'>
        <iframe src = { url } title = { props.album.getTitle() } allowFullScreen />
      </div>
      {
        video.description.length !== 0 &&
          <p className = 'video-caption'>
            { video.description }
          </p>
      }
    </>
  );
}

export default Video;