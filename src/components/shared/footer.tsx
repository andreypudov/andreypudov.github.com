import { Link } from 'react-router-dom';

type FooterProps = {
  Landing?: boolean;
};

function Footer({ Landing }: FooterProps) {
  return (
    <footer>
      <div className = 'container'>
        { !Landing && <hr className = 'footer-divider' /> }

        <ul className = 'piped-links pull-right'>
          <li className = 'first piped-links-short'><Link to = '/resume'>About</Link></li>
          <li className = 'first piped-links-long'><Link to = '/resume'>About Andrey Pudov</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
        </ul>

        <ul className = 'piped-links'>
          <p className = 'piped-links-long'>Copyright &#169; 2021 Andrey Pudov. All rights reserved.</p>
        </ul>

        <p className = 'piped-links-short'>&#169; 2021 Andrey Pudov. All rights reserved.</p>
      </div>

      <script src = 'libraries/jquery/jquery-1.11.3.min.js'></script>

      <script src = 'libraries/bootstrap/js/collapse.js'></script>
      <script src = 'libraries/bootstrap/js/dropdown.js'></script>
      <script src = 'libraries/bootstrap/js/transition.js'></script>

      <script src = 'libraries/bootstrap/js/carousel.js'></script>
      <script src = 'scripts/init.js'></script>
    </footer>
  );
}

export default Footer;