// import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { AddressDomain } from './AddressDomain';
import { CoordinatesDomain } from './CoordinatesDomain';
import { FoodDomain } from './FoodDomain';
import { MaintenanceStatusDomain } from './MaintenanceStatusDomain';
import { UserDomain } from './UserDomain';

export interface FeederDomain {
  id: string;
  user: Pick<UserDomain, 'id' | 'name'>;
  coordinates: CoordinatesDomain;
  address: AddressDomain;
  foods: FoodDomain;
  maintenanceStatus: MaintenanceStatusDomain;
}
