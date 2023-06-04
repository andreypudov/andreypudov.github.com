import Album from './../../models/core/performanceAlbum';
import AlbumView from './AlbumView';
import SheetAlbumView from './SheetAlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import { useTranslation } from 'react-i18next';

type PerformanceAlbumProps = {
   album: Album;
 };

const PerformanceAlbum = ({ album }: React.PropsWithChildren<PerformanceAlbumProps>) => {
  const { i18n } = useTranslation();

  return (
    <Layout title = { album.getTitle() } cover = { album.getCover().src }>
      <div className = 'container'>
        <Headline album = { album } locale = { i18n.language } />
        <AlbumView album = { album } />
        <SheetAlbumView album = { album } />
      </div>
    </Layout>
  );
}

export default PerformanceAlbum;