async function load() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=43.86&longitude=18.41&current=temperature_2m,wind_speed_10m"
    );
    console.log("status:", res.status);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return await res.json();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

load().then((json) => console.log(json));