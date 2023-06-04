import Layout from './shared/Layout'
import Page from './../models/core/page';
import { Articles, Photographs, Drawings, TimeLapses } from './../models/pages';
import LocalizedLink from './shared/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { getLocalizedDate } from '../utils/date';

const entry = (page: Page, locale: string) => {
  return (<li key = {page.getAlbum().getTitle()}>
    <LocalizedLink to = {page.getRoute()}>
      { page.getAlbum().getTitle() }
      <small>{ page.getAlbum().getDateString(locale) }</small>
    </LocalizedLink>
  </li>);
};

const Contents = () => {
  const { i18n } = useTranslation();

  return (
    <Layout title = { 'Contents' }>
      <div className = 'container'>
        <h1>Contents</h1>

        <ol className = 'contents'>
          <li>
            <h2>Photographs</h2>
          </li>
          { Photographs.map(p => entry(p, i18n.language)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Drawings</h2>
          </li>
          { Drawings.map(p => entry(p, i18n.language)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Time Lapses</h2>
          </li>
          { TimeLapses.map(p => entry(p, i18n.language)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Performances</h2>
          </li>
          <li>
            <LocalizedLink to = '/performances/gravity-falls/'>
              Gravity Falls
              <small>{getLocalizedDate(new Date('Monday, January 18, 2021'), i18n.language)}</small>
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink to = '/performances/cure-for-wellness/'>
              A Cure for Wellness
              <small>{getLocalizedDate(new Date('Saturday, March 17, 2018'), i18n.language)}</small>
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink to = '/performances/mia-and-sebastian/'>
              Mia &amp; Sebastian
              <small>{getLocalizedDate(new Date('Thursday, September 7, 2017'), i18n.language)}</small>
            </LocalizedLink>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Articles</h2>
          </li>
          { Articles.map(p => entry(p, i18n.language)) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Projects</h2>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/paragliding-weather' target = '_blank' rel = 'noreferrer'>
              Paragliding Weather
              <small>{getLocalizedDate(new Date('Wednesday, January 6, 2021'), i18n.language)}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/timetable' target = '_blank' rel = 'noreferrer'>
              Timetable
              <small>{getLocalizedDate(new Date('Wednesday, January 6, 2021'), i18n.language)}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/algorithms' target = '_blank' rel = 'noreferrer'>
              Laboratory of Algorithms
              <small>{getLocalizedDate(new Date('Tuesday, July 10, 2018'), i18n.language)}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/openweatherjs' target = '_blank' rel = 'noreferrer'>
              OpenWeatherJS
              <small>{getLocalizedDate(new Date('Wednesday, October 24, 2018'), i18n.language)}</small>
            </a>
          </li>
        </ol>
      </div>
    </Layout>
  );
}

export default Contents;