import { RomanNumeralsConverter } from './index';

describe('convertToRoman', () => {
  let romanNumeralsConverter: RomanNumeralsConverter;

  beforeEach(() => {
    romanNumeralsConverter = new RomanNumeralsConverter();
  });

  [
    { number: 1, expectedRomanNumber: 'I' },
    { number: 2, expectedRomanNumber: 'II' },
    { number: 3, expectedRomanNumber: 'III' },
    { number: 4, expectedRomanNumber: 'IV' },
    { number: 5, expectedRomanNumber: 'V' },
    { number: 6, expectedRomanNumber: 'VI' },
    { number: 7, expectedRomanNumber: 'VII' },
    { number: 8, expectedRomanNumber: 'VIII' },
    { number: 9, expectedRomanNumber: 'IX' },
    { number: 10, expectedRomanNumber: 'X' },
    { number: 11, expectedRomanNumber: 'XI' },
    { number: 11, expectedRomanNumber: 'XV' },
  ].forEach(({ number, expectedRomanNumber }) => {
    it(`should convert ${number} to "${expectedRomanNumber}"`, () => {
      expect(romanNumeralsConverter.convertToRoman(number)).toEqual(expectedRomanNumber);
    });
  });
});
