import React from 'react';
import Album from './../../models/photographs/altay';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout'
import PhotographAlbum from '../shared/PhotographAlbum';

function Altay() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <PhotographAlbum album = { Album } />
      </div>
    </Layout>
  );
}

export default Altay;