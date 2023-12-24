import React from 'react';

import DeleteAccountIllustration from '@assets/images/delete-account-illustration.svg';
import TrashSimple from 'phosphor-react-native/src/icons/TrashSimple';
import { useTheme } from 'styled-components/native';

import { Button } from '@components';

import * as S from './styles';
import { useDeleteAccount } from './useDeleteAccount';

export function DeleteAccount(): React.JSX.Element {
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

          <DeleteAccountIllustration width="100%" />
        </S.Header>

        <Button.Root
          type="filled"
          color={theme.colors.red[500]}
          onPress={handleConfirmDelete}>
          <Button.Icon>
            <TrashSimple color={theme.colors.gray[0]} />
          </Button.Icon>
          <Button.Text>Excluir</Button.Text>
        </Button.Root>
      </S.Content>
    </S.Container>
  );
}
