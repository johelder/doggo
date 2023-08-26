import React from 'react';

import Animated from 'react-native-reanimated';
import { useAuth } from '@src/hooks';
import { useSplash } from './useSplash';

import Logo from '@src/assets/images/logo.svg';

import * as S from './styles';

export function Splash(): JSX.Element {
  const { setIsLoadingAuthState } = useAuth();
  const { animatedStyles } = useSplash(setIsLoadingAuthState);

  return (
    <S.Container>
      <Animated.View style={animatedStyles}>
        <Logo />
      </Animated.View>
    </S.Container>
  );
}
