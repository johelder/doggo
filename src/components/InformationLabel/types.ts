import { ThemeSizes } from '@theme';

import { IconProps } from '../Icon/types';

export interface InformationLabelProps {
  label: string;
  iconName?: IconProps['name'];
  size?: ThemeSizes;
  color?: string;
}
