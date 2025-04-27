import Page from './core/page';
import PageType  from './core/pageType';

import MilitaryMuseum from './photographs/militaryMuseum';
import RussianEmirates from './photographs/russianEmirates';
import GoldenAge from './photographs/goldenAge';
import ImperialTown from './photographs/imperialTown';

import AnniversaryInPorto from './photographs/anniversaryInPorto';
import PeiPeiChen from './photographs/peipeiChen';
// import PeiPeiMontseny from './photographs/peipeiMentseny';
// import PeiPeiMadrid from './photographs/peipeiMadrid';
// import PeiPeiMontserrat from './photographs/peipeiMontserrat';
// import PeiPeiStockholm from "./photographs/peipeiStockholm";
// import PeiPeiRain from "./photographs/peipeiRain";
import AndreyPudov from './photographs/andreyPudov';
import EkaterinaDomracheva from './photographs/ekaterinaDomracheva';
import IrinaDomracheva from './photographs/irinaDomracheva';
import AlinaCherdakova from './photographs/alinaCherdakova';
import TatyanaBysheva from './photographs/tatyanaBysheva';
import LookingForTheWind from './photographs/lookingForTheWind';
import KiraOrlova from './photographs/kiraOrlova';
import EkaterinaMalysheva from './photographs/ekaterinaMalysheva';
import LolitaRakhmatova from './photographs/lolitaRakhmatova';
import AsiaFarakshina from './photographs/asiaFarakshina';
import LakeBaikalTeam from './photographs/lakeBaikalTeam';
import MarinaAlekseeva from './photographs/marinaAlekseeva';
import VeraKlemenova from './photographs/veraKlemenova';

import Favorites from './photographs/favorites';
import NtuCosplay from './photographs/ntuCosplay';
import LaMerce from './photographs/laMerce';
import GraciaFestivities from './photographs/graciaFestivities';
import Ordesa from './photographs/ordesa';
import Madrid from './photographs/madrid';
import Grapebusters from './photographs/grapebusters';
import Barcelona from './photographs/barcelona';
import Ebro from './photographs/ebro';
import SetGorgs from './photographs/setGorgs';
import BarcelonaAirport from './photographs/barcelonaAirport';
import Montserrat from './photographs/montserrat';
import Perpignan from './photographs/perpignan';
import ElsEmpedratsDelMontseny from './photographs/elsEmpedratsDelMontseny';
import Andorra from './photographs/andorra';
import Gotheborg from './photographs/gotheborg';
import Oslo from './photographs/oslo';
import Stockholm from './photographs/stockholm';
import Puigmal from './photographs/puigmal';
import TuroDeLHome from './photographs/turoDeLHome';
import CastilloDeMataplana from './photographs/castilloDeMataplana';
import PoblenouCemetery from './photographs/poblenouCemetery';
import Crimea from './photographs/crimea';
import Altay from './photographs/altay';
import ConqueringAmerica4 from './photographs/conqueringAmerica4';
import IntelOffice from './photographs/intelOffice';
import NizhnyNovgorod from './photographs/nizhnyNovgorod';
import FormulaSochi3 from './photographs/formulaSochi3';
import Rekshino from './photographs/rekshino';
import ConqueringAmerica3 from './photographs/conqueringAmerica3';
import BalloonFestival from './photographs/balloonFestival';
import ConqueringRome from './photographs/conqueringRome';
import RideInRekshino from './photographs/rideInRekshino';
import ConqueringAmerica2 from './photographs/conqueringAmerica2';
import Strigino from './photographs/strigino';
import Maks from './photographs/maks';
import RamonPalace from './photographs/ramonPalace';
import PartnersDay from './photographs/partnersDay';
import ConqueringAmerica from './photographs/conqueringAmerica';
import Kaliningrad from './photographs/kaliningrad';
import FormulaSochi2 from './photographs/formulaSochi2';
import IntelProducts from './photographs/intelProducts';
import FormulaSochi from './photographs/formulaSochi';
import LakeBaikal from './photographs/lakeBaikal';
import Ekaterinburg from './photographs/ekaterinburg';
import YoshkarOla from './photographs/yoshkarOla';
import LittleRussia from './photographs/littleRussia';

import PencilSketches from './drawings/pencilSketches';
import SoftPastel from './drawings/softPastel';
import Watercolor from './drawings/watercolor';

