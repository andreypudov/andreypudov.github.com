import Album from './../../models/photographs/lakeBaikalTeam';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import AlbumView from '../shared/Album';

function LakeBaikalTeam() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />
      </div>
    </Layout>
  );
}

export default LakeBaikalTeam;