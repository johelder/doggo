import { AddressPersistance } from './AddressPersistance';
import { CoordinatePersistance } from './CoordinatePersistance';
import { FoodPersistance } from './FoodPersistance';
import { MaintenanceStatusPersistance } from './MaintenanceStatusPersistance';
import { UserPersistance } from './UserPersistance';

export interface FeederPersistance {
  id: string;
  address: AddressPersistance;
  coordinate: CoordinatePersistance;
  foods: FoodPersistance;
  maintenance_status: MaintenanceStatusPersistance;
  user: Pick<UserPersistance, 'id' | 'name'>;
}
