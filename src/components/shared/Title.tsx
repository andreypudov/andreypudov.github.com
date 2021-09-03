import { Helmet } from 'react-helmet-async'

type TitleProps = {
   title?: string;
 };

function Title(props: TitleProps) {
  return (
    <>
      <Helmet>
         <title>{ `${(props.title) ? (props.title + ' - ') : ''} Andrey Pudov` }</title>
      </Helmet>
    </>
  );
}

export default Title;