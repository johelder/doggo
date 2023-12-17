import React from 'react';

import ArrowClockwise from 'phosphor-react-native/src/icons/ArrowClockwise';
import Warning from 'phosphor-react-native/src/icons/Warning';
import { useTheme } from 'styled-components/native';

import { Button, PageAlert } from '@components';
import { handleOpenSupport } from '@utils';

import * as S from './styles';
import { ErrorFallbackProps } from './types';

export function ErrorFallback({ onTryAgain }: ErrorFallbackProps): JSX.Element {
  const theme = useTheme();

  return (
    <PageAlert
      title="Nós tivemos um pequeno problema"
      description="Ocorreu um erro ao se conectar com o servidor."
      icon={<Warning color={theme.colors.gray[0]} size={24} />}
      color={theme.colors.red[400]}
      actionButton={
        <>
          <Button.Root
            type="filled"
            color={theme.colors.red[500]}
            onPress={onTryAgain}>
            <Button.Icon>
              <ArrowClockwise color={theme.colors.gray[0]} size={24} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[0]}>
              Tentar novamente
            </Button.Text>
          </Button.Root>

          <S.Label>
            Se o problema persistir, por favor,{' '}
            <S.Highlighted onPress={handleOpenSupport}>
              contate-nos
            </S.Highlighted>
            .
          </S.Label>
        </>
      }
    />
  );
}
