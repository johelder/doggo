import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Marker } from 'react-native-maps';

import { FeederForm } from '@src/components';
import { CustomHeader } from '@src/components/CustomHeader';
import { useCreateFeeder } from './useCreateFeeder';

import { LATITUDE_DELTA, LONGITUDE_DELTA } from '@src/components/Map/constants';
import { MAX_ZOOM_LEVEL, MIN_ZOOM_LEVEL } from './constants';
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

      <S.MapPreview
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={{ marginTop: headerHeight }}
        zoomEnabled={false}
        zoomTapEnabled={false}
        zoomControlEnabled={false}
        scrollEnabled={false}
        minZoomLevel={MIN_ZOOM_LEVEL}
        maxZoomLevel={MAX_ZOOM_LEVEL}>
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </S.MapPreview>

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
