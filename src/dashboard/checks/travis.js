export default function travis(title, key) {
  return data => ({
    title,
    nominal: data[key]
  });
}
