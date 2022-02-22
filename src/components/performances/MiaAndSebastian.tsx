import Album from './../../models/performances/miaAndSebastian';
import Sheet from './../../models/sheets/miaAndSebastian';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

function MiaAndSebastian() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />

        <AlbumView album = { Sheet } />
      </div>
    </Layout>
  );
}

export default MiaAndSebastian;