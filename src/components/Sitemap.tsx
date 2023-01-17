import Layout from './shared/Layout'
import Media from './../models/core/media';
import Page from './../models/core/page';
import { Articles, Photographs, Drawings, TimeLapses, Performances } from './../models/pages';

const domain = 'https://andreypudov.com';
const urlEntry = (page: Page, timestamp: string) => `<url>
    <loc>${domain}${ page.getRoute() }</loc>
    ${ page.getAlbum().getMedia().map((media: Media) =>  imageEntry(page.getAlbum().getTitle(), media)).join("").trim() }
    <lastmod>${ timestamp }</lastmod>
  </url>
  `;
const imageEntry = (pageTitle: string, media: Media) => `<image:image>
      <image:loc>${domain}${ media.src }</image:loc>
      ${ imageDescription(pageTitle, media) }
    </image:image>
    `;
const imageDescription = (pageTitle: string, media: Media) =>
 media.description.length !== 0
    ? `<image:caption>${encodeXml(media.description.replaceAll('\n', ' '))}</image:caption>`
    : `<image:title>${encodeXml(pageTitle)}</image:title>`;
const encodeXml = (xml: string) => xml
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const generateSitemap = (timestamp: string) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://andreypudov.com/</loc>
    <lastmod>${ timestamp }</lastmod>
  </url>
  <url>
    <loc>https://andreypudov.com/albums/</loc>
    <lastmod>${ timestamp }</lastmod>
  </url>
  <url>
    <loc>https://andreypudov.com/contents/</loc>
    <lastmod>${ timestamp }</lastmod>
  </url>
  <url>
    <loc>https://andreypudov.com/resume/</loc>
    <lastmod>${ timestamp }</lastmod>
  </url>
  <url>
    <loc>https://andreypudov.com/contact/</loc>
    <lastmod>${ timestamp }</lastmod>
  </url>
  ${ Articles.map((page: Page) => urlEntry(page, timestamp)).join("").trim() }
  ${ Photographs.map((page: Page) => urlEntry(page, timestamp)).join('').trim() }
  ${ Drawings.map((page: Page) => urlEntry(page, timestamp)).join('').trim() }
  ${ TimeLapses.map((page: Page) => urlEntry(page, timestamp)).join('').trim() }
  ${ Performances.map((page: Page) => urlEntry(page, timestamp)).join('').trim() }
</urlset>`;
}

function Sitemap() {
  const timestamp = (new Date()).toISOString();
  return (
    <Layout title = { 'Sitemap' }>
      <div className = 'container'>
        <h1>Sitemap</h1>

        <textarea style={ { width: '100%', height: '640px', border: '1px solid grey' } }>
          { generateSitemap(timestamp) }
        </textarea>
      </div>
    </Layout>
  );
}

export default Sitemap;