import React from 'react';
import { useTheme } from 'styled-components';

import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import User from 'phosphor-react-native/src/icons/User';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import Heart from 'phosphor-react-native/src/icons/Heart';
import X from 'phosphor-react-native/src/icons/X';

import { Button } from '@src/components';
import { getFoodsLabel } from '@src/utils/getFoodsLabel';
import { useFeederCard } from './useFeederCard';
import type { IFeedCardProps } from './types';

import * as S from './styles';

export function FeederCard({
  feeder,
  onClose,
  isReadOnly = false,
}: IFeedCardProps) {
  const {
    handleOpenDirections,
    estimatedDistanceUntilTheFeeder,
    toggleFavoriteFeeder,
    isFavorite,
    isLoadingFavorite,
  } = useFeederCard(feeder);

  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.Session>
          <CookingPot color={theme.colors.gray[700]} />
          <S.Title>{getFoodsLabel(feeder?.foods)}</S.Title>
        </S.Session>

        {!isReadOnly && (
          <S.CloseButton onPress={onClose}>
            <X size={18} color={theme.colors.gray[700]} weight="bold" />
          </S.CloseButton>
        )}
      </S.Header>

      <S.Session>
        <MapPin color={theme.colors.gray[500]} />

        <S.SubTitle>
          {feeder?.address.street}, {feeder?.address.houseNumber},{' '}
          {feeder?.address.neighborhood}, {feeder?.address.city} (≈
          {estimatedDistanceUntilTheFeeder})
        </S.SubTitle>
      </S.Session>

      <S.Session>
        <User color={theme.colors.gray[500]} />

        <S.SubTitle>Comedouro de {feeder?.user.name}</S.SubTitle>
      </S.Session>

      <S.Actions>
        <Button.Root
          type="filled"
          color={theme.colors.primary[500]}
          height={45}
          onPress={handleOpenDirections}>
          <Button.Icon>
            <Signpost color={theme.colors.utils.white} />
          </Button.Icon>

          <Button.Text color={theme.colors.utils.white}>Ver rotas</Button.Text>
        </Button.Root>

        <Button.Root
          type="outline"
          color={
            isFavorite ? theme.colors.attention[500] : theme.colors.gray[700]
          }
          height={45}
          onPress={toggleFavoriteFeeder}
          isLoading={isLoadingFavorite}>
          <Button.Icon>
            <Heart
              color={
                isFavorite
                  ? theme.colors.attention[500]
                  : theme.colors.gray[700]
              }
              weight={isFavorite ? 'fill' : 'regular'}
            />
          </Button.Icon>

          <Button.Text
            color={
              isFavorite ? theme.colors.attention[500] : theme.colors.gray[700]
            }>
            {isFavorite ? 'Favorito' : 'Favoritar'}
          </Button.Text>
        </Button.Root>
      </S.Actions>
    </S.Container>
  );
}
