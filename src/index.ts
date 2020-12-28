export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';

  public convertToRoman(number: number): string {
    const divByFiveRemainder = number % 5;

    if (divByFiveRemainder === 4) {
      return `${this.one}${number / 5 === 1 ? this.five : this.ten}`;
    }

    if (number / 5 >= 1) {
      return `${this.five}${this.convertFromOneToFour(divByFiveRemainder)}`;
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
