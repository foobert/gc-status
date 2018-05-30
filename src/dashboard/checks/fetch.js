function age(date) {
  const now = new Date();
  return (now - Date.parse(date)) / (60 * 60 * 1000);
}

export default function fetch({ stats }) {
  // we're nominal iff there was an update in the last 48 hours
  const nominal = stats.geocaches.lastUpdate.some(({ date }) => age(date) < 48);
  return { title: "Fetch", nominal };
}
