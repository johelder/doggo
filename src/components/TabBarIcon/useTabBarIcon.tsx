import HomeIcon from 'phosphor-react-native/src/icons/House';
import NearbyFeedersIcon from 'phosphor-react-native/src/icons/MapTrifold';
import RegisterFeederIcon from 'phosphor-react-native/src/icons/MapPin';
import ProfileIcon from 'phosphor-react-native/src/icons/User';

export function useTabBarIcon() {
  const tabBarIconMapping = {
    home: HomeIcon,
    nearbyFeeders: NearbyFeedersIcon,
    createFeeder: RegisterFeederIcon,
    profile: ProfileIcon,
  };

  return {
    tabBarIconMapping,
  };
}
