import { convertToRomanNumber } from './index';

describe('convertToRomanNumber', () => {
  const testParams = [
    { input: 1, expected: 'I' },
    { input: 2, expected: 'II' },
    { input: 3, expected: 'III' },
  ];

  testParams.forEach((param) => {
    it('should convert ' + param.input + ' to ' + param.expected, () => {
      expect(convertToRomanNumber(param.input)).toEqual(param.expected);
    });
  });
});
