import type { IconProps } from 'phosphor-react-native/src/lib';
import type { TouchableOpacityProps } from 'react-native';

export interface INavigationButtonProps extends TouchableOpacityProps {
  title: string;
  description?: string;
  icon?: React.ComponentType<IconProps>;
}
