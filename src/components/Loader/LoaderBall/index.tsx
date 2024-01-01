import React from 'react';

import * as Styled from './styles';
import { LoaderBallProps } from './types';
import { useLoaderBall } from './useLoaderBall';

export function LoaderBall({
  initialDelay,
}: LoaderBallProps): React.JSX.Element {
  const { animatedBallStyle } = useLoaderBall(initialDelay);

  return <Styled.Ball style={animatedBallStyle} />;
}
