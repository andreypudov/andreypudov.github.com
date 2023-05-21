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

const localizedRoute = (page: Page) => `/:lang${page.getRoute()}`

const photographyRoute = (page: Page) =>
  <Route path = { localizedRoute(page) } element = { <PhotographyAlbum album = { page.getAlbum() } /> } key = {page.getAlbum().getTitle()} />;

const drawingAlbumRoute = (page: Page) =>
  <Route path = { localizedRoute(page) } element = { <DrawingAlbum album = { page.getAlbum() } /> } key = {page.getAlbum().getTitle()} />;

const routes = () => {
  return (
    <Routes>
      <Route path = '/:lang/' element = { <Home /> } />
      <Route path = '/:lang/albums/' element = { <Albums /> } />
      <Route path = '/:lang/contents/' element = { <Contents /> } />
      <Route path = '/:lang/resume/' element = { <Resume /> } />
      <Route path = '/:lang/contact/' element = { <Contact /> } />

      <Route path = '/:lang/photographs/russian-emirates/' element = { <RussianEmirates /> } />
      <Route path = '/:lang/photographs/golden-age/' element = { <GoldenAge /> } />
      <Route path = '/:lang/photographs/imperial-town/' element = { <ImperialTown /> } />

      { Photographs.map(photographyRoute) }
      { Drawings.map(drawingAlbumRoute) }

      <Route path = '/:lang/performances/gravity-falls/' element = { <PerformanceAlbum album = { GravityFalls } /> } />
      <Route path = '/:lang/performances/cure-for-wellness/' element = { <PerformanceAlbum album = { CureForWellness } /> } />
      <Route path = '/:lang/performances/mia-and-sebastian/' element = { <PerformanceAlbum album = { MiaAndSebastian } /> } />

      { TimeLapses.map(photographyRoute) }

      <Route path = '/:lang/sitemap/' element = { <Sitemap /> } />
      <Route path = '*' element = { <NotFound /> } />
    </Routes>
  );
}

export default routes;