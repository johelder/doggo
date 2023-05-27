import React from 'react';

import { LoaderBall } from './LoaderBall';
import {
  FIRST_BALL_ANIMATION_DURATION,
  SECOND_BALL_ANIMATION_DURATION,
  THIRD_BALL_ANIMATION_DURATION,
} from './constants';

import * as S from './styles';

export function Loader() {
  return (
    <S.Container>
      <LoaderBall initialDelay={FIRST_BALL_ANIMATION_DURATION} />
      <LoaderBall initialDelay={SECOND_BALL_ANIMATION_DURATION} />
      <LoaderBall initialDelay={THIRD_BALL_ANIMATION_DURATION} />
    </S.Container>
  );
}
