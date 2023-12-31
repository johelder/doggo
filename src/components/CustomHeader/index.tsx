import React, { useCallback, useLayoutEffect } from 'react';
import { Dimensions } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import { Loader } from '../Loader';

import { CustomHeaderTitle } from './components/CustomHeaderTitle';
import * as S from './styles';
import { CustomHeaderProps } from './types';

export function CustomHeader({
  title,
  subTitle,
  isLoading,
}: CustomHeaderProps) {
  const screenWidth = Dimensions.get('window').width + 10;
  const headerHeight = useHeaderHeight();
  const theme = useTheme();
  const navigation = useNavigation();

  const renderCustomHeaderTitle = useCallback(() => {
    if (isLoading) {
      return <Loader.Component />;
    }

    if (!title) {
      return '';
    }

    return <CustomHeaderTitle title={title} subTitle={subTitle} />;
  }, [isLoading, title, subTitle]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: renderCustomHeaderTitle,
    });
  }, [navigation, renderCustomHeaderTitle]);

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
