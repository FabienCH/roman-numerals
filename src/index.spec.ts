import { convertToRomanNumber } from './index';

describe('convertToRomanNumber', () => {
  const testParams = [
    { input: 1, expected: 'I' },
    { input: 2, expected: 'II' },
    { input: 3, expected: 'III' },
    { input: 4, expected: 'IV' },
    { input: 5, expected: 'V' },
    { input: 6, expected: 'VI' },
    { input: 7, expected: 'VII' },
    { input: 8, expected: 'VIII' },
    { input: 9, expected: 'IX' },
    { input: 10, expected: 'X' },
    { input: 11, expected: 'XI' },
    { input: 12, expected: 'XII' },
    { input: 14, expected: 'XIV' },
  ];

  testParams.forEach((param) => {
    it('should convert ' + param.input + ' to ' + param.expected, () => {
      expect(convertToRomanNumber(param.input)).toEqual(param.expected);
    });
  });
});
