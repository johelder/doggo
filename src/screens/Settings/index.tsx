import React from 'react';
import { useTheme } from 'styled-components/native';

import SignOut from 'phosphor-react-native/src/icons/SignOut';

import { version } from '../../../package.json';

import { Button } from '@src/components';
import { useAuth } from '@src/hooks';

import * as S from './styles';

export function Settings() {
  const { handleSignOut } = useAuth();

  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.MainContent />

        <S.Footer>
          <S.Label>Versão - {version}</S.Label>

          <Button.Root
            type="outline"
            color={theme.colors.gray[200]}
            onPress={handleSignOut}>
            <Button.Icon>
              <SignOut size={24} color={theme.colors.gray[700]} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[700]}>
              Sair do Aplicativo
            </Button.Text>
          </Button.Root>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}
