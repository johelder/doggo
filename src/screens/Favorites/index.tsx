import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useTheme } from 'styled-components';

import Warning from 'phosphor-react-native/src/icons/Warning';
import ArrowClockwise from 'phosphor-react-native/src/icons/ArrowClockwise';
import HeartBreak from 'phosphor-react-native/src/icons/HeartBreak';
import MapTrifold from 'phosphor-react-native/src/icons/MapTrifold';

import { handleOpenSupport } from '@src/utils';
import { Button, FeederCard, Loader, PageAlert } from '@src/components';
import { useFavorites } from './useFavorites';

import type { IDomainFeeder } from '@src/types/domain';

import * as S from './styles';

export function Favorites(): JSX.Element {
  const { feeders, pageStatus, handleTryAgain, handleRedirectToMap } =
    useFavorites();
  const theme = useTheme();

  const renderFeeder = useCallback(
    ({ item: feeder }: ListRenderItemInfo<IDomainFeeder>) => {
      return <FeederCard feeder={feeder} isReadOnly />;
    },
    [],
  );

  const renderListEmptyComponent = useCallback(() => {
    return (
      <PageAlert
        title="Sem comedouros favoritos"
        description="Seus comedouros favoritados serão encontrados aqui."
        icon={<HeartBreak color={theme.colors.gray[700]} size={24} />}
        actionButton={
          <Button.Root
            type="filled"
            color={theme.colors.primary[500]}
            onPress={handleRedirectToMap}>
            <Button.Icon>
              <MapTrifold size={24} color={theme.colors.utils.white} />
            </Button.Icon>

            <Button.Text color={theme.colors.utils.white}>
              Ir para o mapa
            </Button.Text>
          </Button.Root>
        }
      />
    );
  }, [
    handleRedirectToMap,
    theme.colors.gray,
    theme.colors.primary,
    theme.colors.utils.white,
  ]);

  if (pageStatus === 'loading') {
    return <Loader.Page />;
  }

  if (pageStatus === 'error') {
    return (
      <PageAlert
        title="Nós tivemos um pequeno problema"
        description="Ocorreu um erro ao se conectar com o servidor."
        icon={<Warning color={theme.colors.utils.white} size={24} />}
        color={theme.colors.attention[400]}
        actionButton={
          <>
            <Button.Root
              type="filled"
              color={theme.colors.attention[500]}
              onPress={handleTryAgain}>
              <Button.Icon>
                <ArrowClockwise color={theme.colors.utils.white} size={24} />
              </Button.Icon>

              <Button.Text color={theme.colors.utils.white}>
                Tentar novamente
              </Button.Text>
            </Button.Root>

            <S.Label>
              Se o problema persistir, por favor,{' '}
              <S.Highlighted onPress={handleOpenSupport}>
                contate-nos
              </S.Highlighted>
              .
            </S.Label>
          </>
        }
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
