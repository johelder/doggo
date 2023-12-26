import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '@components';

export function CustomMarker() {
  const theme = useTheme();

  return <Icon name="boneFilled" size={50} color={theme.colors.orange[500]} />;
}
