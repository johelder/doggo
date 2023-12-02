import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface IChipButtonProps extends TouchableOpacityProps {
  isSelected: boolean;
  children: ReactNode;
}
