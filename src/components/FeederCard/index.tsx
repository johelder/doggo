import React from 'react';

import { useTheme } from 'styled-components/native';

import { useMaintenance } from '@domain';
import { getFoodsLabel } from '@utils';

import { Button, FeederStatus, InformationLabel } from '..';

import * as Styled from './styles';
import { FeederCardProps } from './types';
import { useFeederCard } from './useFeederCard';

export function FeederCard({
  feeder,
  sideButton,
  onClose,
}: FeederCardProps): React.JSX.Element {
  const { estimatedDistanceUntilTheFeeder, handleNavigateToFeederDetails } =
    useFeederCard(feeder, onClose);

  const { isNeedMaintenance } = useMaintenance(feeder.maintenanceStatus);

  const theme = useTheme();

  const { street, houseNumber, neighborhood, city } = feeder.address;

  return (
    <Styled.Container>
      <Styled.Header>
        <FeederStatus
          align={sideButton ? 'center' : 'left'}
          isNeedMaintenance={isNeedMaintenance()}
          size="sm"
        />

        {sideButton}
      </Styled.Header>

      <InformationLabel
        label={`${street}, ${houseNumber}, ${neighborhood}, ${city} (≈ ${estimatedDistanceUntilTheFeeder})`}
        iconName="signpost"
        color={theme.colors.gray[700]}
        size="sm"
      />

      <InformationLabel
        label={getFoodsLabel(feeder.foods)}
        iconName="cookingPot"
        size="sm"
      />

      <InformationLabel
        label={`Comedouro de ${feeder.user.name}`}
        iconName="user"
        size="sm"
      />

      <Styled.Actions>
        <Button.Root
          type="unfilled"
          height={25}
          onPress={handleNavigateToFeederDetails}>
          <Button.Text color={theme.colors.orange[500]}>
            Ver detalhes
          </Button.Text>
        </Button.Root>
      </Styled.Actions>
    </Styled.Container>
  );
}
