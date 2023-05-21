import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const getPathWithoutLanguage = (pathname: string) =>
  (pathname.charAt(3) === '/') ? pathname.substring(3) : pathname;

const LanguageRedirect = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname.startsWith(`/${i18n.language}`) === false) {
    const newPathname = `/${i18n.language}${getPathWithoutLanguage(location.pathname)}`;
    navigate(newPathname);
  }

  return null;
};

export default LanguageRedirect;