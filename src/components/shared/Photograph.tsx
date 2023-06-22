import Album from '../../models/core/photographyAlbum';

type PhotographProps = {
  album: Album;
  index: number;
};

const Photograph = (props: PhotographProps) => {
  const photograph = props.album.getMedia()[props.index];
  const description = photograph.description;
  const title = description
    ? description.getTranslation()
    : props.album.getTitle().getTranslation();
  const alt = description
    ? `${props.album.getTitle().getFallback()} - ${description.getTranslation()}`
    : props.album.getTitle().getTranslation();

  return (
    <figure>
      <img src    = { photograph.src }
        title     = { title }
        alt       = { alt }
        className = {`img-responsive gallery-image${ photograph.vertical ? ' vertical' : '' }`} />
      {
        description &&
          <figcaption className = {`image-caption${ photograph.vertical ? ' vertical' : '' }`}>
            { description.getTranslation() }
          </figcaption>
      }
    </figure>
  );
}

export default Photograph;