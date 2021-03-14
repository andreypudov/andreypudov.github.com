import Media from './media';

class Album {
  private title: string;
  private date: Date;
  private cover: Media;
  private media: Media[];

  constructor(title: string, date: Date, cover: Media, media: Media[]) {
    this.title = title;
    this.date = date;
    this.cover = cover;
    this.media = media;
  }

  getTitle = () => this.title;
  getCover = () => this.cover;
  getMedia = () => this.media;

  getDate(): string {
    return this.date.toLocaleDateString(
      'en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

export default Album;