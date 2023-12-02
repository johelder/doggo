import React from 'react';

import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine';
import Trash from 'phosphor-react-native/src/icons/Trash';
import { useTheme } from 'styled-components/native';

import { Button, Modal } from '@components';

import * as S from './styles';
import { IFeederDetailsModal } from './types';

export function FeederDetailsModal({
  detailsModalRef,
  feeder,
  onCancel,
  onDelete,
  onEdit,
  isLoadingDelete,
}: IFeederDetailsModal) {
  const theme = useTheme();

  return (
    <Modal
      modalRef={detailsModalRef}
      modalStyle={{
        padding: theme.spacings.md,
      }}
      handleStyle={{
        backgroundColor: theme.colors.gray[300],
      }}
      adjustToContentHeight
      handlePosition="inside">
      <S.Container>
        <S.Header>
          <S.Title>
            {feeder?.address.street}, {feeder?.address.houseNumber},{' '}
            {feeder?.address.neighborhood} - {feeder?.address.city}
          </S.Title>

          {(feeder?.address.complement || feeder?.address.reference) && (
            <S.Description>
              {feeder?.address.reference
                ? `${feeder?.address.reference} - `
                : ''}{' '}
              {feeder?.address.complement}
            </S.Description>
          )}
        </S.Header>

        <S.ActionsContainer>
          <Button.Root
            type="outline"
            color={theme.colors.gray[200]}
            onPress={() => onDelete(feeder?.id ?? '')}
            isLoading={isLoadingDelete}>
            <Button.Icon>
              <Trash color={theme.colors.gray[700]} weight="light" />
            </Button.Icon>

            <Button.Text
              color={theme.colors.gray[700]}
              style={{ fontFamily: theme.fonts.primary.medium }}>
              Excluir
            </Button.Text>
          </Button.Root>

          <Button.Root
            type="outline"
            color={theme.colors.gray[200]}
            onPress={onEdit}>
            <Button.Icon>
              <PencilSimpleLine color={theme.colors.gray[700]} weight="light" />
            </Button.Icon>

            <Button.Text
              color={theme.colors.gray[700]}
              style={{ fontFamily: theme.fonts.primary.medium }}>
              Editar
            </Button.Text>
          </Button.Root>
        </S.ActionsContainer>

        <Button.Root type="unfilled" onPress={onCancel}>
          <Button.Text
            style={{ fontFamily: theme.fonts.primary.medium }}
            color={theme.colors.red[500]}>
            Cancelar
          </Button.Text>
        </Button.Root>
      </S.Container>
    </Modal>
  );
}
