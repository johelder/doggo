import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';

export interface IChipButtonProps extends TouchableOpacityProps {
  isSelected: boolean;
  children: ReactNode;
}
