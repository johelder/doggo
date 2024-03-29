import { ThemeSizes } from '@theme';

export interface FeederStatusProps {
  isNeedMaintenance: boolean;
  size?: ThemeSizes;
  align?: 'left' | 'center';
}
