import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

import MilitaryMuseum from './../models/photographs/militaryMuseum';
import RussianEmirates from './../models/photographs/russianEmirates';
import GoldenAge from './../models/photographs/goldenAge';
import ImperialTown from './../models/photographs/imperialTown';

import Favorites from './../models/photographs/favorites';
import Puigmal from './../models/photographs/puigmal';
import TuroDeLHome from './../models/photographs/turoDeLHome';
import CastilloDeMataplana from './../models/photographs/castilloDeMataplana';
import AndreyPudov from './../models/photographs/andreyPudov';
import PoblenouCemetery from './../models/photographs/poblenouCemetery';
import Crimea from './../models/photographs/crimea';
import Altay from './../models/photographs/altay';
import EkaterinaDomracheva from './../models/photographs/ekaterinaDomracheva';
import IrinaDomracheva from './../models/photographs/irinaDomracheva';
import NizhnyNovgorod from './../models/photographs/nizhnyNovgorod';
import Rekshino from './../models/photographs/rekshino';
import AlinaCherdakova from './../models/photographs/alinaCherdakova';
import LookingForTheWind from './../models/photographs/lookingForTheWind';
import BalloonFestival from './../models/photographs/balloonFestival';
import ConqueringRome from './../models/photographs/conqueringRome';
import RideInRekshino from './../models/photographs/rideInRekshino';
import KiraOrlova from './../models/photographs/kiraOrlova';
import EkaterinaMalysheva from './../models/photographs/ekaterinaMalysheva';
import ConqueringAmerica2 from './../models/photographs/conqueringAmerica2';
import Strigino from './../models/photographs/strigino';
import Maks from './../models/photographs/maks';
import TatyanaBysheva from './../models/photographs/tatyanaBysheva';
import RamonPalace from './../models/photographs/ramonPalace';
import PartnersDay from './../models/photographs/partnersDay';
import ConqueringAmerica from './../models/photographs/conqueringAmerica';
import Kaliningrad from './../models/photographs/kaliningrad';
import FormulaSochi2 from './../models/photographs/formulaSochi2';
import LolitaRakhmatova from './../models/photographs/lolitaRakhmatova';
import IntelProducts from './../models/photographs/intelProducts';
import FormulaSochi from './../models/photographs/formulaSochi';
import AsiaFarakshina from './../models/photographs/asiaFarakshina';
import LakeBaikal from './../models/photographs/lakeBaikal';
import LakeBaikalTeam from './../models/photographs/lakeBaikalTeam';
import Ekaterinburg from './../models/photographs/ekaterinburg';
import YoshkarOla from './../models/photographs/yoshkarOla';
import LittleRussia from './../models/photographs/littleRussia';
import MarinaAlekseeva from './../models/photographs/marinaAlekseeva';

import SoftPastel from './../models/drawings/softPastel';
import PencilSketches from './../models/drawings/pencilSketches';
import Watercolor from './../models/drawings/watercolor';

import TimeLapses from './../models/videos/timeLapses';
import AlbumsView from './shared/Albums';

