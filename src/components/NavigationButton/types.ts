import { IconProps } from 'phosphor-react-native/src/lib';
import { TouchableOpacityProps } from 'react-native';

export interface INavigationButtonProps extends TouchableOpacityProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}
