import React from 'react';

import { Portal } from 'react-native-portalize';
import { useTheme } from 'styled-components/native';

import { Button } from '../../Button';
import { Modal } from '../../Modal';

import * as Styled from './styles';
import { RequestLocationPermissionModalProps } from './types';
import { useRequestLocationPermissionModal } from './useRequestLocationPermissionModal';

export function RequestLocationPermissionModal({
  modalRef,
}: RequestLocationPermissionModalProps): React.JSX.Element {
  const { handleOpenAppLocationSettings } = useRequestLocationPermissionModal();
  const theme = useTheme();

  return (
    <Portal>
      <Modal
        modalRef={modalRef}
        adjustToContentHeight
        handlePosition="inside"
        modalStyle={{ padding: theme.spacings.md }}>
        <Styled.Container>
          <Styled.Title>Não conseguimos acesso à sua localização.</Styled.Title>
          <Styled.Description>
            Verifique se a sua localização está ativada e se o aplicativo possui
            permissão para usá-la.
          </Styled.Description>

          <Styled.Footer>
            <Button.Root type="filled" onPress={handleOpenAppLocationSettings}>
              <Button.Text>Ir para configurações</Button.Text>
            </Button.Root>
          </Styled.Footer>
        </Styled.Container>
      </Modal>
    </Portal>
  );
}
