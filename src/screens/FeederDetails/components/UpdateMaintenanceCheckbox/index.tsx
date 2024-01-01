import React from 'react';

import { useTheme } from 'styled-components/native';

import { Checkbox } from '@components';

import * as Styled from './styles';
import { UpdateMaintenanceButtonProps } from './types';

export function UpdateMaintenanceCheckbox({
  label,
  status,
  handleToggleMaintenanceStatus,
  isStatusAdded,
}: UpdateMaintenanceButtonProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <Styled.Button onPress={() => handleToggleMaintenanceStatus(status)}>
      <Styled.LabelContainer>
        <Checkbox
          isSelected={isStatusAdded(status)}
          color={theme.colors.cyan[600]}
        />

        <Styled.Label appearance={isStatusAdded(status) ? 'dark' : 'light'}>
          {label}
        </Styled.Label>
      </Styled.LabelContainer>
    </Styled.Button>
  );
}
