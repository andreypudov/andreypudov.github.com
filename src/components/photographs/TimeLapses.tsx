import React from 'react';
import Album from './../../models/videos/timeLapses';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout'
import VideoAlbum from '../shared/VideoAlbum';

function TimeLapses() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />
        <VideoAlbum album = { Album } />
      </div>
    </Layout>
  );
}

export default TimeLapses;