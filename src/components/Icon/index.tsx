import React from 'react';
import { Pressable } from 'react-native';

import { theme } from '@theme';

import { iconMapper } from './mapper';
import { IconProps } from './types';

export function Icon({
  name,
  size = 24,
  color = theme.colors.gray[900],
  onPress,
}: IconProps) {
  const IconComponent = iconMapper[name];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: theme.colors.gray[500],
        }}>
        <IconComponent size={size} color={color} />
      </Pressable>
    );
  }

  return <IconComponent size={size} color={color} />;
}
