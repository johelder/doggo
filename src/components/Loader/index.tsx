import React from 'react';

import {
  FIRST_BALL_ANIMATION_DURATION,
  SECOND_BALL_ANIMATION_DURATION,
  THIRD_BALL_ANIMATION_DURATION,
} from './constants';
import { LoaderBall } from './LoaderBall';
import * as S from './styles';

function Component() {
  return (
    <S.ComponentContainer>
      <LoaderBall initialDelay={FIRST_BALL_ANIMATION_DURATION} />
      <LoaderBall initialDelay={SECOND_BALL_ANIMATION_DURATION} />
      <LoaderBall initialDelay={THIRD_BALL_ANIMATION_DURATION} />
    </S.ComponentContainer>
  );
}

function Page() {
  return (
    <S.PageContainer>
      <Component />
    </S.PageContainer>
  );
}

export const Loader = {
  Component,
  Page,
};
