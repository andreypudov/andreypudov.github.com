import Album from './../../models/performances/gravityFalls';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

function GravityFalls() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />

        <div className = 'ratio ratio-1x1'>
          <iframe src = 'https://drive.google.com/file/d/1mMhi5tfIR6nlyDiVKgqY9gTcnA-HnhYh/preview' title = { Album.getTitle() } />
        </div>
      </div>
    </Layout>
  );
}

export default GravityFalls;