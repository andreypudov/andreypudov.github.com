import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type FooterProps = {
  landing?: boolean;
};

const Footer = ({ landing }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className = 'container'>
        { !landing && <hr className = 'footer-divider' /> }

        <ul className = 'piped-links float-end'>
          <li className = 'first piped-links-short'><Link to = '/resume/'>{t('Footer.AboutShort', 'About')}</Link></li>
          <li className = 'first piped-links-long'><Link to = '/resume/'>{t('Footer.AboutLong', 'About Andrey Pudov')}</Link></li>
          <li><Link to = '/contact/'>{t('Footer.Contact', 'Contact')}</Link></li>
        </ul>

        <ul className = 'piped-links'>
          <p className = 'piped-links-long'>{t('Footer.CopyrightLong', 'Copyright © 2025 Andrey Pudov. All rights reserved.')}</p>
          <p className = 'piped-links-short'>{t('Footer.CopyrightShort', '© 2025 Andrey Pudov. All rights reserved.')}</p>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;