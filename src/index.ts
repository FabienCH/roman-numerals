import { RomanNumeral } from './roman-numeral';

export class RomanNumeralsConverter {
  private readonly one: RomanNumeral = { number: 1, symbol: 'I' };
  private readonly five: RomanNumeral = { number: 5, symbol: 'V' };
  private readonly ten: RomanNumeral = { number: 10, symbol: 'X' };
  private readonly fifty: RomanNumeral = { number: 50, symbol: 'L' };
  private readonly hundred: RomanNumeral = { number: 100, symbol: 'C' };
  private readonly fiveHundred: RomanNumeral = { number: 500, symbol: 'D' };
  private romanValue = '';
  private remainder: number;

  public convertToRoman(number: number): string {
    this.remainder = number;

    this.setRomanValueWith(this.fiveHundred);
    this.prependNumber(400, this.hundred.symbol, this.fiveHundred.symbol);
    this.prependNumber(90, this.ten.symbol, this.hundred.symbol);
    this.prependNumber(40, this.ten.symbol, this.fifty.symbol);
    this.prependNumber(9, this.one.symbol, this.ten.symbol);

    this.setRomanValueWith(this.hundred);
    this.prependNumber(90, this.ten.symbol, this.hundred.symbol);
    this.prependNumber(40, this.ten.symbol, this.fifty.symbol);
    this.prependNumber(9, this.one.symbol, this.ten.symbol);

    this.setRomanValueWith(this.fifty);
    this.prependNumber(40, this.ten.symbol, this.fifty.symbol);
    this.prependNumber(9, this.one.symbol, this.ten.symbol);

    this.setRomanValueWith(this.ten);
    this.prependNumber(4, this.one.symbol, this.five.symbol);

    this.setRomanValueWith(this.five);

    while (this.remainder >= 1) {
      this.romanValue += this.one.symbol;
      this.remainder -= 1;
    }

    return this.romanValue;
  }

  private setRomanValueWith(romanNumeral: RomanNumeral) {
    while (this.remainder >= romanNumeral.number) {
      this.romanValue += romanNumeral.symbol;
      this.remainder -= romanNumeral.number;
      this.prependNumber(9, this.one.symbol, this.ten.symbol);
      this.prependNumber(4, this.one.symbol, this.five.symbol);
    }
  }

  private prependNumber(number: number, prefix: string, suffix: string): void {
    if (this.remainder === number) {
      this.romanValue += `${prefix}${suffix}`;
      this.remainder -= number;
    }
  }
}
