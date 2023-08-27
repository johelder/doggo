/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useTheme } from 'styled-components/native';

import Trash from 'phosphor-react-native/src/icons/Trash';
import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine';

import { Button, Modal } from '@components';

import type { IFeederDetailsModal } from './types';

import * as S from './styles';

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
        padding: 16,
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
            color={theme.colors.attention[500]}>
            Cancelar
          </Button.Text>
        </Button.Root>
      </S.Container>
    </Modal>
  );
}
