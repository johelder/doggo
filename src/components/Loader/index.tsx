import React from 'react';

import { LoaderBall } from './LoaderBall';

import * as S from './styles';

export function Loader() {
  return (
    <S.Container>
      <LoaderBall initialDelay={0} />
      <LoaderBall initialDelay={300} />
      <LoaderBall initialDelay={600} />
    </S.Container>
  );
}
