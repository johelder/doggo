import React from 'react';

import { useTheme } from 'styled-components/native';

import { Button, Icon, NavigationButton } from '@components';
import { useAuth } from '@domain';
import { AppScreenProps } from '@routes';

import { version } from '../../../package.json';

import * as Styled from './styles';

export function Settings({
  navigation,
}: AppScreenProps<'Settings'>): React.JSX.Element {
  const { handleSignOut } = useAuth();

  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.MainContent>
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
        </Styled.MainContent>

        <Styled.Footer>
          <Styled.Label>Versão - {version}</Styled.Label>

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
        </Styled.Footer>
      </Styled.Content>
    </Styled.Container>
  );
}
