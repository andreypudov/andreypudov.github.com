import Album from './../../models/photographs/ekaterinburg';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import React from 'react';

function Ekaterinburg() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />
      </div>
    </Layout>
  );
}

export default Ekaterinburg;