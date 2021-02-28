import PhotographAlbumModel from '../../models/core/photographAlbum';
import Photograph from './Photograph';

type PhotographAlbumProps = {
  album: PhotographAlbumModel;
};

function PhotographAlbum(props: PhotographAlbumProps) {
  return (
    <>
    {
      props.album.photographs.map((_, index: number) =>
        (<Photograph album = { props.album } index = { index } key = { index } />))
    }
    </>
  );
}

export default PhotographAlbum;