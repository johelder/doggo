// import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { AddressDomain } from './AddressDomain';
import { CoordinateDomain } from './CoordinateDomain';
import { FoodDomain } from './FoodDomain';
import { MaintenanceStatusDomain } from './MaintenanceStatusDomain';
import { UserDomain } from './UserDomain';

export interface FeederDomain {
  id: string;
  user: Pick<UserDomain, 'id' | 'name'>;
  coordinate: CoordinateDomain;
  address: AddressDomain;
  foods: FoodDomain;
  maintenanceStatus: MaintenanceStatusDomain;
}
