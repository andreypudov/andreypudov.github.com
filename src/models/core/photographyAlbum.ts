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

  getDateString(): string {
    return this.date.toLocaleDateString(
      'en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

export default PhotographyAlbum;