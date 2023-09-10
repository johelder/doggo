import React from 'react';
import { ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import { FeederForm, CustomHeader } from '@components';
import { MiniMap } from '@app/src/components/Map/components/MiniMap';
import { useEditFeeder } from './useEditFeeder';

import type { TRootStackScreenProps } from '@types';

import * as S from './styles';

export function EditFeeder({
  route,
}: TRootStackScreenProps<'EditFeeder'>): JSX.Element {
  const headerHeight = useHeaderHeight();
  const { feederFormRef, handleUpdateFeeder } = useEditFeeder();

  const { latitude, longitude } = route.params.coordinate;
  const { street, neighborhood, city } = route.params.address;

  return (
    <S.Container>
      <CustomHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MiniMap coords={{ latitude, longitude }} headerHeight={headerHeight} />

        <S.FormContainer>
          <S.Title>{street}</S.Title>

          <S.Subtitle>
            {neighborhood}, {city}
          </S.Subtitle>

          <FeederForm ref={feederFormRef} onSubmit={handleUpdateFeeder} />
        </S.FormContainer>
      </ScrollView>
    </S.Container>
  );
}
