import React from 'react';

import { useTheme } from 'styled-components/native';

import { Button, Icon, Modal } from '@components';

import * as S from './styles';
import { FeederDetailsModalProps } from './types';

export function FeederDetailsModal({
  detailsModalRef,
  feeder,
  onCancel,
  onDelete,
  onEdit,
}: FeederDetailsModalProps) {
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
            onPress={() => onDelete(feeder?.id ?? '')}>
            <Button.Icon>
              <Icon name="trashSimple" color={theme.colors.gray[700]} />
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
              <Icon name="pencilSimpleLine" color={theme.colors.gray[700]} />
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
