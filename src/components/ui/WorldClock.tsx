'use client';

import { useEffect, useState } from 'react';

const TIME_SERVICE_URL = 'https://time-service-652878720259.europe-central2.run.app';

const SAMPLE_COUNT = 3;

const CITIES = [
  { id: 'newyork', name: 'New York', timeZone: 'America/New_York' },
  { id: 'barcelona', name: 'Barcelona', timeZone: 'Europe/Madrid' },
  { id: 'cheboksary', name: 'Cheboksary', timeZone: 'Europe/Moscow' },
  { id: 'tainan', name: 'Tainan', timeZone: 'Asia/Taipei' },
];

interface OffsetSample {
  /** Difference between the server clock and the local clock, in milliseconds. */
  offset: number;
  /** Round-trip time of the sample request, in milliseconds. */
  rtt: number;
}

async function sampleServerOffset(): Promise<OffsetSample> {
  const clientSend = Date.now();
  const response = await fetch(TIME_SERVICE_URL, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });

  const clientReceive = Date.now();
  if (!response.ok) {
    throw new Error(`Time response was not ok: ${response.statusText}`);
  }

  const data: { unix?: unknown } = await response.json();
  if (typeof data.unix !== 'number') {
    throw new Error('Invalid time format from time service');
  }

  const serverAtSend = data.unix / 1e6;
  const offset = serverAtSend - (clientSend + clientReceive) / 2;
  const rtt = clientReceive - clientSend;

  return { offset, rtt };
}

/** Estimates the server clock offset from the sample with the lowest latency. */
async function getServerOffset(): Promise<number> {
  const samples: OffsetSample[] = [];

  for (let i = 0; i < SAMPLE_COUNT; i += 1) {
    try {
      samples.push(await sampleServerOffset());
    } catch (error) {
      console.error('Error sampling server time:', error);
    }
  }

  if (samples.length === 0) {
    throw new Error('Unable to sample server time');
  }

  samples.sort((a, b) => a.rtt - b.rtt);

  return samples[0].offset;
}

/**
 * The current server time and a set of world clocks, synchronized against
 * the time service and ticking on server-second boundaries.
 */
export default function WorldClock() {
  const [now, setNow] = useState<Date>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    getServerOffset()
      .then((offset) => {
        if (cancelled) {
          return;
        }

        const render = () => setNow(new Date(Date.now() + offset));
        render();

        // Align updates to the server clock's second boundary.
        const msToNextSecond = 1000 - ((Date.now() + offset) % 1000);
        timeout = setTimeout(() => {
          render();
          interval = setInterval(render, 1000);
        }, msToNextSecond);
      })
      .catch((error) => {
        console.error('Error syncing time:', error);
        if (!cancelled) {
          setFailed(true);
        }
      });

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const cityTime = (timeZone: string) =>
    now
      ?.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', timeZone })
      .toLowerCase();

  return (
    <div className="times container-fluid">
      <section className="current-time">
        <pre id="time">{failed ? 'N/A' : now?.toLocaleTimeString().toLowerCase()}</pre>
      </section>

      <section className="world-times">
        {CITIES.map((city) => (
          <div className={`${city.id} city`} key={city.id}>
            <div className="name">
              <strong>{city.name}</strong>
            </div>
            <pre className="time" id={`${city.id}-time`}>{cityTime(city.timeZone)}</pre>
          </div>
        ))}
      </section>
    </div>
  );
}
