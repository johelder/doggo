import React from 'react';

import { useTheme } from 'styled-components/native';

import { PageAlert, Button, Icon } from '@components';
import { handleOpenSupport } from '@utils';

import * as S from './styles';
import { ErrorFallbackProps } from './types';

export function ErrorFallback({
  onTryAgain,
}: ErrorFallbackProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <PageAlert
      title="Nós tivemos um pequeno problema"
      description="Ocorreu um erro ao se conectar com o servidor."
      icon={<Icon name="warning" color={theme.colors.gray[0]} />}
      color={theme.colors.red[400]}
      actionButton={
        <>
          <Button.Root
            type="filled"
            color={theme.colors.red[500]}
            onPress={onTryAgain}>
            <Button.Icon>
              <Icon name="arrowClockwise" color={theme.colors.gray[0]} />
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
