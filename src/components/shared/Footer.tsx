import { Link } from 'react-router-dom';

type FooterProps = {
  landing?: boolean;
};

const Footer = ({ landing }: FooterProps) => {
  return (
    <footer>
      <div className = 'container'>
        { !landing && <hr className = 'footer-divider' /> }

        <ul className = 'piped-links float-end'>
          <li className = 'first piped-links-short'><Link to = '/resume/'>About</Link></li>
          <li className = 'first piped-links-long'><Link to = '/resume/'>About Andrey Pudov</Link></li>
          <li><Link to = '/contact/'>Contact</Link></li>
        </ul>

        <ul className = 'piped-links'>
          <p className = 'piped-links-long'>Copyright &#169; 2023 Andrey Pudov. All rights reserved.</p>
          <p className = 'piped-links-short'>&#169; 2023 Andrey Pudov. All rights reserved.</p>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;