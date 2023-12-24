import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { Loader } from '@components';
import { FeederDomain } from '@data';
import { useFeederFindAllFavorites } from '@domain';

import { EmptyList, ErrorFallback, FavoriteFeeder } from './components';
import * as S from './styles';

export function Favorites(): React.JSX.Element {
  const { feeders, isLoading, isError, refetch } = useFeederFindAllFavorites();

  const renderFeeder = ({ item: feeder }: ListRenderItemInfo<FeederDomain>) => {
    return <FavoriteFeeder feeder={feeder} />;
  };

  if (isLoading) {
    return <Loader.Page />;
  }

  if (isError) {
    return <ErrorFallback onTryAgain={refetch} />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Feeders
          data={feeders}
          keyExtractor={(feeder: FeederDomain) => feeder.id}
          renderItem={renderFeeder}
          ListEmptyComponent={EmptyList}
        />
      </S.Content>
    </S.Container>
  );
}
