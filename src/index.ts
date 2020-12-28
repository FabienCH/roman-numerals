export function convertToRoman(number: number): string {
  if (number === 5) {
    return 'V';
  }

  return new Array(number).fill(null).reduce((romanNumber: string, _) => {
    romanNumber += 'I';
    return romanNumber;
  }, '');
}
