import type { ReactElement } from 'react';
import type { IFeeder } from '@types';

export interface IFeedCardProps {
  feeder: IFeeder | null;
  sideButton?: ReactElement;
  onClose?: () => void;
}
