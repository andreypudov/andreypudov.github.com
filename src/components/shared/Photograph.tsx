import Album from '../../models/core/photographyAlbum';

type PhotographProps = {
  album: Album;
  index: number;
};

function Photograph(props: PhotographProps) {
  let photograph = props.album.getMedia()[props.index];

  return (
    <figure>
      <img src    = { photograph.src }
        alt       = { `Andrey Pudov ${ props.album.getTitle() }` }
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