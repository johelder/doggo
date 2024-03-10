import { Location } from '@domain';

const EARTH_RADIUS_IN_METERS = 6371e3;
const ONE_KILOMETER_IN_METERS = 1000;

/**
 * @param firstLocation latitude, longitude
 * @param secondLocation latitude, longitude
 * @returns distance in meters between these two locations
 */
export function calculateDistanceBetweenTwoLocations(
  firstLocation: Location,
  secondLocation: Location,
) {
  const { latitude: firstLatitude, longitude: firstLongitude } = firstLocation;
  const { latitude: secondLatitude, longitude: secondLongitude } =
    secondLocation;

  const earthRadius = EARTH_RADIUS_IN_METERS;
  const φ1 = firstLatitude * (Math.PI / 180);
  const φ2 = secondLatitude * (Math.PI / 180);
  const Δφ = (secondLatitude - firstLatitude) * (Math.PI / 180);
  const Δλ = (secondLongitude - firstLongitude) * (Math.PI / 180);

  const squareOfHalfChordLength =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

  const angularDistanceInRadians =
    2 *
    Math.atan2(
      Math.sqrt(squareOfHalfChordLength),
      Math.sqrt(1 - squareOfHalfChordLength),
    );

  const distance = Number(earthRadius * angularDistanceInRadians);

  return distance;
}

/**
 *
 * @param firstLocation latitude, longitude
 * @param secondLocation latitude, longitude
 * @returns distance between two locations formatted as kilometer(km) or meter(m)
 */
export function getFormattedDistanceBetweenTwoLocations(
  firstLocation: Location,
  secondLocation: Location,
) {
  const distance = calculateDistanceBetweenTwoLocations(
    firstLocation,
    secondLocation,
  );

  if (distance > ONE_KILOMETER_IN_METERS) {
    return `${(distance / ONE_KILOMETER_IN_METERS).toFixed(0)}km`;
  }

  return `${distance.toFixed(0)}m`;
}
