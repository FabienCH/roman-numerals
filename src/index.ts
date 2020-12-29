export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';

  public convertToRoman(number: number): string {
    const divByTen = number / 10;
    const divByFiveRemainder = number % 5;
    const isPrepended = divByFiveRemainder === 4;
    const isMoreThanFour = number > 4;
    const isSuffixed = isMoreThanFour && divByFiveRemainder < 4;

    if (number === 20) {
      return this.repeatSymbolOneToThreeTimes(divByTen, this.ten);
    }

    if (isPrepended) {
      return `${this.one}${this.getSuffixedNumber(isMoreThanFour)}`;
    }

    if (isSuffixed) {
      const suffix = number - 10 > 4 ? this.five : this.repeatSymbolOneToThreeTimes(divByFiveRemainder, this.one);
      return `${this.getPrependedNumber(number < 10)}${suffix}`;
    }

    return this.repeatSymbolOneToThreeTimes(number, this.one);
  }

  private getSuffixedNumber(isMoreThanFour: boolean) {
    return isMoreThanFour ? this.ten : this.five;
  }

  private getPrependedNumber(isLessThanTen: boolean) {
    return isLessThanTen ? this.five : this.ten;
  }

  private repeatSymbolOneToThreeTimes(numberOfTimes: number, symbol: string): string {
    return new Array(numberOfTimes).fill(null).reduce((romanNumber: string, _) => {
      romanNumber += symbol;
      return romanNumber;
    }, '');
  }
}
