export default function formatNumber(num) {
  const numFormatter = new Intl.NumberFormat("sv-SE");
  return numFormatter.format(num);
}
