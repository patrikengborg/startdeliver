export default function formatMonth(dateString) {
  let [year, month] = dateString.split("-");
  year = parseInt(year);
  month = parseInt(month) - 1; // Subtract 1 from the month to match JavaScript's month numbering (0-11).

  return new Date(year, month).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
