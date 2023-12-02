import React from 'react';

import { Portal } from 'react-native-portalize';
import { useTheme } from 'styled-components/native';

import { Button } from '../../Button';
import { Modal } from '../../Modal';

import * as S from './styles';
import { IRequestLocationPermissionModalProps } from './types';
import { useRequestLocationPermissionModal } from './useRequestLocationPermissionModal';

export function RequestLocationPermissionModal({
  modalRef,
}: IRequestLocationPermissionModalProps) {
  const { handleOpenAppLocationSettings } = useRequestLocationPermissionModal();
  const theme = useTheme();

  return (
    <Portal>
      <Modal
        modalRef={modalRef}
        adjustToContentHeight
        handlePosition="inside"
        modalStyle={{ padding: theme.spacings.md }}>
        <S.Container>
          <S.Title>Não conseguimos acesso à sua localização.</S.Title>
          <S.Description>
            Verifique se a sua localização está ativada e se o aplicativo possui
            permissão para usá-la.
          </S.Description>

          <S.Footer>
            <Button.Root type="filled" onPress={handleOpenAppLocationSettings}>
              <Button.Text>Ir para configurações</Button.Text>
            </Button.Root>
          </S.Footer>
        </S.Container>
      </Modal>
    </Portal>
  );
}
