import React from 'react';
import Layout from './shared/Layout'

function Home() {
  return (
    <Layout>
      <div id='homeCarousel' className = 'carousel slide' data-ride='carousel'>
        <ol className = 'carousel-indicators'>
          <li data-target='#homeCarousel' data-slide-to='0' className = 'active'></li>
          <li data-target='#homeCarousel' data-slide-to='1'></li>
          <li data-target='#homeCarousel' data-slide-to='2'></li>
          <li data-target='#homeCarousel' data-slide-to='3'></li>
        </ol>
        <div className = 'carousel-inner'>
          <div className = 'item active'>
            <img src = 'images/carousel/rome-malta.jpg' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Взятие Рима и Мальтийского ордена</h1>
                <p></p>
                <p><a className = 'btn btn-lg btn-transparent' href='p/romemalta.html' role='button'>Browse gallery</a></p>
              </div>
            </div>
          </div>
          <div className = 'item'>
            <img src = 'images/carousel/united-states-2.0.jpg' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Покорение Америки 2.0</h1>
                <p></p>
                <p><a className = 'btn btn-lg btn-transparent' href='p/unitedstates-2.0.html' role='button'>Browse gallery</a></p>
              </div>
            </div>
          </div>
          <div className = 'item'>
            <img src = 'images/carousel/kira-olrova.jpg' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Кира Орлова</h1>
                <p></p>
                <p><a className = 'btn btn-lg btn-transparent' href='p/2017-10-22.html' role='button'>Browse gallery</a></p>
              </div>
            </div>
          </div>
          <div className = 'item'>
            <img src = 'images/carousel/kaliningrad.jpg' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Калининград. Янтарная столица мира.</h1>
                <p></p>
                <p><a className = 'btn btn-lg btn-transparent' href='p/kaliningrad.html' role='button'>Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = 'container marketing marketing-image'>
        <div className = 'row'>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <a href='p/unitedstates.html'>
              <img src = 'images/marketing/united-states.jpg' />
            </a>
          </div>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <a href='p/lake-baikal.html'>
              <img src = 'images/marketing/lake-baikal.jpg' />
            </a>
          </div>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <a href='p/2013-09-14_27.html'>
              <img src = 'images/marketing/little-russia.jpg' />
            </a>
          </div>
            <div className = 'col-lg-3 col-md-3 col-sm-3'>
              <a href='p/2012-03-17.html'>
                <img src = 'images/marketing/favorite-photographs.jpg' />
              </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;