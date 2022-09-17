import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Albums from './components/Albums';
import Contents from './components/Contents';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import RussianEmirates from './components/articles/RussianEmirates';
import GoldenAge from './components/articles/GoldenAge';
import ImperialTown from './components/articles/ImperialTown';

import Favorites from './models/photographs/favorites';
import Puigmal from './models/photographs/puigmal';
import TuroDeLHome from './models/photographs/turoDeLHome';
import CastilloDeMataplana from './models/photographs/castilloDeMataplana';
import AndreyPudov from './models/photographs/andreyPudov';
import PoblenouCemetery from './models/photographs/poblenouCemetery';
import Crimea from './models/photographs/crimea';
import Altay from './models/photographs/altay';
import EkaterinaDomracheva from './models/photographs/ekaterinaDomracheva';
import IrinaDomracheva from './models/photographs/irinaDomracheva';
import NizhnyNovgorod from './models/photographs/nizhnyNovgorod';
import Rekshino from './models/photographs/rekshino';
import AlinaCherdakova from './models/photographs/alinaCherdakova';
import BalloonFestival from './models/photographs/balloonFestival';
import ConqueringRome from './models/photographs/conqueringRome';
import RideInRekshino from './models/photographs/rideInRekshino';
import KiraOrlova from './models/photographs/kiraOrlova';
import EkaterinaMalysheva from './models/photographs/ekaterinaMalysheva';
import ConqueringAmerica2 from './models/photographs/conqueringAmerica2';
import Strigino from './models/photographs/strigino';
import Maks from './models/photographs/maks';
import TatyanaBysheva from './models/photographs/tatyanaBysheva';
import TimeLapses from './models/videos/timeLapses';
import RamonPalace from './models/photographs/ramonPalace';
import PartnersDay from './models/photographs/partnersDay';
import ConqueringAmerica from './models/photographs/conqueringAmerica';
import Kaliningrad from './models/photographs/kaliningrad';
import FormulaSochi2 from './models/photographs/formulaSochi2';
import LolitaRakhmatova from './models/photographs/lolitaRakhmatova';
import IntelProducts from './models/photographs/intelProducts';
import FormulaSochi from './models/photographs/formulaSochi';
import AsiaFarakshina from './models/photographs/asiaFarakshina';
import LakeBaikal from './models/photographs/lakeBaikal';
import LakeBaikalTeam from './models/photographs/lakeBaikalTeam';
import MilitaryMuseum from './models/photographs/militaryMuseum';
import Ekaterinburg from './models/photographs/ekaterinburg';
import YoshkarOla from './models/photographs/yoshkarOla';
import LittleRussia from './models/photographs/littleRussia';
import MarinaAlekseeva from './models/photographs/marinaAlekseeva';
import VeraKlemenova from './models/photographs/veraKlemenova';

import PencilSketches from './models/drawings/pencilSketches';
import SoftPastel from './models/drawings/softPastel';
import Watercolor from './models/drawings/watercolor';

import CureForWellness from './models/performances/cureForWellness';
import GravityFalls from './models/performances/gravityFalls';
import MiaAndSebastian from './models/performances/miaAndSebastian';

import DrawingAlbum from './components/shared/DrawingAlbum';
import PhotographyAlbum from './components/shared/PhotographyAlbum';
import PerformanceAlbum from './components/shared/PerformanceAlbum';

