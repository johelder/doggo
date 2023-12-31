import React from 'react';

import {
  RequestLocationPermissionBanner,
  RequestLocationPermissionModal,
} from '@components';
import { useMap } from '@domain';

import * as S from './styles';

export function UnavailableLocation(): React.JSX.Element {
  const { requestLocationPermissionModalRef } = useMap();

  return (
    <S.LocationNotAvailableContainer>
      <RequestLocationPermissionBanner />

      <RequestLocationPermissionModal
        modalRef={requestLocationPermissionModalRef}
      />
    </S.LocationNotAvailableContainer>
  );
}
