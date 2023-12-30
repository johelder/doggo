import { ReactElement } from 'react';

import { FeederDomain } from '@data';

export interface FeederCardProps {
  feeder: FeederDomain;
  sideButton?: ReactElement;
  onClose?: () => void;
}
