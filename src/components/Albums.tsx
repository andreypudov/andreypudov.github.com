import Layout from './shared/Layout'
import Page from '../models/core/page';
import { Articles, Photographs, Drawings, TimeLapses } from './../models/pages';
import VideoView from './shared/Video';
import LocalizedLink from './shared/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const entry = (page: Page, t: TFunction) =>
  <div className = 'col-md-4' key = {page.getAlbum().getTitle().getKey()}>
    <LocalizedLink to = { page.getRoute() } className = 'card bg-dark text-white gallery-image'>
      <img src = { page.getAlbum().getCover().src } className = 'card-img album-cover' alt = '' />
      <div className = 'card-img-overlay'>
        <h6 className = 'card-title'>{t(page.getAlbum().getTitle().getKey(), page.getAlbum().getTitle().getFallback())}</h6>
      </div>
    </LocalizedLink>
  </div>;

const videoEntry = (page: Page) =>
  <div className = 'col-md-4' key = {page.getAlbum().getTitle().getKey()}>
    <VideoView album = { page.getAlbum() } index = { 0 } title = { false } description = { false } />
  </div>;

const Albums = () => {
  const { t } = useTranslation();

  return (
    <Layout title = { 'Albums' }>
      <div className = 'container'>
        <h1>{t('Albums.Albums', 'Albums')}</h1>

        <h2>{t('Albums.Drawings', 'Drawings')}</h2>
        <div className = 'row mb-4'>
          { Drawings.map(d => entry(d, t)) }
        </div>

        <h2>{t('Albums.Photographs', 'Photographs')}</h2>
        <div className = 'row mb-4'>
          { Photographs.map(p => entry(p, t)) }
        </div>

        <h2>{t('Albums.TimeLapses', 'Time Lapses')}</h2>
        <div className = 'row mb-4'>
          { TimeLapses.map(videoEntry) }
        </div>

        <h2>{t('Albums.Articles', 'Articles')}</h2>
        <div className = 'row'>
          { Articles.map(a => entry(a, t)) }
        </div>
      </div>
    </Layout>
  );
}

export default Albums;