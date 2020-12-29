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

    while (this.remainder >= 50) {
      this.romanValue += this.fifty;
      this.remainder -= 50;
    }

    if (this.remainder === 9) {
      this.romanValue += `${this.one}${this.ten}`;
      this.remainder -= 9;
    }

    while (this.remainder >= 10) {
      this.romanValue += this.ten;
      this.remainder -= 10;
    }

    if (this.remainder === 4) {
      const romanValue = this.romanValue ? this.romanValue : this.five;
      this.romanValue += `${this.one}${romanValue}`;
      this.remainder -= 4;
    }

    if (this.remainder >= 5) {
      this.romanValue += this.five;
      this.remainder = this.remainder % 5;
    }

    while (this.remainder >= 1) {
      this.romanValue += this.one;
      this.remainder -= 1;
    }

    return this.romanValue;
  }
}
