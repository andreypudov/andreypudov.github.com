import Album from './../../models/core/photographyAlbum';
import AlbumView from './AlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

type PhotographyAlbumProps = {
   album: Album;
 };

const PhotographyAlbum = ({ album }: React.PropsWithChildren<PhotographyAlbumProps>) => {
  return (
    <Layout title = { album.getTitle() } cover = { album.getCover().src } social = { album.getSocial() }>
      <div className = 'container'>
        <Headline album = { album } />
        <AlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default PhotographyAlbum;