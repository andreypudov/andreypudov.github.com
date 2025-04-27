import Footer from './Footer';
import Header from './Header';
import Title from './Title';
import Social from './../../models/core/social';

type LayoutProps = {
  landing?: boolean;
  title?: string;
  cover?: string;
  social?: Social;
};

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  return (
    <div className = 'layout'>
      <Title title = { props.title } cover = { props.cover } social = { props.social } />
      <Header />
      <main>
        { props.children }
      </main>
      <Footer landing = { props.landing } />
    </div>
  );
}

export default Layout;