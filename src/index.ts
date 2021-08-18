export function convertToRomanNumber(number: number): string {
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}
