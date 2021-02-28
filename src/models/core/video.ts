class Video {
  src: string;
  description: string;

  constructor(src: string, description: string = '') {
    this.src = src;
    this.description = description;
  }
}

export default Video;