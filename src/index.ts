function convertOntToFour(number: number): string {
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}

export function convertToRomanNumber(number: number): string {
  if (number < 5) {
    return convertOntToFour(number);
  }
  number -= 5;
  return `V${convertOntToFour(number)}`;
}
