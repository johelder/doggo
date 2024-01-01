import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  placeholder: string;
  isOptional?: boolean;
}
