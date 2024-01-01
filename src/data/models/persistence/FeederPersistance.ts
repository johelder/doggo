import { AddressPersistance } from './AddressPersistance';
import { CoordinatesPersistance } from './CoordinatesPersistance';
import { FoodPersistance } from './FoodPersistance';
import { MaintenanceStatusPersistance } from './MaintenanceStatusPersistance';
import { UserPersistance } from './UserPersistance';

export interface FeederPersistance {
  id: string;
  address: AddressPersistance;
  coordinates: CoordinatesPersistance;
  foods: FoodPersistance;
  maintenance_status: MaintenanceStatusPersistance;
  user: Pick<UserPersistance, 'id' | 'name'>;
}
