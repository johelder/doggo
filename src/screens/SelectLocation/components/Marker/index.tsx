import React from 'react';

import type { IMarkerProps } from './types';

import * as S from './styles';

export function Marker({ isTooltipVisible = false }: IMarkerProps) {
  return (
    <S.Container pointerEvents="none">
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

      <S.Marker />
    </S.Container>
  );
}
