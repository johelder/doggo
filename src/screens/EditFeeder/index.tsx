import React from 'react';
import { ScrollView } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';

import { FeederForm, CustomHeader, MiniMap } from '@components';
import { AppScreenProps } from '@routes';

import * as Styled from './styles';
import { useEditFeeder } from './useEditFeeder';

export function EditFeeder({
  route,
}: AppScreenProps<'EditFeeder'>): React.JSX.Element {
  const headerHeight = useHeaderHeight();
  const { feederFormRef, handleUpdateFeeder, isPending } = useEditFeeder();

  const { latitude, longitude } = route.params.coordinate;
  const { street, neighborhood, city } = route.params.address;

  return (
    <Styled.Container>
      <CustomHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MiniMap coords={{ latitude, longitude }} headerHeight={headerHeight} />

        <Styled.FormContainer>
          <Styled.Title>{street}</Styled.Title>

          <Styled.Subtitle>
            {neighborhood}, {city}
          </Styled.Subtitle>

          <FeederForm
            ref={feederFormRef}
            onSubmit={handleUpdateFeeder}
            isLoading={isPending}
          />
        </Styled.FormContainer>
      </ScrollView>
    </Styled.Container>
  );
}
