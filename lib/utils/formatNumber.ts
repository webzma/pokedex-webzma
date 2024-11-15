export default function formatNumber(number: number) {
  if (number < 10) {
    return `#00${number}`;
  }

  if (number < 10) {
    return `#0${number}`;
  }

  if (number >= 100) {
    return `#${number}`;
  }
}
