import { SvgProps } from 'react-native-svg';

import { iconMapper } from './mapper';

export interface IconBase extends Pick<SvgProps, 'testID'> {
  size?: number;
  color?: string;
}

export interface IconProps extends IconBase {
  name: keyof typeof iconMapper;
  onPress?: () => void;
  testID?: string;
}
