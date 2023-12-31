import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '@components';

import * as Styled from './styles';
import { MarkerProps } from './types';

export function Marker({
  isTooltipVisible = false,
}: MarkerProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <Styled.Container pointerEvents="none">
      <Styled.Content>
        {isTooltipVisible && (
          <Styled.TooltipContainer>
            <Styled.TooltipContent>
              <Styled.TooltipTitle>Seu comedouro é aqui?</Styled.TooltipTitle>
              <Styled.TooltipDescription>
                Arraste para ajustar{'\n'} a localização
              </Styled.TooltipDescription>
            </Styled.TooltipContent>

            <Styled.TooltipTriangle />
          </Styled.TooltipContainer>
        )}

        <Styled.Marker>
          <Icon
            name="mapPinFilled"
            size={42}
            color={theme.colors.orange[500]}
          />
        </Styled.Marker>
      </Styled.Content>
    </Styled.Container>
  );
}
