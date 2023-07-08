import type { IDomainFeeder } from '@src/types/domain';

export interface IFeederAddressProps {
  feeder: IDomainFeeder;
  onOpenDetails: () => void;
}
