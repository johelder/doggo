import React from 'react';

import * as S from './styles';
import { ILoaderBallProps } from './types';
import { useLoaderBall } from './useLoaderBall';

export function LoaderBall({ initialDelay }: ILoaderBallProps) {
  const { animatedBallStyle } = useLoaderBall(initialDelay);

  return <S.Ball style={animatedBallStyle} />;
}
