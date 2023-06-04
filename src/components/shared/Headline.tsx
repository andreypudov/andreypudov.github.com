import Album from './../../models/core/photographyAlbum';

type HeadlineProps = {
  album: Album;
  locale: string;
};

const Headline = (props: HeadlineProps) => {
  return (
    <h1>
      { props.album.getTitle() }
      <small className = 'text-muted'>{ props.album.getDateString(props.locale) }</small>
    </h1>
  );
}

export default Headline;