import Model from '../../models/core/photographyAlbum';
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
      props.album.getMedia().map((media, index: number) =>
        {
          switch (Object.getPrototypeOf(media)) {
            case Photograph.prototype:
              return <PhotographView album = { props.album } index = { index } key = { index } />;
            default:
              return <VideoView album = { props.album } index = { index } title = { true } description = { true } key = { index } />;
        }})
    }
    </>
  );
}

export default Album;