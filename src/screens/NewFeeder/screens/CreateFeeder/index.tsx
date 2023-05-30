import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Marker } from 'react-native-maps';
import { useTheme } from 'styled-components';

import Dog from 'phosphor-react-native/src/icons/Dog';
import Cat from 'phosphor-react-native/src/icons/Cat';
import DotsThreeCircle from 'phosphor-react-native/src/icons/DotsThreeCircle';

import { Button, ChipButton, Input, Loader } from '@src/components';

import { CustomHeader } from '../../components/CustomHeader';
import { useCreateFeeder } from './useCreateFeeder';

import { LATITUDE_DELTA, LONGITUDE_DELTA } from '@src/components/Map/constants';
import { MAX_ZOOM_LEVEL, MIN_ZOOM_LEVEL } from './constants';
import type { TCreateFeederProps } from './types';

import * as S from './styles';

export function CreateFeeder({ route }: TCreateFeederProps): JSX.Element {
  const headerHeight = useHeaderHeight();
  const theme = useTheme();
  const {
    addressNumber,
    setAddressNumber,
    addressComplement,
    setAddressComplement,
    addressReference,
    setAddressReference,
    handleToggleFeedFoods,
    feederFoods,
    handleCreateFeeder,
    isLoading,
  } = useCreateFeeder();

  return (
    <S.Container>
      <CustomHeader />

      <S.MapPreview
        initialRegion={{
          latitude: route.params.coordinate.latitude,
          longitude: route.params.coordinate.longitude,
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
            latitude: route.params.coordinate.latitude,
            longitude: route.params.coordinate.longitude,
          }}
        />
      </S.MapPreview>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position">
          <S.FormContainer>
            <>
              <S.Title>{route.params.address.street}</S.Title>
              <S.Subtitle>
                {route.params.address.neighborhood}, {route.params.address.city}
              </S.Subtitle>
            </>

            <S.FormContent>
              <>
                <S.InputsWrapper>
                  <S.InputContainer flex={1}>
                    <Input
                      value={addressNumber}
                      onChangeText={setAddressNumber}
                      placeholder="Número"
                    />
                  </S.InputContainer>

                  <S.InputContainer flex={3}>
                    <Input
                      value={addressComplement}
                      onChangeText={setAddressComplement}
                      placeholder="Complemento"
                    />

                    <S.FieldDescription>Apto / Bloco / Casa</S.FieldDescription>
                  </S.InputContainer>
                </S.InputsWrapper>

                <S.InputsWrapper>
                  <Input
                    value={addressReference}
                    onChangeText={setAddressReference}
                    placeholder="Ponto de referência"
                  />
                </S.InputsWrapper>

                <S.FormFooter>
                  <S.Label>Seu comedouro alimenta: </S.Label>

                  <S.ChipsWrapper>
                    <S.ChipButtonContainer>
                      <ChipButton
                        isSelected={feederFoods.dog}
                        onPress={() => handleToggleFeedFoods('dog')}>
                        <Dog
                          color={
                            feederFoods.dog
                              ? theme.colors.gray[500]
                              : theme.colors.gray[300]
                          }
                        />
                        <S.Label isSelected={feederFoods.dog}>
                          Cachorros
                        </S.Label>
                      </ChipButton>
                    </S.ChipButtonContainer>

                    <S.ChipButtonContainer>
                      <ChipButton
                        isSelected={feederFoods.cat}
                        onPress={() => handleToggleFeedFoods('cat')}>
                        <Cat
                          color={
                            feederFoods.cat
                              ? theme.colors.gray[500]
                              : theme.colors.gray[300]
                          }
                        />
                        <S.Label isSelected={feederFoods.cat}>Gatos</S.Label>
                      </ChipButton>
                    </S.ChipButtonContainer>
                  </S.ChipsWrapper>

                  <ChipButton
                    isSelected={feederFoods.others}
                    onPress={() => handleToggleFeedFoods('others')}>
                    <DotsThreeCircle
                      color={
                        feederFoods.others
                          ? theme.colors.gray[500]
                          : theme.colors.gray[300]
                      }
                    />
                    <S.Label isSelected={feederFoods.others}>Outros</S.Label>
                  </ChipButton>
                </S.FormFooter>
              </>
            </S.FormContent>

            <Button.Root
              type="filled"
              color={theme.colors.primary[500]}
              onPress={handleCreateFeeder}
              disabled={isLoading}>
              {isLoading ? (
                <Loader />
              ) : (
                <Button.Text color={theme.colors.utils.white}>
                  Salvar comedouro
                </Button.Text>
              )}
            </Button.Root>
          </S.FormContainer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </S.Container>
  );
}
