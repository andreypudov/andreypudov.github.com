import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div id = 'header'>
      <div className = 'navbar-wrapper'>
        <div className = 'container'>
          <div className = 'navbar navbar-static-top' role='navigation'>
            <div className = 'container'>
              <div className = 'navbar-header'>
                <button type = 'button' className = 'navbar-toggle' data-toggle = 'collapse' data-target = '.navbar-collapse'>
                  <span className = 'sr-only'>Toggle navigation</span>
                  <span className = 'icon-bar'></span>
                  <span className = 'icon-bar'></span>
                  <span className = 'icon-bar'></span>
                </button>
                <NavLink to = '/' className = 'navbar-brand'>Andrey Pudov</NavLink>
              </div>
              <div className = 'navbar-collapse collapse'>
                <ul className = 'nav navbar-nav'>
                  <li><NavLink to = '/contents'>Albums</NavLink></li>
                  <li><NavLink to = '/contents'>Contents</NavLink></li>
                  <li><NavLink to = '/resume'>Resume</NavLink></li>
                  <li><NavLink to = '/contact'>Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;