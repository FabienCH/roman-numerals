import { convertToRoman } from './index';

describe('convertToRoman', () => {
  it('should convert 1 to "I"', () => {
    expect(convertToRoman(1)).toEqual('I');
  });
  it('should convert 2 to "II"', () => {
    expect(convertToRoman(2)).toEqual('II');
  });
});
