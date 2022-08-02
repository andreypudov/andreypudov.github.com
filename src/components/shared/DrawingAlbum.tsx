import Album from './../../models/core/photographyAlbum';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

type DrawingAlbumProps = {
   album: Album;
 };

function DrawingAlbum({ album }: React.PropsWithChildren<DrawingAlbumProps>) {
  return (
    <Layout title = { album.getTitle() }>
      <div className = 'container'>
        <Headline album = { album } />
        <AlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default DrawingAlbum;