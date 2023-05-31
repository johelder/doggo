import type { TextInputProps } from 'react-native';

export interface IInputProps extends TextInputProps {
  placeholder: string;
  isOptional?: boolean;
}
