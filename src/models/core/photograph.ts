import Media from './media';

class Photograph implements Media {
  src: string;
  vertical: boolean;
  description: string;

  constructor(src: string, vertical: boolean = false, description: string = '') {
    this.src = src;
    this.vertical = vertical;
    this.description = description;
  }
}

export default Photograph;