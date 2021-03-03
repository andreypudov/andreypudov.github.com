import Album from '../../models/core/album';

type PhotographProps = {
  album: Album;
  index: number;
};

function Photograph(props: PhotographProps) {
  let photograph = props.album.media[props.index];

  return (
    <>
      <img src      = { photograph.src }
        alt       = { `Andrey Pudov ${ props.album.title }` }
        className = {`img-responsive gallery-image${ photograph.vertical ? ' vertical' : '' }`} />
      {
        photograph.description.length !== 0 &&
          <p className = {`image-caption${ photograph.vertical ? ' vertical' : '' }`}>
            { photograph.description }
          </p>
      }
    </>
  );
}

export default Photograph;