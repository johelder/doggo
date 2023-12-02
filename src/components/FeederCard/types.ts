import { ReactElement } from 'react';

import { IFeeder } from '@types';

export interface IFeedCardProps {
  feeder: IFeeder | null;
  sideButton?: ReactElement;
  onClose?: () => void;
}
