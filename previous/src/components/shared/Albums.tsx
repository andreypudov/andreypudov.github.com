import Model from '../../models/core/photographyAlbum';
import Photograph from '../../models/core/photograph';
import PhotographView from './Photograph';
import VideoView from './Video';

type AlbumsProps = {
  album: Model;
};

const Album = (props: AlbumsProps) => {
  return (
   <div className = 'row'>
    {
      props.album.getMedia().map((media, index: number) =>
        {
          switch (Object.getPrototypeOf(media)) {
            case Photograph.prototype:
              return (
                <div className = 'col-md-4' key = { index }>
                  <PhotographView album = { props.album } index = { index } />
                </div>);
            default:
              return (
                <div className = 'col-md-4' key = { index }>
                  <VideoView album = { props.album } index = { index } title = { false } description = { false } />
                </div>);
        }})
    }
    </ div>
  );
}

export default Album;