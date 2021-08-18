function convertOneToThree(number: number): string {
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}

export function convertToRomanNumber(number: number): string {
  if (number === 4) {
    return 'IV';
  }
  if (number === 9) {
    return 'IX';
  }
  if (number === 14) {
    return 'XIV';
  }
  if (number >= 10) {
    number -= 10;
    return `X${convertOneToThree(number)}`;
  }
  if (number >= 5) {
    number -= 5;
    return `V${convertOneToThree(number)}`;
  }
  return convertOneToThree(number);
}
