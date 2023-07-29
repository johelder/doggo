import type { IDomainFeeder } from '@src/types/domain';

export interface IFeedCardProps {
  feeder: IDomainFeeder | null;
  onClose?: () => void;
  isReadOnly?: boolean;
}
