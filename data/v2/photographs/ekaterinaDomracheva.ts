import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import HiddenPhotograph from '../core/hiddenPhotograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const EkaterinaDomracheva = new Album(
  new Text('Ekaterina Domracheva'),
  Genre.Portrait,
  new Date('2021-08-25'),
  new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_030.webp'),
  [
    new Photograph('/photographs/2021-08-25/2021-08-25_001.webp', true, new Text('Alice’ Song\n\nI am awfully bored, I am simply without strength.\nAnd thoughts come - tempting, disturbing, -\nThat somebody somewhere would invite me\nAnd there I should see something specific!..\n\nAnd what exactly - I really do not know.\nAll bet for the wager:\n"Read for a while", - I sit down and read,\n"Play for a while", - now I play with the kitten, -\nAll the same I’m awfully bored!\nSir! Take Alice with you!')),

    new HiddenPhotograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_007.webp'),
    new Photograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_006.webp'),
    new HiddenPhotograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_005.webp'),
    new HiddenPhotograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_004.webp', true),
    new HiddenPhotograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_003.webp', true),
    new Photograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_002.webp', true),
    new Photograph('/photographs/2021-07-24_08-02_kate/2021-07-24_08-02_001.webp', true),

    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_032.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_031.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_030.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_029.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_028.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_027.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_026.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_025.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_024.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_023.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_022.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_021.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_020.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_019.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_018.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_017.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_016.webp', true),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_015.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_014.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_013.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_012.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_011.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_010.webp'),
    new HiddenPhotograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_009.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_008.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_007.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_006.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_005.webp', true),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_004.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_003.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_002.webp'),
    new Photograph('/photographs/2020-07-19_08-04_kate/2020-07-19_08-04_001.webp'),

    new Photograph('/photographs/2020-05-11/2020-05-11_006.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_011.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_014.webp'),

    new Photograph('/photographs/2020-06-12/2020-06-12_001.webp', false, new Text('A dream...')),
    new Photograph('/photographs/2020-06-08/2020-06-08_001.webp', false, new Text('The summer evening')),
    new Photograph('/photographs/2019-06-12/2019-06-12_001.webp', true, new Text('The first trip')),
    new Photograph('/photographs/2018-06-23/2018-06-23_001.webp', false, new Text('The first time we met')),
  ],
  new Social('Екатерина', 'Домрачева', 'Архитектор в Нижнем Новгороде, студент ННГАСУ',
    'https://vk.com/katerina99995', undefined, 'https://www.instagram.com/domracheva_kat'));

export default EkaterinaDomracheva;