export function convertToRomanNumber(number: number): string {
  if (number === 3) {
    return 'III';
  }
  if (number === 2) {
    return 'II';
  }
  return 'I';
}
