import type { RefObject } from 'react';
import type { Modalize } from 'react-native-modalize';
import type { IFeeder } from '@src/types';

export interface IFeederDetailsModal {
  detailsModalRef: RefObject<Modalize>;
  feeder: IFeeder | null;
  onCancel: () => void;
  onDelete: (feederId: string) => Promise<void>;
  onEdit: () => void;
  isLoadingDelete: boolean;
}
