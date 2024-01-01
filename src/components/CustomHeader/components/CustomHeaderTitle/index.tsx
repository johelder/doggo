import React from 'react';

import * as Styled from './styles';
import { CustomHeaderTitleProps } from './types';

export function CustomHeaderTitle({
  title,
  subTitle,
}: CustomHeaderTitleProps): React.JSX.Element {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.SubTitle>{subTitle}</Styled.SubTitle>
    </Styled.Container>
  );
}
