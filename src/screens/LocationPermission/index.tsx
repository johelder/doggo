import React from 'react';

import {
  Button,
  RequestLocationPermissionModal,
  RequestLocationPermissionBanner,
} from '@components';

import * as S from './styles';
import { useLocationPermission } from './useLocationPermission';

export function LocationPermission() {
  const { handlerRequestUserLocation, requestPermissionModalRef } =
    useLocationPermission();

  return (
    <S.Container>
      <S.Content>
        <RequestLocationPermissionBanner />

        <Button.Root type="filled" onPress={handlerRequestUserLocation}>
          <Button.Text>Permitir Localização</Button.Text>
        </Button.Root>
      </S.Content>

      <RequestLocationPermissionModal modalRef={requestPermissionModalRef} />
    </S.Container>
  );
}
