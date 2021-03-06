function age(date) {
  const now = new Date();
  return (now - Date.parse(date)) / (60 * 60 * 1000);
}

export default function discovery({ stats }) {
  const nominal = stats.logs.every(({ lastUpdate }) => age(lastUpdate) < 48);
  return { title: "Logs", nominal };
}
