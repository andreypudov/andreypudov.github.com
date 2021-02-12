import { Link } from 'react-router-dom';

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
                <Link to = '/' className = 'navbar-brand'>Andrey Pudov</Link>
              </div>
              <div className = 'navbar-collapse collapse'>
                <ul className = 'nav navbar-nav'>
                  <li><Link to = '/albums'>Albums</Link></li>
                  <li><Link to = '/contents'>Contents</Link></li>
                  <li><Link to = '/resume'>Resume</Link></li>
                  <li><Link to = '/contact'>Contact</Link></li>
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