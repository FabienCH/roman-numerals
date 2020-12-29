export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';
  private romanValue = '';
  private remainder: number;

  public convertToRoman(number: number): string {
    this.remainder = number;

    if (number >= 10) {
      const divByTen = number / 10;
      this.romanValue += this.repeatSymbolOneToThreeTimes(Math.trunc(divByTen), this.ten);
      this.remainder = number % 10;
    }

    const divByFiveRemainder = this.remainder % 5;
    const isPrepended = divByFiveRemainder === 4;
    const isMoreThanFour = this.remainder > 4;
    const isSuffixed = isMoreThanFour && divByFiveRemainder < 4;

    if (isPrepended) {
      this.romanValue += `${this.one}${this.getSuffixedNumber(isMoreThanFour)}`;
    }

    if (isSuffixed) {
      const suffix = this.remainder - 10 > 4 ? this.five : this.repeatSymbolOneToThreeTimes(divByFiveRemainder, this.one);
      this.romanValue += `${this.getPrependedNumber(this.remainder < 10)}${suffix}`;
    }

    if (this.remainder <= 3) {
      this.romanValue += this.repeatSymbolOneToThreeTimes(this.remainder, this.one);
    }

    return this.romanValue;
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
