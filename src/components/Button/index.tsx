import React from 'react';

import { theme } from '@theme';

import { Loader } from '../Loader';

import * as Styled from './styles';
import { ButtonIconProps, ButtonRootProps, ButtonTextProps } from './types';

function ButtonRoot({
  type = 'filled',
  color = theme.colors.orange[500],
  isLoading = false,
  height,
  children,
  ...rest
}: ButtonRootProps): React.JSX.Element {
  return (
    <Styled.ButtonRootContainer
      type={type}
      color={color}
      height={height}
      {...rest}>
      {isLoading ? <Loader.Component /> : children}
    </Styled.ButtonRootContainer>
  );
}

function ButtonIcon({ children }: ButtonIconProps): React.JSX.Element {
  return <Styled.ButtonIconContainer>{children}</Styled.ButtonIconContainer>;
}

function ButtonText({
  color = theme.colors.gray[0],
  children,
  ...rest
}: ButtonTextProps): React.JSX.Element {
  return (
    <Styled.ButtonTextContainer color={color} {...rest}>
      {children}
    </Styled.ButtonTextContainer>
  );
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};
