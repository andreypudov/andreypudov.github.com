import Album from "./core/photographyAlbum";
import Genre from "./core/genre";
import Photograph from "./core/photograph";
import Page from "./core/page";

import { JsonAlbum, JsonAlbumItem, JsonGenre, JsonOrientation } from "./types";

import Pages from "./pages";

import { writeFileSync } from 'fs';
import PageType from "./core/pageType";

const mapGenre = (genre: Genre): JsonGenre => {
  switch (genre) {
    case Genre.Event:
      return 'Event';
    case Genre.Nature:
        return 'Nature';
    case Genre.Portrait:
        return 'Portrait';
    case Genre.Street:
        return 'Street';
    default:
        return 'Other';
  }
};

const mapOrientation = (photo: Photograph): JsonOrientation => {
  return photo.vertical ? 'portrait' : 'landscape';
};

function parseDateFromFilename(filepath: string): string | undefined {
    const filename = filepath.split('/').pop();
    if (!filename) {
        return "";
    }

    const nameWithoutExt = filename.split('.')[0].replace('_large', '').replace(/_\d{3}$/, '');
    if (!nameWithoutExt) {
        return "";
    }

    // Pattern 1: YYYY-MM-DD_YYYY_MM-DD (multi-year range)
    // Example: 2020-12-01_2021_01-04
    const multiYearMatch = nameWithoutExt.match(/^(\d{4}-\d{2}-\d{2})_(\d{4}_\d{2}-\d{2}).*$/);
    if (multiYearMatch) {
        return multiYearMatch[2];
    }

    // Pattern 2: YYYY-MM-DD_MM-DD (multi-month range)
    // Example: 2020-07-01_08-04
    const monthRangeMatch = nameWithoutExt.match(/^(\d{4})-\d{2}-\d{2}_(\d{2}-\d{2}).*$/);
    if (monthRangeMatch) {
        const yearMonth = monthRangeMatch[1];
        const lastMonthDay = monthRangeMatch[2];
        return `${yearMonth}-${lastMonthDay}`;
    }

    // Pattern 3: YYYY-MM-DD_DD (multi-day range)
    // Example: 2022-10-16_02
    const dayRangeMatch = nameWithoutExt.match(/^(\d{4}-\d{2})-\d{2}_(\d{2}).*$/);
    if (dayRangeMatch) {
        const yearMonth = dayRangeMatch[1];
        const lastDay = dayRangeMatch[2];
        return `${yearMonth}-${lastDay}`;
    }

    // Pattern 4: YYYY-MM-DD (single date)
    // Example: 2018-08-18
    const singleDateMatch = nameWithoutExt.match(/^(\d{4}-\d{2}-\d{2}).*$/);
    if (singleDateMatch) {
        return singleDateMatch[1];
    }

    return undefined;
}

const mapAlbumItem = (media: Photograph, albumDate: Date): JsonAlbumItem => {
  return {
    name: media.description?.getKey() ?? "",
    description: "",
    path: media.src,
    orientation: mapOrientation(media),
    date: parseDateFromFilename(media.src) ?? albumDate.toISOString().split('T')[0],
    hidden: media.hidden ?? false,
  };
};

const mapAlbumItems = (album: Album): JsonAlbumItem[] =>
  album.getMedia().map((media) => mapAlbumItem(media, album.getDate()));

const createJson = async (album: Album) => {
  const json: JsonAlbum = {
    $schema: "../schemas/album.schema.json",
    name: album.getTitle().getKey(),
    description: "",
    genre: mapGenre(album.getGenre()),
    cover: album.getCover().src,
    items: mapAlbumItems(album)
  };

  return json;
};

const getDirectoryName = (page: Page): string => {
  switch (page.getType()) {
    case PageType.Article:
      return "photographs";
    case PageType.Photographs:
      return "photographs";
    case PageType.Drawings:
      return "drawings";
    case PageType.Performances:
      return "performances";
    case PageType.TimeLapses:
      return "timelapses";
    default:
      throw new Error(`Unknown page type: ${page.getType()}`);
  }
}

const getFileName = (key: string, page: Page): string => {
  const directory = getDirectoryName(page);
  return `../${directory}/${key}.json`;
};

const lowercaseFirstLetter = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1);

const migration = async () => {
  console.log("Starting migration...");

  const pages = Object.entries(Pages);

  for (const [key, page] of pages) {
    const album = page.getAlbum();

    console.log(`Processing album: ${album.getTitle().getKey()}`);
    const json = await createJson(album);
    const fileName = getFileName(lowercaseFirstLetter(key), page);

    writeFileSync(fileName, JSON.stringify(json, null, 2), 'utf-8');
  }

  console.log("Migration completed.");
}

migration();