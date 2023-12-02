import { RefObject } from 'react';

import { Modalize } from 'react-native-modalize';

import { IFeeder } from '@types';

export interface IFeederDetailsModal {
  detailsModalRef: RefObject<Modalize>;
  feeder: IFeeder | null;
  onCancel: () => void;
  onDelete: (feederId: string) => Promise<void>;
  onEdit: () => void;
  isLoadingDelete: boolean;
}
