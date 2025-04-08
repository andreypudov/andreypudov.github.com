import Layout from './shared/Layout'
import Page from './../models/core/page';
import { Articles, Drawings, TimeLapses, StreetPhotographs, NaturePhotographs, EventPhotographs, PortraitPhotographs } from './../models/pages';
import { Link } from 'react-router-dom';
import { getLocalizedDate } from '../utils/date';

const entry = (page: Page, locale: string) => {
  const text = page.getAlbum().getTitle();

  return (<li key = { text.getKey() }>
    <Link to = {page.getRoute()}>
      { text.getValue() }
      <small>{ page.getAlbum().getDateString(locale) }</small>
    </Link>
  </li>);
};

const Contents = () => {
  return (
    <Layout title = { 'Contents' }>
      <div className = 'container'>
        <h1>Contents</h1>

        <ol className = 'contents'>
          <li>
            <h2>Street Photography</h2>
          </li>
          { StreetPhotographs.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Nature Photography</h2>
          </li>
          { NaturePhotographs.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Portrait Photography</h2>
          </li>
          { PortraitPhotographs.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Event Photography</h2>
          </li>
          { EventPhotographs.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Drawings</h2>
          </li>
          { Drawings.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Time Lapses</h2>
          </li>
          { TimeLapses.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Performances</h2>
          </li>
          <li>
            <Link to = '/performances/gravity-falls/'>
              Gravity Falls
              <small>{getLocalizedDate(new Date('Monday, January 18, 2021'), 'en')}</small>
            </Link>
          </li>
          <li>
            <Link to = '/performances/cure-for-wellness/'>
              A Cure for Wellness
              <small>{getLocalizedDate(new Date('Saturday, March 17, 2018'), 'en')}</small>
            </Link>
          </li>
          <li>
            <Link to = '/performances/mia-and-sebastian/'>
              Mia & Sebastian
              <small>{getLocalizedDate(new Date('Thursday, September 7, 2017'), 'en')}</small>
            </Link>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Articles</h2>
          </li>
          { Articles.map(p => entry(p, 'en')) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Projects</h2>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/paragliding-weather' target = '_blank' rel = 'noreferrer'>
              ParaglidingWeather
              <small>{getLocalizedDate(new Date('Wednesday, January 6, 2021'), 'en')}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/timetable' target = '_blank' rel = 'noreferrer'>
              Timetable
              <small>{getLocalizedDate(new Date('Wednesday, January 6, 2021'), 'en')}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/algorithms' target = '_blank' rel = 'noreferrer'>
              Laboratory of Algorithms
              <small>{getLocalizedDate(new Date('Tuesday, July 10, 2018'), 'en')}</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/openweatherjs' target = '_blank' rel = 'noreferrer'>
              OpenWeatherJS
              <small>{getLocalizedDate(new Date('Wednesday, October 24, 2018'), 'en')}</small>
            </a>
          </li>
        </ol>
      </div>
    </Layout>
  );
}

export default Contents;