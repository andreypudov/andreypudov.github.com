import Layout from './shared/Layout'
import Page from './../models/core/page';
import { Articles, Photographs, Drawings, TimeLapses } from './../models/pages';
import { Link } from 'react-router-dom';

const entry = (page: Page) => {
  return (<li key = {page.getAlbum().getTitle()}>
    <Link to = {page.getRoute()}>
      { page.getAlbum().getTitle() }
      <small>{ page.getAlbum().getDateString() }</small>
    </Link>
  </li>);
};

function Contents() {
  return (
    <Layout title = { 'Contents' }>
      <div className = 'container'>
        <h1>Contents</h1>

        <ol className = 'contents'>
          <li>
            <h2>Photographs</h2>
          </li>
          { Photographs.map(entry) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Drawings</h2>
          </li>
          { Drawings.map(entry) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Time Lapses</h2>
          </li>
          { TimeLapses.map(entry) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Performances</h2>
          </li>
          <li>
            <Link to = '/performances/gravity-falls/'>
              Gravity Falls
              <small>Monday, January 18, 2021</small>
            </Link>
          </li>
          <li>
            <Link to = '/performances/cure-for-wellness/'>
              A Cure for Wellness
              <small>Saturday, March 17, 2018</small>
            </Link>
          </li>
          <li>
            <Link to = '/performances/mia-and-sebastian/'>
              Mia &amp; Sebastian
              <small>Thursday, September 7, 2017</small>
            </Link>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Articles</h2>
          </li>
          { Articles.map(entry) }
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Projects</h2>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/paragliding-weather' target = '_blank' rel = 'noreferrer'>
              Paragliding Weather
              <small>Wednesday, January 6, 2021</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/timetable' target = '_blank' rel = 'noreferrer'>
              Timetable
              <small>Wednesday, January 6, 2021</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/algorithms' target = '_blank' rel = 'noreferrer'>
              Laboratory of Algorithms
              <small>Tuesday, July 10, 2018</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/openweatherjs' target = '_blank' rel = 'noreferrer'>
              OpenWeatherJS
              <small>Wednesday, October 24, 2018</small>
            </a>
          </li>
        </ol>
      </div>
    </Layout>
  );
}

export default Contents;