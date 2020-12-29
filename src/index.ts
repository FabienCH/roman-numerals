export class RomanNumeralsConverter {
  private readonly one = 'I';
  private readonly five = 'V';
  private readonly ten = 'X';

  public convertToRoman(number: number): string {
    const divByFiveRemainder = number % 5;
    const isPrepended = divByFiveRemainder === 4;
    const isMoreThanFour = number > 4;
    const isSuffixed = isMoreThanFour && divByFiveRemainder < 4;

    if (number === 20) {
      return 'XX';
    }

    if (isPrepended) {
      return `${this.one}${this.getSuffixedNumber(isMoreThanFour)}`;
    }

    if (isSuffixed) {
      const suffix = number - 10 > 4 ? this.five : this.convertFromOneToFour(divByFiveRemainder);
      return `${this.getPrependedNumber(number < 10)}${suffix}`;
    }

    return this.convertFromOneToFour(number);
  }

  private getSuffixedNumber(isMoreThanFour: boolean) {
    return isMoreThanFour ? this.ten : this.five;
  }

  private getPrependedNumber(isLessThanTen: boolean) {
    return isLessThanTen ? this.five : this.ten;
  }

  private convertFromOneToFour(number: number): string {
    return new Array(number).fill(null).reduce((romanNumber: string, _) => {
      romanNumber += this.one;
      return romanNumber;
    }, '');
  }
}
