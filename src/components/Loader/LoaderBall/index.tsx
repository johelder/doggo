import React from 'react';

import { useLoaderBall } from './useLoaderBall';
import type { ILoaderBallProps } from './types';

import * as S from './styles';

export function LoaderBall({ initialDelay }: ILoaderBallProps) {
  const { animatedBallStyle } = useLoaderBall(initialDelay);

  return <S.Ball style={animatedBallStyle} />;
}
