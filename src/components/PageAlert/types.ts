import { ReactElement } from 'react';

export interface PageAlertProps {
  title: string;
  description?: string;
  icon: ReactElement;
  color?: string;
  actionButton?: ReactElement;
}
