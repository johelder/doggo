import { TouchableOpacityProps } from 'react-native';

import { IconProps } from '../Icon/types';

export interface INavigationButtonProps extends TouchableOpacityProps {
  title: string;
  description?: string;
  icon?: React.ComponentType<IconProps>;
}
