import { TouchableOpacityProps } from 'react-native';

export interface NavigationButtonProps extends TouchableOpacityProps {
  title: string;
  description?: string;
  icon?: () => React.JSX.Element;
}
