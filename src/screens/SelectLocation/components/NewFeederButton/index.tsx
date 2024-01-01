import React from 'react';

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { Icon } from '@components';
import { theme } from '@theme';

import * as Styled from './styles';

export function NewFeederButton({
  onPress,
}: BottomTabBarButtonProps): React.JSX.Element {
  return (
    <Styled.Container>
      <Styled.Button onPress={onPress}>
        <Icon name="plusFeeder" size={42} color={theme.colors.gray[0]} />
      </Styled.Button>
    </Styled.Container>
  );
}
