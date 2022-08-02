import Album from './../../models/photographs/marinaAlekseeva';
import AlbumView from '../shared/AlbumView';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';

function MarinaAlekseeva() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />

        <p>Marina is a former vice president in the Software and Services Group and serves as general manager for the group. Based in Nizhny Novgorod, she managed Intel research and development operations in Russia and was responsible for aligning them with Intel's business strategy. Today she is co-lead of the Women in Big Data program in EMEA.</p>

        <AlbumView album = { Album } />
      </div>
    </Layout>
  );
}

export default MarinaAlekseeva;