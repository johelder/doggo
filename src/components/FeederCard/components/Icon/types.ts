import { iconsSwitcher } from './useIcon';

export interface IIconProps {
  name: TIconName;
  isTitle?: boolean;
}

export type TIconName = keyof typeof iconsSwitcher;
