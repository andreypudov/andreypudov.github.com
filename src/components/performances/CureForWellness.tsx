import React from 'react';
import Album from './../../models/performances/cureForWellness';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout'
import VideoAlbum from '../shared/VideoAlbum';

function GravityFalls() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <VideoAlbum album = { Album } />

        <div className = 'ratio ratio-1x1'>
          <iframe src = 'https://musescore.com/user/16910421/scores/4632226/embed' title = { Album.title } />
        </div>
      </div>
    </Layout>
  );
}

export default GravityFalls;