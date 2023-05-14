import MapIcon from 'phosphor-react-native/src/icons/MapTrifold';
import ProfileIcon from 'phosphor-react-native/src/icons/User';
import { TPhosphorIcon, TScreenName } from './types';

const tabBarIconMapping = {
  map: MapIcon,
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
