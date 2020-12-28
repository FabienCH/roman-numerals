import { RomanNumeralsConverter } from './index';

describe('convertToRoman', () => {
  let romanNumeralsConverter: RomanNumeralsConverter;

  beforeEach(() => {
    romanNumeralsConverter = new RomanNumeralsConverter();
  });
  it('should convert 1 to "I"', () => {
    expect(romanNumeralsConverter.convertToRoman(1)).toEqual('I');
  });
  it('should convert 2 to "II"', () => {
    expect(romanNumeralsConverter.convertToRoman(2)).toEqual('II');
  });
  it('should convert 3 to "III"', () => {
    expect(romanNumeralsConverter.convertToRoman(3)).toEqual('III');
  });
  it('should convert 4 to "IV"', () => {
    expect(romanNumeralsConverter.convertToRoman(4)).toEqual('IV');
  });
  it('should convert 5 to "V"', () => {
    expect(romanNumeralsConverter.convertToRoman(5)).toEqual('V');
  });

  it('should convert 6 to "VI"', () => {
    expect(romanNumeralsConverter.convertToRoman(6)).toEqual('VI');
  });
  it('should convert 7 to "VIII"', () => {
    expect(romanNumeralsConverter.convertToRoman(7)).toEqual('VII');
  });
  it('should convert 8 to "VIII"', () => {
    expect(romanNumeralsConverter.convertToRoman(8)).toEqual('VIII');
  });
  it('should convert 9 to "IX"', () => {
    expect(romanNumeralsConverter.convertToRoman(9)).toEqual('IX');
  });
  it('should convert 10 to "X"', () => {
    expect(romanNumeralsConverter.convertToRoman(10)).toEqual('X');
  });
});
