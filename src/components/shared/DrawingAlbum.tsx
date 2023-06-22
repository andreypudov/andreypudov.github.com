import Album from './../../models/core/photographyAlbum';
import AlbumView from './AlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import { useTranslation } from 'react-i18next';

type DrawingAlbumProps = {
   album: Album;
 };

const DrawingAlbum = ({ album }: React.PropsWithChildren<DrawingAlbumProps>) => {
  const { i18n } = useTranslation();

  return (
    <Layout title = { album.getTitle().getTranslation() } cover = { album.getCover().src }>
      <div className = 'container'>
        <Headline album = { album } locale = { i18n.language } />
        <AlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default DrawingAlbum;