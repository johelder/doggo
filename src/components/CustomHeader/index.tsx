import React from 'react';
import { Dimensions } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

export function CustomHeader() {
  const screenWidth = Dimensions.get('window').width + 10;
  const headerHeight = useHeaderHeight();
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header
        style={{
          height: headerHeight,
          width: screenWidth,
        }}
      />

      <Svg height={headerHeight} width={screenWidth}>
        <Defs>
          <LinearGradient id="grad" x1="1" y1="1" x2="1" y2="0">
            <Stop
              offset="10"
              stopColor={theme.colors.gray[0]}
              stopOpacity="1"
            />
            <Stop
              offset="0"
              stopColor={theme.colors.gray['-1']}
              stopOpacity="0"
            />
          </LinearGradient>
        </Defs>
        <Rect width={screenWidth} height={headerHeight} fill="url(#grad)" />
      </Svg>
    </S.Container>
  );
}
