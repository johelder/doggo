import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';

export interface IActionButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}
