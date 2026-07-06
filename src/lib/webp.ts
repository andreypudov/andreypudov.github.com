import fs from 'node:fs';

export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Reads the pixel dimensions of a WebP file from its header.
 * Supports the lossy (VP8), lossless (VP8L) and extended (VP8X) formats.
 */
export function webpDimensions(filePath: string): ImageDimensions {
  const header = Buffer.alloc(30);
  const descriptor = fs.openSync(filePath, 'r');

  try {
    fs.readSync(descriptor, header, 0, header.length, 0);
  } finally {
    fs.closeSync(descriptor);
  }

  if (header.toString('ascii', 0, 4) !== 'RIFF' || header.toString('ascii', 8, 12) !== 'WEBP') {
    throw new Error(`Not a WebP file: ${filePath}`);
  }

  const format = header.toString('ascii', 12, 16);

  switch (format) {
    case 'VP8 ': {
      if (header[23] !== 0x9d || header[24] !== 0x01 || header[25] !== 0x2a) {
        throw new Error(`Malformed VP8 frame header: ${filePath}`);
      }
      return {
        width: header.readUInt16LE(26) & 0x3fff,
        height: header.readUInt16LE(28) & 0x3fff,
      };
    }
    case 'VP8L': {
      if (header[20] !== 0x2f) {
        throw new Error(`Malformed VP8L signature: ${filePath}`);
      }
      const bits = header.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    case 'VP8X': {
      return {
        width: header.readUIntLE(24, 3) + 1,
        height: header.readUIntLE(27, 3) + 1,
      };
    }
    default:
      throw new Error(`Unsupported WebP format "${format}": ${filePath}`);
  }
}
