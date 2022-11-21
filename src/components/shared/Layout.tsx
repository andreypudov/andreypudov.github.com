import Footer from './Footer';
import Header from './Header';
import Title from './Title';

type LayoutProps = {
  landing?: boolean;
  title?: string;
  cover?: string;
};

function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className = 'layout'>
      <Title title = { props.title } cover = { props.cover } />
      <Header />
      <main>
        { props.children }
      </main>
      <Footer landing = { props.landing } />
    </div>
  );
}

export default Layout;