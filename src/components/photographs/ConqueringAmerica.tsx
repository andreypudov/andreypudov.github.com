import Album from './../../models/photographs/conqueringAmerica';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import React from 'react';

function ConqueringAmerica() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />
      </div>
    </Layout>
  );
}

export default ConqueringAmerica;