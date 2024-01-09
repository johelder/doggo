import {
  calculateDistanceBetweenTwoLocations,
  getFormattedDistanceBetweenTwoLocations,
} from '../calculateDistanceBetweenTwoLocations';

import {
  mockedKilometerLocation,
  mockedMeterLocation,
} from './__mocks__/location.mock';

describe('calculateDistanceBetweenTwoLocations', () => {
  it('should return the approximate distance in meters between two locations', () => {
    const distance = calculateDistanceBetweenTwoLocations(
      mockedKilometerLocation.first,
      mockedKilometerLocation.second,
    );

    expect(distance).toBeCloseTo(1000, -2);
  });

  it('should return the approximate distance between two locations formatted as kilometer(km)', () => {
    const distance = getFormattedDistanceBetweenTwoLocations(
      mockedKilometerLocation.first,
      mockedKilometerLocation.second,
    );

    expect(distance).toBe('1km');
  });

  it('should return the approximate distance between two locations formatted as meter(m)', () => {
    const distance = getFormattedDistanceBetweenTwoLocations(
      mockedMeterLocation.first,
      mockedMeterLocation.second,
    );

    expect(distance).toBe('118m');
  });
});
