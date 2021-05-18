import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Albums from './components/Albums';
import Contents from './components/Contents';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import Favorites from './components/photographs/Favorites';
import Altay from './components/photographs/Altay';
import NizhnyNovgorod from './components/photographs/NizhnyNovgorod';
import Rekshino from './components/photographs/Rekshino';
import AlinaCherdakova from './components/photographs/AlinaCherdakova';
import BalloonFestival from './components/photographs/BalloonFestival';
import ConqueringRome from './components/photographs/ConqueringRome';
import KiraOrlova from './components/photographs/KiraOrlova';
import ConqueringAmerica2 from './components/photographs/ConqueringAmerica2';
import TimeLapses from './components/photographs/TimeLapses';
import ConqueringAmerica from './components/photographs/ConqueringAmerica';
import Kaliningrad from './components/photographs/Kaliningrad';
import FormulaSochi from './components/photographs/FormulaSochi';
import LakeBaikal from './components/photographs/LakeBaikal';
import MilitaryMuseum from './components/photographs/MilitaryMuseum';
import Ekaterinburg from './components/photographs/Ekaterinburg';
import YoshkarOla from './components/photographs/YoshkarOla';
import LittleRussia from './components/photographs/LittleRussia';
import RussianEmirates from './components/photographs/RussianEmirates';
import GoldenAge from './components/photographs/GoldenAge';
import VeraKlemenova from './components/photographs/VeraKlemenova';
import ImperialTown from './components/photographs/ImperialTown';

import PencilSketches from './components/drawings/PencilSketches';
import SoftPastel from './components/drawings/SoftPastel';

import CureForWellness from './components/performances/CureForWellness';
import GravityFalls from './components/performances/GravityFalls';
import MiaAndSebastian from './components/performances/MiaAndSebastian';

function Routes() {
  return (
    <Switch>
      <Route exact path = '/' component = { Home } />
      <Route exact path = '/albums' component = { Albums } />
      <Route exact path = '/contents' component = { Contents } />
      <Route exact path = '/resume' component = { Resume } />
      <Route exact path = '/contact' component = { Contact } />

      <Route exact path = '/photographs/favorite-photographs' component = { Favorites } />
      <Route exact path = '/photographs/altay' component = { Altay } />
      <Route exact path = '/photographs/nizhny-novgorod' component = { NizhnyNovgorod } />
      <Route exact path = '/photographs/rekshino' component = { Rekshino } />
      <Route exact path = '/photographs/alina-cherdakova' component = { AlinaCherdakova } />
      <Route exact path = '/photographs/balloon-festival' component = { BalloonFestival } />
      <Route exact path = '/photographs/rome-malta' component = { ConqueringRome } />
      <Route exact path = '/photographs/kira-orlova' component = { KiraOrlova } />
      <Route exact path = '/photographs/united-states-2.0' component = { ConqueringAmerica2 } />
      <Route exact path = '/photographs/time-lapses' component = { TimeLapses } />
      <Route exact path = '/photographs/united-states' component = { ConqueringAmerica } />
      <Route exact path = '/photographs/kaliningrad' component = { Kaliningrad } />
      <Route exact path = '/photographs/formula-sochi' component = { FormulaSochi } />
      <Route exact path = '/photographs/lake-baikal' component = { LakeBaikal } />
      <Route exact path = '/photographs/military-museum' component = { MilitaryMuseum } />
      <Route exact path = '/photographs/ekaterinburg' component = { Ekaterinburg } />
      <Route exact path = '/photographs/yoshkar-ola' component = { YoshkarOla } />
      <Route exact path = '/photographs/little-russia' component = { LittleRussia } />
      <Route exact path = '/photographs/russian-emirates' component = { RussianEmirates } />
      <Route exact path = '/photographs/golden-age' component = { GoldenAge } />
      <Route exact path = '/photographs/vera-klemenova' component = { VeraKlemenova } />
      <Route exact path = '/photographs/imperial-town' component = { ImperialTown } />

      <Route exact path = '/drawings/pencil-sketches' component = { PencilSketches } />
      <Route exact path = '/drawings/soft-pastel' component = { SoftPastel } />

      <Route exact path = '/performances/gravity-falls' component = { GravityFalls } />
      <Route exact path = '/performances/cure-for-wellness' component = { CureForWellness } />
      <Route exact path = '/performances/mia-and-sebastian' component = { MiaAndSebastian } />

      <Route component = { NotFound } />
    </Switch>
  );
}

export default Routes;