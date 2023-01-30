import React from 'react';
import { IButtonIconProps, IButtonRootProps, IButtonTextProps } from './types';

import * as S from './styles';

function ButtonRoot({ type, color, children, ...rest }: IButtonRootProps) {
  return (
    <S.ButtonRootContainer
      type={type}
      color={color}
      activeOpacity={0.6}
      {...rest}>
      {children}
    </S.ButtonRootContainer>
  );
}

function ButtonIcon({ children }: IButtonIconProps) {
  return <S.ButtonIconContainer>{children}</S.ButtonIconContainer>;
}

function ButtonText({ color, children }: IButtonTextProps) {
  return (
    <S.ButtonTextContainer color={color}>{children}</S.ButtonTextContainer>
  );
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};
