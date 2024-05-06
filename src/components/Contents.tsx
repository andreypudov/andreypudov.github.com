import Layout from './shared/Layout'
import Page from './../models/core/page';
import { Articles, FavoritePhotographs, Drawings, TimeLapses, PortraitPhotographs, StreetPhotographs, NaturePhotographs, EventPhotographs } from './../models/pages';
import LocalizedLink from './shared/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { getLocalizedDate } from '../utils/date';
import { TFunction } from 'i18next';

const entry = (page: Page, locale: string, t: TFunction) => {
  const text = page.getAlbum().getTitle();

  return (<li key = { text.getKey() }>
    <LocalizedLink to = {page.getRoute()}>
      { t(text.getKey(), text.getFallback()) }
      <small>{ page.getAlbum().getDateString(locale) }</small>
    </LocalizedLink>
  </li>);
};

const Contents = () => {
  const { i18n, t } = useTranslation();

  return (
    <Layout title = { 'Contents' }>
      <div className = 'container'>
        <h1>{t('Contents.Contents')}</h1>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.Drawings', 'Drawings')}</h2>
          </li>
          { Drawings.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.PortraitPhotography', 'Portrait Photography')}</h2>
          </li>
          { PortraitPhotographs.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.StreetPhotography', 'Street Photography')}</h2>
          </li>
          { StreetPhotographs.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.NaturePhotography', 'Nature Photography')}</h2>
          </li>
          { NaturePhotographs.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.EventPhotography', 'Event Photography')}</h2>
          </li>
          { EventPhotographs.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.TimeLapses')}</h2>
          </li>
          { TimeLapses.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.Performances')}</h2>
          </li>
          <li>
            <LocalizedLink to = '/performances/gravity-falls/'>
              {t('Contents.GravityFalls')}
              <small>{getLocalizedDate(new Date('Monday, January 18, 2021'), i18n.language)}</small>
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink to = '/performances/cure-for-wellness/'>
              {t('Contents.ACureForWellness')}
              <small>{getLocalizedDate(new Date('Saturday, March 17, 2018'), i18n.language)}</small>
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink to = '/performances/mia-and-sebastian/'>
              {t('Contents.MiaAndSebastian')}
              <small>{getLocalizedDate(new Date('Thursday, September 7, 2017'), i18n.language)}</small>
            </LocalizedLink>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.Articles')}</h2>
          </li>
          { Articles.map(p => entry(p, i18n.language, t)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>{t('Contents.Projects')}</h2>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/paragliding-weather' target = '_blank' rel = 'noreferrer'>
              {t('Contents.ParaglidingWeather')}
              <small>{getLocalizedDate(new Date('Wednesday, January 6, 2021'), i18n.language)}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/timetable' target = '_blank' rel = 'noreferrer'>
              {t('Contents.Timetable')}
              <small>{getLocalizedDate(new Date('Wednesday, January 6, 2021'), i18n.language)}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/algorithms' target = '_blank' rel = 'noreferrer'>
              {t('Contents.LaboratoryOfAlgorithms')}
              <small>{getLocalizedDate(new Date('Tuesday, July 10, 2018'), i18n.language)}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/openweatherjs' target = '_blank' rel = 'noreferrer'>
              {t('Contents.OpenWeatherJS')}
              <small>{getLocalizedDate(new Date('Wednesday, October 24, 2018'), i18n.language)}</small>
            </a>
          </li>
        </ol>
      </div>
    </Layout>
  );
}

export default Contents;