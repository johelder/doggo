import { iconMapper } from './mapper';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps extends IconBase {
  name: keyof typeof iconMapper;
  onPress?: () => void;
}
