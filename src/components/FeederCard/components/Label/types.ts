import { TextProps } from 'react-native';

export interface ILabelProps extends TextProps {
  label: string;
  isTitle?: boolean;
}
