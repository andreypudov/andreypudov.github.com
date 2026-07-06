import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Stylesheet from '@/components/layout/Stylesheet';
import { ASSET_VERSION } from '@/lib/photographs';

export const metadata: Metadata = {
  title: 'Network - Andrey Pudov',
};

const CLIENT_ROWS = [
  { id: 'ip', label: 'Public IP' },
  { id: 'user-agent', label: 'User Agent' },
];

const LOCATION_ROWS = [
  { id: 'city', label: 'City' },
  { id: 'region', label: 'Region' },
  { id: 'country', label: 'Country' },
  { id: 'latitude', label: 'Latitude' },
  { id: 'longitude', label: 'Longitude' },
];

function Rows({ rows }: { rows: Array<{ id: string; label: string }> }) {
  return (
    <>
      {rows.map((row) => (
        <div className="row" key={row.id}>
          <span className="label">
            <strong>{row.label}</strong>
          </span>
          <span className="value" id={row.id}>---</span>
        </div>
      ))}
    </>
  );
}

export default function NetworkPage() {
  return (
    <>
      <Stylesheet name="ip" />

      <script src={`/scripts/ip.js?v=${ASSET_VERSION}`} type="module"></script>

      <Header />

      <main>
        <div className="network container">
          <h1>
            Network Information
          </h1>

          <section className="client">
            <Rows rows={CLIENT_ROWS} />
          </section>

          <section className="location">
            <Rows rows={LOCATION_ROWS} />
          </section>
        </div>
      </main>

      <Footer priority />
    </>
  );
}
