import React from 'react';
import { useTheme } from 'styled-components/native';

import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import User from 'phosphor-react-native/src/icons/User';
import Info from 'phosphor-react-native/src/icons/Info';
import CheckCircle from 'phosphor-react-native/src/icons/CheckCircle';

import { Button } from '../Button';
import { getFoodsLabel } from '@utils';
import { useFeederCard } from './useFeederCard';

import type { IFeedCardProps } from './types';

import * as S from './styles';

export function FeederCard({ feeder, sideButton, onClose }: IFeedCardProps) {
  const {
    estimatedDistanceUntilTheFeeder,
    isNeedMaintenance,
    handleNavigateToFeederDetails,
  } = useFeederCard(feeder, onClose);

  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.HighlightedWarningContainer hasActionButton={!!sideButton}>
          {isNeedMaintenance() ? (
            <Info color={theme.colors.attention[500]} />
          ) : (
            <CheckCircle color={theme.colors.success[500]} />
          )}
          <S.HighlightedWarning isNeedMaintenance={isNeedMaintenance()}>
            {isNeedMaintenance()
              ? 'Precisando de manutenção'
              : 'Manutenção em dias'}
          </S.HighlightedWarning>
        </S.HighlightedWarningContainer>

        {sideButton}
      </S.Header>

      <S.Session>
        <Signpost color={theme.colors.gray[700]} />

        <S.Title>
          {feeder?.address.street}, {feeder?.address.houseNumber},{' '}
          {feeder?.address.neighborhood}, {feeder?.address.city} (≈
          {estimatedDistanceUntilTheFeeder})
        </S.Title>
      </S.Session>

      <S.Session>
        <CookingPot color={theme.colors.gray[500]} />
        <S.SubTitle>{getFoodsLabel(feeder?.foods)}</S.SubTitle>
      </S.Session>

      <S.Session>
        <User color={theme.colors.gray[500]} />

        <S.SubTitle>Comedouro de {feeder?.user.name}</S.SubTitle>
      </S.Session>

      <S.Actions>
        <Button.Root
          type="unfilled"
          height={25}
          onPress={handleNavigateToFeederDetails}>
          <Button.Text color={theme.colors.primary[500]}>
            Ver detalhes
          </Button.Text>
        </Button.Root>
      </S.Actions>
    </S.Container>
  );
}
