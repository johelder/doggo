import {
  mockedFeedersList,
  mockedLocation,
  mockedNearFeedersList,
} from '@test';

import { useFeederFindNearest } from '../useFeederFindNearest';

describe('useFeederFindNearest', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should return only 10 feeders within a 3-kilometer radius', () => {
    const { nearFeeders } = useFeederFindNearest(
      mockedLocation,
      mockedFeedersList,
    );

    expect(nearFeeders).toEqual(mockedNearFeedersList);
    expect(nearFeeders.length).toBe(10);
  });
});
