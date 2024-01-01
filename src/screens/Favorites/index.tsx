import React from 'react';

import { Loader } from '@components';
import { useFeederFindAllFavorites } from '@domain';

import { ErrorFallback, List } from './components';
import * as Styled from './styles';

export function Favorites(): React.JSX.Element {
  const { feeders, isLoading, isError, refetch } = useFeederFindAllFavorites();

  if (isLoading) {
    return <Loader.Page />;
  }

  if (isError) {
    return <ErrorFallback onTryAgain={refetch} />;
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <List feeders={feeders} />
      </Styled.Content>
    </Styled.Container>
  );
}
