import { FeederDomain } from '@data';
import { Location } from '@domain';
import { calculateDistanceBetweenTwoPoints } from '@utils';

export const THREE_KILOMETER_IN_METERS = 3000;

export function useFeederFindNearest(
  location: Location,
  feeders: FeederDomain[],
) {
  function filterFeedersInThreeKilometerRadio(allFeeders: FeederDomain[]) {
    return allFeeders.filter(feeder => {
      const distanceBetweenUserAndFeeder = calculateDistanceBetweenTwoPoints(
        location,
        feeder.coordinates,
      );

      if (distanceBetweenUserAndFeeder < THREE_KILOMETER_IN_METERS) {
        return feeder;
      }
    });
  }

  function sortFeedersByNearDistance(nearestFeeders: FeederDomain[]) {
    return nearestFeeders.sort((a, b) => {
      const firstDistance = calculateDistanceBetweenTwoPoints(
        location,
        a.coordinates,
      );

      const secondDistance = calculateDistanceBetweenTwoPoints(
        location,
        b.coordinates,
      );

      if (firstDistance < secondDistance) {
        return -1;
      }

      return 1;
    });
  }

  function getNearestFeeders(allFeeders: FeederDomain[]) {
    return sortFeedersByNearDistance(
      filterFeedersInThreeKilometerRadio(allFeeders),
    ).slice(0, 10);
  }

  return {
    nearFeeders: getNearestFeeders(feeders),
  };
}
