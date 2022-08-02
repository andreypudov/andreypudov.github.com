import Album from './../../models/photographs/lakeBaikal';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import AlbumView from '../shared/AlbumView';

function LakeBaikal() {
  return (
    <Layout title = { Album.getTitle() }>
      <div className = 'container'>
        <Headline album = { Album } />

        <figure className = 'text-end'>
          <blockquote className = "blockquote">
            <p>Everything afterward was poetry...</p>
          </blockquote>
          <figcaption className = 'blockquote-footer'>
            Anton Chekhov
          </figcaption>
        </figure>

        <AlbumView album = { Album } />

        <div className = 'ratio ratio-16x9 gallery-video'>
          <iframe src = '//www.youtube.com/embed/VlXZW_dqlUE?rel=0' title = 'The video report of the exploring expedition to Lake Baikal.' />
        </div>
        <p className = 'video-caption'>The video report of the exploring expedition to Lake Baikal.</p>
      </div>
    </Layout>
  );
}

export default LakeBaikal;