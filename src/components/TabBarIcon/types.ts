import { IconProps } from 'phosphor-react-native/src/lib';

export type TScreenName = 'map' | 'profile';

export interface ITabBarIconProps {
  screen: TScreenName;
  isFocused: boolean;
}

export type TPhosphorIcon = ({
  weight,
  color,
  size,
  style,
  mirrored,
}: IconProps) => React.JSX.Element;
