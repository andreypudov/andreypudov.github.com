import { getLocalizedDate } from '../../utils/date';
import Media from './media';
import Social from './social';

class PhotographyAlbum {
  private title: string;
  private date: Date;
  private cover: Media;
  private media: Media[];
  private social?: Social;

  constructor(title: string, date: Date, cover: Media, media: Media[], social?: Social) {
    this.title = title;
    this.date = date;
    this.cover = cover;
    this.media = media;
    this.social = social;
  }

  getTitle = () => this.title;
  getDate  = () => this.date;
  getCover = () => this.cover;
  getMedia = () => this.media;
  getSocial = () => this.social;

  getDateString = (locale: string) => getLocalizedDate(this.date, locale);
}

export default PhotographyAlbum;