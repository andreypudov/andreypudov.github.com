import Album from '../../models/core/performanceAlbum';

type SheetProps = {
  album: Album;
  index: number;
};

const Sheet = (props: SheetProps) => {
  const sheet = props.album.getSheets()[props.index];
  const description = sheet.description?.getTranslation()

  return (
    <figure>
      <img src    = { sheet.src }
        alt       = { `Andrey Pudov ${ props.album.getTitle() }` }
        className = {`img-responsive gallery-image${ sheet.vertical ? ' vertical' : '' }`} />
      {
        description?.length !== 0 &&
          <figcaption className = {`image-caption${ sheet.vertical ? ' vertical' : '' }`}>
            { description }
          </figcaption>
      }
    </figure>
  );
}

export default Sheet;