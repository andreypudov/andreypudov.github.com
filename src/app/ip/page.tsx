import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import NetworkInformation from '@/components/ui/NetworkInformation';

export const metadata: Metadata = {
  title: 'Network - Andrey Pudov',
};

export default function NetworkPage() {
  return (
    <>
      <Header />

      <main>
        <NetworkInformation />
      </main>

      <Footer priority />
    </>
  );
}
