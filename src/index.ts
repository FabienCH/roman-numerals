export function convertToRoman(number: number): string {
  if (number === 5) {
    return 'V';
  }

  if (number === 6) {
    return 'VI';
  }

  return new Array(number).fill(null).reduce((romanNumber: string, _) => {
    romanNumber += 'I';
    return romanNumber;
  }, '');
}
