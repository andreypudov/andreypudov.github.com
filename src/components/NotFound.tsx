import React from 'react';
import Layout from './shared/Layout'

function NotFound() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Hmm, the page you’re looking for can’t be found.</h1>
      </div>
    </Layout>
  );
}

export default NotFound;