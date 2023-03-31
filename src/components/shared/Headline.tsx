import Album from './../../models/core/photographyAlbum';

type HeadlineProps = {
  album: Album;
};

const Headline = (props: HeadlineProps) => {
  return (
    <h1>
      { props.album.getTitle() }
      <small className = 'text-muted'>{ props.album.getDateString() }</small>
    </h1>
  );
}

export default Headline;