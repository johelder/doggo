import React from 'react';

import { useTheme } from 'styled-components/native';

import { FeederCard, Icon } from '@components';

import * as S from './styles';
import { TooltipProps } from './types';

export function Tooltip({
  isTooltipVisible,
  setIsTooltipVisible,
  currentFeederOpened,
}: TooltipProps): React.JSX.Element | null {
  const theme = useTheme();

  if (!isTooltipVisible || !currentFeederOpened) {
    return null;
  }

  return (
    <>
      <S.Overlay onTouchStart={() => setIsTooltipVisible(false)} />

      <S.CustomCalloutContainer>
        <FeederCard
          feeder={currentFeederOpened}
          onClose={() => setIsTooltipVisible(false)}
          sideButton={
            <S.CloseButton>
              <Icon
                name="x"
                color={theme.colors.gray[700]}
                onPress={() => setIsTooltipVisible(false)}
              />
            </S.CloseButton>
          }
        />
      </S.CustomCalloutContainer>
    </>
  );
}
