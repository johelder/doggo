import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon, Button, InformationLabel } from '@components';
import { useUserIsFeederFavorite, useUserToggleFavoriteFeeder } from '@domain';
import { getFoodsLabel, showToast } from '@utils';

import * as Styled from './styles';
import { FeederLocationSectionProps } from './types';
import { useFeederLocationSection } from './useFeederLocationSection';

export function FeederLocationSection({
  feeder,
}: FeederLocationSectionProps): React.JSX.Element {
  const theme = useTheme();

  const { handleOpenDirections, estimatedDistanceUntilTheFeeder } =
    useFeederLocationSection(feeder);

  const { isFavorite, isLoading: isLoadingFavorite } = useUserIsFeederFavorite({
    feederId: feeder.id,
    enabled: !!feeder.id,
  });

  const { toggleFavoriteFeeder } = useUserToggleFavoriteFeeder(feeder.id, {
    onError: () => {
      showToast({
        type: 'error',
        message: 'Ocorreu um erro ao favoritar, tente novamente mais tarde.',
      });
    },
  });

  const {
    address: { street, houseNumber, neighborhood, city, complement, reference },
  } = feeder;

  return (
    <Styled.Main>
      <Styled.Title appearance="dark">Localização</Styled.Title>

      <InformationLabel
        label={getFoodsLabel(feeder.foods)}
        iconName="cookingPot"
      />

      <InformationLabel
        label={`${street}, ${houseNumber}, ${neighborhood}, ${city} (≈ ${estimatedDistanceUntilTheFeeder})`}
        iconName="signpost"
      />

      {complement && reference && (
        <InformationLabel
          label={`${reference} - ${complement}`}
          iconName="mapPin"
        />
      )}

      <Button.Root
        type="filled"
        color={theme.colors.orange[500]}
        onPress={handleOpenDirections}>
        <Button.Icon>
          <Icon name="signpost" color={theme.colors.gray[0]} />
        </Button.Icon>

        <Button.Text color={theme.colors.gray[0]}>Ver rotas</Button.Text>
      </Button.Root>

      <Button.Root
        testID="favorite-button"
        type="outline"
        color={isFavorite ? theme.colors.cyan[600] : theme.colors.gray[700]}
        isLoading={isLoadingFavorite}
        onPress={() => toggleFavoriteFeeder(feeder.id)}>
        <Button.Icon>
          <Icon
            name={isFavorite ? 'heartFilled' : 'heart'}
            color={isFavorite ? theme.colors.cyan[600] : theme.colors.gray[700]}
          />
        </Button.Icon>

        <Button.Text
          color={isFavorite ? theme.colors.cyan[600] : theme.colors.gray[700]}>
          {isFavorite ? 'Favorito' : 'Favoritar'}
        </Button.Text>
      </Button.Root>
    </Styled.Main>
  );
}
