import React from 'react';

import { useTheme } from 'styled-components';

import { ITabBarIconProps } from './types';
import { useTabBarIcon } from './useTabBarIcon';

export function TabBarIcon({ screen, isFocused }: ITabBarIconProps) {
  const { getTabBarIcon } = useTabBarIcon();
  const theme = useTheme();

  const IconComponent = getTabBarIcon(screen);

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      weight={isFocused ? 'fill' : 'regular'}
      size={26}
      color={isFocused ? theme.colors.primary[500] : theme.colors.gray[500]}
    />
  );
}
