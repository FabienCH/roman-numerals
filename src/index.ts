export function convertToRoman(number: number): string {
  return new Array(number).fill(null).reduce((romanNumber: string, _) => {
    romanNumber += 'I';
    return romanNumber;
  }, '');
}
