import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '@components';

import * as S from './styles';
import { IMarkerProps } from './types';

export function Marker({ isTooltipVisible = false }: IMarkerProps) {
  const theme = useTheme();

  return (
    <S.Container pointerEvents="none">
      <S.Content>
        {isTooltipVisible && (
          <S.TooltipContainer>
            <S.TooltipContent>
              <S.TooltipTitle>Seu comedouro é aqui?</S.TooltipTitle>
              <S.TooltipDescription>
                Arraste para ajustar{'\n'} a localização
              </S.TooltipDescription>
            </S.TooltipContent>

            <S.TooltipTriangle />
          </S.TooltipContainer>
        )}

        <S.Marker>
          <Icon
            name="mapPinFilled"
            size={42}
            color={theme.colors.orange[500]}
          />
        </S.Marker>
      </S.Content>
    </S.Container>
  );
}
