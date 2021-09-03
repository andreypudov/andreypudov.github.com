import Album from './../../models/performances/miaAndSebastian';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

function MiaAndSebastian() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />

        <div className = 'ratio ratio-1x1'>
          <iframe src = 'https://drive.google.com/file/d/1loIUaq25m9XZPi0eI1jClZ8fr0l_ocD9/preview' title = { Album.getTitle() }></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default MiaAndSebastian;