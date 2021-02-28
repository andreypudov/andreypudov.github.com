import VideoAlbumModel from '../../models/core/videoAlbum';
import Video from './Video';

type VideoAlbumProps = {
  album: VideoAlbumModel;
};

function VideoAlbum(props: VideoAlbumProps) {
  return (
    <>
    {
      props.album.photographs.map((_, index: number) =>
        (<Video album = { props.album } index = { index } key = { index } />))
    }
    </>
  );
}

export default VideoAlbum;