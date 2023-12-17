import { CoordinatesDomain } from '@data';
import { useMap } from '@hooks';

export function useList() {
  const { mapRef } = useMap();

  function handleClickOnNearFeeder(coords: CoordinatesDomain) {
    mapRef.current?.animateCamera({
      center: coords,
    });
  }

  return { handleClickOnNearFeeder };
}