function Albums() {
  return (
    <Layout title = { 'Albums' }>
      <div className = 'container'>
        <h1>Albums</h1>

        <h2>Photographs</h2>

        <div className = 'row'>
          <div className = 'col-md-4'>
            <Link to = '/photographs/favorite-photographs' className = 'card bg-dark text-white gallery-image'>
              <img src = { Favorites.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Favorites.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/puigmal' className = 'card bg-dark text-white gallery-image'>
              <img src = { Puigmal.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Puigmal.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/turo-de-lhome' className = 'card bg-dark text-white gallery-image'>
              <img src = { TuroDeLHome.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ TuroDeLHome.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/castillo-de-mataplana' className = 'card bg-dark text-white gallery-image'>
              <img src = { CastilloDeMataplana.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ CastilloDeMataplana.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/andrey-pudov' className = 'card bg-dark text-white gallery-image'>
              <img src = { AndreyPudov.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ AndreyPudov.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/poblenou-cemetery' className = 'card bg-dark text-white gallery-image'>
              <img src = { PoblenouCemetery.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ PoblenouCemetery.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/crimea' className = 'card bg-dark text-white gallery-image'>
              <img src = { Crimea.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Crimea.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/altay' className = 'card bg-dark text-white gallery-image'>
              <img src = { Altay.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Altay.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/ekaterina-domracheva' className = 'card bg-dark text-white gallery-image'>
              <img src = { EkaterinaDomracheva.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ EkaterinaDomracheva.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/irina-domracheva' className = 'card bg-dark text-white gallery-image'>
              <img src = { IrinaDomracheva.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ IrinaDomracheva.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/nizhny-novgorod' className = 'card bg-dark text-white gallery-image'>
              <img src = { NizhnyNovgorod.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ NizhnyNovgorod.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/rekshino' className = 'card bg-dark text-white gallery-image'>
              <img src = { Rekshino.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Rekshino.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/alina-cherdakova' className = 'card bg-dark text-white gallery-image'>
              <img src = { AlinaCherdakova.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ AlinaCherdakova.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/tatyana-bysheva' className = 'card bg-dark text-white gallery-image'>
              <img src = { TatyanaBysheva.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ TatyanaBysheva.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/looking-for-the-wind' className = 'card bg-dark text-white gallery-image'>
              <img src = { LookingForTheWind.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ LookingForTheWind.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/balloon-festival' className = 'card bg-dark text-white gallery-image'>
              <img src = { BalloonFestival.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ BalloonFestival.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/rome-malta' className = 'card bg-dark text-white gallery-image'>
              <img src = { ConqueringRome.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ ConqueringRome.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/ride-in-rekshino' className = 'card bg-dark text-white gallery-image'>
              <img src = { RideInRekshino.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ RideInRekshino.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/kira-orlova' className = 'card bg-dark text-white gallery-image'>
              <img src = { KiraOrlova.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ KiraOrlova.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/ekaterina-malysheva' className = 'card bg-dark text-white gallery-image'>
              <img src = { EkaterinaMalysheva.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ EkaterinaMalysheva.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/united-states-2.0' className = 'card bg-dark text-white gallery-image'>
              <img src = { ConqueringAmerica2.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ ConqueringAmerica2.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/strigino' className = 'card bg-dark text-white gallery-image'>
              <img src = { Strigino.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Strigino.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/maks' className = 'card bg-dark text-white gallery-image'>
              <img src = { Maks.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Maks.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/ramon-palace' className = 'card bg-dark text-white gallery-image'>
              <img src = { RamonPalace.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ RamonPalace.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/partners-day' className = 'card bg-dark text-white gallery-image'>
              <img src = { PartnersDay.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ PartnersDay.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/united-states' className = 'card bg-dark text-white gallery-image'>
              <img src = { ConqueringAmerica.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ ConqueringAmerica.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/kaliningrad' className = 'card bg-dark text-white gallery-image'>
              <img src = { Kaliningrad.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Kaliningrad.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/formula-sochi-2.0' className = 'card bg-dark text-white gallery-image'>
              <img src = { FormulaSochi2.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ FormulaSochi2.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/lolita-rakhmatova' className = 'card bg-dark text-white gallery-image'>
              <img src = { LolitaRakhmatova.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ LolitaRakhmatova.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/intel-products' className = 'card bg-dark text-white gallery-image'>
              <img src = { IntelProducts.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ IntelProducts.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/formula-sochi' className = 'card bg-dark text-white gallery-image'>
              <img src = { FormulaSochi.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ FormulaSochi.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/asia-farakshina' className = 'card bg-dark text-white gallery-image'>
              <img src = { AsiaFarakshina.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ AsiaFarakshina.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/lake-baikal' className = 'card bg-dark text-white gallery-image'>
              <img src = { LakeBaikal.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ LakeBaikal.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/lake-baikal-team' className = 'card bg-dark text-white gallery-image'>
              <img src = { LakeBaikalTeam.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ LakeBaikalTeam.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/military-museum' className = 'card bg-dark text-white gallery-image'>
              <img src = { MilitaryMuseum.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ MilitaryMuseum.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/ekaterinburg' className = 'card bg-dark text-white gallery-image'>
              <img src = { Ekaterinburg.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Ekaterinburg.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/yoshkar-ola' className = 'card bg-dark text-white gallery-image'>
              <img src = { YoshkarOla.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ YoshkarOla.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/little-russia' className = 'card bg-dark text-white gallery-image'>
              <img src = { LittleRussia.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ LittleRussia.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/marina-alekseeva' className = 'card bg-dark text-white gallery-image'>
              <img src = { MarinaAlekseeva.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ MarinaAlekseeva.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/russian-emirates' className = 'card bg-dark text-white gallery-image'>
              <img src = { RussianEmirates.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ RussianEmirates.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/golden-age' className = 'card bg-dark text-white gallery-image'>
              <img src = { GoldenAge.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ GoldenAge.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/photographs/imperial-town' className = 'card bg-dark text-white gallery-image'>
              <img src = { ImperialTown.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ ImperialTown.getTitle() }</h6>
              </div>
            </Link>
          </div>
        </div>

        <h2>Drawings</h2>

        <div className = 'row'>
        <div className = 'col-md-4'>
            <Link to = '/drawings/watercolor' className = 'card bg-dark text-white gallery-image'>
              <img src = { Watercolor.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ Watercolor.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/drawings/soft-pastel' className = 'card bg-dark text-white gallery-image'>
              <img src = { SoftPastel.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ SoftPastel.getTitle() }</h6>
              </div>
            </Link>
          </div>
          <div className = 'col-md-4'>
            <Link to = '/drawings/pencil-sketches' className = 'card bg-dark text-white gallery-image'>
              <img src = { PencilSketches.getCover().src } className = 'card-img' alt = '' />
              <div className = 'card-img-overlay'>
                <h6 className = 'card-title'>{ PencilSketches.getTitle() }</h6>
              </div>
            </Link>
          </div>

          <h2>Time Lapses</h2>

          <AlbumsView album = { TimeLapses } />
        </div>
      </div>
    </Layout>
  );
}

export default Albums;