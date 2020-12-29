export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';
  private readonly fifty = 'L';
  private romanValue = '';
  private remainder: number;

  public convertToRoman(number: number): string {
    this.remainder = number;

    while (this.remainder >= 50) {
      this.romanValue += this.fifty;
      this.remainder -= 50;
      this.prependNumber(9, this.one, this.ten);
      this.prependNumber(4, this.one, this.five);
    }

    this.prependNumber(40, this.ten, this.fifty);
    this.prependNumber(9, this.one, this.ten);

    while (this.remainder >= 10) {
      this.romanValue += this.ten;
      this.remainder -= 10;
      this.prependNumber(9, this.one, this.ten);
      this.prependNumber(4, this.one, this.five);
    }

    this.prependNumber(4, this.one, this.five);

    if (this.remainder >= 5) {
      this.romanValue += this.five;
      this.remainder = this.remainder % 5;
      this.prependNumber(4, this.one, this.five);
    }

    while (this.remainder >= 1) {
      this.romanValue += this.one;
      this.remainder -= 1;
    }

    return this.romanValue;
  }

  private prependNumber(number: number, prefix: string, suffix: string): void {
    if (this.remainder === number) {
      this.romanValue += `${prefix}${suffix}`;
      this.remainder -= number;
    }
  }
}
