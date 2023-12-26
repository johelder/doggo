import React from 'react';

import { useTheme } from 'styled-components/native';

import { Button, Icon, NavigationButton } from '@components';
import { useAuth } from '@hooks';
import { TRootStackScreenProps } from '@types';

import { version } from '../../../package.json';

import * as S from './styles';

export function Settings({ navigation }: TRootStackScreenProps<'Settings'>) {
  const { handleSignOut } = useAuth();

  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.MainContent>
          <NavigationButton
            title="Termos de Uso"
            onPress={() => navigation.navigate('TermsOfUse')}
          />

          <NavigationButton
            title="Política de Privacidade"
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />

          <NavigationButton
            title="Excluir Minha Conta"
            onPress={() => navigation.navigate('DeleteAccount')}
          />
        </S.MainContent>

        <S.Footer>
          <S.Label>Versão - {version}</S.Label>

          <Button.Root
            type="outline"
            color={theme.colors.gray[200]}
            onPress={handleSignOut}>
            <Button.Icon>
              <Icon name="signOut" color={theme.colors.gray[700]} />
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
