import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { TCoordinates, TFoods, TMaintenanceStatus } from '../common';
import type { TDomainAddress } from '.';

export interface IDomainFeeder {
  id?: string;
  user: {
    id: string;
    name: string;
  };
  coordinates: TCoordinates;
  address: TDomainAddress;
  foods: TFoods;
  maintenanceStatus: {
    [key in TMaintenanceStatus]: {
      updatedAt: FirebaseFirestoreTypes.FieldValue;
      updatedBy: {
        userId: string;
        userName: string;
      };
    };
  };
}
