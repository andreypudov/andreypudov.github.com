import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import WorldClock from '@/components/ui/WorldClock';

export const metadata: Metadata = {
  title: 'Time - Andrey Pudov',
};

export default function TimePage() {
  return (
    <>
      <Header />

      <main>
        <WorldClock />
      </main>

      <Footer priority />
    </>
  );
}
