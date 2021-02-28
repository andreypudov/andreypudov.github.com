import Media from './media';

class Album {
  title: string;
  date: Date;
  media: Media[];

  constructor(title: string, date: Date, media: Media[]) {
    this.title = title;
    this.date = date;
    this.media = media;
  }

  getDate(): string {
    return this.date.toLocaleDateString(
      'en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

export default Album;