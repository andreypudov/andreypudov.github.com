import Header from './Header';
import Footer from './Footer';

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="layout">
      <Header />
      { children }
      <Footer />
    </div>
  );
}

export default Layout;