import Album from './../../models/core/photographyAlbum';
import AlbumView from './AlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import { useTranslation } from 'react-i18next';

type PhotographyAlbumProps = {
   album: Album;
 };

const PhotographyAlbum = ({ album }: React.PropsWithChildren<PhotographyAlbumProps>) => {
  const { i18n } = useTranslation();

  return (
    <Layout title = { album.getTitle() } cover = { album.getCover().src } social = { album.getSocial() }>
      <div className = 'container'>
        <Headline album = { album } locale = { i18n.language } />
        <AlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default PhotographyAlbum;