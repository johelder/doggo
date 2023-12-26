import { TouchableOpacityProps } from 'react-native';

export interface INavigationButtonProps extends TouchableOpacityProps {
  title: string;
  description?: string;
  icon?: () => React.JSX.Element;
}
