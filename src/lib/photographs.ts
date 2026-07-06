import fs from 'node:fs';
import path from 'node:path';

import { webpDimensions, type ImageDimensions } from './webp';

const DATA_DIRECTORY = path.join(process.cwd(), 'data', 'photographs');
const PUBLIC_DIRECTORY = path.join(process.cwd(), 'public');

interface AlbumItem {
  name: string;
  description: string;
  path: string;
  orientation: string;
  date: string;
}

interface Album {
  name: string;
  description: string;
  genre: string;
  cover: string;
  items: AlbumItem[];
}

/**
 * A fully resolved image, ready to be rendered:
 * the full-resolution file, its lazy-loading thumbnail and both dimensions.
 */
export interface Photograph {
  name: string;
  description: string;
  src: string;
  width: number;
  height: number;
  thumbnailSrc: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
}

let metadataIndex: Map<string, AlbumItem> | undefined;
const dimensionsCache = new Map<string, ImageDimensions>();

/** Indexes every album item in /data/photographs by image file name. */
function loadMetadataIndex(): Map<string, AlbumItem> {
  if (metadataIndex) {
    return metadataIndex;
  }

  metadataIndex = new Map();

  for (const entry of fs.readdirSync(DATA_DIRECTORY)) {
    if (!entry.endsWith('.json')) {
      continue;
    }

    const album: Album = JSON.parse(fs.readFileSync(path.join(DATA_DIRECTORY, entry), 'utf-8'));
    for (const item of album.items) {
      metadataIndex.set(path.basename(item.path), item);
    }
  }

  return metadataIndex;
}

function dimensions(mediaSrc: string): ImageDimensions {
  let cached = dimensionsCache.get(mediaSrc);
  if (!cached) {
    cached = webpDimensions(path.join(PUBLIC_DIRECTORY, mediaSrc));
    dimensionsCache.set(mediaSrc, cached);
  }
  return cached;
}

/**
 * Derives the thumbnail location for a media path. Photographs have mirrored
 * thumbnails under /media/thumbnails, other images keep them alongside.
 */
function thumbnailPath(mediaPath: string): string {
  const withSuffix = mediaPath.replace(/\.webp$/, '_300.webp');

  return withSuffix.startsWith('/photographs/')
    ? `/thumbnails${withSuffix.slice('/photographs'.length)}`
    : withSuffix;
}

function resolve(mediaPath: string, name: string, description: string): Photograph {
  const src = `/media${mediaPath}`;
  const thumbnailSrc = `/media${thumbnailPath(mediaPath)}`;

  return {
    name,
    description,
    src,
    ...dimensions(src),
    thumbnailSrc,
    thumbnailWidth: dimensions(thumbnailSrc).width,
    thumbnailHeight: dimensions(thumbnailSrc).height,
  };
}

/**
 * Resolves an image file name (e.g. "2025-12-06_015.webp") against the album
 * metadata, the same way the dataset directives of the previous template
 * engine did. Throws when the file is not described in /data/photographs.
 */
export function getPhotograph(fileName: string): Photograph {
  const item = loadMetadataIndex().get(fileName);
  if (!item) {
    throw new Error(`No album metadata found for photograph "${fileName}"`);
  }

  return resolve(item.path, item.name, item.description);
}

export function getPhotographs(fileNames: string[]): Photograph[] {
  return fileNames.map(getPhotograph);
}

/**
 * Resolves an image that is not part of the photograph albums
 * (e.g. time-lapse covers or curated footer images) with an explicit caption.
 */
export function getImage(mediaPath: string, description: string, name = ''): Photograph {
  return resolve(mediaPath, name, description);
}
