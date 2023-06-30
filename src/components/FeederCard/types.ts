import type { ReactNode } from 'react';
import type { IDomainFeeder } from '@src/types/domain';

export interface IWithActionsCardProps {
  feeder: IDomainFeeder;
}

export interface IReadOnlyCardProps {
  feeder: IDomainFeeder;
  sideButton?: ReactNode;
}
