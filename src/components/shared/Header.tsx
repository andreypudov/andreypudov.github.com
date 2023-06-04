import LocalizedLink from './LocalizedLink';

const Header = () => {
  return (
    <header>
      <div className = 'container'>
        <div className = 'navbar navbar-expand-md navbar-dark'>
          <div className = 'container-fluid'>
            <LocalizedLink to = '/' className = 'navbar-brand mx-auto'>Andrey Pudov</LocalizedLink>
            <button className = 'navbar-toggler' type = 'button' data-bs-toggle = 'collapse' data-bs-target = '#navbarMain' aria-controls = 'navbarMain' aria-expanded = 'false' aria-label = 'Toggle navigation'>
              <span className = 'navbar-toggler-icon'></span>
            </button>
            <div className = 'collapse navbar-collapse justify-content-sm-center' id = 'navbarMain'>
              <ul className = 'navbar-nav'>
                <li className = 'nav-item'>
                  <LocalizedLink to = '/albums/' className = 'nav-link'>Albums</LocalizedLink>
                </li>
                <li className = 'nav-item'>
                  <LocalizedLink to = '/contents/' className = 'nav-link'>Contents</LocalizedLink>
                </li>
                <li className = 'nav-item'>
                  <LocalizedLink to = '/resume/' className = 'nav-link'>Resume</LocalizedLink>
                </li>
                <li className = 'nav-item'>
                  <LocalizedLink to = '/contact/' className = 'nav-link'>Contact</LocalizedLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;