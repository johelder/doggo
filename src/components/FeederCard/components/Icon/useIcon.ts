import MapPin from 'phosphor-react-native/src/icons/MapPin';
import User from 'phosphor-react-native/src/icons/User';
import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import CaretDown from 'phosphor-react-native/src/icons/CaretDown';
import CaretUp from 'phosphor-react-native/src/icons/CaretUp';
import PushPin from 'phosphor-react-native/src/icons/PushPin';
import Heart from 'phosphor-react-native/src/icons/Heart';
import type { TIconName } from './types';

export const iconsSwitcher = {
  map: MapPin,
  user: User,
  cookingPot: CookingPot,
  signPost: Signpost,
  caretDown: CaretDown,
  caretUp: CaretUp,
  pushPin: PushPin,
  heart: Heart,
};

export function useIcon() {
  function getIcon(name: TIconName) {
    return iconsSwitcher[name] ?? null;
  }

  return { getIcon };
}
