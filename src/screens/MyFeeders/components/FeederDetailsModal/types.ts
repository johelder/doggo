import type { RefObject } from 'react';
import type { Modalize } from 'react-native-modalize';
import type { IDomainFeeder } from '@src/types/domain';

export interface IFeederDetailsModal {
  detailsModalRef: RefObject<Modalize>;
  feeder: IDomainFeeder | null;
  onCancel: () => void;
  onDelete: (feederId: string) => Promise<void>;
  onEdit: () => void;
  isLoadingDelete: boolean;
}
