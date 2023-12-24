import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { PlusIcon } from '@assets';
import { Button } from '@components';

import * as S from './styles';

export function EmptyList(): React.JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  return (
    <S.ListEmptyContainer>
      <S.Title>Nenhum comedouro próximo.</S.Title>
      <S.Description>
        Que tal cadastrar seu comedouro e ajudar animais próximos a você?
      </S.Description>

      <Button.Root type="filled" onPress={handleRedirectToSelectLocation}>
        <Button.Icon>
          <PlusIcon size={24} color={theme.colors.gray[0]} />
        </Button.Icon>

        <Button.Text>Novo comedouro</Button.Text>
      </Button.Root>
    </S.ListEmptyContainer>
  );
}
