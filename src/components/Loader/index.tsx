import React from 'react';

import {
  FIRST_BALL_ANIMATION_DURATION,
  SECOND_BALL_ANIMATION_DURATION,
  THIRD_BALL_ANIMATION_DURATION,
} from './constants';
import { LoaderBall } from './LoaderBall';
import * as Styled from './styles';

function Component(): React.JSX.Element {
  return (
    <Styled.ComponentContainer>
      <LoaderBall initialDelay={FIRST_BALL_ANIMATION_DURATION} />
      <LoaderBall initialDelay={SECOND_BALL_ANIMATION_DURATION} />
      <LoaderBall initialDelay={THIRD_BALL_ANIMATION_DURATION} />
    </Styled.ComponentContainer>
  );
}

function Page(): React.JSX.Element {
  return (
    <Styled.PageContainer>
      <Component />
    </Styled.PageContainer>
  );
}

export const Loader = {
  Component,
  Page,
};
