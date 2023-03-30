import Social from './../../models/core/social';

import { Helmet } from 'react-helmet-async'

type TitleProps = {
   title?: string;
   cover?: string;
   social?: Social;
 };

function Title(props: TitleProps) {
  const title = props.title ? `${props.title} - Andrey Pudov` : 'Andrey Pudov';
  const description = props.title ? props.title : 'Official Andrey Pudov website featuring Andrey Pudov news, photo albums and more.';

  return (
    <>
      <Helmet>
        <title>{ title }</title>
        <meta name='description' content = { description } />

        <meta property='og:title' content = { title}  />
        <meta property='og:description' content = { description } />
        <meta property='og:type' content = 'website' />
        <meta property='og:image' content = { `https://andreypudov.com${props.cover}` } />
        <meta property='og:site_name' content = 'Andrey Pudov' />

        { props.social?.getFirstName() && <meta property = 'profile:first_name' content = { props.social.getFirstName() } /> }
        { props.social?.getLastName() && <meta property = 'profile:last_name' content = { props.social.getLastName() } /> }
        { props.social?.getDescription() && <meta property = 'og:description' content = { props.social.getDescription() } /> }

        { props.social?.getVKUrl() && <meta property = 'og:url' content = { props.social.getVKUrl() } /> }
        { props.social?.getFacebookUrl() && <meta property = 'og:url' content = { props.social.getFacebookUrl() } /> }
        { props.social?.getInstagramUrl() && <meta property = 'og:url' content = { props.social.getInstagramUrl() } /> }
      </Helmet>
    </>
  );
}

export default Title;