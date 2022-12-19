import Album from '../../models/core/photographyAlbum';

type PhotographProps = {
  album: Album;
  index: number;
};

function Photograph(props: PhotographProps) {
  const photograph = props.album.getMedia()[props.index];
  const alt = photograph.description.length !== 0
    ? photograph.description
    : props.album.getTitle();

  return (
    <figure>
      <img src    = { photograph.src }
        alt       = { alt }
        className = {`img-responsive gallery-image${ photograph.vertical ? ' vertical' : '' }`} />
      {
        photograph.description.length !== 0 &&
          <figcaption className = {`image-caption${ photograph.vertical ? ' vertical' : '' }`}>
            { photograph.description }
          </figcaption>
      }
    </figure>
  );
}

export default Photograph;