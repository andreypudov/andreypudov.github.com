import React from 'react';
import Layout from './shared/Layout'

function Contact() {
  return (
    <Layout>
      <div className = 'container'>
        <div className = 'page-header'>
          <h1>Contact<small>Thank you for visiting the site, should you have been unable to find the information that you required or wish to find out any further information, please feel free to contact me and I will get back to you as soon as possible.</small></h1>
        </div>

        <address>
          <strong>Andrey Pudov</strong><br />
          <a href='mailto:javascript(0);'>mail@andreypudov.com</a>
        </address>
      </div>
    </Layout>
  );
}

export default Contact;