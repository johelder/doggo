import { ReactNode } from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';

export interface ButtonRootProps extends TouchableOpacityProps {
  children: ReactNode;
  type: 'filled' | 'unfilled' | 'outline';
  color?: string;
  isLoading?: boolean;
  height?: number;
}

export interface ButtonIconProps {
  children: ReactNode;
}

export interface ButtonTextProps extends TextProps {
  children: string;
  color?: string;
}
