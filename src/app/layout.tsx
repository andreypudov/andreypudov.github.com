import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Loader from '@/components/layout/Loader';
import Stylesheet from '@/components/layout/Stylesheet';
import { ASSET_VERSION } from '@/lib/photographs';

export const metadata: Metadata = {
  title: 'Home - Andrey Pudov',
  description:
    'Official website of Russian Landscape Photographer Andrey Pudov. Welcome to the portfolio of stunning landscape photography.',
  icons: {
    icon: { url: `/media/images/favicon.png?v=${ASSET_VERSION}`, type: 'image/png' },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preload" href={`/styles/layout.css?v=${ASSET_VERSION}`} as="style" />

        <Stylesheet name="layout" />
        <Stylesheet name="lazy-image" />

        <script src={`/scripts/analytics.js?v=${ASSET_VERSION}`} type="module"></script>

        <Loader />
        {children}
      </body>
    </html>
  );
}
