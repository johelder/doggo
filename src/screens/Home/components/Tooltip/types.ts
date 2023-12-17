import { Dispatch, SetStateAction } from 'react';

import { FeederDomain } from '@data';

export interface TooltipProps {
  isTooltipVisible: boolean;
  setIsTooltipVisible: Dispatch<SetStateAction<boolean>>;
  currentFeederOpened: FeederDomain | null;
}
