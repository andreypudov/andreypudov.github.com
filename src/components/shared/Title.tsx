import { Helmet } from 'react-helmet-async'
type TitleProps = {
   title?: string;
   cover?: string;
 };

function Title(props: TitleProps) {
  const title = props.title ? `${props.title} - Andrey Pudov` : 'Andrey Pudov';
  const description = !props.title ? title : 'Official Andrey Pudov website featuring Andrey Pudov news, photo albums and more.';

  return (
    <>
      <Helmet>
        <title>{ title }</title>
        <meta name='description' content={ description } />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={props.cover} />
      </Helmet>
    </>
  );
}

export default Title;