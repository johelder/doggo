import type { ReactNode } from 'react';
import type { TextProps, TouchableOpacityProps } from 'react-native';

export interface IButtonRootProps extends TouchableOpacityProps {
  children: ReactNode;
  type: 'filled' | 'unfilled' | 'outline';
  color?: string;
  isLoading?: boolean;
  height?: number;
}

export interface IButtonIconProps {
  children: ReactNode;
}

export interface IButtonTextProps extends TextProps {
  children: string;
  color?: string;
}
