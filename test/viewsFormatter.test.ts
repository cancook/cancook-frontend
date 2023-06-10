import viewsFormatter from '@/utils/viewsFormatter';

describe('viewsFormatter 테스트', () => {
  it('1,000 미만이면 그대로 반환된다', () => {
    expect(viewsFormatter(999)).toBe(999);
    expect(viewsFormatter(3)).toBe(3);
    expect(viewsFormatter(100)).toBe(100);
  });
  it('1,000 이상 10,000 미만이면 천 단위로 반환된다', () => {
    expect(viewsFormatter(1_000)).toBe('1.0천');
    expect(viewsFormatter(1_001)).toBe('1.0천');
    expect(viewsFormatter(1_101)).toBe('1.1천');
    expect(viewsFormatter(9_999)).toBe('9.9천');
  });
  it('10,000 이상 100,000,000 미만이면 만 단위로 반환된다', () => {
    expect(viewsFormatter(10_000)).toBe('1.0만');
    expect(viewsFormatter(10_001)).toBe('1.0만');
    expect(viewsFormatter(11_001)).toBe('1.1만');
    expect(viewsFormatter(9_999_999)).toBe('999.9만');
    expect(viewsFormatter(10_000_000)).toBe('1000.0만');
    expect(viewsFormatter(99_999_999)).toBe('9999.9만');
  });
  it('100,000,000 이상이면 억 단위로 반환된다', () => {
    expect(viewsFormatter(100_000_000)).toBe('1.0억');
    expect(viewsFormatter(100_000_001)).toBe('1.0억');
    expect(viewsFormatter(110_000_001)).toBe('1.1억');
    expect(viewsFormatter(999_999_999)).toBe('9.9억');
  });
});
