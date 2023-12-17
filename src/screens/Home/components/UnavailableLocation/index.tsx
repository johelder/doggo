import React from 'react';

import {
  RequestLocationPermissionBanner,
  RequestLocationPermissionModal,
} from '@components';
import { useMap } from '@hooks';

import * as S from './styles';

export function UnavailableLocation(): JSX.Element {
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
