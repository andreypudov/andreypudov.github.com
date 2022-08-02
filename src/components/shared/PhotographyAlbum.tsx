import Album from './../../models/core/photographyAlbum';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

type PhotographyAlbumProps = {
   album: Album;
 };

function PhotographyAlbum({ album }: React.PropsWithChildren<PhotographyAlbumProps>) {
  return (
    <Layout title = { album.getTitle() }>
      <div className = 'container'>
        <Headline album = { album } />
        <AlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default PhotographyAlbum;