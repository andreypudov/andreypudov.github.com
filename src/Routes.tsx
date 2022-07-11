import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Albums from './components/Albums';
import Contents from './components/Contents';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import Favorites from './components/photographs/Favorites';
import Crimea from './components/photographs/Crimea';
import Altay from './components/photographs/Altay';
import NizhnyNovgorod from './components/photographs/NizhnyNovgorod';
import Rekshino from './components/photographs/Rekshino';
import AlinaCherdakova from './components/photographs/AlinaCherdakova';
import BalloonFestival from './components/photographs/BalloonFestival';
import ConqueringRome from './components/photographs/ConqueringRome';
import KiraOrlova from './components/photographs/KiraOrlova';
import ConqueringAmerica2 from './components/photographs/ConqueringAmerica2';
import Maks from './components/photographs/Maks';
import TatyanaBysheva from './components/photographs/TatyanaBysheva';
import TimeLapses from './components/photographs/TimeLapses';
import RamonPalace from './components/photographs/RamonPalace';
import PartnersDay from './components/photographs/PartnersDay';
import ConqueringAmerica from './components/photographs/ConqueringAmerica';
import Kaliningrad from './components/photographs/Kaliningrad';
import FormulaSochi2 from './components/photographs/FormulaSochi2';
import AndreyPudov from './components/photographs/AndreyPudov';
import LolitaRakhmatova from './components/photographs/LolitaRakhmatova';
import IntelProducts from './components/photographs/IntelProducts';
import FormulaSochi from './components/photographs/FormulaSochi';
import AsiaFarakshina from './components/photographs/AsiaFarakshina';
import LakeBaikal from './components/photographs/LakeBaikal';
import LakeBaikalTeam from './components/photographs/LakeBaikalTeam';
import MilitaryMuseum from './components/photographs/MilitaryMuseum';
import Ekaterinburg from './components/photographs/Ekaterinburg';
import YoshkarOla from './components/photographs/YoshkarOla';
import LittleRussia from './components/photographs/LittleRussia';
import MarinaAlekseeva from './components/photographs/MarinaAlekseeva';
import RussianEmirates from './components/photographs/RussianEmirates';
import GoldenAge from './components/photographs/GoldenAge';
import VeraKlemenova from './components/photographs/VeraKlemenova';
import ImperialTown from './components/photographs/ImperialTown';

import PencilSketches from './components/drawings/PencilSketches';
import SoftPastel from './components/drawings/SoftPastel';

import CureForWellness from './components/performances/CureForWellness';
import GravityFalls from './components/performances/GravityFalls';
import MiaAndSebastian from './components/performances/MiaAndSebastian';

function routes() {
  return (
    <Routes>
      <Route path = '/' element = { <Home /> } />
      <Route path = '/albums' element = { <Albums /> } />
      <Route path = '/contents' element = { <Contents /> } />
      <Route path = '/resume' element = { <Resume /> } />
      <Route path = '/contact' element = { <Contact /> } />

      <Route path = '/photographs/favorite-photographs' element = { <Favorites /> } />
      <Route path = '/photographs/crimea' element = { <Crimea /> } />
      <Route path = '/photographs/altay' element = { <Altay /> } />
      <Route path = '/photographs/nizhny-novgorod' element = { <NizhnyNovgorod /> } />
      <Route path = '/photographs/rekshino' element = { <Rekshino /> } />
      <Route path = '/photographs/alina-cherdakova' element = { <AlinaCherdakova /> } />
      <Route path = '/photographs/balloon-festival' element = { <BalloonFestival /> } />
      <Route path = '/photographs/rome-malta' element = { <ConqueringRome /> } />
      <Route path = '/photographs/kira-orlova' element = { <KiraOrlova /> } />
      <Route path = '/photographs/united-states-2.0' element = { <ConqueringAmerica2 /> } />
      <Route path = '/photographs/maks' element = { <Maks /> } />
      <Route path = '/photographs/tatyana-bysheva' element = { <TatyanaBysheva /> } />
      <Route path = '/photographs/time-lapses' element = { <TimeLapses /> } />
      <Route path = '/photographs/ramon-palace' element = { <RamonPalace /> } />
      <Route path = '/photographs/partners-day' element = { <PartnersDay /> } />
      <Route path = '/photographs/united-states' element = { <ConqueringAmerica /> } />
      <Route path = '/photographs/kaliningrad' element = { <Kaliningrad /> } />
      <Route path = '/photographs/formula-sochi-2.0' element = { <FormulaSochi2 /> } />
      <Route path = '/photographs/andrey-pudov' element = { <AndreyPudov /> } />
      <Route path = '/photographs/lolita-rakhmatova' element = { <LolitaRakhmatova /> } />
      <Route path = '/photographs/formula-sochi' element = { <FormulaSochi /> } />
      <Route path = '/photographs/lake-baikal' element = { <LakeBaikal /> } />
      <Route path = '/photographs/lake-baikal-team' element = { <LakeBaikalTeam /> } />
      <Route path = '/photographs/asia-farakshina' element = { <AsiaFarakshina /> } />
      <Route path = '/photographs/military-museum' element = { <MilitaryMuseum /> } />
      <Route path = '/photographs/ekaterinburg' element = { <Ekaterinburg /> } />
      <Route path = '/photographs/yoshkar-ola' element = { <YoshkarOla /> } />
      <Route path = '/photographs/little-russia' element = { <LittleRussia /> } />
      <Route path = '/photographs/intel-products' element = { <IntelProducts /> } />
      <Route path = '/photographs/marina-alekseeva' element = { <MarinaAlekseeva /> } />
      <Route path = '/photographs/russian-emirates' element = { <RussianEmirates /> } />
      <Route path = '/photographs/golden-age' element = { <GoldenAge /> } />
      <Route path = '/photographs/vera-klemenova' element = { <VeraKlemenova /> } />
      <Route path = '/photographs/imperial-town' element = { <ImperialTown /> } />

      <Route path = '/drawings/pencil-sketches' element = { <PencilSketches /> } />
      <Route path = '/drawings/soft-pastel' element = { <SoftPastel /> } />

      <Route path = '/performances/gravity-falls' element = { <GravityFalls /> } />
      <Route path = '/performances/cure-for-wellness' element = { <CureForWellness /> } />
      <Route path = '/performances/mia-and-sebastian' element = { <MiaAndSebastian /> } />

      <Route path = '*' element = { <NotFound /> } />
    </Routes>
  );
}

export default routes;