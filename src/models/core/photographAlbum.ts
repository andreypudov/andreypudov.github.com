import Album from './../core/album';
import Photograph from './photograph';

class PhotographAlbum implements Album {
  title: string;
  date: Date;
  photographs: Photograph[];

  constructor(title: string, date: Date, photographs: Photograph[]) {
    this.title = title;
    this.date = date;
    this.photographs = photographs;
  }
}

export default PhotographAlbum;