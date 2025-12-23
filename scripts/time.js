const url = 'https://time-service-652878720259.europe-central2.run.app';

async function sampleServerOffset() {
  const clientSend = Date.now();
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
    cache: 'no-store',
  });

  const clientReceive = Date.now();
  if (!response.ok) {
    throw new Error(`Time response was not ok: ${response.statusText}`);
  }

  const data = await response.json();
  if (typeof data.unix !== 'number') {
    throw new Error('Invalid time format from time service');
  }

  const serverAtSend = data.unix / 1e6;
  const offset = serverAtSend - ((clientSend + clientReceive) / 2);
  const rtt = clientReceive - clientSend;

  return { offset, rtt };
}

async function getServerOffset() {
  const samplesCount = 3;
  const samples = [];

  for (let i = 0; i < samplesCount; i += 1) {
    try {
      const sample = await sampleServerOffset();
      samples.push(sample);
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

async function startClock() {
  const timeElement = document.getElementById('time');

  const newYorkTimeElement = document.getElementById('newyork-time');
  const barcelonaTimeElement = document.getElementById('barcelona-time');
  const cheboksaryTimeElement = document.getElementById('cheboksary-time');
  const tainanTimeElement = document.getElementById('tainan-time');

  if (!timeElement || !newYorkTimeElement || !barcelonaTimeElement || !cheboksaryTimeElement || !tainanTimeElement) {
    return;
  }

  try {
    const offset = await getServerOffset();

    function render() {
      const now = new Date(Date.now() + offset);
      const cityOptions = { hour: '2-digit', minute: '2-digit' };

      timeElement.textContent = now.toLocaleTimeString().toLowerCase();

      newYorkTimeElement.textContent = now.toLocaleTimeString(undefined, { ...cityOptions, timeZone: 'America/New_York' }).toLowerCase();
      barcelonaTimeElement.textContent = now.toLocaleTimeString(undefined, { ...cityOptions, timeZone: 'Europe/Madrid' }).toLowerCase();
      cheboksaryTimeElement.textContent = now.toLocaleTimeString(undefined, { ...cityOptions, timeZone: 'Europe/Moscow' }).toLowerCase();
      tainanTimeElement.textContent = now.toLocaleTimeString(undefined, { ...cityOptions, timeZone: 'Asia/Taipei' }).toLowerCase();
    }

    render();

    const alignAndStart = () => {
      const clientNow = Date.now();
      const serverNow = clientNow + offset;
      const msToNextSecond = 1000 - (serverNow % 1000);

      setTimeout(() => {
        render();
        setInterval(render, 1000);
      }, msToNextSecond);
    };

    alignAndStart();

  } catch (err) {
    console.error('Error syncing time:', err);
    timeElement.textContent = 'N/A';
  }
}

startClock();