import React from 'react';

import { useTheme } from 'styled-components/native';

import { Button, Icon } from '@components';

import { DoubtTooltip } from '..';
import { UpdateMaintenanceCheckbox } from '../UpdateMaintenanceCheckbox';

import * as Styled from './styles';
import { FeederMaintenanceFormProps } from './types';
import { useFeederMaintenanceForm } from './useFeederMaintenanceForm';

export function FeederMaintenanceForm({
  feederId,
}: FeederMaintenanceFormProps): React.JSX.Element {
  const theme = useTheme();

  const {
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
  } = useFeederMaintenanceForm(feederId);

  return (
    <>
      <Styled.FormHeader>
        <Styled.Title appearance="dark">
          Atualizar o status da manutenção
        </Styled.Title>

        <DoubtTooltip />
      </Styled.FormHeader>

      <UpdateMaintenanceCheckbox
        label="Reabasteci o comedouro"
        status="supply"
        handleToggleMaintenanceStatus={handleToggleMaintenanceStatus}
        isStatusAdded={isStatusAdded}
      />

      <UpdateMaintenanceCheckbox
        label="Limpei o comedouro"
        status="cleaning"
        handleToggleMaintenanceStatus={handleToggleMaintenanceStatus}
        isStatusAdded={isStatusAdded}
      />

      <Button.Root
        type="filled"
        onPress={handleUpdateFeederMaintenance}
        color={theme.colors.cyan[600]}>
        <Button.Icon>
          <Icon name="gear" color={theme.colors.gray[0]} />
        </Button.Icon>

        <Button.Text color={theme.colors.gray[0]}>Atualizar</Button.Text>
      </Button.Root>
    </>
  );
}
