const url = 'https://networkinfo-service-652878720259.europe-central2.run.app';

async function getNetworkInfo() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching network info:", error);
    return null;
  }
}

getNetworkInfo().then(info => {
  const ipElem = document.getElementById('ip');
  const userAgentElem = document.getElementById('user-agent');
  const cityElem = document.getElementById('city');
  const regionElem = document.getElementById('region');
  const countryElem = document.getElementById('country');
  const latitudeElem = document.getElementById('latitude');
  const longitudeElem = document.getElementById('longitude');

  if (info) {
    ipElem.textContent = info.public_ip || 'N/A';
    userAgentElem.textContent = info.user_agent || 'N/A';
    cityElem.textContent = info.city || 'N/A';
    regionElem.textContent = info.region || 'N/A';
    countryElem.textContent = info.country || 'N/A';
    latitudeElem.textContent = info.latitude || 'N/A';
    longitudeElem.textContent = info.longitude || 'N/A';
  }
});