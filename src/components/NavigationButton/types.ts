import type { TouchableOpacityProps } from 'react-native';
import type { IconProps } from 'phosphor-react-native/src/lib';

export interface INavigationButtonProps extends TouchableOpacityProps {
  title: string;
  description?: string;
  icon?: React.ComponentType<IconProps>;
}
