import React from 'react';

import { theme } from '@theme';
import { Loader } from '../Loader';

import type {
  IButtonIconProps,
  IButtonRootProps,
  IButtonTextProps,
} from './types';

import * as S from './styles';

function ButtonRoot({
  type = 'filled',
  color = theme.colors.orange[500],
  isLoading = false,
  height,
  children,
  ...rest
}: IButtonRootProps) {
  return (
    <S.ButtonRootContainer type={type} color={color} height={height} {...rest}>
      {isLoading ? <Loader.Component /> : children}
    </S.ButtonRootContainer>
  );
}

function ButtonIcon({ children }: IButtonIconProps) {
  return <S.ButtonIconContainer>{children}</S.ButtonIconContainer>;
}

function ButtonText({
  color = theme.colors.gray[0],
  children,
  ...rest
}: IButtonTextProps) {
  return (
    <S.ButtonTextContainer color={color} {...rest}>
      {children}
    </S.ButtonTextContainer>
  );
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};
