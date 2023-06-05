import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className = 'container'>
        <h1>{t('NotFound.CanNotBeFound')}</h1>
      </div>
    </Layout>
  );
}

export default NotFound;