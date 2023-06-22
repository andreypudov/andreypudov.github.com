import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const PoblenouCemetery = new Album(
  new Text('PoblenouCemetery', 'Poblenou Cemetery'),
  new Date('2022-07-08'),
  new Photograph('/photographs/2022-07-08/2022-07-08_002.webp'),
  [
   new Photograph('/photographs/2022-07-08/2022-07-08_001.webp', true,
    new Text('PoblenouCemetery.', 'The Kiss of Death\n\nThe Kiss of Death is a marble sculpture, found in Poblenou Cemetery. The sculpture is thought to have been created by Jaume Barba, although others have claimed that its idea was conceived by Joan Fontbernat. The sculpture depicts death, in the form of a winged skeleton, planting a kiss on the forehead of a young man. The sculpture elicits varying responses from viewers concerning the depiction of the young man ranging from ecstasy to resignation.\n\n"His young heart is thus extinguished. The blood in his veins grows cold. And all strength has gone. Faith has been extolled by his fall into the arms of death. Amen."')),
   new Photograph('/photographs/2022-07-08/2022-07-08_002.webp', false,
    new Text('PoblenouCemetery.', 'The first cemetery at this location was built in 1775, located outside the city\'s perimeter wall, as the state of churchyard graves inside the old city was considered unsanitary. After the first cemetery was destroyed by Napoleon\'s troops in 1813, the Italian architect Antonio Ginesi was commissioned to rebuild it, and the new site was reconsecrated by Bishop Pau de Sitjar i Ruata on 15 April 1819. It was formally opened in 1898 by the Bishop of Barcelona Josep Climent i Avinent.\n\nThe cemetery consists of two large sections: at the front Ginesi created egalitarian terraces of burial niches, while at the rear there is an area of individual monuments and mausolea, crafted for the aesthetic tastes and aspirations of the wealthy bourgeoisie, merchants and manufacturers of the city. A third, narrow section along the South wall mixes niches, monuments and common graves.\n\nThe sculpture above the grave of Josep Llaudet Soler is often cited as Poblenou\'s best-known monument. Known as The Kiss of Death, the work dates to 1930 and depicts a winged skeleton kissing the cheek of a young man\'s apparently lifeless body. The name of the artist Jaume Barba is carved into the base, though some believe the work is the idea of Joan Fontbernat.')),
   new Photograph('/photographs/2022-07-08/2022-07-08_003.webp', true),
   new Photograph('/photographs/2022-07-08/2022-07-08_004.webp', true),
   new Photograph('/photographs/2022-07-08/2022-07-08_005.webp', true),
   new Photograph('/photographs/2022-07-08/2022-07-08_006.webp'),
   new Photograph('/photographs/2022-07-08/2022-07-08_007.webp', true),
   new Photograph('/photographs/2022-07-08/2022-07-08_008.webp'),
   new Photograph('/photographs/2022-07-08/2022-07-08_009.webp', true),
   new Photograph('/photographs/2022-07-08/2022-07-08_010.webp', true),
   new Photograph('/photographs/2022-07-08/2022-07-08_011.webp'),
   new Photograph('/photographs/2022-07-08/2022-07-08_012.webp', true),
  ]);

export default PoblenouCemetery;