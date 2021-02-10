import Header from './Header';
import Footer from './Footer';

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="layout">
      <Header />
      <div id='content'>
        { children }
      </div>
      <Footer />
    </div>
  );
}

export default Layout;