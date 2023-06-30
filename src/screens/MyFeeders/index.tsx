import React, { useCallback } from 'react';
import { ListRenderItemInfo, View } from 'react-native';

import { useTheme } from 'styled-components';

import DotsThreeVertical from 'phosphor-react-native/src/icons/DotsThreeVertical';
import CirclesThreePlus from 'phosphor-react-native/src/icons/CirclesThreePlus';
import FolderOpen from 'phosphor-react-native/src/icons/FolderOpen';

import { Button, Error, FeederCard, Loader } from '@src/components';
import { useMyFeeders } from './useMyFeeders';

import type { IDomainFeeder } from '@src/types/domain';

import * as S from './styles';

export function MyFeeders(): JSX.Element {
  const {
    feeders,
    pageStatus,
    handleTryAgain,
    handleRedirectToSelectLocation,
  } = useMyFeeders();
  const theme = useTheme();

  const renderFeeder = useCallback(
    ({ item: feeder }: ListRenderItemInfo<IDomainFeeder>) => {
      return (
        <FeederCard.ReadOnly
          feeder={feeder}
          sideButton={
            <S.DetailsButton>
              <DotsThreeVertical color={theme.colors.gray[700]} weight="bold" />
            </S.DetailsButton>
          }
        />
      );
    },
    [theme.colors.gray],
  );

  const renderListEmptyComponent = useCallback(() => {
    return (
      <S.EmptyListContainer>
        <S.IconContainer>
          <FolderOpen color={theme.colors.gray[700]} size={24} />
        </S.IconContainer>

        <View>
          <S.Title>Sem comedouros</S.Title>

          <S.Label>
            Cadastre um novo comedouro para ajudar animais de rua próximos a
            você.
          </S.Label>
        </View>

        <Button.Root
          type="filled"
          color={theme.colors.primary[500]}
          onPress={handleRedirectToSelectLocation}>
          <Button.Icon>
            <CirclesThreePlus size={24} color={theme.colors.utils.white} />
          </Button.Icon>

          <Button.Text color={theme.colors.utils.white}>
            Cadastrar novo comedouro
          </Button.Text>
        </Button.Root>
      </S.EmptyListContainer>
    );
  }, [
    handleRedirectToSelectLocation,
    theme.colors.gray,
    theme.colors.primary,
    theme.colors.utils.white,
  ]);

  if (pageStatus === 'loading') {
    return <Loader.Page />;
  }

  if (pageStatus === 'error') {
    return (
      <Error
        title="Desculpe, ocorreu um erro ao se conectar com o servidor"
        onTryAgain={handleTryAgain}
      />
    );
  }

  return (
    <S.Container>
      <S.Content>
        <S.Feeders
          data={feeders}
          keyExtractor={feeder => feeder.id}
          renderItem={renderFeeder}
          ListEmptyComponent={renderListEmptyComponent}
        />
      </S.Content>
    </S.Container>
  );
}
