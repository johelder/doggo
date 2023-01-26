import React from 'react';

import { useTheme } from 'styled-components';

import { ITabBarIconProps } from './types';
import { useTabBarIcon } from './useTabBarIcon';

export function TabBarIcon({ screen, isFocused }: ITabBarIconProps) {
  const { tabBarIconMapping } = useTabBarIcon();
  const theme = useTheme();

  const IconComponent = tabBarIconMapping[screen];

  return (
    <IconComponent
      weight={isFocused ? 'fill' : 'regular'}
      size={26}
      color={isFocused ? theme.colors.gray[700] : theme.colors.gray[500]}
    />
  );
}
