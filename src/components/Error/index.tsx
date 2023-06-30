import React from 'react';
import { useTheme } from 'styled-components';

import ArrowsClockwise from 'phosphor-react-native/src/icons/ArrowsClockwise';

import { Button } from '@src/components';
import ErrorIllustration from '@src/assets/images/error-illustration.svg';
import { useError } from './useError';

import type { IErrorProps } from './types';

import * as S from './styles';

export function Error({ title, onTryAgain }: IErrorProps) {
  const { handleOpenSupport } = useError();
  const theme = useTheme();

  return (
    <S.Container>
      <ErrorIllustration />

      <S.Title>{title}</S.Title>

      <S.Footer>
        <Button.Root
          type="filled"
          color={theme.colors.attention[500]}
          onPress={onTryAgain}>
          <Button.Icon>
            <ArrowsClockwise color={theme.colors.utils.white} size={24} />
          </Button.Icon>

          <Button.Text color={theme.colors.utils.white}>
            Tentar novamente
          </Button.Text>
        </Button.Root>

        <S.Label>
          Se o problema persistir, por favor,{' '}
          <S.Highlighted onPress={handleOpenSupport}>contate-nos</S.Highlighted>
          .
        </S.Label>
      </S.Footer>
    </S.Container>
  );
}
