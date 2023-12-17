import { RefObject } from 'react';

import { Modalize } from 'react-native-modalize';

import { FeederDomain } from '@data';

export interface IFeederDetailsModal {
  detailsModalRef: RefObject<Modalize>;
  feeder: FeederDomain | null;
  onCancel: () => void;
  onDelete: (id: string) => void;
  onEdit: () => void;
  isLoadingDelete: boolean;
}
