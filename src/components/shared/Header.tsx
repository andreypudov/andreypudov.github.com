import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className = 'container'>
        <div className = 'navbar navbar-expand-md navbar-dark'>
          <div className = 'container-fluid'>
            <Link to = '/' className = 'navbar-brand mx-auto'>Andrey Pudov</Link>
            <button className = 'navbar-toggler' type = 'button' data-bs-toggle = 'collapse' data-bs-target = '#navbarMain' aria-controls = 'navbarMain' aria-expanded = 'false' aria-label = 'Toggle navigation'>
              <span className = 'navbar-toggler-icon'></span>
            </button>
            <div className = 'collapse navbar-collapse justify-content-sm-center' id = 'navbarMain'>
              <ul className = 'navbar-nav'>
                <li className = 'nav-item'>
                  <Link to = '/albums/' className = 'nav-link'>Albums</Link>
                </li>
                <li className = 'nav-item'>
                  <Link to = '/contents/' className = 'nav-link'>Contents</Link>
                </li>
                <li className = 'nav-item'>
                  <Link to = '/resume/' className = 'nav-link'>Resume</Link>
                </li>
                <li className = 'nav-item'>
                  <Link to = '/contact/' className = 'nav-link'>Contact</Link>
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