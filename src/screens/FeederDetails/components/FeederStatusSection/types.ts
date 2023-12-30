import { MaintenanceStatusDomain } from '@data';

export interface FeederStatusSectionProps {
  feederId: string;
  maintenanceStatus: MaintenanceStatusDomain;
}
