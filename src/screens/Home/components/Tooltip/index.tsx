import React from 'react';

import X from 'phosphor-react-native/src/icons/X';
import { useTheme } from 'styled-components/native';

import { FeederCard } from '@components';

import * as S from './styles';
import { TooltipProps } from './types';

export function Tooltip({
  isTooltipVisible,
  setIsTooltipVisible,
  currentFeederOpened,
}: TooltipProps): React.JSX.Element | null {
  const theme = useTheme();

  if (!isTooltipVisible) {
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
            <S.CloseButton onPress={() => setIsTooltipVisible(false)}>
              <X size={18} color={theme.colors.gray[700]} weight="bold" />
            </S.CloseButton>
          }
        />
      </S.CustomCalloutContainer>
    </>
  );
}
