import Page from './core/page';
import PageType  from './core/pageType';

import MilitaryMuseum from './../models/photographs/militaryMuseum';
import RussianEmirates from './../models/photographs/russianEmirates';
import GoldenAge from './../models/photographs/goldenAge';
import ImperialTown from './../models/photographs/imperialTown';

import Favorites from './../models/photographs/favorites';
import Ebro from './../models/photographs/ebro';
import SetGorgs from './../models/photographs/setGorgs';
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

const Pages = {
   RussianEmirates: new Page(RussianEmirates, PageType.Article, '/photographs/russian-emirates/'),
   GoldenAge: new Page(GoldenAge, PageType.Article, '/photographs/golden-age/'),
   ImperialTown: new Page(ImperialTown, PageType.Article, '/photographs/imperial-town/'),

   Favorites: new Page(Favorites, PageType.Photographs, '/photographs/favorite-photographs/'),
   Ebro: new Page(Ebro, PageType.Photographs, '/photographs/ebro/'),
   SetGorgs: new Page(SetGorgs, PageType.Photographs, '/photographs/set-gorgs/'),
   BarcelonaAirport: new Page(BarcelonaAirport, PageType.Photographs, '/photographs/barcelona-airport/'),
   Montserrat: new Page(Montserrat, PageType.Photographs, '/photographs/montserrat/'),
   Perpignan: new Page(Perpignan, PageType.Photographs, '/photographs/perpignan/'),
   ElsEmpedratsDelMontseny: new Page(ElsEmpedratsDelMontseny, PageType.Photographs, '/photographs/els-empedrats-del-montseny/'),
   Andorra: new Page(Andorra, PageType.Photographs, '/photographs/andorra/'),
   Gotheborg: new Page(Gotheborg, PageType.Photographs, '/photographs/gotheborg/'),
   Oslo: new Page(Oslo, PageType.Photographs, '/photographs/oslo/'),
   Stockholm: new Page(Stockholm, PageType.Photographs, '/photographs/stockholm/'),
   Puigmal: new Page(Puigmal, PageType.Photographs, '/photographs/puigmal/'),
   TuroDeLHome: new Page(TuroDeLHome, PageType.Photographs, '/photographs/turo-de-lhome/'),
   CastilloDeMataplana: new Page(CastilloDeMataplana, PageType.Photographs, '/photographs/castillo-de-mataplana/'),
   AndreyPudov: new Page(AndreyPudov, PageType.Photographs, '/photographs/andrey-pudov/'),
   PoblenouCemetery: new Page(PoblenouCemetery, PageType.Photographs, '/photographs/poblenou-cemetery/'),
   Crimea: new Page(Crimea, PageType.Photographs, '/photographs/crimea/'),
   Altay: new Page(Altay, PageType.Photographs, '/photographs/altay/'),
   EkaterinaDomracheva: new Page(EkaterinaDomracheva, PageType.Photographs, '/photographs/ekaterina-domracheva/'),
   IrinaDomracheva: new Page(IrinaDomracheva, PageType.Photographs, '/photographs/irina-domracheva/'),
   ConqueringAmerica4: new Page(ConqueringAmerica4, PageType.Photographs, '/photographs/united-states-4.0/'),
   IntelOffice: new Page(IntelOffice, PageType.Photographs, '/photographs/intel-office/'),
   NizhnyNovgorod: new Page(NizhnyNovgorod, PageType.Photographs, '/photographs/nizhny-novgorod/'),
   FormulaSochi3: new Page(FormulaSochi3, PageType.Photographs, '/photographs/formula-sochi-3.0/'),
   Rekshino: new Page(Rekshino, PageType.Photographs, '/photographs/rekshino/'),
   ConqueringAmerica3: new Page(ConqueringAmerica3, PageType.Photographs, '/photographs/united-states-3.0/'),
   AlinaCherdakova: new Page(AlinaCherdakova, PageType.Photographs, '/photographs/alina-cherdakova/'),
   TatyanaBysheva: new Page(TatyanaBysheva, PageType.Photographs, '/photographs/tatyana-bysheva/'),
   LookingForTheWind: new Page(LookingForTheWind, PageType.Photographs, '/photographs/looking-for-the-wind/'),
   BalloonFestival: new Page(BalloonFestival, PageType.Photographs, '/photographs/balloon-festival/'),
   ConqueringRome: new Page(ConqueringRome, PageType.Photographs, '/photographs/rome-malta/'),
   RideInRekshino: new Page(RideInRekshino, PageType.Photographs, '/photographs/ride-in-rekshino/'),
   KiraOrlova: new Page(KiraOrlova, PageType.Photographs, '/photographs/kira-orlova/'),
   EkaterinaMalysheva: new Page(EkaterinaMalysheva, PageType.Photographs, '/photographs/ekaterina-malysheva/'),
   ConqueringAmerica2: new Page(ConqueringAmerica2, PageType.Photographs, '/photographs/united-states-2.0/'),
   Strigino: new Page(Strigino, PageType.Photographs, '/photographs/strigino/'),
   Maks: new Page(Maks, PageType.Photographs, '/photographs/maks/'),
   RamonPalace: new Page(RamonPalace, PageType.Photographs, '/photographs/ramon-palace/'),
   PartnersDay: new Page(PartnersDay, PageType.Photographs, '/photographs/partners-day/'),
   ConqueringAmerica: new Page(ConqueringAmerica, PageType.Photographs, '/photographs/united-states/'),
   Kaliningrad: new Page(Kaliningrad, PageType.Photographs, '/photographs/kaliningrad/'),
   FormulaSochi2: new Page(FormulaSochi2, PageType.Photographs, '/photographs/formula-sochi-2.0/'),
   LolitaRakhmatova: new Page(LolitaRakhmatova, PageType.Photographs, '/photographs/lolita-rakhmatova/'),
   IntelProducts: new Page(IntelProducts, PageType.Photographs, '/photographs/intel-products/'),
   FormulaSochi: new Page(FormulaSochi, PageType.Photographs, '/photographs/formula-sochi/'),
   AsiaFarakshina: new Page(AsiaFarakshina, PageType.Photographs, '/photographs/asia-farakshina/'),
   LakeBaikal: new Page(LakeBaikal, PageType.Photographs, '/photographs/lake-baikal/'),
   LakeBaikalTeam: new Page(LakeBaikalTeam, PageType.Photographs, '/photographs/lake-baikal-team/'),
   MilitaryMuseum: new Page(MilitaryMuseum, PageType.Photographs, '/photographs/military-museum/'),
   Ekaterinburg: new Page(Ekaterinburg, PageType.Photographs, '/photographs/ekaterinburg/'),
   YoshkarOla: new Page(YoshkarOla, PageType.Photographs, '/photographs/yoshkar-ola/'),
   LittleRussia: new Page(LittleRussia, PageType.Photographs, '/photographs/little-russia/'),
   MarinaAlekseeva: new Page(MarinaAlekseeva, PageType.Photographs, '/photographs/marina-alekseeva/'),
   VeraKlemenova: new Page(VeraKlemenova, PageType.Photographs, '/photographs/vera-klemenova/'),

   PencilSketches: new Page(PencilSketches, PageType.Drawings, '/drawings/pencil-sketches/'),
   SoftPastel: new Page(SoftPastel, PageType.Drawings, '/drawings/soft-pastel/'),
   Watercolor: new Page(Watercolor, PageType.Drawings, '/drawings/watercolor/'),

   BolshayaPokrovskaya: new Page(BolshayaPokrovskaya, PageType.TimeLapses, '/timelapses/bolshaya-pokrovskaya/'),
   MaximGorky: new Page(MaximGorky, PageType.TimeLapses, '/timelapses/maxim-gorky/'),
   Spit: new Page(Spit, PageType.TimeLapses, '/timelapses/spit/'),
   StateBank: new Page(StateBank, PageType.TimeLapses, '/timelapses/state-bank/'),
   SwitzerlandPark: new Page(SwitzerlandPark, PageType.TimeLapses, '/timelapses/switzerland-park/'),
   ZelenskySyezd: new Page(ZelenskySyezd, PageType.TimeLapses, '/timelapses/zelensky-syezd/'),

   CureForWellness: new Page(CureForWellness, PageType.Performances, '/performances/gravity-falls/'),
   GravityFalls: new Page(GravityFalls, PageType.Performances, '/performances/cure-for-wellness/'),
   MiaAndSebastian: new Page(MiaAndSebastian, PageType.Performances, '/performances/mia-and-sebastian/'),
};

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

const pagesValues = Object.values(Pages);

export const Articles = pagesValues.filter(p => p.getType() === PageType.Article).sort(compareArticles);
export const Photographs = pagesValues.filter(p => p.getType() === PageType.Photographs).sort(compareArticles);
export const Drawings = pagesValues.filter(p => p.getType() === PageType.Drawings).sort(compareArticles);
export const TimeLapses = pagesValues.filter(p => p.getType() === PageType.TimeLapses).sort(compareArticles);
export const Performances = pagesValues.filter(p => p.getType() === PageType.Performances).sort(compareArticles);

export default Pages;