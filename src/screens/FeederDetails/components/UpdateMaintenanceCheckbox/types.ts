import { FeederDomain } from '@data';

export interface UpdateMaintenanceButtonProps {
  label: string;
  status: Status;
  handleToggleMaintenanceStatus: (status: Status) => void;
  isStatusAdded: (status: Status) => boolean;
}

type Status = keyof FeederDomain['maintenanceStatus'];
