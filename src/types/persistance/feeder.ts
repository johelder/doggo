import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { TCoordinates, TFoods, TMaintenanceStatus } from '../common';
import type { TPersistanceAddress } from '.';

export interface IPersistanceFeeder {
  id?: string;
  user: {
    id: string;
    name: string;
  };
  coordinates: TCoordinates;
  address: TPersistanceAddress;
  foods: TFoods;
  maintenance_status: {
    [key in TMaintenanceStatus]: {
      updated_at: FirebaseFirestoreTypes.FieldValue;
      updated_by: {
        user_id: string;
        user_name: string;
      };
    };
  };
}
