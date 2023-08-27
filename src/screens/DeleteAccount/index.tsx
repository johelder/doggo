import React from 'react';
import { useTheme } from 'styled-components/native';

import { Button } from '@components';
import { useDeleteAccount } from './useDeleteAccount';

import * as S from './styles';

export function DeleteAccount(): JSX.Element {
  const { handleConfirmDelete } = useDeleteAccount();
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Title>Exclusão de conta</S.Title>

          <S.Description>
            Essa ação não pode ser desfeita. Isso excluirá permanetemente a sua
            conta e seus comedouros do aplicativo doggo.
          </S.Description>
        </S.Header>

        <Button.Root
          type="filled"
          color={theme.colors.attention[500]}
          onPress={handleConfirmDelete}>
          <Button.Text>Excluir</Button.Text>
        </Button.Root>
      </S.Content>
    </S.Container>
  );
}
