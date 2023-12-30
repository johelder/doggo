import React from 'react';

import * as Styled from './styles';
import { useDoubtTooltip } from './useDoubtTooltip';

export function DoubtTooltip(): React.JSX.Element {
  const { handleToggleTooltip, isTooltipVisible } = useDoubtTooltip();

  return (
    <Styled.Button onPress={handleToggleTooltip}>
      <Styled.Label>?</Styled.Label>

      {isTooltipVisible && (
        <Styled.TooltipContainer onPress={handleToggleTooltip}>
          <Styled.TooltipLabel>
            O status de manutenção deve ser atualizado apenas quando você tiver
            reabastecido/limpado o comedouro.
          </Styled.TooltipLabel>
        </Styled.TooltipContainer>
      )}
    </Styled.Button>
  );
}
