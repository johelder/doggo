import React from 'react';

import DeleteAccountIllustration from '@assets/images/delete-account-illustration.svg';
import { useTheme } from 'styled-components/native';

import { Button, Icon } from '@components';

import * as Styled from './styles';
import { useDeleteAccount } from './useDeleteAccount';

export function DeleteAccount(): React.JSX.Element {
  const { handleConfirmDelete } = useDeleteAccount();
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <Styled.Title>Exclusão de conta</Styled.Title>

          <Styled.Description>
            Essa ação não pode ser desfeita. Isso excluirá permanetemente a sua
            conta e seus comedouros do aplicativo doggo.
          </Styled.Description>

          <DeleteAccountIllustration width="100%" height="60%" />
        </Styled.Header>

        <Button.Root
          type="filled"
          color={theme.colors.red[500]}
          onPress={handleConfirmDelete}>
          <Button.Icon>
            <Icon name="trashSimple" color={theme.colors.gray[0]} />
          </Button.Icon>
          <Button.Text>Excluir</Button.Text>
        </Button.Root>
      </Styled.Content>
    </Styled.Container>
  );
}
