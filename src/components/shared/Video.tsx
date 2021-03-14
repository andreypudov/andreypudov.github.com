import Album from './../../models/core/album';

type VideoProps = {
  album: Album;
  index: number;
};

function Video(props: VideoProps) {
  let video = props.album.getMedia()[props.index];

  return (
    <>
      <div className = 'ratio ratio-16x9 gallery-video'>
        <iframe src = { video.src } title = { props.album.getTitle() } allowFullScreen />
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