import React from 'react';

import {
  RequestLocationPermissionBanner,
  RequestLocationPermissionModal,
} from '@components';
import { useMap } from '@domain';

import * as Styled from './styles';

export function UnavailableLocation(): React.JSX.Element {
  const { requestLocationPermissionModalRef } = useMap();

  return (
    <Styled.LocationNotAvailableContainer>
      <RequestLocationPermissionBanner />

      <RequestLocationPermissionModal
        modalRef={requestLocationPermissionModalRef}
      />
    </Styled.LocationNotAvailableContainer>
  );
}
