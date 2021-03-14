import Album from './../../models/performances/cureForWellness';
import AlbumView from '../shared/Album';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import React from 'react';

function GravityFalls() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <AlbumView album = { Album } />

        <div className = 'ratio ratio-1x1'>
          <iframe src = 'https://drive.google.com/file/d/1kxcA8UbhrxkOAM50GyKFqZa6QCywoVYm/preview' title = { Album.getTitle() } />
        </div>
      </div>
    </Layout>
  );
}

export default GravityFalls;