import React from 'react';
import Album from './../../models/photographs/ekaterinburg';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout'
import PhotographAlbum from '../shared/PhotographAlbum';

function Ekaterinburg() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <PhotographAlbum album = { Album } />
      </div>
    </Layout>
  );
}

export default Ekaterinburg;