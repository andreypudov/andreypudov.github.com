import Album from './../../models/core/album';

type VideoProps = {
  album: Album;
  index: number;
};

function Video(props: VideoProps) {
  let video = props.album.media[props.index];

  return (
    <>
      <div className = 'ratio ratio-16x9 gallery-video'>
        <iframe src = { video.src } title = { props.album.title } allowFullScreen />
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