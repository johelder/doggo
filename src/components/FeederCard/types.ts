import { ReactElement } from 'react';

import { FeederDomain } from '@data';

export interface IFeedCardProps {
  feeder: FeederDomain | null;
  sideButton?: ReactElement;
  onClose?: () => void;
}
