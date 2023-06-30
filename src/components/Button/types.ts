import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';

export interface IButtonRootProps extends TouchableOpacityProps {
  children: ReactNode;
  type: 'filled' | 'unfilled' | 'outline';
  color?: string;
  isLoading?: boolean;
}

export interface IButtonIconProps {
  children: ReactNode;
}

export interface IButtonTextProps {
  children: string;
  color: string;
}
