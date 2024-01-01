import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface MaintenanceStatusPersistance {
  cleaning: MaintenancePersistance;
  supply: MaintenancePersistance;
}

export interface MaintenancePersistance {
  updated_at: FirebaseFirestoreTypes.Timestamp;
  updated_by: {
    user_id: string;
    user_name: string | null;
  };
}
