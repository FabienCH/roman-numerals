export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';
  private readonly fifty = 'L';
  private romanValue = '';
  private remainder: number;

  public convertToRoman(number: number): string {
    this.remainder = number;

    if (this.remainder === 39) {
      this.romanValue = 'XXXIX';
      this.remainder -= 39;
    }

    if (this.remainder >= 50) {
      this.romanValue += this.fifty;
      this.remainder = this.remainder % 50;
    }

    if (this.remainder === 9) {
      this.romanValue += `${this.one}${this.ten}`;
      this.remainder -= 9;
    }

    if (this.remainder >= 10) {
      const divByTen = this.remainder / 10;
      this.romanValue += this.repeatSymbolOneToThreeTimes(Math.trunc(divByTen), this.ten);
      this.remainder = this.remainder % 10;
    }

    if (this.remainder === 4) {
      const romanValue = this.romanValue ? this.romanValue : this.five;
      this.romanValue += `${this.one}${romanValue}`;
    }

    if (this.remainder >= 5) {
      this.romanValue += this.five;
      this.remainder = this.remainder % 5;
    }

    if (this.remainder <= 3) {
      this.romanValue += this.repeatSymbolOneToThreeTimes(this.remainder, this.one);
    }

    return this.romanValue;
  }

  private repeatSymbolOneToThreeTimes(numberOfTimes: number, symbol: string): string {
    return new Array(numberOfTimes).fill(null).reduce((romanNumber: string, _) => {
      romanNumber += symbol;
      return romanNumber;
    }, '');
  }
}
