import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout title = { 'Contact' }>
      <div className = 'container'>
        <h1>{t('Contact.Contact')}</h1>

        <p>
          {t('Contact.ThankYou')}
        </p>

        <address>
          <strong>{t('Contact.AndreyPudov')}</strong><br />
          <a href='mailto:javascript(0);'>mail@andreypudov.com</a>
        </address>
      </div>
    </Layout>
  );
}

export default Contact;