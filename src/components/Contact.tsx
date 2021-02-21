import React from 'react';
import Layout from './shared/Layout'

function Contact() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Contact</h1>

        <p>
          Thank you for visiting the site, should you have been unable to find the information that you required or wish to find out any further information, please feel free to contact me and I will get back to you as soon as possible.
        </p>

        <div className = 'card bg-dark text-white gallery-image'>
          <img src = '../albums/2020-07-19_08-04/2020-07-19_08-04_099.jpg' className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>Altay. Conquering Siberia 2.0</h5>
            <p className = 'card-text'>Sunday, July 19, 2020</p>
          </div>
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