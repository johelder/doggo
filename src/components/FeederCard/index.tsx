import React from 'react';

import { useTheme } from 'styled-components/native';

import { getFoodsLabel } from '@utils';

import { Button } from '../Button';
import { Icon } from '../Icon';

import * as S from './styles';
import { IFeedCardProps } from './types';
import { useFeederCard } from './useFeederCard';

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
          <Icon
            name={isNeedMaintenance() ? 'info' : 'checkCircle'}
            color={theme.colors[isNeedMaintenance() ? 'red' : 'green'][500]}
          />

          <S.HighlightedWarning isNeedMaintenance={isNeedMaintenance()}>
            {isNeedMaintenance()
              ? 'Precisando de manutenção'
              : 'Manutenção em dias'}
          </S.HighlightedWarning>
        </S.HighlightedWarningContainer>

        {sideButton}
      </S.Header>

      <S.Session>
        <Icon name="signpost" color={theme.colors.gray[700]} />
        <S.Title>
          {feeder?.address.street}, {feeder?.address.houseNumber},{' '}
          {feeder?.address.neighborhood}, {feeder?.address.city} (≈
          {estimatedDistanceUntilTheFeeder})
        </S.Title>
      </S.Session>

      <S.Session>
        <Icon name="cookingPot" color={theme.colors.gray[500]} />
        <S.SubTitle>{getFoodsLabel(feeder?.foods)}</S.SubTitle>
      </S.Session>

      <S.Session>
        <Icon name="user" color={theme.colors.gray[500]} />
        <S.SubTitle>Comedouro de {feeder?.user.name}</S.SubTitle>
      </S.Session>

      <S.Actions>
        <Button.Root
          type="unfilled"
          height={25}
          onPress={handleNavigateToFeederDetails}>
          <Button.Text color={theme.colors.orange[500]}>
            Ver detalhes
          </Button.Text>
        </Button.Root>
      </S.Actions>
    </S.Container>
  );
}
