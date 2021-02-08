import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div id='footer'>
      <div className = 'container marketing'>
        <footer>
          <ul className = 'piped-links pull-right'>
            <li className = 'first piped-links-short'><NavLink to = '/resume'>About</NavLink></li>
            <li className = 'first piped-links-long'><NavLink to = '/resume'>About Andrey Pudov</NavLink></li>
            <li><NavLink to = '/contact'>Contact</NavLink></li>
          </ul>

          <ul className = 'piped-links'>
            <p className = 'piped-links-long'>Copyright &#169; 2021 Andrey Pudov. All rights reserved.</p>
          </ul>

          <p className = 'piped-links-short'>&#169; 2021 Andrey Pudov. All rights reserved.</p>
        </footer>

        <script src = 'libraries/jquery/jquery-1.11.3.min.js'></script>

        <script src = 'libraries/bootstrap/js/collapse.js'></script>
        <script src = 'libraries/bootstrap/js/dropdown.js'></script>
        <script src = 'libraries/bootstrap/js/transition.js'></script>

        <script src = 'libraries/bootstrap/js/carousel.js'></script>
        <script src = 'scripts/init.js'></script>
      </div>
    </div>
  );
}

export default Footer;