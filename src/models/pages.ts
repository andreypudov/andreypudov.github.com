import Page from './core/page';
import PageType  from './core/pageType';

import MilitaryMuseum from './../models/photographs/militaryMuseum';
import RussianEmirates from './../models/photographs/russianEmirates';
import GoldenAge from './../models/photographs/goldenAge';
import ImperialTown from './../models/photographs/imperialTown';

import Favorites from './../models/photographs/favorites';
import BarcelonaAirport from './../models/photographs/barcelonaAirport';
import Montserrat from './../models/photographs/montserrat';
import Perpignan from './../models/photographs/perpignan';
import ElsEmpedratsDelMontseny from './../models/photographs/elsEmpedratsDelMontseny';
import Andorra from './../models/photographs/andorra';
import Gotheborg from './../models/photographs/gotheborg';
import Oslo from './../models/photographs/oslo';
import Stockholm from './../models/photographs/stockholm';
import Puigmal from './../models/photographs/puigmal';
import TuroDeLHome from './../models/photographs/turoDeLHome';
import CastilloDeMataplana from './../models/photographs/castilloDeMataplana';
import AndreyPudov from './../models/photographs/andreyPudov';
import PoblenouCemetery from './../models/photographs/poblenouCemetery';
import Crimea from './../models/photographs/crimea';
import Altay from './../models/photographs/altay';
import EkaterinaDomracheva from './../models/photographs/ekaterinaDomracheva';
import IrinaDomracheva from './../models/photographs/irinaDomracheva';
import ConqueringAmerica4 from './../models/photographs/conqueringAmerica4';
import IntelOffice from './../models/photographs/intelOffice';
import NizhnyNovgorod from './../models/photographs/nizhnyNovgorod';
import FormulaSochi3 from './../models/photographs/formulaSochi3';
import Rekshino from './../models/photographs/rekshino';
import ConqueringAmerica3 from './../models/photographs/conqueringAmerica3';
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
import VeraKlemenova from './../models/photographs/veraKlemenova';

import PencilSketches from './drawings/pencilSketches';
import SoftPastel from './drawings/softPastel';
import Watercolor from './drawings/watercolor';

import BolshayaPokrovskaya from './../models/timelapses/bolshayaPokrovskaya';
import MaximGorky from './../models/timelapses/maximGorky';
import Spit from './../models/timelapses/spit';
import StateBank from './../models/timelapses/stateBank ';
import SwitzerlandPark from './../models/timelapses/switzerlandPark';
import ZelenskySyezd from './../models/timelapses/zelenskySyezd';

import CureForWellness from './performances/cureForWellness';
import GravityFalls from './performances/gravityFalls';
import MiaAndSebastian from './performances/miaAndSebastian';

