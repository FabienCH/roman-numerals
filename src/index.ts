export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';

  public convertToRoman(number: number): string {
    const divByFiveRemainder = number % 5;
    const isPrepended = divByFiveRemainder === 4;
    const isMoreThanFour = number > 4;

    if (number === 10) {
      return `${this.ten}`;
    }

    if (isPrepended) {
      return `${this.one}${this.getSuffixedNumber(isMoreThanFour)}`;
    }

    if (number > 9) {
      return `${this.ten}${this.convertFromOneToFour(divByFiveRemainder)}`;
    }

    if (isMoreThanFour) {
      return `${this.five}${this.convertFromOneToFour(divByFiveRemainder)}`;
    }

    return this.convertFromOneToFour(number);
  }

  private getSuffixedNumber(isMoreThanFour: boolean) {
    return isMoreThanFour ? this.ten : this.five;
  }

  private convertFromOneToFour(number: number): string {
    return new Array(number).fill(null).reduce((romanNumber: string, _) => {
      romanNumber += this.one;
      return romanNumber;
    }, '');
  }
}
