import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { TCoordinates, TFoods, TMaintenanceStatus, TAddress } from '.';

export interface IFeeder {
  id?: string;
  user: {
    id: string;
    name: string;
  };
  coordinates: TCoordinates;
  address: TAddress;
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
