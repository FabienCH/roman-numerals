function convertOneToThree(number: number): string {
  return Array.from({ length: number }, (_, i) => i).reduce((romanNumber) => (romanNumber += 'I'), '');
}

function convertOneToEight(number: number): string {
  return `V${convertOneToThree(number - 5)}`;
}

function getRegularSymbol(number: number): string {
  return number >= 5 ? convertOneToEight(number) : convertOneToThree(number);
}

function getSymbolWithLargerSuffix(number: number): string {
  return number === 4 ? 'IV' : 'IX';
}

export function convertToRomanNumber(number: number): string {
  if (number >= 10) {
    number -= 10;
    const suffix = number % 5 === 4 ? getSymbolWithLargerSuffix(number) : getRegularSymbol(number);
    return `X${suffix}`;
  }
  if (number % 5 === 4) {
    return getSymbolWithLargerSuffix(number);
  }
  if (number >= 5) {
    return convertOneToEight(number);
  }
  return convertOneToThree(number);
}
