import {
  ChipButtonProps as ChipButtonComponentProps,
  IconProps,
} from '@components';

export interface ChipButtonProps
  extends Omit<ChipButtonComponentProps, 'children'> {
  label: string;
  iconName: IconProps['name'];
}
