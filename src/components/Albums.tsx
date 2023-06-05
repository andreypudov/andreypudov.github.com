import Layout from './shared/Layout'
import Page from '../models/core/page';
import { Articles, Photographs, Drawings, TimeLapses } from './../models/pages';
import VideoView from './shared/Video';
import LocalizedLink from './shared/LocalizedLink';
import { useTranslation } from 'react-i18next';

const entry = (page: Page) => 
  <div className = 'col-md-4' key = {page.getAlbum().getTitle()}>
    <LocalizedLink to = { page.getRoute() } className = 'card bg-dark text-white gallery-image'>
      <img src = { page.getAlbum().getCover().src } className = 'card-img album-cover' alt = '' />
      <div className = 'card-img-overlay'>
        <h6 className = 'card-title'>{ page.getAlbum().getTitle() }</h6>
      </div>
    </LocalizedLink>
  </div>;

const videoEntry = (page: Page) =>
  <div className = 'col-md-4' key = {page.getAlbum().getTitle()}>
    <VideoView album = { page.getAlbum() } index = { 0 } title = { false } description = { false } />
  </div>;

const Albums = () => {
  const { t } = useTranslation();

  return (
    <Layout title = { 'Albums' }>
      <div className = 'container'>
        <h1>{t('Albums.Albums')}</h1>

        <h2>{t('Albums.Photographs')}</h2>
        <div className = 'row'>
          { Photographs.map(entry) }
        </div>

        <h2>{t('Albums.Drawings')}</h2>
        <div className = 'row'>
          { Drawings.map(entry) }
        </div>

        <h2>{t('Albums.TimeLapses')}</h2>
        <div className = 'row'>
          { TimeLapses.map(videoEntry) }
        </div>

        <h2>{t('Albums.Articles')}</h2>
        <div className = 'row'>
          { Articles.map(entry) }
        </div>
      </div>
    </Layout>
  );
}

export default Albums;