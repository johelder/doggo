import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ChipButtonProps extends TouchableOpacityProps {
  isSelected: boolean;
  children: ReactNode;
}
