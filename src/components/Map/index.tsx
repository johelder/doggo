import React from 'react';

import * as S from './styles';

export function Map() {
  return (
    <S.Container>
      <S.Map
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </S.Container>
  );
}
