import { Location } from '@domain';

export const mockedKilometerLocation: Record<'first' | 'second', Location> = {
  first: {
    latitude: -9.3575,
    longitude: -40.4982,
  },
  second: {
    latitude: -9.3656,
    longitude: -40.4936,
  },
};

export const mockedMeterLocation: Record<'first' | 'second', Location> = {
  first: {
    latitude: -9.3857,
    longitude: -40.5029,
  },
  second: {
    latitude: -9.3849,
    longitude: -40.5022,
  },
};
