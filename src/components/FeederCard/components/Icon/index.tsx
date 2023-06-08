import React from 'react';

import { useIcon } from './useIcon';
import type { IIconProps } from './types';
import { useTheme } from 'styled-components';

export function Icon({ name, isTitle = false }: IIconProps) {
  const theme = useTheme();
  const { getIcon } = useIcon();

  const IconComponent = getIcon(name);

  return (
    <IconComponent size={24} color={theme.colors.gray[isTitle ? 700 : 500]} />
  );
}
