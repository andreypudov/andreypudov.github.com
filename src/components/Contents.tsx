import React from 'react';
import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

function Contents() {
  return (
    <Layout>
      <div className = 'container'>
        <div className = 'page-header'>
          <h1>Contents</h1>
        </div>

        <ol className = 'table-of-contents'>
          <li>
            <h2>Photographs</h2>
          </li>
          <li>
            <Link to = '/albums/favorite-photographs'>
              Favorite Photographs
              <small>Wednesday, March 17, 2021</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/altay'>
              Altay. Conquering Siberia 2.0
              <small>Sunday, July 19, 2020</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/rekshino'>
              Rekshino
              <small>Saturday, October 26, 2019</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/alina-cherdakova'>
              Alina Cherdakova
              <small>Saturday, August 08, 2018</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/balloon-festival'>
              Balloon Festival
              <small>Saturday, February 24, 2018</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/rome-malta'>
              Conquering Rome and Order of Malta
              <small>Monday, December 18, 2017</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/kira-orlova'>
              Kira Orlova
              <small>Sunday, October 22, 2017</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/united-states-2.0'>
              Conquering America 2.0
              <small>Saturday, September 09, 2017</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/united-states'>
              Conquering America
              <small>Saturday, October 15, 2016</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/kaliningrad'>
              Kaliningrad. The amber capital of the World
              <small>Wednesday, August 24, 2016</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/formula-sochi'>
              2015 Formula 1 Russian Grand Prix
              <small>Monday, October 05, 2015</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/lake-baikal'>
              Lake Baikal
              <small>Monday, July 27, 2015</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/military-museum'>
              Battle Glory of the Urals
              <small>Wednesday, December 24, 2014</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/ekaterinburg'>
              Ekaterinburg. The Picture of City
              <small>Sunday, December 21, 2014</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/early-winter'>
              Early Winter
              <small>Sunday, October 19, 2014</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/yoshkar-ola'>
              Yoshkar-Ola. Tsar's town on Kokshaga River
              <small>Saturday, May 10, 2014</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/little-russia'>
              Little Russia
              <small>Saturday, September 14, 2013</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/russian-emirates'>
              Russian Emirates
              <small>Wednesday, December 12, 2012</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/golden-age'>
              Golden Age
              <small>Saturday, September 15, 2012</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/vera-klemenova'>
              Vera Klemenova
              <small>Thursday, July 19, 2012</small>
            </Link>
          </li>
          <li>
            <Link to = '/albums/imperial-town'>
              The Imperial Town
              <small>Thursday, May 10, 2012</small>
            </Link>
          </li>
        </ol>
      </div>
    </Layout>
  );
}

export default Contents;