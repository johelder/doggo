import React from 'react';

import Logo from '@assets/images/logo.svg';
import Animated from 'react-native-reanimated';

import { useAuth } from '@hooks';

import * as S from './styles';
import { useSplash } from './useSplash';

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
