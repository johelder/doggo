import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export interface PageAlertProps extends ViewProps {
  title: string;
  description?: string;
  icon: ReactElement;
  color?: string;
  actionButton?: ReactElement;
}
