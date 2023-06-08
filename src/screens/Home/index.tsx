import React from 'react';
import { StatusBar } from 'react-native';

import { Loader, Map } from '@src/components';
import { useHome } from './useHome';

import * as S from './styles';

export function Home(): JSX.Element {
  const { isLoadingMap, onMapLoaded } = useHome();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <S.Container>
        {isLoadingMap && <Loader.Page />}

        <Map showsUserLocation onMapLoaded={onMapLoaded} />
      </S.Container>
    </>
  );
}
