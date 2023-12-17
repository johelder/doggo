import { RefObject } from 'react';

import { Modalize } from 'react-native-modalize';

import { FeederDomain } from '@data';

export interface IFeederDetailsModal {
  detailsModalRef: RefObject<Modalize>;
  feeder: FeederDomain | null;
  onCancel: () => void;
  onDelete: (feederId: string) => Promise<void>;
  onEdit: () => void;
  isLoadingDelete: boolean;
}
