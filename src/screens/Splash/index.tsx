import React from 'react';

import LogoHorizontal from '@assets/images/logo-horizontal.svg';
import Logo from '@assets/images/logo.svg';
import Animated, {
  BounceIn,
  BounceOut,
  runOnJS,
} from 'react-native-reanimated';

import { useAuth } from '@domain';

import { TIME_TO_LOAD_AUTH_STATE } from './constants';
import * as Styled from './styles';
import { useSplash } from './useSplash';

export function Splash(): React.JSX.Element {
  const { setIsLoadingAuthState } = useAuth();

  const { onFinishedAuthStateLoad } = useSplash(setIsLoadingAuthState);

  return (
    <Styled.Container>
      <Animated.View
        entering={BounceIn.duration(TIME_TO_LOAD_AUTH_STATE).withCallback(() =>
          runOnJS(onFinishedAuthStateLoad)(),
        )}
        exiting={BounceOut}>
        <Logo width={100} height={100} />
      </Animated.View>

      <Animated.View
        entering={BounceIn.duration(TIME_TO_LOAD_AUTH_STATE)}
        exiting={BounceOut}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ marginTop: -32 }}>
        <LogoHorizontal width={150} height={150} />
      </Animated.View>
    </Styled.Container>
  );
}
