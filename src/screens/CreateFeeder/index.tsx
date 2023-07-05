import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import { FeederForm } from '@src/components';
import { CustomHeader } from '@src/components/CustomHeader';
import { MiniMap } from '@src/components/Map/components/MiniMap';
import { useCreateFeeder } from './useCreateFeeder';

import type { TCreateFeederProps } from './types';

import * as S from './styles';

export function CreateFeeder({ route }: TCreateFeederProps): JSX.Element {
  const headerHeight = useHeaderHeight();
  const { feederFormRef, handleCreateFeeder } = useCreateFeeder();

  const { latitude, longitude } = route.params.coordinate;
  const { street, neighborhood, city } = route.params.address;

  return (
    <S.Container>
      <CustomHeader />

      <MiniMap coords={{ latitude, longitude }} headerHeight={headerHeight} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position">
          <S.FormContainer>
            <>
              <S.Title>{street}</S.Title>
              <S.Subtitle>
                {neighborhood}, {city}
              </S.Subtitle>
            </>

            <FeederForm ref={feederFormRef} onSubmit={handleCreateFeeder} />
          </S.FormContainer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </S.Container>
  );
}
