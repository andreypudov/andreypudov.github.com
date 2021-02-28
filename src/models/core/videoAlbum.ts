import Album from './../core/album';
import Video from './video';

class VideoAlbum implements Album {
  title: string;
  date: Date;
  photographs: Video[];

  constructor(title: string, date: Date, photographs: Video[]) {
    this.title = title;
    this.date = date;
    this.photographs = photographs;
  }
}

export default VideoAlbum;