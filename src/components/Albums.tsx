import Layout from './shared/Layout'
import Page from '../models/core/page';
import { Articles, Photographs, Drawings, TimeLapses } from './../models/pages';
import VideoView from './shared/Video';
import { Link } from 'react-router-dom';

const entry = (page: Page) => {
  return (<div className = 'col-md-4' key = {page.getAlbum().getTitle()}>
    <Link to = { page.getRoute() } className = 'card bg-dark text-white gallery-image'>
      <img src = { page.getAlbum().getCover().src } className = 'card-img' alt = '' />
      <div className = 'card-img-overlay'>
        <h6 className = 'card-title'>{ page.getAlbum().getTitle() }</h6>
      </div>
    </Link>
  </div>);
};

const videoEntry = (page: Page) => {
  return (<div className = 'col-md-4' key = {page.getAlbum().getTitle()}>
    <VideoView album = { page.getAlbum() } index = { 0 } title = { false } description = { false } />
  </div>);
};

function Albums() {
  return (
    <Layout title = { 'Albums' }>
      <div className = 'container'>
        <h1>Albums</h1>

        <h2>Articles</h2>

        <div className = 'row'>
          { Articles.map(entry) }
        </div>

        <h2>Photographs</h2>

        <div className = 'row'>
          { Photographs.map(entry) }
        </div>

        <h2>Drawings</h2>

        <div className = 'row'>
          { Drawings.map(entry) }
        </div>

          <h2>Time Lapses</h2>

        <div className = 'row'>
          { TimeLapses.map(videoEntry) }
        </div>
      </div>
    </Layout>
  );
}

export default Albums;