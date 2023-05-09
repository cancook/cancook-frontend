import timeFormatter from '@/utils/timeFormatter';

describe('timeFormatter 테스트', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01T00:00:00Z'));
  });
  it('1분 미만이면 초로 반환된다', () => {
    // 초단위는 00초로 표기한다.
    expect(timeFormatter('2022-12-31T23:59:59Z')).toBe('1초');
    expect(timeFormatter('2022-12-31T23:59:50Z')).toBe('10초');
    expect(timeFormatter('2022-12-31T23:59:45Z')).toBe('15초');
    expect(timeFormatter('2022-12-31T23:59:01Z')).toBe('59초');
  });
  it('1분 이상 1시간 미만이면 분으로 반환된다', () => {
    // 1분 00초는 1분으로 표기한다.
    expect(timeFormatter('2022-12-31T23:58:59Z')).toBe('1분');
    expect(timeFormatter('2022-12-31T23:50:59Z')).toBe('9분');
    expect(timeFormatter('2022-12-31T23:45:59Z')).toBe('14분');
    expect(timeFormatter('2022-12-31T23:01:59Z')).toBe('58분');
  });
  it('1시간 이상 1일 미만이면 시간으로 반환된다', () => {
    // 1시간 00분은 1시간으로 표기한다.
    expect(timeFormatter('2022-12-31T23:00:00Z')).toBe('1시간');
    expect(timeFormatter('2022-12-31T19:59:59Z')).toBe('4시간');
    expect(timeFormatter('2022-12-31T14:59:59Z')).toBe('9시간');
    expect(timeFormatter('2022-12-31T01:59:59Z')).toBe('22시간');
    expect(timeFormatter('2022-12-31T01:00:00Z')).toBe('23시간');
  });
  it('1일 이상 1달 미만이면 일로 반환된다', () => {
    // 1일 00시간은 1일로 표기한다.
    expect(timeFormatter('2022-12-31T00:00:00Z')).toBe('1일');
    expect(timeFormatter('2022-12-27T00:00:00Z')).toBe('5일');
    expect(timeFormatter('2022-12-18T00:00:00Z')).toBe('14일');
    expect(timeFormatter('2022-12-02T00:00:00Z')).toBe('30일');
  });
  it('1달 이상 1년 미만이면 달로 반환된다', () => {
    // 1달 00일은 1달로 표기한다.
    expect(timeFormatter('2022-12-01T00:00:00Z')).toBe('1달');
    expect(timeFormatter('2022-11-01T00:00:00Z')).toBe('2달');
    expect(timeFormatter('2022-07-01T00:00:00Z')).toBe('6달');
    expect(timeFormatter('2022-02-01T00:00:00Z')).toBe('11달');
  });
  it('1년 이상이면 년으로 반환된다', () => {
    // 1년 00개월은 1년으로 표기한다.
    expect(timeFormatter('2021-12-01T00:00:00Z')).toBe('1년');
    expect(timeFormatter('2020-12-01T01:30:00Z')).toBe('2년');
    expect(timeFormatter('2016-12-01T00:00:00Z')).toBe('6년');
    expect(timeFormatter('2011-12-01T00:00:00Z')).toBe('11년');
  });
});
