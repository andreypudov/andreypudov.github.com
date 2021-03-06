import Model from '../../models/core/album';
import Photograph from '../../models/core/photograph';
import PhotographView from './Photograph';
import VideoView from './Video';

type AlbumProps = {
  album: Model;
};

function Album(props: AlbumProps) {
  return (
    <>
    {
      props.album.media.map((media, index: number) =>
        {
          switch (Object.getPrototypeOf(media)) {
            case Photograph.prototype:
              return <PhotographView album = { props.album } index = { index } key = { index } />
            default:
              return <VideoView album = { props.album } index = { index } key = { index } />
        }})
    }
    </>
  );
}

export default Album;