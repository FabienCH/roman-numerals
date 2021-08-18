function convertOneToThree(number: number): string {
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}

function convertOneToEight(number: number): string {
  return `V${convertOneToThree(number - 5)}`;
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
    const suffix = number >= 5 ? convertOneToEight(number) : convertOneToThree(number);
    return `X${suffix}`;
  }
  if (number >= 5) {
    return convertOneToEight(number);
  }
  return convertOneToThree(number);
}
