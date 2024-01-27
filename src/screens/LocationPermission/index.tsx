import React from 'react';

import {
  Button,
  RequestLocationPermissionModal,
  RequestLocationPermissionBanner,
} from '@components';

import * as Styled from './styles';
import { useLocationPermission } from './useLocationPermission';

export function LocationPermission(): React.JSX.Element {
  const { handlerRequestUserLocation, requestPermissionModalRef } =
    useLocationPermission();

  return (
    <Styled.Container testID="location-permission-screen">
      <Styled.Content>
        <RequestLocationPermissionBanner />

        <Button.Root
          testID="location-permission-button"
          type="filled"
          onPress={handlerRequestUserLocation}>
          <Button.Text>Permitir Localização</Button.Text>
        </Button.Root>
      </Styled.Content>

      <RequestLocationPermissionModal modalRef={requestPermissionModalRef} />
    </Styled.Container>
  );
}
