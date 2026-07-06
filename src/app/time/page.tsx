import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Stylesheet from '@/components/layout/Stylesheet';
import { ASSET_VERSION } from '@/lib/photographs';

export const metadata: Metadata = {
  title: 'Time - Andrey Pudov',
};

const CITIES = [
  { id: 'newyork', name: 'New York' },
  { id: 'barcelona', name: 'Barcelona' },
  { id: 'cheboksary', name: 'Cheboksary' },
  { id: 'tainan', name: 'Tainan' },
];

export default function TimePage() {
  return (
    <>
      <Stylesheet name="time" />

      <script src={`/scripts/time.js?v=${ASSET_VERSION}`} type="module"></script>

      <Header />

      <main>
        <div className="times container-fluid">
          <section className="current-time">
            <pre id="time"></pre>
          </section>

          <section className="world-times">
            {CITIES.map((city) => (
              <div className={`${city.id} city`} key={city.id}>
                <div className="name">
                  <strong>{city.name}</strong>
                </div>
                <pre className="time" id={`${city.id}-time`}></pre>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer priority />
    </>
  );
}
