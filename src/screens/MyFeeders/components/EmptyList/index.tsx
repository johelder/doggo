import React from 'react';

import { FolderOpen, CirclesThreePlus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { PageAlert, Button } from '@components';

import { useMyFeeders } from '../../useMyFeeders';

export function EmptyList(): JSX.Element {
  const { handleNavigateToSelectLocation } = useMyFeeders();

  const theme = useTheme();

  return (
    <PageAlert
      title="Sem comedouros"
      description="Cadastre um novo comedouro para ajudar animais de rua próximos a você."
      icon={<FolderOpen color={theme.colors.gray[700]} size={24} />}
      actionButton={
        <Button.Root
          type="filled"
          color={theme.colors.orange[500]}
          onPress={handleNavigateToSelectLocation}>
          <Button.Icon>
            <CirclesThreePlus size={24} color={theme.colors.gray[0]} />
          </Button.Icon>

          <Button.Text color={theme.colors.gray[0]}>
            Cadastrar novo comedouro
          </Button.Text>
        </Button.Root>
      }
    />
  );
}
