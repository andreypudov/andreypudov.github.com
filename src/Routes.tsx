import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Albums from './components/Albums';
import Contents from './components/Contents';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import Favorites from './components/albums/Favorites';
import Altay from './components/albums/Altay';
import NizhnyNovgorod from './components/albums/NizhnyNovgorod';
import Rekshino from './components/albums/Rekshino';
import AlinaCherdakova from './components/albums/AlinaCherdakova';
import BalloonFestival from './components/albums/BalloonFestival';
import ConqueringRome from './components/albums/ConqueringRome';
import KiraOrlova from './components/albums/KiraOrlova';
import ConqueringAmerica2 from './components/albums/ConqueringAmerica2';
import ConqueringAmerica from './components/albums/ConqueringAmerica';
import Kaliningrad from './components/albums/Kaliningrad';
import FormulaSochi from './components/albums/FormulaSochi';
import LakeBaikal from './components/albums/LakeBaikal';
import MilitaryMuseum from './components/albums/MilitaryMuseum';
import Ekaterinburg from './components/albums/Ekaterinburg';
import YoshkarOla from './components/albums/YoshkarOla';
import LittleRussia from './components/albums/LittleRussia';
import RussianEmirates from './components/albums/RussianEmirates';
import GoldenAge from './components/albums/GoldenAge';
import VeraKlemenova from './components/albums/VeraKlemenova';
import ImperialTown from './components/albums/ImperialTown';

function Routes() {
  return (
    <Switch>
      <Route exact path = '/' component = { Home } />
      <Route exact path = '/albums' component = { Albums } />
      <Route exact path = '/contents' component = { Contents } />
      <Route exact path = '/resume' component = { Resume } />
      <Route exact path = '/contact' component = { Contact } />

      <Route exact path = '/albums/favorite-photographs' component = { Favorites } />
      <Route exact path = '/albums/altay' component = { Altay } />
      <Route exact path = '/albums/nizhny-novgorod' component = { NizhnyNovgorod } />
      <Route exact path = '/albums/rekshino' component = { Rekshino } />
      <Route exact path = '/albums/alina-cherdakova' component = { AlinaCherdakova } />
      <Route exact path = '/albums/balloon-festival' component = { BalloonFestival } />
      <Route exact path = '/albums/rome-malta' component = { ConqueringRome } />
      <Route exact path = '/albums/kira-orlova' component = { KiraOrlova } />
      <Route exact path = '/albums/united-states-2.0' component = { ConqueringAmerica2 } />
      <Route exact path = '/albums/united-states' component = { ConqueringAmerica } />
      <Route exact path = '/albums/kaliningrad' component = { Kaliningrad } />
      <Route exact path = '/albums/formula-sochi' component = { FormulaSochi } />
      <Route exact path = '/albums/lake-baikal' component = { LakeBaikal } />
      <Route exact path = '/albums/military-museum' component = { MilitaryMuseum } />
      <Route exact path = '/albums/ekaterinburg' component = { Ekaterinburg } />
      <Route exact path = '/albums/yoshkar-ola' component = { YoshkarOla } />
      <Route exact path = '/albums/little-russia' component = { LittleRussia } />
      <Route exact path = '/albums/russian-emirates' component = { RussianEmirates } />
      <Route exact path = '/albums/golden-age' component = { GoldenAge } />
      <Route exact path = '/albums/vera-klemenova' component = { VeraKlemenova } />
      <Route exact path = '/albums/imperial-town' component = { ImperialTown } />

      <Route component = { NotFound } />
    </Switch>
  );
}

export default Routes;