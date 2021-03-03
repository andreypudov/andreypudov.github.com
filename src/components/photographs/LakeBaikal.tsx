import Album from './../../models/photographs/lakeBaikal';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import AlbumView from '../shared/Album';
import React from 'react';

function LakeBaikal() {
  return (
    <Layout>
      <div className = 'container'>
        <Headline album = { Album } />

        <figure className = 'text-end'>
          <blockquote className = "blockquote">
            <p>«Байкал удивителен, и недаром сибиряки величают его не озером, а морем. Вода прозрачна необыкновенно, так что видно сквозь неё, как сквозь воздух; цвет у неё нежно-бирюзовый, приятный для глаза. Берега гористые, покрытые лесами; кругом дичь непроглядная, беспросветная. Изобилие медведей, соболей, диких коз и дикой всячины.»</p>
          </blockquote>
          <figcaption className = 'blockquote-footer'>
            Антон Чехов
          </figcaption>
        </figure>

        <AlbumView album = { Album } />

        <div className = 'ratio ratio-16x9 gallery-video'>
          <iframe src = '//www.youtube.com/embed/VlXZW_dqlUE?rel=0' title = 'Видеоотчет по завершению сказочного похода, прошедшего по тропе \"Путь к чистому Байкалу\".' />
        </div>
        <p className = 'video-caption'>Видеоотчет по завершению сказочного похода, прошедшего по тропе "Путь к чистому Байкалу".</p>
      </div>
    </Layout>
  );
}

export default LakeBaikal;