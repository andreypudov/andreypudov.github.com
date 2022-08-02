import Album from '../../models/core/performanceAlbum';

type SheetProps = {
  album: Album;
  index: number;
};

function Sheet(props: SheetProps) {
  let sheet = props.album.getSheets()[props.index];

  return (
    <figure>
      <img src    = { sheet.src }
        alt       = { `Andrey Pudov ${ props.album.getTitle() }` }
        className = {`img-responsive gallery-image${ sheet.vertical ? ' vertical' : '' }`} />
      {
        sheet.description.length !== 0 &&
          <figcaption className = {`image-caption${ sheet.vertical ? ' vertical' : '' }`}>
            { sheet.description }
          </figcaption>
      }
    </figure>
  );
}

export default Sheet;