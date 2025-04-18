import Album from './../../models/core/photographyAlbum';
import AlbumView from './AlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

type DrawingAlbumProps = {
   album: Album;
 };

const DrawingAlbum = ({ album }: React.PropsWithChildren<DrawingAlbumProps>) => {
  return (
    <Layout title = { album.getTitle().getValue() } cover = { album.getCover().src }>
      <div className = 'container'>
        <Headline album = { album } locale = { 'en' } />
        <AlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default DrawingAlbum;