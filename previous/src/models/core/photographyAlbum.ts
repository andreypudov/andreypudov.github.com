import { getLocalizedDate } from '../../utils/date';
import Genre from './genre';
import Media from './media';
import Social from './social';
import Text from './text';

class PhotographyAlbum {
  private title: Text;
  private genre: Genre;
  private date: Date;
  private cover: Media;
  private media: Media[];
  private social?: Social;

  constructor(title: Text, genre: Genre, date: Date, cover: Media, media: Media[], social?: Social) {
    this.title = title;
    this.genre = genre;
    this.date = date;
    this.cover = cover;
    this.media = media;
    this.social = social;
  }

  getTitle = () => this.title;
  getGenre = () => this.genre;
  getDate  = () => this.date;
  getCover = () => this.cover;
  getMedia = () => this.media;
  getSocial = () => this.social;

  getDateString = (locale: string) => getLocalizedDate(this.date, locale);
}

export default PhotographyAlbum;