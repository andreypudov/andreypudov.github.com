import React from 'react';
import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

import Favorites from './../models/photographs/favorites';
import Altay from './../models/photographs/altay';
import NizhnyNovgorod from './../models/photographs/nizhnyNovgorod';
import Rekshino from './../models/photographs/rekshino';
import AlinaCherdakova from './../models/photographs/alinaCherdakova';
import BalloonFestival from './../models/photographs/balloonFestival';
import ConqueringRome from './../models/photographs/conqueringRome';
import KiraOrlova from './../models/photographs/kiraOrlova';
import ConqueringAmerica2 from './../models/photographs/conqueringAmerica2';
// import ConqueringAmerica from './../models/photographs/';
import ConqueringAmerica from './../models/photographs/conqueringAmerica';
import Kaliningrad from './../models/photographs/kaliningrad';
import FormulaSochi from './../models/photographs/formulaSochi';
import LakeBaikal from './../models/photographs/lakeBaikal';
// import AlinaCherdakova from './../models/photographs/';
import Ekaterinburg from './../models/photographs/ekaterinburg';
import YoshkarOla from './../models/photographs/yoshkarOla';
import LittleRussia from './../models/photographs/littleRussia';
import VeraKlemenova from './../models/photographs/veraKlemenova';

function Albums() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Albums</h1>

        <Link to = '/photographs/favorite-photographs' className = 'card bg-dark text-white gallery-image'>
          <img src = { Favorites.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ Favorites.getTitle() }</h5>
            <p className = 'card-text'>{ Favorites.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/altay' className = 'card bg-dark text-white gallery-image'>
          <img src = { Altay.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ Altay.getTitle() }</h5>
            <p className = 'card-text'>{ Altay.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/nizhny-novgorod' className = 'card bg-dark text-white gallery-image'>
          <img src = { NizhnyNovgorod.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ NizhnyNovgorod.getTitle() }</h5>
            <p className = 'card-text'>{ NizhnyNovgorod.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/rekshino' className = 'card bg-dark text-white gallery-image'>
          <img src = { Rekshino.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ Rekshino.getTitle() }</h5>
            <p className = 'card-text'>{ Rekshino.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/alina-cherdakova' className = 'card bg-dark text-white gallery-image'>
          <img src = { AlinaCherdakova.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ AlinaCherdakova.getTitle() }</h5>
            <p className = 'card-text'>{ AlinaCherdakova.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/balloon-festival' className = 'card bg-dark text-white gallery-image'>
          <img src = { BalloonFestival.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ BalloonFestival.getTitle() }</h5>
            <p className = 'card-text'>{ BalloonFestival.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/rome-malta' className = 'card bg-dark text-white gallery-image'>
          <img src = { ConqueringRome.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ ConqueringRome.getTitle() }</h5>
            <p className = 'card-text'>{ ConqueringRome.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/kira-orlova' className = 'card bg-dark text-white gallery-image'>
          <img src = { KiraOrlova.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ KiraOrlova.getTitle() }</h5>
            <p className = 'card-text'>{ KiraOrlova.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/united-states-2.0' className = 'card bg-dark text-white gallery-image'>
          <img src = { ConqueringAmerica2.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ ConqueringAmerica2.getTitle() }</h5>
            <p className = 'card-text'>{ ConqueringAmerica2.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/united-states' className = 'card bg-dark text-white gallery-image'>
          <img src = { ConqueringAmerica.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ ConqueringAmerica.getTitle() }</h5>
            <p className = 'card-text'>{ ConqueringAmerica.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/kaliningrad' className = 'card bg-dark text-white gallery-image'>
          <img src = { Kaliningrad.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ Kaliningrad.getTitle() }</h5>
            <p className = 'card-text'>{ Kaliningrad.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/formula-sochi' className = 'card bg-dark text-white gallery-image'>
          <img src = { FormulaSochi.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ FormulaSochi.getTitle() }</h5>
            <p className = 'card-text'>{ FormulaSochi.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/lake-baikal' className = 'card bg-dark text-white gallery-image'>
          <img src = { LakeBaikal.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ LakeBaikal.getTitle() }</h5>
            <p className = 'card-text'>{ LakeBaikal.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/ekaterinburg' className = 'card bg-dark text-white gallery-image'>
          <img src = { Ekaterinburg.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ Ekaterinburg.getTitle() }</h5>
            <p className = 'card-text'>{ Ekaterinburg.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/yoshkar-ola' className = 'card bg-dark text-white gallery-image'>
          <img src = { YoshkarOla.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ YoshkarOla.getTitle() }</h5>
            <p className = 'card-text'>{ YoshkarOla.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/little-russia' className = 'card bg-dark text-white gallery-image'>
          <img src = { LittleRussia.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ LittleRussia.getTitle() }</h5>
            <p className = 'card-text'>{ LittleRussia.getDate() }</p>
          </div>
        </Link>

        <Link to = '/photographs/vera-klemenova' className = 'card bg-dark text-white gallery-image'>
          <img src = { VeraKlemenova.getCover().src } className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>{ VeraKlemenova.getTitle() }</h5>
            <p className = 'card-text'>{ VeraKlemenova.getDate() }</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default Albums;