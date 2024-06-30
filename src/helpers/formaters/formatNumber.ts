export function formatNumber(number: number): string {
  return number >= 1000000
    ? (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    : number >= 1000
    ? (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    : number.toString();
}
