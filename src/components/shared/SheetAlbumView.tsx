import Model from '../../models/core/performanceAlbum';
import SheetView from './Sheet';

type SheetAlbumViewProps = {
  album: Model;
};

const SheetAlbumView = (props: SheetAlbumViewProps) => {
  return (
    <>
    {
      props.album.getSheets().map((_, index: number) => {
         return <SheetView album = { props.album } index = { index } key = { index } />;
      })
    }
    </>
  );
}

export default SheetAlbumView;