import { Routes, Route } from 'react-router-dom';

import Albums from './components/Albums';
import Contact from './components/Contact';
import Contents from './components/Contents';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Resume from './components/Resume';
import Sitemap from './components/Sitemap';


import Page from './models/core/page';
import { Photographs, Drawings, TimeLapses } from './models/pages';

import RussianEmirates from './components/articles/RussianEmirates';
import GoldenAge from './components/articles/GoldenAge';
import ImperialTown from './components/articles/ImperialTown';

import CureForWellness from './models/performances/cureForWellness';
import GravityFalls from './models/performances/gravityFalls';
import MiaAndSebastian from './models/performances/miaAndSebastian';

import DrawingAlbum from './components/shared/DrawingAlbum';
import PhotographyAlbum from './components/shared/PhotographyAlbum';
import PerformanceAlbum from './components/shared/PerformanceAlbum';

const photographyRoute = (page: Page) =>
  <Route path = { page.getRoute() } element = { <PhotographyAlbum album = { page.getAlbum() } /> } key = {page.getAlbum().getTitle()} />;

const drawingAlbumRoute = (page: Page) =>
  <Route path = { page.getRoute() } element = { <DrawingAlbum album = { page.getAlbum() } /> } key = {page.getAlbum().getTitle()} />;

const routes = () => {
  return (
    <Routes>
      <Route path = '/' element = { <Home /> } />
      <Route path = '/albums/' element = { <Albums /> } />
      <Route path = '/contents/' element = { <Contents /> } />
      <Route path = '/resume/' element = { <Resume /> } />
      <Route path = '/contact/' element = { <Contact /> } />

      <Route path = '/photographs/russian-emirates/' element = { <RussianEmirates /> } />
      <Route path = '/photographs/golden-age/' element = { <GoldenAge /> } />
      <Route path = '/photographs/imperial-town/' element = { <ImperialTown /> } />

      { Photographs.map(photographyRoute) }
      { Drawings.map(drawingAlbumRoute) }

      <Route path = '/performances/gravity-falls/' element = { <PerformanceAlbum album = { GravityFalls } /> } />
      <Route path = '/performances/cure-for-wellness/' element = { <PerformanceAlbum album = { CureForWellness } /> } />
      <Route path = '/performances/mia-and-sebastian/' element = { <PerformanceAlbum album = { MiaAndSebastian } /> } />

      { TimeLapses.map(photographyRoute) }

      <Route path = '/sitemap/' element = { <Sitemap /> } />
      <Route path = '*' element = { <NotFound /> } />
    </Routes>
  );
}

export default routes;