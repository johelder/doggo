import { Dispatch, SetStateAction } from 'react';

import { FeederDomain } from '@data';

export interface MapProps {
  feeders: FeederDomain[];
  nearFeeders: FeederDomain[];
  isNearFeederListExpanded: boolean;
  setIsTooltipVisible: Dispatch<SetStateAction<boolean>>;
  handleOpenTooltip: (feeder: FeederDomain) => void;
}
