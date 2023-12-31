import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Button, Icon } from '@components';

import * as Styled from './styles';

export function EmptyList(): React.JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  return (
    <Styled.ListEmptyContainer>
      <Styled.Title>Nenhum comedouro próximo.</Styled.Title>
      <Styled.Description>
        Que tal cadastrar seu comedouro e ajudar animais próximos a você?
      </Styled.Description>

      <Button.Root type="filled" onPress={handleRedirectToSelectLocation}>
        <Button.Icon>
          <Icon name="plusFeeder" color={theme.colors.gray[0]} />
        </Button.Icon>

        <Button.Text>Novo comedouro</Button.Text>
      </Button.Root>
    </Styled.ListEmptyContainer>
  );
}
