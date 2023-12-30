import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface MaintenanceStatusDomain {
  supply: MaintenanceDomain;
  cleaning: MaintenanceDomain;
}

export interface MaintenanceDomain {
  updatedAt: FirebaseFirestoreTypes.Timestamp;
  updatedBy: {
    userId: string;
    userName: string | null;
  };
}
