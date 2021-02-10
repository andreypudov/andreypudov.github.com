import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  Landing?: boolean;
};

function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="layout">
      <Header />
      <div id='content'>
        { props.children }
      </div>
      <Footer Landing = { props.Landing } />
    </div>
  );
}

export default Layout;