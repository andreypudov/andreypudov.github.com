import Text from './text';

interface Media {
  src: string;
  vertical: boolean;
  description?: Text;
  hidden?: boolean;
}

export default Media;