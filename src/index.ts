export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';

  public convertToRoman(number: number): string {
    if (number / 5 >= 1) {
      const remainder = number % 5;
      return `${this.five}${this.convertFromOneToFour(remainder)}`;
    }

    return this.convertFromOneToFour(number);
  }

  private convertFromOneToFour(number: number): string {
    return new Array(number).fill(null).reduce((romanNumber: string, _) => {
      romanNumber += this.one;
      return romanNumber;
    }, '');
  }
}
