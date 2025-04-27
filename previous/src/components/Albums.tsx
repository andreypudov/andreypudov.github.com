import Layout from './shared/Layout'
import Page from '../models/core/page';
import { Articles, Drawings, TimeLapses, StreetPhotographs, NaturePhotographs, EventPhotographs, PortraitPhotographs } from './../models/pages';
import VideoView from './shared/Video';
import { Link } from 'react-router-dom';

const entry = (page: Page) =>
  <div className = 'col-md-4' key = {page.getAlbum().getTitle().getKey()}>
    <Link to = { page.getRoute() } className = 'card bg-dark text-white gallery-image'>
      <img src = { page.getAlbum().getCover().src } className = 'card-img album-cover' alt = '' />
      <div className = 'card-img-overlay'>
        <h6 className = 'card-title'>{page.getAlbum().getTitle().getValue()}</h6>
      </div>
    </Link>
  </div>;

const videoEntry = (page: Page) =>
  <div className = 'col-md-4' key = {page.getAlbum().getTitle().getKey()}>
    <VideoView album = { page.getAlbum() } index = { 0 } title = { false } description = { false } />
  </div>;

const Albums = () => {
  return (
    <Layout title = { 'Albums' }>
      <div className = 'container'>
        <h1>Albums</h1>

        <h2>Street Photography</h2>
        <div className = 'row mb-4'>
          { StreetPhotographs.map(p => entry(p)) }
        </div>

        <h2>Nature Photography</h2>
        <div className = 'row mb-4'>
          { NaturePhotographs.map(p => entry(p)) }
        </div>

        <h2>Portrait Photography</h2>
        <div className = 'row mb-4'>
          { PortraitPhotographs.map(p => entry(p)) }
        </div>

        <h2>Event Photography</h2>
        <div className = 'row mb-4'>
          { EventPhotographs.map(p => entry(p)) }
        </div>

        <h2>Drawings</h2>
        <div className = 'row mb-4'>
          { Drawings.map(d => entry(d)) }
        </div>

        <h2>Time Lapses</h2>
        <div className = 'row mb-4'>
          { TimeLapses.map(videoEntry) }
        </div>

        <h2>Articles</h2>
        <div className = 'row'>
          { Articles.map(a => entry(a)) }
        </div>
      </div>
    </Layout>
  );
}

export default Albums;