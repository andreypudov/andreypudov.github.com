import Album from './../../models/performances/cureForWellness';
import Sheet from './../../models/sheets/cureForWellness';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

function GravityFalls() {
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

export default GravityFalls;