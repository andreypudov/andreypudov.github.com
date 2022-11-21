import Album from './../../models/core/performanceAlbum';
import AlbumView from './AlbumView';
import SheetAlbumView from './SheetAlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

type PerformanceAlbumProps = {
   album: Album;
 };

function PerformanceAlbum({ album }: React.PropsWithChildren<PerformanceAlbumProps>) {
  return (
    <Layout title = { album.getTitle() } cover = { album.getCover().src }>
      <div className = 'container'>
        <Headline album = { album } />
        <AlbumView album = { album } />
        <SheetAlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default PerformanceAlbum;