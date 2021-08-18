export function convertToRomanNumber(number: number): string {
  if (number === 9) {
    return 'VIIII';
  }
  if (number === 8) {
    return 'VIII';
  }
  if (number === 7) {
    return 'VII';
  }
  if (number === 6) {
    return 'VI';
  }
  if (number === 5) {
    return 'V';
  }
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}
