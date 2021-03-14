import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

import RussianEmirates from './../models/photographs/russianEmirates';
import GoldenAge from './../models/photographs/goldenAge';
import ImperialTown from './../models/photographs/imperialTown';

import Favorites from './../models/photographs/favorites';
import Altay from './../models/photographs/altay';
import NizhnyNovgorod from './../models/photographs/nizhnyNovgorod';
import Rekshino from './../models/photographs/rekshino';
import AlinaCherdakova from './../models/photographs/alinaCherdakova';
import BalloonFestival from './../models/photographs/balloonFestival';
import ConqueringRome from './../models/photographs/conqueringRome';
import KiraOrlova from './../models/photographs/kiraOrlova';
import ConqueringAmerica2 from './../models/photographs/conqueringAmerica2';
import TimeLapses from './../models/videos/timeLapses';
import ConqueringAmerica from './../models/photographs/conqueringAmerica';
import Kaliningrad from './../models/photographs/kaliningrad';
import FormulaSochi from './../models/photographs/formulaSochi';
import LakeBaikal from './../models/photographs/lakeBaikal';
// import AlinaCherdakova from './../models/photographs/';
import Ekaterinburg from './../models/photographs/ekaterinburg';
import YoshkarOla from './../models/photographs/yoshkarOla';
import LittleRussia from './../models/photographs/littleRussia';
import VeraKlemenova from './../models/photographs/veraKlemenova';

import PencilSketches from './../models/drawings/pencilSketches';

function Contents() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Contents</h1>

        <ol className = 'contents'>
          <li>
            <h2>Articles</h2>
          </li>
          <li>
            <Link to = '/photographs/russian-emirates'>
              { RussianEmirates.getTitle() }
              <small>{ RussianEmirates.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/golden-age'>
              { GoldenAge.getTitle() }
              <small>{ GoldenAge.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/imperial-town'>
              { ImperialTown.getTitle() }
              <small>{ ImperialTown.getDate() }</small>
            </Link>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Photographs</h2>
          </li>
          <li>
            <Link to = '/photographs/favorite-photographs'>
              { Favorites.getTitle() }
              <small>{ Favorites.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/altay'>
              { Altay.getTitle() }
              <small>{ Altay.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/nizhny-novgorod'>
              { NizhnyNovgorod.getTitle() }
              <small>{ NizhnyNovgorod.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/rekshino'>
              { Rekshino.getTitle() }
              <small>{ Rekshino.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/alina-cherdakova'>
              { AlinaCherdakova.getTitle() }
              <small>{ AlinaCherdakova.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/balloon-festival'>
              { BalloonFestival.getTitle() }
              <small>{ BalloonFestival.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/rome-malta'>
              { ConqueringRome.getTitle() }
              <small>{ ConqueringRome.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/kira-orlova'>
              { KiraOrlova.getTitle() }
              <small>{ KiraOrlova.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/united-states-2.0'>
              { ConqueringAmerica2.getTitle() }
              <small>{ ConqueringAmerica2.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/time-lapses'>
              { TimeLapses.getTitle() }
              <small>{ TimeLapses.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/united-states'>
              { ConqueringAmerica.getTitle() }
              <small>{ ConqueringAmerica.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/kaliningrad'>
              { Kaliningrad.getTitle() }
              <small>{ Kaliningrad.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/formula-sochi'>
              { FormulaSochi.getTitle() }
              <small>{ FormulaSochi.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/lake-baikal'>
              { LakeBaikal.getTitle() }
              <small>{ LakeBaikal.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/military-museum'>
              Battle Glory of the Urals
              <small>Wednesday, December 24, 2014</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/ekaterinburg'>
              { Ekaterinburg.getTitle() }
              <small>{ Ekaterinburg.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/yoshkar-ola'>
              { YoshkarOla.getTitle() }
              <small>{ YoshkarOla.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/little-russia'>
              { LittleRussia.getTitle() }
              <small>{ LittleRussia.getDate() }</small>
            </Link>
          </li>
          <li>
            <Link to = '/photographs/vera-klemenova'>
              { VeraKlemenova.getTitle() }
              <small>{ VeraKlemenova.getDate() }</small>
            </Link>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Drawings</h2>
          </li>
          <li>
            <Link to = '/drawings/pencil-sketches'>
              { PencilSketches.getTitle() }
              <small>{ PencilSketches.getDate() }</small>
            </Link>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Performances</h2>
          </li>
          <li>
            <Link to = '/performances/gravity-falls'>
              Gravity Falls
              <small>Monday, January 18, 2021</small>
            </Link>
          </li>
          <li>
            <Link to = '/performances/cure-for-wellness'>
              A Cure for Wellness
              <small>Saturday, March 17, 2018</small>
            </Link>
          </li>
          <li>
            <Link to = '/performances/mia-and-sebastian'>
              Mia &amp; Sebastian
              <small>Thursday, September 7, 2017</small>
            </Link>
          </li>
        </ol>

        <ol className = 'contents'>
          <li>
            <h2>Projects</h2>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/ParaglidingWeather' target = '_blank' rel = 'noreferrer'>
              Paragliding Weather
              <small>Wednesday, January 6, 2021</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/Timetable' target = '_blank' rel = 'noreferrer'>
              Timetable
              <small>Wednesday, January 6, 2021</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/Algorithms' target = '_blank' rel = 'noreferrer'>
              Laboratory of Algorithms
              <small>Tuesday, July 10, 2018</small>
            </a>
          </li>
          <li>
            <a href = 'https://github.com/andreypudov/OpenWeatherJS' target = '_blank' rel = 'noreferrer'>
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