const Pages = [
   new Page(RussianEmirates, PageType.Article, '/photographs/russian-emirates/'),
   new Page(GoldenAge, PageType.Article, '/photographs/golden-age/'),
   new Page(ImperialTown, PageType.Article, '/photographs/imperial-town/'),

   new Page(Favorites, PageType.Photographs, '/photographs/favorite-photographs/'),
   new Page(BarcelonaAirport, PageType.Photographs, '/photographs/barcelona-airport/'),
   new Page(Montserrat, PageType.Photographs, '/photographs/montserrat/'),
   new Page(Perpignan, PageType.Photographs, '/photographs/perpignan/'),
   new Page(ElsEmpedratsDelMontseny, PageType.Photographs, '/photographs/els-empedrats-del-montseny/'),
   new Page(Andorra, PageType.Photographs, '/photographs/andorra/'),
   new Page(Gotheborg, PageType.Photographs, '/photographs/gotheborg/'),
   new Page(Oslo, PageType.Photographs, '/photographs/oslo/'),
   new Page(Stockholm, PageType.Photographs, '/photographs/stockholm/'),
   new Page(Puigmal, PageType.Photographs, '/photographs/puigmal/'),
   new Page(TuroDeLHome, PageType.Photographs, '/photographs/turo-de-lhome/'),
   new Page(CastilloDeMataplana, PageType.Photographs, '/photographs/castillo-de-mataplana/'),
   new Page(AndreyPudov, PageType.Photographs, '/photographs/andrey-pudov/'),
   new Page(PoblenouCemetery, PageType.Photographs, '/photographs/poblenou-cemetery/'),
   new Page(Crimea, PageType.Photographs, '/photographs/crimea/'),
   new Page(Altay, PageType.Photographs, '/photographs/altay/'),
   new Page(EkaterinaDomracheva, PageType.Photographs, '/photographs/ekaterina-domracheva/'),
   new Page(IrinaDomracheva, PageType.Photographs, '/photographs/irina-domracheva/'),
   new Page(ConqueringAmerica4, PageType.Photographs, '/photographs/united-states-4.0/'),
   new Page(IntelOffice, PageType.Photographs, '/photographs/intel-office/'),
   new Page(NizhnyNovgorod, PageType.Photographs, '/photographs/nizhny-novgorod/'),
   new Page(FormulaSochi3, PageType.Photographs, '/photographs/formula-sochi-3.0/'),
   new Page(Rekshino, PageType.Photographs, '/photographs/rekshino/'),
   new Page(ConqueringAmerica3, PageType.Photographs, '/photographs/united-states-3.0/'),
   new Page(AlinaCherdakova, PageType.Photographs, '/photographs/alina-cherdakova/'),
   new Page(TatyanaBysheva, PageType.Photographs, '/photographs/tatyana-bysheva/'),
   new Page(LookingForTheWind, PageType.Photographs, '/photographs/looking-for-the-wind/'),
   new Page(BalloonFestival, PageType.Photographs, '/photographs/balloon-festival/'),
   new Page(ConqueringRome, PageType.Photographs, '/photographs/rome-malta/'),
   new Page(RideInRekshino, PageType.Photographs, '/photographs/ride-in-rekshino/'),
   new Page(KiraOrlova, PageType.Photographs, '/photographs/kira-orlova/'),
   new Page(EkaterinaMalysheva, PageType.Photographs, '/photographs/ekaterina-malysheva/'),
   new Page(ConqueringAmerica2, PageType.Photographs, '/photographs/united-states-2.0/'),
   new Page(Strigino, PageType.Photographs, '/photographs/strigino/'),
   new Page(Maks, PageType.Photographs, '/photographs/maks/'),
   new Page(RamonPalace, PageType.Photographs, '/photographs/ramon-palace/'),
   new Page(PartnersDay, PageType.Photographs, '/photographs/partners-day/'),
   new Page(ConqueringAmerica, PageType.Photographs, '/photographs/united-states/'),
   new Page(Kaliningrad, PageType.Photographs, '/photographs/kaliningrad/'),
   new Page(FormulaSochi2, PageType.Photographs, '/photographs/formula-sochi-2.0/'),
   new Page(LolitaRakhmatova, PageType.Photographs, '/photographs/lolita-rakhmatova/'),
   new Page(IntelProducts, PageType.Photographs, '/photographs/intel-products/'),
   new Page(FormulaSochi, PageType.Photographs, '/photographs/formula-sochi/'),
   new Page(AsiaFarakshina, PageType.Photographs, '/photographs/asia-farakshina/'),
   new Page(LakeBaikal, PageType.Photographs, '/photographs/lake-baikal/'),
   new Page(LakeBaikalTeam, PageType.Photographs, '/photographs/lake-baikal-team/'),
   new Page(MilitaryMuseum, PageType.Photographs, '/photographs/military-museum/'),
   new Page(Ekaterinburg, PageType.Photographs, '/photographs/ekaterinburg/'),
   new Page(YoshkarOla, PageType.Photographs, '/photographs/yoshkar-ola/'),
   new Page(LittleRussia, PageType.Photographs, '/photographs/little-russia/'),
   new Page(MarinaAlekseeva, PageType.Photographs, '/photographs/marina-alekseeva/'),
   new Page(VeraKlemenova, PageType.Photographs, '/photographs/vera-klemenova/'),

   new Page(PencilSketches, PageType.Drawings, '/drawings/pencil-sketches/'),
   new Page(SoftPastel, PageType.Drawings, '/drawings/soft-pastel/'),
   new Page(Watercolor, PageType.Drawings, '/drawings/watercolor/'),

   new Page(BolshayaPokrovskaya, PageType.TimeLapses, '/timelapses/bolshaya-pokrovskaya/'),
   new Page(MaximGorky, PageType.TimeLapses, '/timelapses/maxim-gorky/'),
   new Page(Spit, PageType.TimeLapses, '/timelapses/spit/'),
   new Page(StateBank, PageType.TimeLapses, '/timelapses/state-bank/'),
   new Page(SwitzerlandPark, PageType.TimeLapses, '/timelapses/switzerland-park/'),
   new Page(ZelenskySyezd, PageType.TimeLapses, '/timelapses/zelensky-syezd/'),

   new Page(CureForWellness, PageType.Performances, '/performances/gravity-falls/'),
   new Page(GravityFalls, PageType.Performances, '/performances/cure-for-wellness/'),
   new Page(MiaAndSebastian, PageType.Performances, '/performances/mia-and-sebastian/'),
]

const compareArticles = (p1: Page, p2: Page) => {
   const d1 = p1.getAlbum().getDate();
   const d2 = p2.getAlbum().getDate();

   if (d1 > d2) {
      return -1;
   } else if (d1 < d2) {
      return 1;
   } else {
      return 0;
   }
};

export const Articles = Pages.filter(p => p.getType() === PageType.Article).sort(compareArticles);
export const Photographs = Pages.filter(p => p.getType() === PageType.Photographs).sort(compareArticles);
export const Drawings = Pages.filter(p => p.getType() === PageType.Drawings).sort(compareArticles);
export const TimeLapses = Pages.filter(p => p.getType() === PageType.TimeLapses).sort(compareArticles);
export const Performances = Pages.filter(p => p.getType() === PageType.Performances).sort(compareArticles);

export default Pages;