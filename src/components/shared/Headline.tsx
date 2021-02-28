import Album from './../../models/core/album';

type HeadlineProps = {
  album: Album;
};

function Headline(props: HeadlineProps) {
  return (
    <h1>
      { props.album.title }
      <small className = 'text-muted'>{ props.album.getDate() }</small>
    </h1>
  );
}

export default Headline;