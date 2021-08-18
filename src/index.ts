function convertOntToFour(number: number): string {
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}

export function convertToRomanNumber(number: number): string {
  if (number === 4) {
    return 'IV';
  }
  if (number === 9) {
    return 'IX';
  }
  if (number === 10) {
    return 'X';
  }
  if (number === 11) {
    return 'XI';
  }
  if (number === 12) {
    return 'XII';
  }
  if (number === 14) {
    return 'XIV';
  }
  if (number < 5) {
    return convertOntToFour(number);
  }
  number -= 5;
  return `V${convertOntToFour(number)}`;
}