function routes() {
  return (
    <Routes>
      <Route path = '/' element = { <Home /> } />
      <Route path = '/albums' element = { <Albums /> } />
      <Route path = '/contents' element = { <Contents /> } />
      <Route path = '/resume' element = { <Resume /> } />
      <Route path = '/contact' element = { <Contact /> } />

      <Route path = '/photographs/russian-emirates' element = { <RussianEmirates /> } />
      <Route path = '/photographs/golden-age' element = { <GoldenAge /> } />
      <Route path = '/photographs/imperial-town' element = { <ImperialTown /> } />

      <Route path = '/photographs/favorite-photographs' element = { <PhotographyAlbum album = { Favorites } /> } />
      <Route path = '/photographs/puigmal' element = { <PhotographyAlbum album = { Puigmal } /> } />
      <Route path = '/photographs/turo-de-lhome' element = { <PhotographyAlbum album = { TuroDeLHome } /> } />
      <Route path = '/photographs/castillo-de-mataplana' element = { <PhotographyAlbum album = { CastilloDeMataplana } /> } />
      <Route path = '/photographs/andrey-pudov' element = { <PhotographyAlbum album = { AndreyPudov } /> } />
      <Route path = '/photographs/poblenou-cemetery' element = { <PhotographyAlbum album = { PoblenouCemetery } /> } />
      <Route path = '/photographs/crimea' element = { <PhotographyAlbum album = { Crimea } /> } />
      <Route path = '/photographs/altay' element = { <PhotographyAlbum album = { Altay } /> } />
      <Route path = '/photographs/ekaterina-domracheva' element = { <PhotographyAlbum album = { EkaterinaDomracheva } /> } />
      <Route path = '/photographs/irina-domracheva' element = { <PhotographyAlbum album = { IrinaDomracheva } /> } />
      <Route path = '/photographs/nizhny-novgorod' element = { <PhotographyAlbum album = { NizhnyNovgorod } /> } />
      <Route path = '/photographs/rekshino' element = { <PhotographyAlbum album = { Rekshino } /> } />
      <Route path = '/photographs/alina-cherdakova' element = { <PhotographyAlbum album = { AlinaCherdakova } /> } />
      <Route path = '/photographs/balloon-festival' element = { <PhotographyAlbum album = { BalloonFestival } /> } />
      <Route path = '/photographs/rome-malta' element = { <PhotographyAlbum album = { ConqueringRome } /> } />
      <Route path = '/photographs/ride-in-rekshino' element = { <PhotographyAlbum album = { RideInRekshino } /> } />
      <Route path = '/photographs/kira-orlova' element = { <PhotographyAlbum album = { KiraOrlova } /> } />
      <Route path = '/photographs/ekaterina-malysheva' element = { <PhotographyAlbum album = { EkaterinaMalysheva } /> } />
      <Route path = '/photographs/united-states-2.0' element = { <PhotographyAlbum album = { ConqueringAmerica2 } /> } />
      <Route path = '/photographs/strigino' element = { <PhotographyAlbum album = { Strigino } /> } />
      <Route path = '/photographs/maks' element = { <PhotographyAlbum album = { Maks } /> } />
      <Route path = '/photographs/tatyana-bysheva' element = { <PhotographyAlbum album = { TatyanaBysheva } /> } />
      <Route path = '/photographs/time-lapses' element = { <PhotographyAlbum album = { TimeLapses } /> } />
      <Route path = '/photographs/ramon-palace' element = { <PhotographyAlbum album = { RamonPalace } /> } />
      <Route path = '/photographs/partners-day' element = { <PhotographyAlbum album = { PartnersDay } /> } />
      <Route path = '/photographs/united-states' element = { <PhotographyAlbum album = { ConqueringAmerica } /> } />
      <Route path = '/photographs/kaliningrad' element = { <PhotographyAlbum album = { Kaliningrad } /> } />
      <Route path = '/photographs/formula-sochi-2.0' element = { <PhotographyAlbum album = { FormulaSochi2 } /> } />
      <Route path = '/photographs/lolita-rakhmatova' element = { <PhotographyAlbum album = { LolitaRakhmatova } /> } />
      <Route path = '/photographs/intel-products' element = { <PhotographyAlbum album = { IntelProducts } /> } />
      <Route path = '/photographs/formula-sochi' element = { <PhotographyAlbum album = { FormulaSochi } /> } />
      <Route path = '/photographs/lake-baikal' element = { <PhotographyAlbum album = { LakeBaikal } /> } />
      <Route path = '/photographs/lake-baikal-team' element = { <PhotographyAlbum album = { LakeBaikalTeam } /> } />
      <Route path = '/photographs/asia-farakshina' element = { <DrawingAlbum album = { AsiaFarakshina } /> } />
      <Route path = '/photographs/military-museum' element = { <PhotographyAlbum album = { MilitaryMuseum } /> } />
      <Route path = '/photographs/ekaterinburg' element = { <PhotographyAlbum album = { Ekaterinburg } /> } />
      <Route path = '/photographs/yoshkar-ola' element = { <PhotographyAlbum album = { YoshkarOla } /> } />
      <Route path = '/photographs/little-russia' element = { <PhotographyAlbum album = { LittleRussia } /> } />
      <Route path = '/photographs/marina-alekseeva' element = { <PhotographyAlbum album = { MarinaAlekseeva } /> } />
      <Route path = '/photographs/vera-klemenova' element = { <PhotographyAlbum album = { VeraKlemenova } /> } />

      <Route path = '/drawings/pencil-sketches' element = { <DrawingAlbum album = { PencilSketches } /> } />
      <Route path = '/drawings/soft-pastel' element = { <DrawingAlbum album = { SoftPastel } /> } />
      <Route path = '/drawings/watercolor' element = { <DrawingAlbum album = { Watercolor } /> } />

      <Route path = '/performances/gravity-falls' element = { <PerformanceAlbum album = { GravityFalls } /> } />
      <Route path = '/performances/cure-for-wellness' element = { <PerformanceAlbum album = { CureForWellness } /> } />
      <Route path = '/performances/mia-and-sebastian' element = { <PerformanceAlbum album = { MiaAndSebastian } /> } />

      <Route path = '*' element = { <NotFound /> } />
    </Routes>
  );
}

export default routes;