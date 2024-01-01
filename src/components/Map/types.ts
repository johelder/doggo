import { ReactNode } from 'react';

import { MapViewProps } from 'react-native-maps';

export interface MapProps extends MapViewProps {
  isClustering?: boolean;
  children?: ReactNode;
}
