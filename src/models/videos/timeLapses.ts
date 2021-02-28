import Video from '../core/video';
import VideoAlbum from './../core/videoAlbum';

export default new VideoAlbum(
  'Time Lapses',
  new Date('2017-04-14'),
  [
    new Video('https://www.youtube.com/embed/uJzZqGmiRMI', 'Парк Швейцария'),
    new Video('https://www.youtube.com/embed/v-HWYfvLLUo', 'Канавинский мост'),
    new Video('https://www.youtube.com/embed/7Ujcu3o7bkY', 'Банк России'),
    new Video('https://www.youtube.com/embed/TcC3kf0Mlzk', 'Площадь Максима Горького'),
    new Video('https://www.youtube.com/embed/tGkIeioSP2E', 'Зеленский Съезд'),
    new Video('https://www.youtube.com/embed/0YqJLA41UCs', 'Большая Покровская'),
  ]);