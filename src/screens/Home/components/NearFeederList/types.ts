import { FeederDomain } from '@data';

export interface NearFeederListProps {
  feeders: FeederDomain[];
  isNearFeederListExpanded: boolean;
  handleToggleNearFeederList: () => void;
}
