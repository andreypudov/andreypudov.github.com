export type JsonGenre = 'Event' | 'Nature' | 'Portrait' | 'Street' | 'Other';
export type JsonOrientation = 'portrait' | 'landscape';

export interface JsonAlbumItem {
  /** The name of the artwork. It can be empty if the artwork doesn't have a name. */
  name: string;

  /** A description of the artwork. It can be empty if the artwork doesn't have a description. */
  description: string;

  /** The relative path to the artwork image. */
  path: string;

  /** The orientation of the artwork. */
  orientation: JsonOrientation;

  /** The date associated with the artwork, in YYYY-MM-DD format. */
  date: string;

  /** A flag indicating whether the artwork is hidden from the album. */
  hidden: boolean;
}

export interface JsonAlbum {
  /** The schema version. */
  $schema: string;

  /** The title of the album. */
  name: string;

  /** A description of the album. */
  description: string;

  /** The genre of the album. */
  genre: JsonGenre;

  /** The relative path to the artwork image. */
  cover: string;

  /** A list of artwork items included in the album. Must contain at least one item. */
  items: JsonAlbumItem[];
}