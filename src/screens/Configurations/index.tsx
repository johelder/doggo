import React from 'react';
import { useTheme } from 'styled-components';

import { useAuth } from '@src/hooks';
import { Button, NavigationButton } from '@src/components';

import * as S from './styles';

export function Configurations() {
  const { handleSignOut } = useAuth();
  const theme = useTheme();

  return (
    <S.Container>
      <S.MainContent>
        <NavigationButton
          title="Notificações"
          description="Gerenciar notificações"
        />
      </S.MainContent>

      <Button.Root
        type="outline"
        color={theme.colors.gray[200]}
        onPress={handleSignOut}>
        <Button.Icon>
          <S.LogoutIcon />
        </Button.Icon>

        <Button.Text color={theme.colors.gray[700]}>Sair</Button.Text>
      </Button.Root>
    </S.Container>
  );
}
