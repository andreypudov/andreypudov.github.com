'use client';

import { useEffect, useState } from 'react';

const NETWORK_SERVICE_URL = 'https://networkinfo-service-652878720259.europe-central2.run.app';

interface NetworkInfo {
  public_ip?: string;
  user_agent?: string;
  city?: string;
  region?: string;
  country?: string;
  latitude?: string | number;
  longitude?: string | number;
}

const CLIENT_ROWS = [
  { id: 'ip', label: 'Public IP', field: 'public_ip' },
  { id: 'user-agent', label: 'User Agent', field: 'user_agent' },
] as const;

const LOCATION_ROWS = [
  { id: 'city', label: 'City', field: 'city' },
  { id: 'region', label: 'Region', field: 'region' },
  { id: 'country', label: 'Country', field: 'country' },
  { id: 'latitude', label: 'Latitude', field: 'latitude' },
  { id: 'longitude', label: 'Longitude', field: 'longitude' },
] as const;

type Row = (typeof CLIENT_ROWS | typeof LOCATION_ROWS)[number];

async function getNetworkInfo(): Promise<NetworkInfo | null> {
  try {
    const response = await fetch(NETWORK_SERVICE_URL, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching network info:', error);
    return null;
  }
}

/** The visitor's public IP address and approximate location. */
export default function NetworkInformation() {
  const [info, setInfo] = useState<NetworkInfo | null>();

  useEffect(() => {
    let cancelled = false;

    getNetworkInfo().then((result) => {
      if (!cancelled) {
        setInfo(result);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const rows = (definitions: readonly Row[]) =>
    definitions.map((row) => (
      <div className="row" key={row.id}>
        <span className="label">
          <strong>{row.label}</strong>
        </span>
        <span className="value" id={row.id}>{info ? info[row.field] || 'N/A' : '---'}</span>
      </div>
    ));

  return (
    <div className="network container">
      <h1>
        Network Information
      </h1>

      <section className="client">
        {rows(CLIENT_ROWS)}
      </section>

      <section className="location">
        {rows(LOCATION_ROWS)}
      </section>
    </div>
  );
}
