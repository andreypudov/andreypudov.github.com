import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  Landing?: boolean;
};

function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className = 'layout'>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer Landing = { props.Landing } />
    </div>
  );
}

export default Layout;