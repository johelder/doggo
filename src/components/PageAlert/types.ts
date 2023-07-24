import { ReactElement } from 'react';

export interface IPageAlertProps {
  title: string;
  description?: string;
  icon: ReactElement;
  color?: string;
  actionButton?: ReactElement;
}
