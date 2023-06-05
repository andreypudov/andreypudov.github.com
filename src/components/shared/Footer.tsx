import { useTranslation } from 'react-i18next';
import LocalizedLink from './LocalizedLink';

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
          <li className = 'first piped-links-short'><LocalizedLink to = '/resume/'>{t('Footer.AboutShort')}</LocalizedLink></li>
          <li className = 'first piped-links-long'><LocalizedLink to = '/resume/'>{t('Footer.AboutLong')}</LocalizedLink></li>
          <li><LocalizedLink to = '/contact/'>{t('Footer.Contact')}</LocalizedLink></li>
        </ul>

        <ul className = 'piped-links'>
          <p className = 'piped-links-long'>{t('Footer.CopyrightLong')}</p>
          <p className = 'piped-links-short'>{t('Footer.CopyrightShort')}</p>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;