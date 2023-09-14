import MapPinLine from 'phosphor-react-native/src/icons/MapPinLine';
import ProfileIcon from 'phosphor-react-native/src/icons/User';
import type { TPhosphorIcon, TScreenName } from './types';

const tabBarIconMapping = {
  map: MapPinLine,
  profile: ProfileIcon,
};

export function useTabBarIcon() {
  function getTabBarIcon(name: TScreenName): TPhosphorIcon | null {
    return tabBarIconMapping[name] ?? null;
  }

  return {
    getTabBarIcon,
  };
}
