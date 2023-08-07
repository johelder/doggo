import type { IDomainFeeder } from '@src/types/domain';
import { ReactElement } from 'react';

export interface IFeedCardProps {
  feeder: IDomainFeeder | null;
  sideButton: ReactElement;
  onClose?: () => void;
}
