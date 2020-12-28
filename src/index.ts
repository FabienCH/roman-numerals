function convertFromOneToFour(number: number): string {
  return new Array(number).fill(null).reduce((romanNumber: string, _) => {
    romanNumber += 'I';
    return romanNumber;
  }, '');
}

export function convertToRoman(number: number): string {
  if (number / 5 >= 1) {
    const remainder = number % 5;
    return `V${convertFromOneToFour(remainder)}`;
  }

  return convertFromOneToFour(number);
}