import BolshayaPokrovskaya from './timelapses/bolshayaPokrovskaya';
import MaximGorky from './timelapses/maximGorky';
import Spit from './timelapses/spit';
import StateBank from './timelapses/stateBank ';
import SwitzerlandPark from './timelapses/switzerlandPark';
import ZelenskySyezd from './timelapses/zelenskySyezd';

import CureForWellness from './performances/cureForWellness';
import GravityFalls from './performances/gravityFalls';
import MiaAndSebastian from './performances/miaAndSebastian';
import Genre from './core/genre';

const Pages = {
   RussianEmirates: new Page(RussianEmirates, PageType.Article, '/photographs/russian-emirates/'),
   GoldenAge: new Page(GoldenAge, PageType.Article, '/photographs/golden-age/'),
   ImperialTown: new Page(ImperialTown, PageType.Article, '/photographs/imperial-town/'),

   AnniversaryInPorto: new Page(AnniversaryInPorto, PageType.Photographs, '/photographs/anniversary-in-port/'),
   PeiPeiChen: new Page(PeiPeiChen, PageType.Photographs, '/photographs/pei-pei-chen/'),
   // PeiPeiMontseny: new Page(PeiPeiMontseny, PageType.Photographs, '/photographs/pei-pei-montseny/'),
   // PeiPeiMadrid: new Page(PeiPeiMadrid, PageType.Photographs, '/photographs/pei-pei-madrid/'),
   // PeiPeiMontserrat: new Page(PeiPeiMontserrat, PageType.Photographs, '/photographs/pei-pei-montserrat/'),
   // PeiPeiStockholm: new Page(PeiPeiStockholm, PageType.Photographs, '/photographs/pei-pei-stockholm/'),
   // PeiPeiRain: new Page(PeiPeiRain, PageType.Photographs, '/photographs/pei-pei-rain/'),
   AndreyPudov: new Page(AndreyPudov, PageType.Photographs, '/photographs/andrey-pudov/'),
   EkaterinaDomracheva: new Page(EkaterinaDomracheva, PageType.Photographs, '/photographs/ekaterina-domracheva/'),
   IrinaDomracheva: new Page(IrinaDomracheva, PageType.Photographs, '/photographs/irina-domracheva/'),
   AlinaCherdakova: new Page(AlinaCherdakova, PageType.Photographs, '/photographs/alina-cherdakova/'),
   TatyanaBysheva: new Page(TatyanaBysheva, PageType.Photographs, '/photographs/tatyana-bysheva/'),
   LookingForTheWind: new Page(LookingForTheWind, PageType.Photographs, '/photographs/looking-for-the-wind/'),
   KiraOrlova: new Page(KiraOrlova, PageType.Photographs, '/photographs/kira-orlova/'),
   EkaterinaMalysheva: new Page(EkaterinaMalysheva, PageType.Photographs, '/photographs/ekaterina-malysheva/'),
   LolitaRakhmatova: new Page(LolitaRakhmatova, PageType.Photographs, '/photographs/lolita-rakhmatova/'),
   AsiaFarakshina: new Page(AsiaFarakshina, PageType.Photographs, '/photographs/asia-farakshina/'),
   LakeBaikalTeam: new Page(LakeBaikalTeam, PageType.Photographs, '/photographs/lake-baikal-team/'),
   MarinaAlekseeva: new Page(MarinaAlekseeva, PageType.Photographs, '/photographs/marina-alekseeva/'),
   VeraKlemenova: new Page(VeraKlemenova, PageType.Photographs, '/photographs/vera-klemenova/'),

   Favorites: new Page(Favorites, PageType.Photographs, '/photographs/favorite-photographs/'),
   NtuCosplay: new Page(NtuCosplay, PageType.Photographs, '/photographs/ntu-cosplay/'),
   LaMerce: new Page(LaMerce, PageType.Photographs, '/photographs/la-merce/'),
   GraciaFestivities: new Page(GraciaFestivities, PageType.Photographs, '/photographs/gracia-festivities/'),
   Ordesa: new Page(Ordesa, PageType.Photographs, '/photographs/ordesa/'),
   Madrid: new Page(Madrid, PageType.Photographs, '/photographs/madrid/'),
   Grapebusters: new Page(Grapebusters, PageType.Photographs, '/photographs/grapebusters/'),
   Barcelona: new Page(Barcelona, PageType.Photographs, '/photographs/barcelona/'),
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
   PoblenouCemetery: new Page(PoblenouCemetery, PageType.Photographs, '/photographs/poblenou-cemetery/'),
   Crimea: new Page(Crimea, PageType.Photographs, '/photographs/crimea/'),
   Altay: new Page(Altay, PageType.Photographs, '/photographs/altay/'),
   ConqueringAmerica4: new Page(ConqueringAmerica4, PageType.Photographs, '/photographs/united-states-4.0/'),
   IntelOffice: new Page(IntelOffice, PageType.Photographs, '/photographs/intel-office/'),
   NizhnyNovgorod: new Page(NizhnyNovgorod, PageType.Photographs, '/photographs/nizhny-novgorod/'),
   FormulaSochi3: new Page(FormulaSochi3, PageType.Photographs, '/photographs/formula-sochi-3.0/'),
   Rekshino: new Page(Rekshino, PageType.Photographs, '/photographs/rekshino/'),
   ConqueringAmerica3: new Page(ConqueringAmerica3, PageType.Photographs, '/photographs/united-states-3.0/'),
   BalloonFestival: new Page(BalloonFestival, PageType.Photographs, '/photographs/balloon-festival/'),
   ConqueringRome: new Page(ConqueringRome, PageType.Photographs, '/photographs/rome-malta/'),
   RideInRekshino: new Page(RideInRekshino, PageType.Photographs, '/photographs/ride-in-rekshino/'),
   ConqueringAmerica2: new Page(ConqueringAmerica2, PageType.Photographs, '/photographs/united-states-2.0/'),
   Strigino: new Page(Strigino, PageType.Photographs, '/photographs/strigino/'),
   Maks: new Page(Maks, PageType.Photographs, '/photographs/maks/'),
   RamonPalace: new Page(RamonPalace, PageType.Photographs, '/photographs/ramon-palace/'),
   PartnersDay: new Page(PartnersDay, PageType.Photographs, '/photographs/partners-day/'),
   ConqueringAmerica: new Page(ConqueringAmerica, PageType.Photographs, '/photographs/united-states/'),
   Kaliningrad: new Page(Kaliningrad, PageType.Photographs, '/photographs/kaliningrad/'),
   FormulaSochi2: new Page(FormulaSochi2, PageType.Photographs, '/photographs/formula-sochi-2.0/'),
   IntelProducts: new Page(IntelProducts, PageType.Photographs, '/photographs/intel-products/'),
   FormulaSochi: new Page(FormulaSochi, PageType.Photographs, '/photographs/formula-sochi/'),
   LakeBaikal: new Page(LakeBaikal, PageType.Photographs, '/photographs/lake-baikal/'),
   MilitaryMuseum: new Page(MilitaryMuseum, PageType.Photographs, '/photographs/military-museum/'),
   Ekaterinburg: new Page(Ekaterinburg, PageType.Photographs, '/photographs/ekaterinburg/'),
   YoshkarOla: new Page(YoshkarOla, PageType.Photographs, '/photographs/yoshkar-ola/'),
   LittleRussia: new Page(LittleRussia, PageType.Photographs, '/photographs/little-russia/'),

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
export const Drawings = pagesValues.filter(p => p.getType() === PageType.Drawings).sort(compareArticles);
export const TimeLapses = pagesValues.filter(p => p.getType() === PageType.TimeLapses).sort(compareArticles);
export const Performances = pagesValues.filter(p => p.getType() === PageType.Performances).sort(compareArticles);

export const Photographs = pagesValues.filter(p => p.getType() === PageType.Photographs).sort(compareArticles);
export const EventPhotographs = Photographs.filter(p => p.getAlbum().getGenre() === Genre.Event);
export const FavoritePhotographs = Photographs.filter(p => p.getAlbum().getGenre() === Genre.Favorites);
export const NaturePhotographs = Photographs.filter(p => p.getAlbum().getGenre() === Genre.Nature);
export const PortraitPhotographs = Photographs.filter(p => p.getAlbum().getGenre() === Genre.Portrait);
export const StreetPhotographs = Photographs.filter(p => p.getAlbum().getGenre() === Genre.Street);

export default Pages;