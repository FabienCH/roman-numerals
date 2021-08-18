import { convertToRomanNumber } from './index';

describe('convertToRomanNumber', () => {
  it('should convert 1 to I', () => {
    expect(convertToRomanNumber(1)).toEqual('I');
  });
  it('should convert 2 to II', () => {
    expect(convertToRomanNumber(2)).toEqual('II');
  });

  it('should convert 3 to III', () => {
    expect(convertToRomanNumber(3)).toEqual('III');
  });
});
