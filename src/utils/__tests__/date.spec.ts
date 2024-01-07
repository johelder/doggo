import { TODAY, YESTERDAY, date } from '../date';

const MOCKED_NOW_IN_MILLISECONDS = 1704145048 * 1000;

describe('date', () => {
  beforeAll(() => {
    jest
      .spyOn(Date, 'now')
      .mockImplementation(() => MOCKED_NOW_IN_MILLISECONDS);
  });

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should return the difference in days from two dates', () => {
    expect(date.getDaysDifference(new Date('01/01/2024 17:00'))).toBe(TODAY);
    expect(date.getDaysDifference(new Date('12/31/2023 17:00'))).toBe(
      YESTERDAY,
    );
  });

  it('should return the relative date from a date', () => {
    expect(date.formatRelativeDate(new Date('01/01/2024 17:00'))).toBe('hoje');
    expect(date.formatRelativeDate(new Date('12/31/2023 17:00'))).toBe('ontem');
    expect(date.formatRelativeDate(new Date('12/22/2023 17:00'))).toBe(
      'há 10 dias',
    );
  });
});
