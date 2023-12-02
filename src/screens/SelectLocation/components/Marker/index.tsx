import React from 'react';

import * as S from './styles';
import { IMarkerProps } from './types';

export function Marker({ isTooltipVisible = false }: IMarkerProps) {
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

        <S.Marker />
      </S.Content>
    </S.Container>
  );
}
