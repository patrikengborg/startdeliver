export default function formatCurrency(value) {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
  });

  return currencyFormatter.format(value);
}
