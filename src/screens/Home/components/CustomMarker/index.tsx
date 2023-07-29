import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import CookingPot from 'phosphor-react-native/src/icons/CookingPot';

export function CustomMarker() {
  const theme = useTheme();

  return (
    <View>
      <CookingPot size={38} weight="fill" color={theme.colors.secondary[600]} />
    </View>
  );
}
