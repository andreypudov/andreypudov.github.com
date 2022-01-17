import Album from './../../models/photographs/asiaFarakshina';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

function AsiaFarakshina() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />
      </div>
    </Layout>
  );
}

export default AsiaFarakshina;